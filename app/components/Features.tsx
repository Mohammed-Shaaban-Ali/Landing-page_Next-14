import Image from "next/image";
// import feature1 from "../../public/assets/feature-1.png";
import feature1 from "../../public/assets/feature-1.png";
import feature2 from "../../public/assets/feature-2.png";
import feature3 from "../../public/assets/feature-3.png";
import Check from "../../public/assets/check.svg";
import BlueBotton from "../../public/assets/blue-button.png";
import GreanBotton from "../../public/assets/green-button.png";

const Features = () => {
  return (
    <div className="py-8 lg:py-14 flex items-center justify-center  flex-col gap-5 lg:gap-20">
      {/* feature 1 */}
      <div className=" flex items-center justify-between gap-x-28 ">
        {/* content */}
        <div className="flex flex-1 flex-col gap-5 lg:pr-20">
          <div className="flex flex-col ">
            <p className="text-[#0085FF] leading-6 font-medium ">
              Sales Monitoring
            </p>
            <h1 className="leading-[36px] text-[20px] font-medium lg:text-[42px] lg:leading-[58px]">
              Simplify your sales monitoring
            </h1>
          </div>
          <Image
            placeholder="blur"
            src={feature1}
            alt="feature1"
            className="lg:hidden"
          />
          <p className="text-[#36485C] leading-6 lg:text-lg">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>
          <div className="flex flex-col gap-2 text-[#36485C]">
            <div className="flex gap-4">
              <Image
                className="w-6"
                src={Check}
                alt="Check"
                width={24}
                height={24}
              />
              <p className="lg:text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4">
              <Image
                className="w-6"
                src={Check}
                alt="Check"
                width={24}
                height={24}
              />
              <p className="lg:text-lg">Consectetur adipiscing elit</p>
            </div>
            <div className="flex gap-4">
              <Image
                className="w-6"
                src={Check}
                alt="Check"
                width={24}
                height={24}
              />
              <p className="lg:text-lg">Sed do eiusmod tempor</p>
            </div>
          </div>
          <button className=" flex items-center  gap-2 text-[#0085FF] font-medium lg:mt-4">
            Learn More
            <Image
              placeholder="blur"
              width={26}
              height={26}
              src={BlueBotton}
              alt="BlueBotton"
            />
          </button>
        </div>
        {/* Image */}
        <div className="flex-1 lg:block hidden">
          <Image
            placeholder="blur"
            src={feature1}
            alt="feature1"
            width={628}
            // className="lg:block hidden"
          />
        </div>
      </div>

      {/* feature 2 */}
      <div className=" flex items-center justify-between gap-x-28 ">
        {/* Image */}
        <div className="flex-1 lg:block hidden">
          <Image
            placeholder="blur"
            src={feature2}
            alt="feature2"
            width={628}
            // className="lg:block hidden"
          />
        </div>
        {/* content */}
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-col ">
            <p className="text-[#00A424] leading-6 font-medium ">
              Customer Support
            </p>
            <h1 className="leading-[36px] text-[18px] font-medium lg:text-[42px] lg:leading-[58px]">
              Get in touch with your customers
            </h1>
          </div>
          <Image
            placeholder="blur"
            src={feature2}
            alt="feature2"
            className="lg:hidden"
          />
          <p className="text-[#36485C] leading-6 lg:text-lg">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>
          <div className="flex flex-col gap-2 text-[#36485C]">
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={24} height={24} />
              <p className="lg:text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={24} height={24} />
              <p className="lg:text-lg">Consectetur adipiscing elit</p>
            </div>
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={24} height={24} />
              <p className="lg:text-lg">Sed do eiusmod tempor</p>
            </div>
          </div>
          <button className=" flex items-center  gap-2 text-[#00A424] font-medium lg:mt-4">
            Learn More
            <Image
              placeholder="blur"
              width={26}
              height={26}
              src={GreanBotton}
              alt="GreanBotton"
            />
          </button>
        </div>
      </div>

      {/* feature 3 */}
      <div className=" flex items-center justify-between gap-x-28 ">
        {/* content */}
        <div className="flex flex-1 flex-col gap-5 lg:pr-20">
          <div className="flex flex-col ">
            <p className="text-[#0085FF] leading-6 font-medium ">
              Sales Monitoring
            </p>
            <h1 className="leading-[36px] text-[20px] font-medium lg:text-[42px] lg:leading-[58px]">
              Simplify your sales monitoring
            </h1>
          </div>
          <Image
            placeholder="blur"
            src={feature3}
            alt="feature3"
            className="lg:hidden"
          />
          <p className="text-[#36485C] leading-6 lg:text-lg">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>
          <div className="flex flex-col gap-2 text-[#36485C]">
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={24} height={24} />
              <p className="lg:text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={24} height={24} />
              <p className="lg:text-lg">Consectetur adipiscing elit</p>
            </div>
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={24} height={24} />
              <p className="lg:text-lg">Sed do eiusmod tempor</p>
            </div>
          </div>
          <button className=" flex items-center  gap-2 text-[#0085FF] font-medium lg:mt-4">
            Learn More
            <Image
              placeholder="blur"
              width={26}
              height={26}
              src={BlueBotton}
              alt="BlueBotton"
            />
          </button>
        </div>
        {/* Image */}
        <div className="flex-1 lg:block hidden">
          <Image
            placeholder="blur"
            src={feature3}
            alt="feature3"
            width={628}
            // className="lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
