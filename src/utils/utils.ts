import { Books } from "../types/types";

export function checkBooksAvailableForLanguage(books: Books, language: string) {
	return books.some((book) => book.language === language);
}
