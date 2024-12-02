import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "../data/icons";
import { paginationStyles } from "../data/styles";

type PaginationComponentProps = {
	handlePageClick: (event: { selected: number }) => void;
	pageCount?: number;
};

const PaginationComponent = ({
	handlePageClick,
	pageCount = 5,
}: PaginationComponentProps) => {
	return (
		<ReactPaginate
			breakLabel="..."
			nextLabel={<FaAngleRight size={14} />}
			onPageChange={handlePageClick}
			pageRangeDisplayed={5}
			pageCount={pageCount}
			previousLabel={<FaAngleLeft size={14} />}
			renderOnZeroPageCount={null}
			{...paginationStyles}
		/>
	);
};

export default PaginationComponent;
