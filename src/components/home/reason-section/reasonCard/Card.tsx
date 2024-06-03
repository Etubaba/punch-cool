import { HiOutlineMinusSm } from "react-icons/hi";
import Button from "../../../common/Button";
import { CardProps } from "../../../../interface/components";

const Card = ({ idx, item }: { item: CardProps; idx: number }) => {
  return (
    <div className=" bg-white md:py-8 h-full py-4 rounded-[20px] px-10 flex shadow-lg md:flex-row flex-col ">
      <div className="mt-16 md:w-1/2">
        <h1 className="md:text-[44px] font-switzerBold md:max-w-full md:leading-[54px] text-center md:!text-left text-4xl leading-[50px] text-zwilt-title-200 font-bold">
          {item.title}
        </h1>
        <div className="my-6">
          {item.list.map((list, i) => (
            <li key={i} className="flex space-x-` items-center">
              <HiOutlineMinusSm
                className={`text-3xl ${
                  idx === 0
                    ? "text-zwilt-purple-400"
                    : idx === 1
                    ? "text-zwilt-yellow-500"
                    : "text-zwilt-green-100"
                }  `}
              />
              <p className="text-zwilt-text-200/80 font-switzerRegular text-[10px] leading-[20px]">
                {list}
              </p>
            </li>
          ))}
        </div>
        <div className="mb-6 ">
          <Button size="sm" text="Learn More" />
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={item.image}
          className=" h-[157.45] object-contain"
          alt="cardiMf"
        />
      </div>
    </div>
  );
};

export default Card;
