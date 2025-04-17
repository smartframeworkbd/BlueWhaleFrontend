import baseApi from "../baseApi";

const contentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getSingleContent: builder.query({
            query: () => ({
                url: "/content/single/1",
                method: "GET"
              
            })
        }),
        getContentBySlug:builder.query({

            query:(slug)=>({
                url:`content/slug/${slug}`,
                method:"GET"

            })
        }),
        getContentByParent:builder.query({

            query:(id)=>({
                url:`content/parent/${id}`,
                method:"GET"

            })
        })
    })
});

export const {useGetSingleContentQuery,useGetContentByParentQuery,useGetContentBySlugQuery } = contentApi;
