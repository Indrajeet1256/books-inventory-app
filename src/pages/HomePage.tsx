import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useGetBooksQuery } from "../store/api/booksApi";
import type { ViewType, Book } from "../types/types";
import ErrorComponent from "../components/ui/error";
import { CgDanger, FaRegSadCry } from "../data/icons";
import FilterComponent from "../components/filter-component";
import { BooksGrid, BooksTable } from "../components/books";
import { useLocation } from "react-router-dom";
import PaginationComponent from "../components/pagination-component";
import usePaginate from "../hooks/usePaginate";

const HomePage = () => {
	const location = useLocation();
	const [viewType, setViewType] = useState<ViewType>(
		(location?.state?.viewType as ViewType) || "grid"
	);

	const [filter, setFilter] = useState<string>(location?.state?.filter || "");
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

	const { books: paginatedBooks, handlePageClick } = usePaginate({
		books: filteredBooksByLanguage,
	});

	const ViewComponent = useMemo(
		() => (viewType === "grid" ? BooksGrid : BooksTable),
		[viewType]
	);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		params.set("view-type", viewType);
		if (filter) params.set("filter", filter);
		window.history.pushState({}, "", `?${params.toString()}`);
	}, [viewType, filter]);

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
						viewType={viewType}
						languages={languages}
						filter={filter}
						handleSetFilter={(filter: string) => {
							setFilter(filter);
						}}
						handleSetViewType={(viewType: ViewType) => {
							setViewType(viewType);
						}}
					/>
					<ViewComponent
						books={paginatedBooks}
						filter={filter}
						viewType={viewType}
					/>
					<PaginationComponent handlePageClick={handlePageClick} />
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
