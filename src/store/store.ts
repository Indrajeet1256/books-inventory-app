import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./api/booksApi";

const store = configureStore({
	reducer: {
		[booksApi.reducerPath]: booksApi.reducer,
	},
	middleware: (getDefaultMiddleWare) =>
		getDefaultMiddleWare().concat(booksApi.middleware),
});

export default store;
