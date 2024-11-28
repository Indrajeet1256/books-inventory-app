import BooksComponent from "../components/books-component";
import Skeleton from "react-loading-skeleton";
import { useGetBooksQuery } from "../store/api/booksApi";
import ErrorComponent from "../components/ui/error";
import { CgDanger, FaRegSadCry } from "../data/icons";
import { useMemo, useState } from "react";
import { Book } from "../types/types";
import FilterComponent from "../components/filter-component";

const HomePage = () => {
	const [filter, setFilter] = useState<string>("");
	const { data: books = [], isLoading, isError } = useGetBooksQuery();

	const languages = useMemo(() => {
		return books.reduce((acc: string[], curr: Book) => {
			if (!acc.includes(curr.language)) {
				acc.push(curr.language);
			}
			return acc;
		}, []);
	}, [books]);

	const filteredBooksByLanguage = useMemo(() => {
		if (!filter) return books;
		return books.filter(
			(book) => book.language.toLowerCase() === filter.toLowerCase()
		);
	}, [filter, books]);

	if (isLoading && !isError) {
		return <Skeleton count={5} />;
	}
	if (isError && !isLoading) {
		return (
			<ErrorComponent
				className=" bg-red-400"
				Icon={<CgDanger size={24} className="text-white" />}
				message="Something Went Wrong..."
			/>
		);
	}
	return (
		<section>
			{books.length > 0 ? (
				<>
					<FilterComponent
						languages={languages}
						filter={filter}
						handleSetFilter={(filter: string) => {
							setFilter(filter);
						}}
					/>
					<BooksComponent books={filteredBooksByLanguage} />
				</>
			) : (
				<ErrorComponent
					Icon={<FaRegSadCry size={24} className="text-white" />}
					message="No Books In Inventory Please Add Some New..."
					className="bg-gray-600"
				/>
			)}
		</section>
	);
};

export default HomePage;
