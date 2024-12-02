export const paginationStyles: Record<string, string> = {
	breakClassName: "page-item",
	breakLinkClassName: "",
	containerClassName:
		"flex border border-gray-200 p-2 max-w-fit mx-auto overflow-hidden rounded-sm select-none md:gap-2 gap-1 mt-8 items-center justify-center",
	pageClassName:
		"cursor-pointer rounded-sm text-gray-500 bg-gray-200  w-8 h-8 flex items-center justify-center ",
	pageLinkClassName:
		"transition-colors text-nowrap w-full h-full inline-flex items-center justify-center",
	previousClassName:
		"cursor-pointer rounded-sm text-blue-500 bg-gray-200  w-8 h-8 flex items-center justify-center",
	previousLinkClassName:
		"text-nowrap transition-colors w-full h-full inline-flex items-center justify-center",
	nextClassName:
		"cursor-pointer rounded-sm text-blue-500 bg-gray-200  w-8 h-8 flex items-center justify-center",
	nextLinkClassName:
		"text-nowrap transition-colors  w-full h-full inline-flex items-center justify-center",
	activeClassName: "bg-blue-500",
	activeLinkClassName: "bg-indigo-500 text-white font-semibold rounded-sm",
	disabledClassName: "text-slate-300",
};
