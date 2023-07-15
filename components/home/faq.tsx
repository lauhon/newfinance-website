import { Trans } from "next-i18next";
import { useState } from "react";
import FAQItem from "../shared/faq/faq-item";

const faqItems = [
  {
    id: "expecting",
    title: "What to expect from us...",
    children: (
      <div>
        <p className="mt-3 mb-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <p className="mt-3 mb-4">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    ),
    isExpanded: false,
  },
  {
    id: "fees",
    title: "What fees do I have to pay?",
    children: (
      <div>
        <p className="mt-3 mb-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <p className="mt-3 mb-4">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    ),
    isExpanded: false,
  },
  {
    id: "switch",
    title: "Can I switch from another wallet / exchange or bank?",
    children: (
      <div>
        <p className="mt-3 mb-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <p className="mt-3 mb-4">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    ),
    isExpanded: false,
  },
];

const FAQ = () => {
  const [items, setItems] = useState(faqItems);
  const [anyOpen, setAnyOpen] = useState(false);

  const clicked = (clickedIndex: number) => {
    setItems(
      faqItems.map((item, index) => ({
        ...item,
        isExpanded: index === clickedIndex,
      }))
    );
    setAnyOpen(clickedIndex !== -1);
  };

  const list = (
    <ul>
      {items.map(({ children, title, id, isExpanded }, index) => (
        <FAQItem
          key={id + index}
          title={title}
          isExpanded={isExpanded}
          onClick={clicked}
          index={index}
          id={id}
        >
          {children}
        </FAQItem>
      ))}
    </ul>
  );

  return (
    <section className="flex justify-center content-center transition-all items-center px-6 md:px-14 lg:px-28 pb-32 pt-32">
      <div className="flex w-[1000px] max-w-full flex-col md:flex-row space-x-2">
        <div className="md:w-1/2">
          <h2 className="text-manrope text-regular text-4xl mb-14 text-white mr-6">
            <Trans i18nKey="faq.heading" />
          </h2>
        </div>
        <div className="md:w-1/2">{list}</div>
      </div>
    </section>
  );
};

export default FAQ;
