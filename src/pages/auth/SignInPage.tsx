import { SignInButton, SignedOut } from "@clerk/clerk-react";
import Button from "../../components/ui/button";
import { FaBook, FaGoogle } from "../../data/icons";

const SignInPage = () => {
	return (
		<div className="max-w-md px-3 py-6 w-full bg-white/70 rounded-lg border border-blue-50 shadow-sm relative flex items-center justify-center flex-col">
			<div className="mb-5 flex flex-col items-center gap-2">
				<h1 className="md:text-4xl text-2xl text-gray-600 font-semibold flex gap-x-3 items-center justify-center">
					<FaBook size={24} className="text-gray-600" />
					Books Inventory App
				</h1>
				<p className="text-base text-gray-500">Sign In To Continue</p>
			</div>
			<SignedOut>
				<SignInButton>
					<Button className="flex items-center justify-center gap-2 bg-violet-500 w-full text-white px-3 md:py-4 py-3 md:text-base text-sm transition-colors font-semibold rounded-md hover:bg-violet-600">
						<FaGoogle size={18} />
						<span>Sign In</span>
					</Button>
				</SignInButton>
			</SignedOut>
		</div>
	);
};

export default SignInPage;
