export interface CardProps {
  id: string;
  name: string;
  photoUrl: string;
}

export interface HeaderProps {
  updateSearchQuery: (query: string) => void;
}

export interface MainProps {
  cardsList: CardProps[];
  isLoading: boolean;
}
