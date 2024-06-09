import Image from "next/image";
import BlueBotton from "../../public/assets/blue-button.svg";
import Gredient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.png";
import Google from "../../public/assets/Google.png";
import Slack from "../../public/assets/Slack.png";
import Truspilot from "../../public/assets/Trustpilot.png";
import Cnn from "../../public/assets/CNN.png";
import Cluth from "../../public/assets/Clutch.svg";

const Hero = () => {
  return (
    <div>
      {/* hero text */}
      <div className=" text-center flex items-center justify-center flex-col gap-6 px-2 lg:w-[846px] lg:mx-auto lg:gap-8">
        <h1 className="text[#172026] text-[30px] leading-[40px] pt-5 font-medium lg:text-[64px] lg:leading-[72px] lg:font-semibold">
          Start monitoring your website like a pro
        </h1>
        <p className="text-[#36485C] leading-[24px] text-sm lg:text-[18px] lg:leading-[28px]">
          Get a bird&apos;s eye view with our customizable dashboard. Stay on
          top of things! Revamp your work process with our game-changing
          feature. Boost productivity and efficiency!
        </p>
        {/* booton */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 ">
          {/* <button className="px-8 py-4 text-white rounded-md bg-[#4328EB] font-medium"> */}
          <button className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
            <span className="absolute inset-0 border border-[#4328EB] group-active:border-[#4328EB]"></span>
            <span className="block border border-[#4328EB] bg-[#4328EB] px-12 py-3 transition-transform active:border-[#4328EB] active[#4328EB] group-hover:-translate-x-1 group-hover:-translate-y-1">
              Try for free
            </span>
          </button>
          <button className=" flex items-center gap-2 text-[#4328EB] font-medium">
            View Pricing <Image src={BlueBotton} alt="BlueBotton" />
          </button>
        </div>
      </div>
      {/* hero image */}
      <div className="relative flex h-full w-full justify-center">
        <Image
          priority
          src={Gredient}
          alt="Gredient"
          className="min-h-[500px] w-full object-cover"
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="HeroImage"
            className="h-[310px] -ml-4 sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%] lg:max-w-[1000px]"
          />
          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px] mb-2 ">
              Trusted by these companies
            </p>
            <div className="flex flex-wrap gap-x-3 items-center justify-center justify-items-center px-2 align-middle  lg:gap-16">
              <Image priority placeholder="blur" src={Google} alt="Google " />
              <Image priority placeholder="blur" src={Slack} alt="Slack" />
              <Image
                priority
                placeholder="blur"
                src={Truspilot}
                alt="Truspilot"
              />
              <Image priority placeholder="blur" src={Cnn} alt="Cnn" />
              <Image priority src={Cluth} alt="Cluth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
