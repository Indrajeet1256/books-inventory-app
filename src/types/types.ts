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

export type ViewType = "grid" | "table";

export type BooksComponentProps = {
	books: Books | undefined;
	filter: string;
	viewType: ViewType;
};

export type FilterComponentProps = {
	languages: string[];
	filter: string;
	viewType: ViewType;
	handleSetFilter: (filter: string) => void;
	handleSetViewType: (viewType: ViewType) => void;
};

export type SingleBook = Book & { filter: string; viewType: string };
