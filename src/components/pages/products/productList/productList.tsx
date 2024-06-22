// import ProductCard from "@/components/ui/cards/productCard/productCard";
// import { FC, useRef } from "react";
// import { IProductListProps } from "./productList.styles";
// import { Grid } from "@mui/material";

// const ProductList: FC<IProductListProps> = ({ listProduct , setPageNumber ,  }) => {
//   const triggerRef = useRef(null);

//   const observerCallback = (entries: IntersectionObserverEntry[]) => {
//     const target = entries[0];
//     if (target.isIntersecting && !loading && hasMore) {
//       setPageNumber((prevPageNumber: number) => prevPageNumber + 1);
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(observerCallback, {
//       threshold: 0.5,
//     });

//     if (triggerRef.current) {
//       observer.observe(triggerRef.current);
//     }

//     return () => observer.disconnect();
//   }, [loading, hasMore]);

//   return (
//     <>
//       <Grid container mt={4}>
//         {listProduct.map((product, index) => {
//           return (
//             <Grid item lg={3} key={index} p={2}>
//               <ProductCard
//                 title={product.title}
//                 productImg={product.imageUrl}
//                 description={product.description}
//                 amount={product.price}
//               />
//             </Grid>
//           );
//         })}
//         <div ref={triggerRef}></div>
//       </Grid>
//     </>
//   );
// };

// export default ProductList;
