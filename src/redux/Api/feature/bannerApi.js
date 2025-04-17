import baseApi from "../baseApi";

const bannersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getBanners: builder.query({
            query: () => ({
                url: "/banners",
                method: "GET"
              
            })
        }),
    })
});

export const {useGetBannersQuery } = bannersApi;
