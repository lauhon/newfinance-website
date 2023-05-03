import { Trans } from "next-i18next";
import { useState } from "react";
import ButtonBlack from "../shared/buttons/link-black";
import FAQItem from "../shared/faq/faq-item";

const faqItems = [
  {
    id: "on-bitcoin-and-banking",
    title: "On bitcoin and banking...",
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
    id: "removing-the-barriers-of-crypto",
    title: "Removing the barries of crypto...",
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
    id: "bitcoin-in-daily-life",
    title: "Using bitcoin in daily life...",
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
    id: "what-to-expect-from-us",
    title: "What to expect from us",
    isExpanded: false,
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
    <section className="text-center mt-32 mx-3 md:w-3/5 md:mt-72 md:m-auto">
      <h2 className="text-manrope text-medium text-3xl mb-14">
        <Trans i18nKey="faq.heading" />
      </h2>
      {list}
      <div className="mt-12">
        <ButtonBlack text="Ask us directly" />
      </div>
    </section>
  );
};

export default FAQ;
