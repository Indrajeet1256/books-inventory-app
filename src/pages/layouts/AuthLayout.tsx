import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const AuthLayout = () => {
	const { userId, isSignedIn } = useAuth();

	if (userId && isSignedIn) {
		return <Navigate to="/" />;
	}
	return (
		<section className="min-h-screen flex items-center justify-center bg-slate-200 font-RobotoFlex">
			<Outlet />
		</section>
	);
};

export default AuthLayout;
