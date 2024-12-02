import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { BooksComponentProps } from "../../types/types";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import { Button } from "..";
import { FaEye } from "../../data/icons";

const tableHeaders: string[] = [
	"Image",
	"Title",
	"Author",
	"Country",
	"Year",
	"Language",
	"Website",
	"",
];

const TableViewComponent = ({
	books,
	filter,
	viewType,
}: BooksComponentProps) => {
	return (
		<Table>
			<Thead>
				<Tr>
					{tableHeaders.map((tableHeader) => (
						<Th
							key={tableHeader}
							className="border border-gray-200 p-2 text-base text-gray-600 font-semibold"
						>
							{tableHeader}
						</Th>
					))}
				</Tr>
			</Thead>
			<Tbody>
				{books?.map((book) => (
					<Tr key={book.id}>
						<Td className="border-gray-200 p-2" align="center">
							<img
								src={book.imageLink}
								alt={book.title}
								className="w-16 h-16 object-cover block"
							/>
						</Td>
						<Td align="center" className="border border-gray-200 p-2 text-base">
							{book.title}
						</Td>
						<Td align="center" className="border border-gray-200 p-2 text-base">
							{book.author}
						</Td>
						<Td align="center" className="border border-gray-200 p-2 text-base">
							{book.country}
						</Td>
						<Td align="center" className="border border-gray-200 p-2 text-base">
							{book.year}
						</Td>
						<Td align="center" className="border border-gray-200 p-2 text-base">
							{book.language}
						</Td>
						<Td align="center" className="border border-gray-200 p-2 text-base">
							{book.link !== "\n" ? (
								<a
									href={book.link}
									rel="noopener noreferrer"
									target="_blank"
									className="text-blue-500 transition-colors hover:text-blue-700 hover:underline break-all"
								>
									{book.link}
								</a>
							) : (
								"Website Unavailable"
							)}
						</Td>
						<Td className="p-2 border border-gray-200">
							<Link
								to={`/${book.id}`}
								className="flex-1"
								state={{ filter, viewType }}
							>
								<Button className="flex items-center justify-center gap-2 p-2 text-xs font-semibold bg-blue-500 rounded-sm text-white transition-colors hover:bg-blue-700 ">
									<FaEye size={10} />
									View
								</Button>
							</Link>
						</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
};

export default TableViewComponent;
