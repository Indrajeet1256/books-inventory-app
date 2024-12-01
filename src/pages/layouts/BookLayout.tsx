import { Outlet, useParams, Navigate, useLocation } from "react-router-dom";
import { useGetBooksQuery } from "../../store/api/booksApi";

const BookLayout = () => {
	const { data: books } = useGetBooksQuery();
	const { id } = useParams();
	const { state } = useLocation();

	const foundBook = books?.find(
		(book) => book.id.toString() === id?.toString()
	);
	if (!foundBook) {
		return <Navigate to="/" />;
	}

	const context = {
		filter: state?.filter ?? "",
		viewType: state?.viewType ?? "grid",
		...foundBook,
	};
	return <Outlet context={context} />;
};

export default BookLayout;
