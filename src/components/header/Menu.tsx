import { MenuProps } from "../../interface/components";

const Menu = ({ setChecked, yes }: MenuProps): JSX.Element => {
  return (
    <label
      className="relative p-5 md:hidden flex justify-center items-center cursor-pointer"
      htmlFor="checkbox"
    >
      <input
        id="checkbox"
        checked={yes}
        onChange={(e) => setChecked(e.target.checked)}
        type="checkbox"
        className="hidden"
      />
      <span className="absolute w-5 h-[2px] dark:bg-white bg-textcolor rounded-md line-top"></span>
      <span className="absolute w-5 h-[2px] dark:bg-white bg-textcolor rounded-md line-middle"></span>
      <span className="absolute w-5 h-[2px] dark:bg-white bg-textcolor rounded-md line-bottom"></span>
    </label>
  );
};

export default Menu;
