import { Outlet, useParams, Navigate } from "react-router-dom";
import { useGetBooksQuery } from "../../store/api/booksApi";

const BookLayout = () => {
	const { data: books } = useGetBooksQuery();
	const { id } = useParams();

	const foundBook = books?.find(
		(book) => book.id.toString() === id?.toString()
	);
	if (!foundBook) {
		return <Navigate to="/" />;
	}
	return <Outlet context={foundBook} />;
};

export default BookLayout;
