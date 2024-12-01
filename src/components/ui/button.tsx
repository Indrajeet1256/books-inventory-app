import type { ButtonProps } from "../../types/types";

const Button = ({ children, className, ...rest }: ButtonProps) => {
	return (
		<button {...rest} className={`cursor-pointer  uppercase ${className}`}>
			{children}
		</button>
	);
};

export default Button;
