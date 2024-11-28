import { Ref, forwardRef } from "react";
import type { InputProps } from "../../types/types";

const Input = forwardRef(
	({ className, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
		return (
			<input
				ref={ref}
				className={`w-full p-3 border-2 border-blue-100 transition-colors focus:outline-none focus:border-blue-300 rounded-md ${className}`}
				{...rest}
			/>
		);
	}
);

export default Input;
