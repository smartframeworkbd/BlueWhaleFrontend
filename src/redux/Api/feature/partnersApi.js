import baseApi from "../baseApi";

const partnersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getPartners: builder.query({
            query: () => ({
                url: "/partners",
                method: "GET"
              
            })
        }),
    })
});

export const {useGetPartnersQuery } = partnersApi;
