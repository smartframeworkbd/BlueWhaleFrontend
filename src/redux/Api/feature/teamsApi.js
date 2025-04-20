import baseApi from "../baseApi";

const teamApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getTeams: builder.query({
            query: () => ({
                url: "/teams",
                method: "GET"
              
            })
        }),
    })
});

export const {useGetTeamsQuery } = teamApi;
