import type { Book, SingleBook } from "../../types/types";
import { useForm } from "react-hook-form";
import Input from "../ui/input";
import Button from "../ui/button";
import { useUpdateBookMutation } from "../../store/api/booksApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPen, FaRegEdit, FaWindowClose } from "../../data/icons";

type BookEditFormProps = {
	book: SingleBook;
};

const ErrorMessage = ({ message }: { message: string }) => (
	<p className="text-sm text-red-500">{message}</p>
);

const BookEditForm = ({ book }: BookEditFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Partial<Book>>({
		defaultValues: {
			title: book.title ?? "",
			year: book.year,
			country: book.country ?? "",
			author: book.author ?? "",
			language: book.language ?? "",
		},
	});

	const [updateBook, { isLoading }] = useUpdateBookMutation();
	const navigate = useNavigate();

	const onSubmit = async (formValues: Partial<Book>) => {
		try {
			const response = await updateBook({ id: book.id, ...formValues });
			if (response.data) {
				toast.success("Book Is Updated", {
					autoClose: 1500,
					position: "bottom-right",
				});
				setTimeout(
					() =>
						navigate("/", {
							state: { filter: book.filter, viewType: book.viewType },
						}),
					500
				);
			}
		} catch (error: unknown) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="inline-flex items-center justify-center border-b mb-5 gap-2 w-full pb-3">
				<FaRegEdit size={26} />
				<h1 className=" text-gray-600 font-bold md:text-3xl text-2xl  border-gray-500">
					Edit Book
				</h1>
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
				</div>

				<div className="flex flex-col gap-1">
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
					{errors.author ? <ErrorMessage message="Author Is Required" /> : null}
				</div>

				<div className="flex flex-col gap-1">
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
				<div className="flex md:flex-row flex-col gap-2">
					<Button
						disabled={isLoading}
						className="flex flex-1 text-sm items-center justify-center gap-2 px-4 py-3 font-semibold bg-blue-500 rounded-sm text-white transition-colors hover:bg-blue-700 "
						type="submit"
					>
						<FaPen size={16} />
						Edit Book
					</Button>
					<Link
						to=".."
						relative="path"
						className="flex-1"
						state={{ filter: book.filter, viewType: book.viewType }}
					>
						<Button className="flex text-sm w-full items-center justify-center gap-2 px-4 py-3 font-semibold bg-red-500 rounded-sm text-white transition-colors hover:bg-red-700 ">
							<FaWindowClose size={16} />
							Cancel
						</Button>
					</Link>
				</div>
			</form>
		</>
	);
};

export default BookEditForm;
