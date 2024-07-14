export interface HeaderProps {
  searchValue: string;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchState {
  searchQuery: string;
  resultArray: CardParams[];
}

export interface CardParams {
  name: string;
  types: string[];
  photoUrl: string;
}
