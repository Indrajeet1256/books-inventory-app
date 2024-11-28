import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	InputHTMLAttributes,
	HTMLAttributes,
} from "react";

export interface Book {
	author: string;
	country: string;
	imageLink: string;
	language: string;
	link: string;
	pages: number;
	title: string;
	year: number;
	id: string;
}

export type Books = Book[];

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

export type ButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export type ListProps = DetailedHTMLProps<
	HTMLAttributes<HTMLUListElement>,
	HTMLUListElement
>;
