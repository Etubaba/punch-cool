import buttonIcon from "../../assets/button-icon.svg";

const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="relative flex items-center w-60 h-18 cursor-pointer group"
    >
      <button className="relative z-10 h-[60px] w-[60px] md:h-[74px] md:w-[74px]  bg-zwilt-title-200 rounded-3xl md:rounded-[30px] transition-all duration-500 group-hover:w-52 md:group-hover:w-60">
        <img
          className="  transform translate-x-5   group-hover:translate-x-40 md:group-hover:translate-x-40 duration-700"
          src={buttonIcon}
          alt="button icon"
        />
      </button>
      <p className="absolute z-20 text-zwilt-title-200 left-20 top-1/2 transform -translate-y-1/2 text-lg font-medium transition-all duration-700 group-hover:text-white group-hover:left-6">
        {text}
      </p>
    </div>
  );
};

export default Button;
