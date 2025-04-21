import baseApi from "../baseApi";

const blogCategoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getAllBlogCategory: builder.query({
            query: () => ({
                url: "/blog-categories",
                method: "GET"
              
            })
        }),
     
        blogCategoryById: builder.query({
            query: ({ Id }) => ({
              url: `/blog-categories/${Id}`,
              method: "GET",
            }),
          }),
    })
});

export const {useGetAllBlogCategoryQuery ,useLazyBlogCategoryByIdQuery} = blogCategoryApi;
