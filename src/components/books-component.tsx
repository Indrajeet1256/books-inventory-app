import { Books } from "../types/types";
import Book from "./book";

type BooksComponentProps = {
	books: Books | undefined;
};

const BooksComponent = ({ books = [] }: BooksComponentProps) => {
	return (
		<div className="grid grid-cols-base gap-4">
			{books.map((book) => (
				<Book key={book.id} book={book} />
			))}
		</div>
	);
};

export default BooksComponent;
