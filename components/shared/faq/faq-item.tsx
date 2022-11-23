import { ReactNode } from "react";
import ArrowDown from "~/icons/arrow-down.svg";

type Props = { id: string; title: string; children: ReactNode; onClick: Function; isExpanded: boolean; index: number };

function FAQItem({ id, title, children, onClick, isExpanded, index }: Props) {
  return (
    <li className="border-b-2 mt-4 border-black">
      <h3 className="mb-4 flex">
        <button
          className="text-left flex-1 flex items-center text-lg"
          id={`${id}-header`}
          onClick={() => onClick(isExpanded ? -1 : index)}
          aria-controls={`${id}-panel`}
          aria-expanded={isExpanded}
        >
          {title}
          <ArrowDown
            style={{ transition: "transform 0.5s", transform: `rotate(${isExpanded ? "180deg" : 0})` }}
            aria-hidden
            className="ml-auto mr-3"
            height="12"
            title="hi"
          />
        </button>
      </h3>
      <article
        id={`${id}-panel`}
        aria-labelledby={`${id}-header`}
        className="text-sm"
        style={{
          transition: "max-height 0.5s linear, opacity 0.7s linear",
          visibility: isExpanded ? "visible" : "hidden",
          maxHeight: isExpanded ? "100px" : 0,
          opacity: isExpanded ? "1" : 0,
        }}
        aria-hidden={!isExpanded}
      >
        {children}
      </article>
    </li>
  );
}
export default FAQItem;
