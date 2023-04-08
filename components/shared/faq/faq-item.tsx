import { ReactNode } from "react";
import * as Icon from "react-feather";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  onClick: Function;
  isExpanded: boolean;
  index: number;
};

function FAQItem({ id, title, children, onClick, isExpanded, index }: Props) {
  return (
    <li className="border-b-1 border-[#E4E9ED] mt-4 border-black group">
      <h3 className="mb-4 flex">
        <button
          className="text-left flex-1 flex items-center text-lg"
          id={`${id}-header`}
          onClick={() => onClick(isExpanded ? -1 : index)}
          aria-controls={`${id}-panel`}
          aria-expanded={isExpanded}
        >
          {title}
          <div
            style={{
              backgroundColor: isExpanded ? "black" : "",
            }}
            className="bg-white group-hover:bg-black ml-auto mr-3 rounded-full p-1 transition-all"
          >
            <Icon.ChevronRight
              size="18"
              className="text-[#B5BCC0] group-hover:text-[#ffffff] transition-all"
              style={{
                transition: "transform 0.15s",
                transform: `rotate(${isExpanded ? "90deg" : 0})`,
              }}
            />
          </div>
        </button>
      </h3>
      <article
        id={`${id}-panel`}
        aria-labelledby={`${id}-header`}
        className="text-base text-text text-left leading-relaxed font-inter w-full lg:w-3/4 pr-4 transition-all"
        style={{
          transition: "all 0.2s ease",
          overflow: "hidden",
          opacity: isExpanded ? 1 : 0,
          maxHeight: isExpanded ? 1000 : 0,
        }}
        aria-hidden={!isExpanded}
      >
        {children}
      </article>
    </li>
  );
}
export default FAQItem;
