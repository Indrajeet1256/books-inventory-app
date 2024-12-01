import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
const AuthLayout = () => {
	const { userId, isSignedIn } = useAuth();
	console.log({ userId, isSignedIn });
	if (userId && isSignedIn) {
		return <Navigate to="/" />;
	}
	return (
		<section className="min-h-screen flex items-center justify-center bg-slate-200 font-InterTight">
			<Outlet />
		</section>
	);
};

export default AuthLayout;
