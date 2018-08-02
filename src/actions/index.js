import { ADD_BOOK } from './types';

export const addBook = (bookTitle) => {
    return {
      type: ADD_BOOK,
      payload: bookTitle
    };
};