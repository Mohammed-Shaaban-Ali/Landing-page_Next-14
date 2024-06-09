import Image from "next/image";
import feature1 from "../../public/assets/feature-1.png";
import feature2 from "../../public/assets/feature-2.png";
import feature3 from "../../public/assets/feature-3.png";
import Check from "../../public/assets/check.svg";

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
            loading="lazy"
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
          <div className=" flex items-center  gap-2 text-[#0085FF] font-medium lg:mt-4">
            <button className="group flex items-center justify-center w-full lg:w-[50%]  lg:justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500">
              <span className="font-medium transition-colors group-hover:text-white">
                {" "}
                Learn More{" "}
              </span>

              <span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 lg:block hidden">
          <Image
            loading="lazy"
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
            loading="lazy"
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
            loading="lazy"
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
          <div className=" flex items-center  gap-2 text-[#00A424] font-medium lg:mt-4">
            <button className="group flex items-center justify-center w-full lg:w-[50%]  lg:justify-between gap-4 rounded-lg border border-current px-5 py-3 text-[#00A424] transition-colors hover:bg-[#00A424] focus:outline-none focus:ring active:bg-[#00A424]">
              <span className="font-medium transition-colors group-hover:text-white">
                {" "}
                Learn More{" "}
              </span>

              <span className="shrink-0 rounded-full border border-[#00A424] bg-white p-2 group-active:border-[#00A424]">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
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
            loading="lazy"
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
          <div className=" flex items-center  gap-2 text-[#0085FF] font-medium lg:mt-4">
            <button className="group flex items-center justify-center w-full lg:w-[50%]  lg:justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500">
              <span className="font-medium transition-colors group-hover:text-white">
                {" "}
                Learn More{" "}
              </span>

              <span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 lg:block hidden">
          <Image
            placeholder="blur"
            src={feature3}
            loading="lazy"
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
