type Question = {
  category?: string | undefined;
  sub_category?: string | undefined;
  question: string;
  id: number;
};

export type FaqContent = {
  questions: Question[];
};
