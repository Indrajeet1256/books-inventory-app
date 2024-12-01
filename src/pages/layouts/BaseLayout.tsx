import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/header-component";
import { ToastContainer } from "react-toastify";

const BaseLayout = () => {
	return (
		<>
			<HeaderComponent />
			<main className="container w-full pt-20 pb-10 font-InterTight h-auto">
				<Outlet />
				<ToastContainer position="bottom-right" />
			</main>
		</>
	);
};

export default BaseLayout;
