import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes: ['comments'],
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>'/products'
        }),
        getSingleProduct:builder.query({
            query:(id)=>`/product/${id}`
        }),
        postComment:builder.mutation({
            query:({data,id})=>({
                url:`/comment/${id}`,
                method: 'POST',
                body:data
            }),
            invalidatesTags:['comments']
        }),
getComments:builder.query({
            query:(id)=>`/comment/${id}`,
            providesTags:['comments']
        }),

        })
    })
export const{useGetProductsQuery,usePostCommentMutation,useGetSingleProductQuery,useGetCommentsQuery}=api;