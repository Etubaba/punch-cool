import buttonIcon from "../../assets/button-icon.svg";

const Button = ({
  text,
  onClick,
  size,
}: {
  text: string;
  onClick?: () => void;
  size?: "sm" | "base";
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex items-center ${
        size === "sm" ? "w-60" : "w-60"
      }  h-18 cursor-pointer group`}
    >
      <button
        className={`relative z-10 ${
          size === "sm"
            ? "h-[40px] w-[40px] md:rounded-[15px] group-hover:w-52 md:group-hover:w-40"
            : "h-[60px] w-[60px] md:h-[74px] md:w-[74px] md:rounded-[30px] group-hover:w-52 md:group-hover:w-60"
        }    bg-zwilt-title-200 rounded-3xl  transition-all duration-500 `}
      >
        <img
          className={` transform   
           ${
             size === "sm"
               ? "translate-x-3 group-hover:translate-x-32  w-4 h-4"
               : "translate-x-5 md:group-hover:translate-x-40 group-hover:translate-x-40 w-8 h-8"
           } duration-700  `}
          src={buttonIcon}
          alt="button icon"
        />
      </button>
      <p
        className={`absolute z-20 text-zwilt-title-200   ${
          size === "sm" ? "left-14" : "left-20"
        }  top-1/2 transform -translate-y-1/2 text-lg font-medium transition-all duration-700 group-hover:text-white group-hover:left-6`}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;
