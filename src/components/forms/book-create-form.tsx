import type { Book } from "../../types/types";
import { useForm } from "react-hook-form";
import { Input, Button } from "..";
import { Link, useNavigate } from "react-router-dom";
import { useCreateBookMutation } from "../../store/api/booksApi";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
	FaPlusCircle,
	FaWindowClose,
	MdCreateNewFolder,
} from "../../data/icons";

const ErrorMessage = ({ message }: { message: string }) => (
	<p className="text-sm text-red-500">{message}</p>
);

const BookCreateForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Partial<Book>>({
		defaultValues: {
			author: "",
			country: "",
			language: "",
			link: "",
			title: "",
			imageLink: "images/placeholder.jpg",
			pages: 0,
		},
	});

	const navigate = useNavigate();

	const [createBook, { isLoading }] = useCreateBookMutation();
	const onSubmit = async (formValues: Partial<Book>) => {
		try {
			const book: Partial<Book> = {
				id: nanoid(),
				...formValues,
			};

			const response = await createBook(book);
			if (response.data) {
				toast.success("Book Is Created", {
					autoClose: 1500,
					position: "bottom-right",
				});
				setTimeout(() => navigate("/"), 500);
			}
		} catch (error: unknown) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="inline-flex items-center justify-center border-b mb-5 gap-2 w-full pb-3 text-gray-700 ">
				<MdCreateNewFolder size={26} />
				<h1 className=" font-bold md:text-3xl text-2xl">Create Book</h1>
			</div>
			<form
				className="flex flex-col max-w-xl w-full shadow-sm border border-gray-100 p-3 mx-auto gap-3 rounded-lg"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex-wrap flex flex-row gap-3">
					<div className="flex flex-col gap-1 md:flex-1 w-full">
						<label
							htmlFor="title"
							className="text-base cursor-pointer text-slate-500"
						>
							Title
							<sup>*</sup>
						</label>
						<Input
							id="title"
							type="text"
							{...register("title", { required: true, minLength: 6 })}
							placeholder="Enter Title"
							className={
								errors.title ? "border-red-400 focus:border-red-400" : ""
							}
						/>
						{errors.title ? (
							<ErrorMessage
								message={
									errors.title.type === "minLength"
										? "Title Must Have 6 Or More Characters"
										: "Title Is Required"
								}
							/>
						) : null}
					</div>

					<div className="flex flex-col gap-1 md:flex-1 w-full">
						<label
							htmlFor="author"
							className="text-base cursor-pointer text-slate-500"
						>
							Author
							<sup>*</sup>
						</label>
						<Input
							id="author"
							type="text"
							{...register("author", { required: true })}
							placeholder="Enter Author"
							className={
								errors.author ? "border-red-400 focus:border-red-400" : ""
							}
						/>
						{errors.author ? (
							<ErrorMessage message="Author Is Required" />
						) : null}
					</div>
				</div>

				<div className="flex-wrap flex flex-row gap-3">
					<div className="flex flex-col gap-1 md:flex-1 w-full">
						<label
							htmlFor="country"
							className="text-base cursor-pointer text-slate-500"
						>
							Country
							<sup>*</sup>
						</label>
						<Input
							{...register("country", { required: true })}
							placeholder="Enter Country"
							type="text"
							id="country"
							className={
								errors.country ? "border-red-400 focus:border-red-400" : ""
							}
						/>
						{errors.country ? (
							<ErrorMessage message="Country Is Required" />
						) : null}
					</div>

					<div className="flex flex-col gap-1 md:flex-1 w-full">
						<label
							htmlFor="language"
							className="text-base cursor-pointer text-slate-500"
						>
							Language
							<sup>*</sup>
						</label>
						<Input
							{...register("language", { required: true })}
							placeholder="Enter Language"
							type="text"
							id="language"
							className={
								errors.language ? "border-red-400 focus:border-red-400" : ""
							}
						/>
						{errors.language ? (
							<ErrorMessage message="Language Is Required" />
						) : null}
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<label
						htmlFor="year"
						className="text-base cursor-pointer text-slate-500"
					>
						Year
						<sup>*</sup>
					</label>
					<Input
						{...register("year", { required: true })}
						placeholder="Enter Year"
						type="number"
						id="year"
						className={errors.year ? "border-red-400 focus:border-red-400" : ""}
					/>

					{errors.year ? <ErrorMessage message="Year Is Required" /> : null}
				</div>
				<div className="flex flex-col gap-1">
					<label
						htmlFor="website"
						className="text-base cursor-pointer text-slate-500"
					>
						Website
						<sup>*</sup>
					</label>
					<Input
						{...register("link", { required: true })}
						placeholder="Enter Website URL"
						type="url"
						id="year"
						className={errors.link ? "border-red-400 focus:border-red-400" : ""}
					/>

					{errors.link ? (
						<ErrorMessage message="Website URL Is Required" />
					) : null}
				</div>
				<div className="flex md:flex-row flex-col gap-2">
					<Button
						disabled={isLoading}
						className="flex flex-1 md:text-sm text-xs items-center justify-center gap-2 px-4 py-3 font-semibold bg-blue-500 rounded-sm text-white transition-colors hover:bg-blue-700 "
						type="submit"
					>
						<FaPlusCircle size={16} />
						Create Book
					</Button>
					<Link to=".." className="flex-1" replace>
						<Button className="flex md:text-sm text-xs w-full items-center justify-center gap-2 px-4 py-3 font-semibold bg-red-500 rounded-sm text-white transition-colors hover:bg-red-700 ">
							<FaWindowClose size={16} />
							Cancel
						</Button>
					</Link>
				</div>
			</form>
		</>
	);
};

export default BookCreateForm;
