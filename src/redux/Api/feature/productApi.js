import baseApi from "../baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getProduct: builder.query({
            query: () => ({
                url: "/product",
                method: "GET"
              
            })
        }),

        getProductBySlug:builder.query({
            query:(slug)=>({
                url:`/product/product-by-slug/${slug}`,
                method:"GET"
            })
        })
        ,getProductCategory:builder.query({
            query:()=>({
                url:"/product-category"
            })
        })
    })
});

export const { useGetProductQuery ,useGetProductBySlugQuery,useGetProductCategoryQuery} = productApi;
