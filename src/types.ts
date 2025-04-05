import { ChangeEvent, FormEvent } from "react";

export interface StateParams {
  searchQuery: string;
  apiResponseArray: CardProps[];
}

export interface CardProps {
  id: string;
  name: string;
  photoUrl: string;
}

export interface HeaderProps {
  searchQuery: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface MainProps {
  cardsArray: CardProps[];
  isLoading: boolean;
}

/*

export interface HeaderProps {
  searchValue: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface MainProps {
  requestArray: CardParams[];
  isLoading: boolean;
}

export interface SearchState {
  searchQuery: string;
  resultArray: CardParams[];
  isLoading: boolean;
}

export interface CardParams {
  name: string;
  types: string[];
  photoUrl: string;
}

export interface ErrorBoundaryProps {
  children?: ReactNode;
}

export interface ErrorBoundaryState {
  isErrorCaught: boolean;
}*/

/*
------------------------------------------
export interface StateParams {
  searchQuery: string;
  apiResponseArray: CardProps[];
}

export interface CardProps {
  id: string;
  name: string;
  photoUrl: string;
}

export interface HeaderProps {
 getCards: (searchQuery: string) => void; 
}

export interface MainProps {
  cardsArray: CardProps[];
  isLoading: Boolean;
}
*/
