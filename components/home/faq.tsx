import {useState} from 'react';
import FAQItem from '../shared/faq/faq-item';

const faqItems = [
  {
    id: 'wie-anlegen',
    title: 'Wie kann ich ein neues Wallet anlegen',
    children: <p>Wallet downloaden starten blabla</p>,
    isExpanded: false,
  },
  {
    id: 'wo-zahlen',
    title: 'Wo kann ich mit Superlight bezahlen?',
    children: <p>überall blablabla</p>,
    isExpanded: false,
  },
  {
    id: 'wieso-billig',
    title: 'Wieso sind die Gebühren niedriger als bei anderen Wallets?',
    children: <p>Tech stuff super toll</p>,
    isExpanded: false,
  },
  {
    id: 'seid-bank',
    title: 'Seid ihr eine Bank?',
    isExpanded: false,
    children: <p>na sicha ned. Lorem ipsum dolores abridge</p>,
  },
  {
    id: 'kann-iban-senden',
    title: 'Kann ich eine Kryptowährung auch an eine Iban senden?',
    children: <p>na kloa blabla</p>,
    isExpanded: false,
  },
];

const FAQ = () => {
  const [items, setItems] = useState(faqItems);
  const [anyOpen, setAnyOpen] = useState(false);

  const clicked = (clickedIndex: number) => {
    setItems(faqItems.map((item, index) => ({...item, isExpanded: index === clickedIndex})));
    setAnyOpen(clickedIndex !== -1);
  };

  const list = (
    <ul>
      {items.map(({children, title, id, isExpanded}, index) => (
        <FAQItem key={id + index} title={title} isExpanded={isExpanded} onClick={clicked} index={index} id={id}>
          {children}
        </FAQItem>
      ))}
    </ul>
  );

  return (
    <section className=" px-2 md:px-44">
      <h2 className=" text-3xl mb-12">Frequently asked Questions</h2>
      {list}
    </section>
  );
};

export default FAQ;
