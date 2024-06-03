type Question = {
  category?: string | undefined;
  sub_category?: string | undefined;
  question: string;
  id: number;
};

export type FaqContent = {
  questions: Question[];
};

export type SearchStore = {
  searchValue: string;
  handleSearch: (value: string) => void;
};
