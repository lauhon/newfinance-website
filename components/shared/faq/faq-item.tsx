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
    <li className="mt-4 group">
      <h3 className="mb-4 flex">
        <button
          className="text-left flex-1 flex items-center text-lg text-white font-manrope font-regular group-hover:opacity-80 transition-all"
          id={`${id}-header`}
          onClick={() => onClick(isExpanded ? -1 : index)}
          aria-controls={`${id}-panel`}
          aria-expanded={isExpanded}
        >
          <Icon.Plus
            size="24"
            className="text-[#4C3EF7] mr-2"
            style={{
              transition: "transform 0.15s",
              transform: `rotate(${isExpanded ? "90deg" : 0})`,
            }}
          />
          {title}
        </button>
      </h3>

      <article
        id={`${id}-panel`}
        aria-labelledby={`${id}-header`}
        className="text-base text-zinc-400 opacity-10 text-left leading-relaxed font-manrope font-regular w-full pr-4 transition-all"
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
      <div className="w-full h-[1px] bg-gradient-to-r from-[#2C303A]"></div>
    </li>
  );
}
export default FAQItem;
