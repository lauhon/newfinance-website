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
    <li className="group ml-[-1rem] mt-1">
      <h3 className="flex">
        <button
          className="text-left flex-1 flex items-center justify-between text-lg text-black font-manrope font-semibold group-hover:bg-slate-50 transition-all px-4 py-3 rounded-sm"
          id={`${id}-header`}
          onClick={() => onClick(isExpanded ? -1 : index)}
          aria-controls={`${id}-panel`}
          aria-expanded={isExpanded}
        >
          {title}
          <Icon.Plus
            size="24"
            className="text-black"
            style={{
              transition: "transform 0.15s",
              transform: `rotate(${isExpanded ? "90deg" : 0})`,
            }}
          />
        </button>
      </h3>

      <article
        id={`${id}-panel`}
        aria-labelledby={`${id}-header`}
        className="text-base text-zinc-400 opacity-10 text-left leading-relaxed font-manrope font-regular w-full pr-4 transition-all px-4"
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
