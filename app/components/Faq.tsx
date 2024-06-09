"use client";

const items = [
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

export default function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="lg:w-2/3">
        <div className="space-y-4">
          {items.map((item, index) => (
            <details
              key={index}
              className="group border-s-4 border-[#EB2891] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  {item.question}{" "}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
