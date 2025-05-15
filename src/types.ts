import { ReactNode } from "react";

export interface CardProps {
  id: string;
  name: string;
  photoUrl: string;
}

export interface HeaderProps {
  updateSearchQuery: (query: string) => void;
}

export interface ViewProps {
  searchQuery: string;
}

export interface PaginationProps {
  numberOfPages: number;
  onPageChange: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export interface ErrorBoundaryState {
  isErrorCaught: boolean;
}

export interface ErrorBoundaryProps {
  children?: ReactNode;
}
