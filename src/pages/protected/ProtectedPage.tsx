import { ReactNode } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children }: { children: ReactNode }) => {
	const { userId, isSignedIn } = useAuth();
	if (!userId && !isSignedIn) {
		return <Navigate to="/sign-in" />;
	}
	return children;
};

export default ProtectedPage;
