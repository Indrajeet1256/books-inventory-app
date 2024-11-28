import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "./pages/layouts/BaseLayout";
import BookLayout from "./pages/layouts/BookLayout";
import HomePage from "./pages/HomePage";
import BookEditPage from "./pages/BookEditPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BookCreatePage from "./pages/BookCreatePage";

export const router = createBrowserRouter([
	{
		element: <BaseLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				element: <BookLayout />,
				children: [
					{
						path: "/:id",
						element: <BookDetailsPage />,
					},
					{
						path: "/:id/edit",
						element: <BookEditPage />,
					},
				],
			},
			{
				path: "/create",
				element: <BookCreatePage />,
			},
			{
				path: "*",
				element: <Navigate to="/" />,
			},
		],
	},
]);
