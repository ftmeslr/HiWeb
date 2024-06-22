import { ILayoutPage } from "@/components/layout/getLayout.types";
import MainLayout from "@/components/layout/main/mainLayout";
import Header from "@/components/pages/products/header/header";
import EmptyList from "@/components/ui/emptyList/emptyList";
import { createNewProduct, getProducts } from "@/utils/apis/products/products";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { Stack, Typography, Grid } from "@mui/material";
import { FormEvent, useState } from "react";
import MainInput from "@/components/ui/inputs/main/mainInput";
import useAddProductForm from "@/components/pages/products/hooks/useAddProductForm/useAddProductForm";
import { formikErrorHandler } from "@/utils/formikErrorHandler";
import MainButton from "@/components/ui/buttons/main/mainButton";
import { toast } from "react-toastify";
import Modal from "@/components/ui/modal/modal";
import ProductList from "@/components/pages/products/productList/productList";

const ProductsPage = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const { mutate: createNewProductMutation, isLoading: loginIsLoading } =
    useMutation(createNewProduct, {
      onSuccess() {
        toast.success("محصول جدید با موفقیت اضافه شد");
      },
      onError() {
        toast.error("خطایی رخ داده است");
      },
    });

  const handleAddProduct = (values: any): void => {
    const formData = new FormData();
    if (file) formData.append("File", file);
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    createNewProductMutation({
      data: formData,
    });
  };

  const formik = useAddProductForm({
    onSubmit: handleAddProduct,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (formikErrorHandler(formik)) return;
    formik.handleSubmit();
  };

  const {
    data: productList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery<any, Error>(["items"], getProducts, {
    getNextPageParam: (lastPage) =>
      lastPage.skipped + 5 < lastPage.totalRowCount
        ? lastPage.skipped + 5
        : undefined,
  });

  return (
    <>
      {" "}
      <Stack sx={{ padding: "0 100px" }}>
        <Header handleClick={() => setOpen(true)} />
        {!isLoading && productList?.pages[0]?.data?.list ? (
          <ProductList listProduct={productList?.pages[0]?.data?.list} />
        ) : (
          <EmptyList title="محصول خود را وارد نمایید." />
        )}{" "}
      </Stack>
      <Modal open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            افزودن محصول
          </Typography>
          <MainInput
            outerLabel="نام محصول"
            placeholder="نام محصول"
            type="text"
            {...formik.getFieldProps("ProductTitle")}
            error={Boolean(
              formik.errors.ProductTitle && formik.touched.ProductTitle
            )}
          />
          <MainInput
            outerLabel="قیمت محصول"
            placeholder="قیمت محصول"
            type="text"
            {...formik.getFieldProps("ProductPrice")}
            error={Boolean(
              formik.errors.ProductPrice && formik.touched.ProductPrice
            )}
          />
          <MainInput
            minRows={4}
            multiline
            outerLabel="توضیحات"
            placeholder="توضیحات"
            type="text"
            {...formik.getFieldProps("Description")}
            error={Boolean(
              formik.errors.Description && formik.touched.Description
            )}
          />
          <Typography variant="h6">Upload Photo</Typography>
          <input accept="image/*" type="file" onChange={handleFileChange} />
          <Grid container mt={5} spacing={1}>
            <Grid item md={6}>
              <MainButton
                variant="text"
                fullWidth
                onClick={() => setOpen(false)}
              >
                انصراف
              </MainButton>
            </Grid>
            <Grid item md={6}>
              <MainButton
                variant="contained"
                fullWidth
                type="submit"
                disabled={loginIsLoading}
              >
                ثبت محصول
              </MainButton>
            </Grid>
          </Grid>
        </form>
      </Modal>
    </>
  );
};

ProductsPage.getLayout = (page: ILayoutPage) => {
  return <MainLayout>{page}</MainLayout>;
};

export default ProductsPage;
