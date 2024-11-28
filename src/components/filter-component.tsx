type FilterComponentProps = {
	languages: string[];
	filter: string;
	handleSetFilter: (filter: string) => void;
};

const FilterComponent = ({
	languages,
	filter,
	handleSetFilter,
}: FilterComponentProps) => {
	return (
		<div className="w-full flex flex-col mb-3 justify-end items-end gap-y-1">
			<label className="text-gray-600 text-sm" htmlFor="filter-select">
				Filter By Language
			</label>
			<select
				className="outline-none focus:border-blue-600 border-2 border-gray-200 px-3 py-2 rounded-sm cursor-pointer transition-colors"
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
	);
};

export default FilterComponent;
