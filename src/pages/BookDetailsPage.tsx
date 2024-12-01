import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { SingleBook } from "../types/types";
import List from "../components/ui/list";
import Button from "../components/ui/button";
import { useDeleteBookMutation } from "../store/api/booksApi";
import { useCallback, useRef } from "react";
import { toast } from "react-toastify";
import { FaBook } from "react-icons/fa";
import {
	FaCircleDot,
	FaLink,
	FaPen,
	FaTrashCan,
	IoArrowBackCircleSharp,
} from "../data/icons";

const BookDetailsPage = () => {
	const book = useOutletContext<SingleBook>();
	const navigateRef = useRef<ReturnType<typeof useNavigate>>(useNavigate());

	const [deleteBook, { isLoading }] = useDeleteBookMutation();

	const handleDeleteBook = useCallback(async () => {
		try {
			if (confirm("Are You Sure You Want To Delete This Book...")) {
				const response = await deleteBook(book.id);
				if (response.data) {
					toast.success(`Book ID #${book.id} Is Deleted`, {
						autoClose: 1500,
					});
					setTimeout(() => {
						navigateRef.current("/");
					}, 500);
				}
			}
			return;
		} catch (error: unknown) {
			console.error(error);
		}
	}, [book, deleteBook]);

	const state = {
		filter: book.filter,
		viewType: book.viewType,
	};

	return (
		<section>
			<div className="inline-flex items-center justify-center border-b mb-5 gap-2 w-full pb-3 text-gray-600 ">
				<FaBook size={26} />
				<h1 className=" font-bold md:text-3xl text-2xl">Book Details</h1>
			</div>
			<div className="w-full gap-2 flex md:flex-row flex-col relative shadow-sm border border-slate-100 rounded-lg md:max-h-[550px] h-auto overflow-hidden">
				<div className="md:w-1/3 md:h-full h-[350px]">
					<img
						src={book.imageLink}
						alt={book.title}
						className=" object-cover object-center block h-full w-full"
					/>
				</div>
				<div className="relative w-full flex flex-col gap-2 items-center p-2">
					<div className="flex md:justify-between justify-end items-center w-full flex-wrap">
						<Link
							to=".."
							className="bg-slate-600 transition-colors hover:bg-slate-800 text-white px-3 py-2 rounded-sm flex items-center gap-2 text-sm"
							state={state}
						>
							<IoArrowBackCircleSharp size={18} />
							Go Back
						</Link>
						<div className="flex flex-1 w-full justify-end gap-2 items-center p-2">
							<Link to={`/${book.id}/edit`} state={state}>
								<Button className="flex text-sm text-nowrap items-center gap-2 px-4 py-2 font-semibold bg-blue-500 rounded-sm text-white transition-colors hover:bg-blue-700">
									<FaPen size={12} />
									Edit Book
								</Button>
							</Link>

							<Button
								disabled={isLoading}
								onClick={handleDeleteBook}
								className="flex text-sm text-nowrap items-center gap-2 px-4 py-2 font-semibold bg-red-500 rounded-sm text-white transition-colors hover:bg-red-700"
							>
								<FaTrashCan size={12} />
								Delete Book
							</Button>
						</div>
					</div>
					<div className="flex flex-col gap-2 w-full">
						{book.link !== "\n" && (
							<a
								href={book.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex self-end flex-shrink-0 items-center gap-x-2 text-blue-400 px-2 py-3 cursor-pointer hover:underline transition-colors hover:text-blue-500"
							>
								<FaLink size={16} />
								Visit Website
							</a>
						)}
						<List className="mt-auto">
							<List.Item>
								<FaCircleDot size={12} className="mr-2" />
								<span className="font-bold">Title-</span>
								<span>{book.title}</span>
							</List.Item>
							<List.Item>
								<FaCircleDot size={12} className="mr-2" />
								<span className="font-bold">Year-</span>
								<span>{book.year}</span>
							</List.Item>
							<List.Item>
								<FaCircleDot size={12} className="mr-2" />
								<span className="font-bold">Author-</span>
								<span>{book.author}</span>
							</List.Item>
							<List.Item>
								<FaCircleDot size={12} className="mr-2" />
								<span className="font-bold">Language-</span>
								<span>{book.language}</span>
							</List.Item>
							<List.Item>
								<FaCircleDot size={12} className="mr-2" />
								<span className="font-bold">Country-</span>
								<span>{book.country}</span>
							</List.Item>
							<List.Item>
								<FaCircleDot size={12} className="mr-2" />
								<span className="font-bold">Pages-</span>
								<span>{book.pages}</span>
							</List.Item>
						</List>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookDetailsPage;
