export interface MenuProps {
  yes: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CardProps = {
  title: string;
  list: string[];
  image: string;
};
