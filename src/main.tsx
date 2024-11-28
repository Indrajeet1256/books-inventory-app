import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import store from "./store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
