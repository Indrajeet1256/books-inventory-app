import type { Book, ViewType } from "../../types/types";
import Button from "../ui/button";
import { Link } from "react-router-dom";
import List from "../ui/list";
import { FaCircleDot, FaEye } from "../../data/icons";

type BookProps = {
	book: Book;
	filter: string;
	viewType: ViewType;
};

const book = ({ book, filter, viewType }: BookProps) => {
	return (
		<div className="relative shadow-sm border border-gray-100 rounded-sm overflow-hidden">
			<div className="h-full flex flex-row">
				<div className="w-1/2 overflow-hidden h-full flex-shrink-0">
					<img
						src={book.imageLink}
						alt={book.title}
						className=" object-cover block w-full h-full"
					/>
				</div>
				<div className="p-2 w-full flex flex-col ">
					<List>
						<List.Item>
							<div className="relative flex gap-2 items-center max-w-full">
								<FaCircleDot size={8} className="flex-none" />
								<h3 className="text-sm">
									{book.title} - ({book.year})
								</h3>
							</div>
						</List.Item>
						<List.Item>
							<div className="flex gap-2 items-center">
								<FaCircleDot size={8} />
								<h3 className="text-wrap flex-1 text-sm">{book.author}</h3>
							</div>
						</List.Item>
						<List.Item>
							<div className="flex gap-2 items-center">
								<FaCircleDot size={8} />
								<h3 className="text-wrap flex-1 text-sm">{book.language}</h3>
							</div>
						</List.Item>
						<List.Item>
							<div className="flex gap-2 items-center">
								<FaCircleDot size={8} />
								<h3 className="flex-1 text-sm text-wrap">{book.country}</h3>
							</div>
						</List.Item>
					</List>
					<div className="mt-auto flex gap-2  w-full">
						<Link
							to={`/${book.id}`}
							className="flex-1"
							state={{ filter, viewType }}
						>
							<Button className="flex w-full items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-500 rounded-sm text-white transition-colors hover:bg-blue-700 ">
								<FaEye size={12} />
								View
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default book;
