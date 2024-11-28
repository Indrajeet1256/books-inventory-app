import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type ErrorComponentProps = {
	Icon?: ReactNode;
	message: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ErrorComponent = ({ Icon, message, className }: ErrorComponentProps) => {
	return (
		<div
			className={`max-w-md p-3 mx-auto rounded-sm flex items-center justify-center gap-2 ${className}`}
		>
			{Icon && Icon}
			<p className="md:text-base text-sm text-white font-normal">{message}</p>
		</div>
	);
};

export default ErrorComponent;
