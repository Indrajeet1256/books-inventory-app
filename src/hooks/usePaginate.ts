import { useMemo, useState, useCallback } from "react";
import type { Books } from "../types/types";

type Props = {
	itemsPerPage?: number;
	books: Books;
};

export default function usePaginate({ itemsPerPage = 10, books }: Props) {
	const [itemOffset, setItemOffset] = useState<number>(0);
	const [endOffset, currentBooks, pageCount] = useMemo(() => {
		const endOffset = itemOffset + itemsPerPage;
		const currentBooks = books.slice(itemOffset, endOffset);
		const pageCount = Math.ceil(books.length / itemsPerPage);
		return [endOffset, currentBooks, pageCount];
	}, [itemOffset, itemsPerPage, books]);

	const handlePageClick = useCallback(
		(event: { selected: number }) => {
			const newOffset = (event.selected * itemsPerPage) % books.length;

			setItemOffset(newOffset);
		},
		[books, itemsPerPage]
	);

	return {
		endOffset,
		books: currentBooks,
		pageCount,
		handlePageClick,
	};
}
