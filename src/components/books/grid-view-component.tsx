import type { Book, BooksComponentProps } from "../../types/types";
import BookComponent from "./book";

const GridViewComponent = ({
	books,
	filter,
	viewType,
}: BooksComponentProps) => {
	return (
		<div className="grid grid-cols-base gap-4">
			{books?.map((book: Book) => (
				<BookComponent
					key={book.id}
					book={book}
					filter={filter}
					viewType={viewType}
				/>
			))}
		</div>
	);
};

export default GridViewComponent;
