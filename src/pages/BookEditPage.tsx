import { useOutletContext } from "react-router-dom";
import BookEditForm from "../components/forms/book-edit-form";
import type { Book } from "../types/types";

const BookEditPage = () => {
	const book = useOutletContext<Book>();

	return (
		<section>
			<BookEditForm book={book} />
		</section>
	);
};

export default BookEditPage;
