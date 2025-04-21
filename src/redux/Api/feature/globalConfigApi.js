import baseApi from "../baseApi";

const partnersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getGlobalConfigById: builder.query({
            query: (id) => ({
                url: `/global-config/${id}`,
                method: "GET"
              
            })
        }),
    })
});

export const {useGetGlobalConfigByIdQuery } = partnersApi;
