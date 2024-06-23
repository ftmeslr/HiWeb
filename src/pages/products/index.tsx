import { ILayoutPage } from "@/components/layout/getLayout.types";
import MainLayout from "@/components/layout/main/mainLayout";
import Header from "@/components/pages/products/header/header";
import EmptyList from "@/components/ui/emptyList/emptyList";
import { createNewProduct, getProducts } from "@/utils/apis/products/products";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Stack, Typography, Grid, Skeleton } from "@mui/material";
import { FormEvent, useEffect, useRef, useState } from "react";
import MainInput from "@/components/ui/inputs/main/mainInput";
import useAddProductForm from "@/components/pages/products/hooks/useAddProductForm/useAddProductForm";
import { formikErrorHandler } from "@/utils/formikErrorHandler";
import MainButton from "@/components/ui/buttons/main/mainButton";
import { toast } from "react-toastify";
import Modal from "@/components/ui/modal/modal";
import ProductCard from "@/components/ui/cards/productCard/productCard";

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
  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [productList, setProductList] = useState<
    {
      description: string;
      id: string;
      imageUrl: string;
      price: number;
      rate: number;
      title: string;
      view: number;
    }[]
  >([]);
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (formikErrorHandler(formik)) return;
    formik.handleSubmit();
  };
  const { data: listProduct, isLoading } = useQuery({
    queryKey: ["getListProduct", pageNumber],
    queryFn: () => getProducts(pageNumber),
    onSuccess: (res) => {
      if (res.data?.totalRowCount < pageNumber) setHasMore(false);
      console.log(res?.data?.list);
      // setProductList((prev: any) => [...prev, ...res?.data?.list]);
      for (var i = 0; i < res?.data?.list.length; i++) {
        productList.push(res?.data?.list[i]);
      }
    },
  });

  console.log("productList", productList);
  const triggerRef = useRef(null);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];

    if (target.isIntersecting && !isLoading && hasMore) {
      setPageNumber((prevPageNumber: number) => prevPageNumber + 4);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  return (
    <>
      <Stack sx={{ padding: "0 100px" }}>
        <Header handleClick={() => setOpen(true)} />
        {productList ? (
          <>
            <Grid container mt={4}>
              {productList.map((product, index) => {
                return (
                  <Grid item lg={3} key={index} p={2}>
                    <ProductCard
                      title={product.title}
                      productImg={product.imageUrl}
                      description={product.description}
                      amount={product.price}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <div ref={triggerRef} />
          </>
        ) : (
          <EmptyList title="محصول خود را وارد نمایید." />
        )}
        <Grid container mt={2}>
          {!isLoading &&
            hasMore &&
            [...Array(8)].map((_item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} px={2}>
                <Skeleton height={200}></Skeleton>
              </Grid>
            ))}{" "}
        </Grid>
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

          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: "10px",
              border: "1px solid #B6B6B6",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <label
              htmlFor="file-input"
              style={{
                display: "inline-block",
                color: "#000",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                background: " #C9C9C9",
              }}
            >
              انتخاب فایل
            </label>
            <input
              onChange={handleFileChange}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
              accept="image/*"
              type="file"
            />
          </div>
          <Grid container mt={5} spacing={1}>
            <Grid item md={6}>
              <MainButton
                variant="text"
                fullWidth
                sx={{ fontSize: "12px" }}
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
                sx={{ fontSize: "12px", color: "#fff" }}
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
