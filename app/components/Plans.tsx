import Image from "next/image";
import Check from "../../public/assets/check.svg";
import CheckRight from "../../public/assets/chekRight.svg";

const Plans = () => {
  return (
    <div className="flex flex-col gap-8  justify-center mt-8">
      {/* title */}
      <div className="text-center flex flex-col items-center justify-center gap-y-2 ">
        <h1 className="leading-9 text-2xl font-semibold">
          Flexible plans for you
        </h1>
        <p className="text-[#36485C]">No hidden fees!</p>
      </div>
      {/* card */}
      <div className="flex flex-col gap-6 lg:flex-row ">
        {/* card 1 */}
        <div className="w-full flex flex-col gap-y-4 bg-[#F5F4FF] p-6 rounded-lg justify-evenly hover:scale-105 transition cursor-pointer">
          <div className="space-y-2">
            <h2 className="text-[#4328EB] text-xl font-medium">Free Trial</h2>
            <p className="text-[#36485C]">Perfect for testing the waters</p>
          </div>
          <h3 className="text-xl font-semibold">
            $0 <span className="text-[#5F7896]">/mo</span>
          </h3>
          <div className="flex flex-col gap-3 text-[#36485C]">
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={16} height={16} />
              <p className="lg:text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={16} height={16} />
              <p className="lg:text-lg">Consectetur adipiscing elit</p>
            </div>
            <div className="flex gap-4">
              <Image src={Check} alt="Check" width={16} height={16} />
              <p className="lg:text-lg">Consectetur adipiscing elit</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-white text-[#4328EB] font-medium">
            Start Trial
          </button>
        </div>

        {/* card 2 */}
        <div className="w-full flex flex-col gap-y-4 bg-[#4328EB] p-6 rounded-lg justify-evenly hover:scale-105 transition cursor-pointer">
          <div className="space-y-2 text-[#F4F8FA]">
            <h2 className=" text-xl font-medium">Business</h2>
            <p>Perfect for small businesses</p>
          </div>
          <h3 className="text-xl text-white font-semibold">
            $500 <span>/mo</span>
          </h3>
          <div className="flex flex-col gap-3 text-[#F4F8FA]">
            <div className="flex gap-4 ">
              <Image src={CheckRight} alt="CheckRight" width={16} height={16} />
              <p className="lg:text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4">
              <Image src={CheckRight} alt="CheckRight" width={16} height={16} />
              <p className="lg:text-lg">Consectetur adipiscing elit</p>
            </div>
            <div className="flex gap-4">
              <Image src={CheckRight} alt="CheckRight" width={16} height={16} />
              <p className="lg:text-lg ">Sed do eiusmod tempor </p>
            </div>
            <div className="flex gap-4">
              <Image src={CheckRight} alt="CheckRight" width={16} height={16} />
              <p className="lg:text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4">
              <Image src={CheckRight} alt="CheckRight" width={16} height={16} />
              <p className="lg:text-lg">Sed do eiusmod tempor </p>
            </div>
          </div>
          <button className="px-8 py-3 bg-white text-[#4328EB] font-medium">
            Get Started
          </button>
        </div>

        {/* card 3 */}
        <div className="w-full flex flex-col gap-y-4 bg-[#F5F4FF] p-6 rounded-lg justify-evenly hover:scale-105 transition cursor-pointer">
          <div className="space-y-2">
            <h2 className="text-[#4328EB] text-xl font-medium">Enterprise</h2>
            <p className="text-[#36485C]">Perfect for big companies</p>
          </div>
          <h3 className="text-2xl font-semibold">Custom</h3>
          <div className="flex flex-col gap-3 text-[#36485C]">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="text-sm">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <button className="px-8 py-3 bg-white text-[#4328EB] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
