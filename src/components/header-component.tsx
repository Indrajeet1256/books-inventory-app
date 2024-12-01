import { Link } from "react-router-dom";
import Button from "./ui/button";
import { FaBook, FaPlusCircle } from "../data/icons";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const HeaderComponent = () => {
	return (
		<header className="z-20 py-4 fixed top-0  bg-white border-b border-gray-100 w-full font-InterTight">
			<div className="container flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<FaBook size={20} className="text-gray-600" />
					<h1 className="font-semibold  text-gray-700 text-lg md:text-2xl uppercase tracking-tight md:block hidden">
						Books Inventory
					</h1>
				</Link>
				<div className="flex md:gap-x-5 gap-x-3 items-center">
					<SignedIn>
						<UserButton />
					</SignedIn>
					<Link to="/create">
						<Button className="flex items-center md:text-sm text-xs gap-2 px-4 py-2 font-semibold bg-blue-500 rounded-sm text-white transition-colors hover:bg-blue-700 ">
							<FaPlusCircle size={16} />
							Create New Book
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default HeaderComponent;
