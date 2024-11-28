import { ReactNode } from "react";
import { ListProps } from "../../types/types";

const List = ({ children, className }: ListProps) => {
	return (
		<ul className={`w-full flex flex-col mb-2 ${className}`}>{children}</ul>
	);
};
List.Item = ({ children }: { children: ReactNode }) => {
	return (
		<li className="px-3 py-4 [&:last-child]:border-b border-t border-l border-r border-gray-200 rounded-sm flex items-center break-all">
			{children}
		</li>
	);
};
export default List;
