import baseApi from "../baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getAllBlogs: builder.query({
            query: () => ({
                url: "/blogs",
                method: "GET"
              
            })
        }),
     
        getBlogById: builder.query({
            query: ({ Id }) => ({
              url: `/blogs/${Id}`,
              method: "GET",
            }),
          }),
    })
});

export const {useGetAllBlogsQuery ,useGetBlogByIdQuery} = blogApi;
