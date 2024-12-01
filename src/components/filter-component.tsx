import type { FilterComponentProps } from "../types/types";
import { MdGridOn, MdGridView } from "../data/icons";

const FilterComponent = ({
	languages,
	filter,
	viewType,
	handleSetFilter,
	handleSetViewType,
}: FilterComponentProps) => {
	const isTableView = viewType === "table";
	return (
		<div className="w-full  flex justify-between items-center gap-2 border-b border-gray-300 mb-6 pb-3">
			<div className="p-3 flex flex-col gap-1">
				<div className="text-gray-600 text-sm md:block hidden">
					View As{" "}
					<span className="font-semibold">
						{isTableView ? "Table" : "Grid"}
					</span>
				</div>
				<div className="flex flex-row items-center border border-gray-200 w-fit relative overflow-hidden">
					<div
						className={`absolute w-8 h-8 bg-blue-500 -z-10 transition-transform ${
							isTableView ? "translate-x-8" : "translate-x-0"
						}`}
					/>
					<span
						className="w-8 h-8 inline-flex items-center justify-center z-10 cursor-pointer"
						role="button"
						onClick={() => handleSetViewType("grid")}
					>
						<MdGridView
							color={!isTableView ? "white" : "black"}
							className="transition-colors"
						/>
					</span>
					<span
						className="w-8 h-8 inline-flex items-center justify-center cursor-pointer"
						role="button"
						onClick={() => handleSetViewType("table")}
					>
						<MdGridOn
							color={isTableView ? "white" : "black"}
							className="transition-colors"
						/>
					</span>
				</div>
			</div>
			<h1 className="text-4xl md:block hidden font-semibold tracking-tight text-gray-700">
				Books In Your Inventory
			</h1>
			<div className="flex flex-col gap-y-1">
				<label
					className="text-gray-600 text-sm md:block hidden"
					htmlFor="filter-select"
				>
					Filter By Language
				</label>
				<select
					className="outline-none bg-white focus:border-blue-600 border-2 border-gray-200 px-3 py-2 rounded-md cursor-pointer transition-colors"
					id="filter-select"
					value={filter}
					onChange={(e) => handleSetFilter(e.target.value)}
				>
					<option disabled value="">
						Select Language
					</option>
					{languages.map((language) => (
						<option key={language} value={language}>
							{language}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default FilterComponent;
