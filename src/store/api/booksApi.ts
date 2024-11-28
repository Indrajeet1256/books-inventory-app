import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book, Books } from "../../types/types";

const reducerPath = "booksAPI";

export const booksApi = createApi({
	reducerPath,
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
	tagTypes: ["Books"],

	endpoints: (builder) => ({
		getBooks: builder.query<Books, void>({
			query: () => "books",

			transformResponse: (data: Books) => {
				return data.reduce((acc: Books, item: Book) => {
					const updatedBook = {
						...item,
						imageLink: `/images/${item.imageLink.split("/")[1]}`,
					};
					if (isNaN(parseInt(item.id))) {
						acc.unshift(updatedBook);
					} else {
						acc.push(updatedBook);
					}
					return acc;
				}, []);
			},
			providesTags: ["Books"],
		}),
		createBook: builder.mutation<Books, Partial<Book>>({
			query: (data) => ({
				url: "books",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Books"],
		}),
		deleteBook: builder.mutation<Book, string>({
			query: (id) => ({
				url: `books/${id}`,
				method: "DELETE",
			}),

			invalidatesTags: ["Books"],
		}),
		updateBook: builder.mutation<Book, Partial<Book>>({
			query: (data) => {
				const { id } = data;
				return {
					url: `books/${id}`,
					method: "PATCH",
					body: { id, ...data },
				};
			},
			invalidatesTags: ["Books"],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useDeleteBookMutation,
	useUpdateBookMutation,
	useCreateBookMutation,
} = booksApi;
