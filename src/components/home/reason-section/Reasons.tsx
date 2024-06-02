import Card from "./reasonCard/Card";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { cardContent } from "./content";

const Reasons = () => {
  return (
    <section className=" py-20 bg-gradient-to-b from-zwilt-gray-150 via-zwilt-purple-300 to-zwilt-purple-150">
      <div className="  flex md:flex-row flex-col mx-4 items-center  md:mx-10 ">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h1 className="md:text-[54px] md:max-w-[380px] md:leading-[64px] text-center md:!text-left text-4xl leading-[50px] text-zwilt-title-200 font-bold">
            Why choose zwilt
          </h1>
          <p className="md:text-[22px] md:max-w-[326px] text-lg mt-2 text-center md:!text-left leading-[32px] text-zwilt-text-200/80 ">
            We take complex hiring processes - and simplify them. Connecting you
            to the world's highly qualified talent pool.
          </p>
        </div>

        <div className="md:w-2/3 w-full shadow-lg rounded-[20px]">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={2000}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            infinite
            autoPlay
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >
            {cardContent.map((card, idx) => (
              <Card key={idx} idx={idx} item={card} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reasons;