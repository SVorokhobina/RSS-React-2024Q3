import { ReactNode } from "react";

export interface HeaderProps {
  searchValue: string;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}
