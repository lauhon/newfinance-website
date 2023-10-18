import { ChevronRight } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FAQItem from "../shared/faq/faq-item";

const faqItems = [
  {
    id: "products",
    title: "What products do you offer?",
    icon: "Zap",
    text: "With NewFinance you can invest in Bitcoin and secure your financial future. Unfortunately, the current economic situation makes this necessary. Bitcoin is used by millions of people as an investment. With NewFinance you should be able to use Bitcoin just as easily as you use money now. But without a central bank.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "who",
    title: "Who can use NewFinance?",
    icon: "Zap",
    text: "Everyone. This is the vision of NewFinance and Bitcoin. No one is excluded and everyone has the same prerequisites.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "bank",
    title: "Are you a bank?",
    icon: "Zap",
    text: "No. We just want to offer all the useful features of a bank, but not be like a bank.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "safety",
    title: "How is my money secured?",
    icon: "Zap",
    text: "Your money is safely stored on the Bitcoin blockchain. Only you have access to it locally encrypted on your smartphone. Our MPC encryption technology protects your access. If you lose your smartphone, your access is protected by a backup.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "pricing",
    title: "What does NewFinance cost me?",
    icon: "Zap",
    text: "NewFinance is absolutely free for you during the beta. After the end of the beta, NewFinance remains free for all beta users. Only the blockchain fees of Bitcoin will be charged, which will not go to NewFinance. However, we would like to abolish these fees with the introduction of the Lightning network.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
];

const faqItemsDE = [
  {
    id: "products",
    title: "Welche Produkte bietet ihr an?",
    icon: "Zap",
    text: "Mit NewFinance kannst du in Bitcoin investieren und deine finanzielle Zukunft absichern. Die derzeitige Wirtschaftslage macht das leider notwendig. Bitcoin wird von Millionen von Menschen als Wertanlage verwendet. Mit NewFinance sollst du Bitcoin genauso einfach verwenden können, wie du Geld jetzt verwendest. Jedoch ohne einer zentralen Bank.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "who",
    title: "Wer kann NewFinance verwenden?",
    icon: "Zap",
    text: "Jeder. Das ist die Vision von NewFinance und Bitcoin. Niemand wird ausgeschlossen und jeder hat die gleichen Vorraussetzungen.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "bank",
    title: "Seid ihr eine Bank?",
    icon: "Zap",
    text: "Nein. Wir möchten nur alle nützlichen Funktionen einer Bank anbieten, aber nicht wie eine Bank sein.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "safety",
    title: "Wie ist mein Geld gesichert?",
    icon: "Zap",
    text: "Dein Geld ist sicher verwahrt auf der Bitcoin Blockchain. Den Zugang dazu besitzt ausschließlich du lokal verschlüsselt auf deinem Smartphone. Unsere MPC Verschlüsselungstechnologie schützt dabei deinen Zugang. Bei Verlust deines Smartphones ist dein Zugang durch ein Backup abgesichert.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "pricing",
    title: "Was kostet mich NewFinance?",
    icon: "Zap",
    text: "Für dich ist NewFinance während der Beta absolut kostenlos. Nach Ablauf der Beta bleibt NewFinance für alle Beta Nutzer weiter kostenlos. Es fallen lediglich die Blockchain Gebühren von Bitcoin an, welche nicht an NewFinance gehen. Diese Gebühren möchten wir jedoch mit Einführung des Lightning Netzwerks abschaffen.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
];

const FAQ = () => {
  const { i18n } = useTranslation("home");

  const [items, setItems] = useState(
    i18n.language == "en" ? faqItems : faqItemsDE
  );
  const [anyOpen, setAnyOpen] = useState(false);

  const clicked = (clickedIndex: number) => {
    setItems(
      items.map((item, index) => ({
        ...item,
        isExpanded: index === clickedIndex,
      }))
    );
    setAnyOpen(clickedIndex !== -1);
  };

  const list = (
    <ul>
      {items.map(({ text, title, id, isExpanded }, index) => (
        <FAQItem
          key={id + index}
          title={title}
          isExpanded={isExpanded}
          onClick={clicked}
          index={index}
          id={id}
        >
          {text}
        </FAQItem>
      ))}
    </ul>
  );

  const colorRef2 = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const darkBackground = document.getElementById("darkBackground");
    if (darkBackground === null) {
    } else {
      const handleIntersect = (entries: any[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const handleScroll = () => {
              const scrollPosition = window.scrollY;
              const threshold = entry.target.offsetTop - 200; // Schwellenwert basierend auf der Position des div-Elements
              const maxScroll = 100; // Bereich, über den der Farbwechsel stattfindet

              if (scrollPosition > threshold) {
                const scrollDiff = scrollPosition - threshold;
                const opacity = Math.min(scrollDiff / maxScroll, 1); // Interpolieren zwischen 0 und 1

                const endColor = [255, 255, 255]; // Startfarbe in RGB-Werten (hier: #FFFFFF)
                const startColor = [12, 13, 17]; // Endfarbe in RGB-Werten (hier: #0C0D11)

                const interpolatedColor = startColor.map(
                  (startValue, index) => {
                    const endValue = endColor[index];
                    const interpolatedValue = Math.round(
                      startValue - (startValue - endValue) * opacity
                    );
                    return interpolatedValue;
                  }
                );

                const newColor = `rgb(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]})`;
                darkBackground.style.backgroundColor = newColor;
                //document.body.style.backgroundColor = newColor;
                //setBackgroundColor(newColor);
              } else {
                darkBackground.style.backgroundColor = "#0C0D11";
                //document.body.style.backgroundColor = "#FAFAFA";
              }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
              window.removeEventListener("scroll", handleScroll);
            };
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      });

      if (colorRef2.current) {
        observer.observe(colorRef2.current);
      }

      return () => {
        if (colorRef2.current) {
          observer.unobserve(colorRef2.current);
        }
      };
    }
  }, []);

  return (
    <section
      ref={colorRef2}
      className="flex justify-center content-center transition-all items-center px-6 md:px-14 lg:px-28 pb-32 pt-32"
    >
      <div className="flex w-[1000px] max-w-full flex-col">
        <div className="text-left w-[1000px] max-w-full mb-12">
          <h2 className="text-[2rem] sm:text-[2.4rem] font-manrope font-semibold leading-tight mt-2">
            <Trans i18nKey="faq.headline" />
          </h2>
        </div>
        <div className="lg:w-2/3">{list}</div>
        <div className="ml-[-1rem] flex align-text-bottom">
          <Link
            href="faq"
            className="flex align-text-bottom text-lg text-black font-manrope font-semibold hover:bg-slate-50 transition-all px-4 py-3 rounded-sm mt-8"
          >
            <Trans i18nKey="faq.button_more" />

            <ChevronRight size="20" className="text-black mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
