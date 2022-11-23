import GreenStar from "~/icons/green-star.svg";
import ImageListBlock from "../shared/image-list-block";

const p1 =
  "Sende, empfange und bezahle mit Kryptowährungen ganz ohne Transaktionsgebühren. Verlasse dich nicht länger auf deine Bank und nutze dein Superlight Wallet überall dort wo Du Geld brauchst.";

const l1 = ["0 € Überweisungsgebühren", "Non - Custodial", "Iban / Sepa kompatibel"];

const l2 = [
  "In 1min ready to go",
  "Bezahle überall mit StableCoins, Bitcoin, Ethereum",
  "Usernamen anstatt langer Adressen",
  "Schutz vor Verlust",
];

const p2 =
  "Unser Versprechen: Du brauchst kein Krypto-Wissen. Sende und empfange wie Du es gewohnt bist, aber bereit für die Zukunft.";

const Qualities = () => {
  return (
    <section className="w-full bg-white">
      <ImageListBlock listItems={l1} phrase={p1}>
        <h2>
          Starte in eine neue <span>Generation</span> Geld
        </h2>
      </ImageListBlock>

      <ImageListBlock listItems={l2} phrase={p2}>
        <h2>
          Kryptowährungen
          <GreenStar className="h-4" />
          <br /> so einfach wie nie zu vor
        </h2>
      </ImageListBlock>
    </section>
  );
};

export default Qualities;
