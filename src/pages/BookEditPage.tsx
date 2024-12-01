import { useOutletContext } from "react-router-dom";
import BookEditForm from "../components/forms/book-edit-form";
import type { SingleBook } from "../types/types";

const BookEditPage = () => {
	const book = useOutletContext<SingleBook>();

	return (
		<section>
			<BookEditForm book={book} />
		</section>
	);
};

export default BookEditPage;
