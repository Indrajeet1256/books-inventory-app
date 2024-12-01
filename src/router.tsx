import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout, BookLayout, AuthLayout } from "./pages/layouts";
import {
	HomePage,
	BookEditPage,
	BookCreatePage,
	BookDetailsPage,
	SignInPage,
	ProtectedPage,
} from "./pages";

export const router = createBrowserRouter([
	{
		element: (
			<ProtectedPage>
				<BaseLayout />
			</ProtectedPage>
		),
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
		],
	},
	{
		element: <AuthLayout />,
		children: [
			{
				path: "/sign-in",
				element: <SignInPage />,
			},
		],
	},
	{
		path: "*",
		element: <Navigate to="/" />,
	},
]);
