import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import store from "./store/store.ts";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Publishable Key Not Found...");
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ClerkProvider>
	</StrictMode>
);
