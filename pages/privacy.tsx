import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useEffect, useState } from "react";
import FooterLight from "~/components/layout/footer-light";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const Privacy = () => {
  const subpoints = [
    "intro",
    "field",
    "legal",
    "contact",
    "storage",
    "dsgvo",
    "webhosting",
    "email",
    "cloud",
    "terms",
  ];
  const [activeSubpoint, setActiveSubpoint] = useState(subpoints[0]);

  const handleSubpointClick = (subpoint: any) => {
    setActiveSubpoint(subpoint);
    const element = document.getElementById(subpoint);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArticleScroll = () => {
    const threshold = window.innerHeight / 3;
    let activeSubpoint = null;

    for (const subpoint of subpoints) {
      const subpointElement = document.getElementById(subpoint);
      if (subpointElement) {
        const subpointRect = subpointElement.getBoundingClientRect();

        if (subpointRect.top <= threshold && subpointRect.bottom >= 0) {
          activeSubpoint = subpoint;
          break;
        }
      }
    }

    if (activeSubpoint) {
      setActiveSubpoint(activeSubpoint);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleArticleScroll);
    return () => {
      window.removeEventListener("scroll", handleArticleScroll);
    };
  }, []);

  useEffect(() => {
    const article = document.getElementById("article");
    const handleManualScroll = () => {
      handleArticleScroll();
    };

    if (article) {
      article.addEventListener("scroll", handleManualScroll);
    }
    return () => {
      if (article) {
        article.removeEventListener("scroll", handleManualScroll);
      }
    };
  }, []);

  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col">
        <div className="mt-28">
          <span className="font-inter text-xs text-[#4e4e50]">
            UPDATED JUL 23, 2023
          </span>
          <h1
            id="first-section"
            className="text-[2.2rem] sm:text-[3rem] font-manrope font-regular leading-tight mt-2"
          >
            Privacy Policy
          </h1>
          <div className="grid grid-cols-4 mt-28 col-auto gap-6 mb-8">
            <div className="hidden sm:sticky top-44 self-start sm:flex flex-col gap-4 col-span-1 text-xs text-[#4e4e50]">
              <Link
                href="#intro"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "intro" ? "bold" : "normal",
                }}
              >
                Einleitung und Überblick
              </Link>
              <Link
                href="#field"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "field" ? "bold" : "normal",
                }}
              >
                Anwendungsbereich
              </Link>
              <Link
                href="#legal"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "legal" ? "bold" : "normal",
                }}
              >
                Rechtsgrundlagen
              </Link>
              <Link
                href="#contact"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "contact" ? "bold" : "normal",
                }}
              >
                Kontaktdaten
              </Link>
              <Link
                href="#storage"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "storage" ? "bold" : "normal",
                }}
              >
                Speicherdauer
              </Link>
              <Link
                href="#dsgvo"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "dsgvo" ? "bold" : "normal",
                }}
              >
                DSGVO
              </Link>
              <Link
                href="#webhosting"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight:
                    activeSubpoint === "webhosting" ? "bold" : "normal",
                }}
              >
                Webhosting
              </Link>
              <Link
                href="#email"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "email" ? "bold" : "normal",
                }}
              >
                E-Mail Marketing
              </Link>
              <Link
                href="#cloud"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "cloud" ? "bold" : "normal",
                }}
              >
                Cloud Dienste
              </Link>
              <Link
                href="#terms"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "terms" ? "bold" : "normal",
                }}
              >
                Begriffserklärung
              </Link>
            </div>
            <div
              id="textArea"
              className="col-span-4 sm:col-span-3 sm:ml-6 lg:ml-0"
            >
              <h4
                id="intro"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mb-8"
              >
                1. Einleitung und Überblick
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6  text-[#4e4e50]">
                Wir haben diese Datenschutzerklärung (Fassung
                04.01.2023-112387616) verfasst, um Ihnen gemäß der Vorgaben der
                Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren
                nationalen Gesetzen zu erklären, welche personenbezogenen Daten
                (kurz Daten) wir als Verantwortliche – und die von uns
                beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten,
                zukünftig verarbeiten werden und welche rechtmäßigen
                Möglichkeiten Sie haben. Die verwendeten Begriffe sind
                geschlechtsneutral zu verstehen.
              </p>

              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                1.1 - Kurz gesagt
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Wir informieren Sie umfassend über Daten, die wir über Sie
                verarbeiten.Datenschutzerklärungen klingen für gewöhnlich sehr
                technisch und verwenden juristische Fachbegriffe. Diese
                Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge
                so einfach und transparent wie möglich beschreiben. Soweit es
                der Transparenz förderlich ist, werden technische Begriffe
                leserfreundlich erklärt und Links zu weiterführenden
                Informationen geboten. Wir informieren damit in klarer und
                einfacher Sprache, dass wir im Rahmen unserer
                Geschäftstätigkeiten nur dann personenbezogene Daten
                verarbeiten, wenn eine entsprechende gesetzliche Grundlage
                gegeben ist. Das ist sicher nicht möglich, wenn man möglichst
                knappe, unklare und juristisch-technische Erklärungen abgibt, so
                wie sie im Internet oft Standard sind, wenn es um Datenschutz
                geht. Ich hoffe, Sie finden die folgenden Erläuterungen
                interessant und informativ und vielleicht ist die eine oder
                andere Information dabei, die Sie noch nicht kannten. Wenn
                trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die
                unten bzw. im Impressum genannte verantwortliche Stelle zu
                wenden, den vorhandenen Links zu folgen und sich weitere
                Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten
                finden Sie selbstverständlich auch im Impressum.
              </p>
              <h4
                id="field"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8"
              >
                3. Anwendungsbereich
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Diese Datenschutzerklärung gilt für alle von uns im Unternehmen
                verarbeiteten personenbezogenen Daten und für alle
                personenbezogenen Daten, die von uns beauftragte Firmen
                (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten
                meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum
                Beispiel Name, E-Mail-Adresse und postalische Anschrift einer
                Person. Die Verarbeitung personenbezogener Daten sorgt dafür,
                dass wir unsere Dienstleistungen und Produkte anbieten und
                abrechnen können, sei es online oder offline. Der
                Anwendungsbereich dieser Datenschutzerklärung umfasst:alle
                Onlineauftritte (Websites, Onlineshops), die wir betreibenSocial
                Media Auftritte und E-Mail-Kommunikationmobile Apps für
                Smartphones und andere Geräte ‍Kurz gesagt: Die
                Datenschutzerklärung gilt für alle Bereiche, in denen
                personenbezogene Daten im Unternehmen über die genannten Kanäle
                strukturiert verarbeitet werden. Sollten wir außerhalb dieser
                Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie
                gegebenenfalls gesondert informieren.
              </p>
              <h4
                id="legal"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8"
              >
                4. Rechtsgrundlagen
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                In der folgenden Datenschutzerklärung geben wir Ihnen
                transparente Informationen zu den rechtlichen Grundsätzen und
                Vorschriften, also den Rechtsgrundlagen der
                Datenschutz-Grundverordnung, die uns ermöglichen,
                personenbezogene Daten zu verarbeiten. Was das EU-Recht
                betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES
                EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese
                Datenschutz-Grundverordnung der EU können Sie selbstverständlich
                online auf EUR-Lex, dem Zugang zum EU-Recht nachlesen. Wir
                verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden
                Bedingungen zutrifft:
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                4.1 - Einwilligung
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                (Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre
                Einwilligung gegeben, Daten zu einem bestimmten Zweck zu
                verarbeiten. Ein Beispiel wäre die Speicherung Ihrer
                eingegebenen Daten eines Kontaktformulars.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                4.2 - Vertrag
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                (Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder
                vorvertragliche Verpflichtungen mit Ihnen zu erfüllen,
                verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen
                Kaufvertrag mit Ihnen abschließen, benötigen wir vorab
                personenbezogene Informationen.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                4.3 - Rechtliche Verpflichtung
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                (Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen
                Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum
                Beispiel sind wir gesetzlich verpflichtet Rechnungen für die
                Buchhaltung aufzuheben. Diese enthalten in der Regel
                personenbezogene Daten.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                4.4 - Berechtigte Interessen
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter
                Interessen, die Ihre Grundrechte nicht einschränken, behalten
                wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen
                zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher
                und wirtschaftlich effizient betreiben zu können. Diese
                Verarbeitung ist somit ein berechtigtes Interesse. Weitere
                Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen
                Interesse und Ausübung öffentlicher Gewalt sowie dem Schutz
                lebenswichtiger Interessen treten bei uns in der Regel nicht
                auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein
                sollte, wird diese an der entsprechenden Stelle
                ausgewiesen.Zusätzlich zu der EU-Verordnung gelten auch noch
                nationale Gesetze: In Österreich ist dies das Bundesgesetz zum
                Schutz natürlicher Personen bei der Verarbeitung
                personenbezogener Daten (Datenschutzgesetz), kurz DSG.In
                Deutschland gilt das Bundesdatenschutzgesetz, kurz BDSG.Sofern
                weitere regionale oder nationale Gesetze zur Anwendung kommen,
                informieren wir Sie in den folgenden Abschnitten darüber.{" "}
              </p>
              <h4
                id="contact"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8 "
              >
                5. Kontaktdaten
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                ‍Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung
                personenbezogener Daten haben, finden Sie nachfolgend die
                Kontaktdaten der verantwortlichen Person bzw. Stelle: <br />
                Laurenz Honauer IT <br />
                Laurenz Honauer <br />
                Kalvarienberggasse 4/7 1170 Wien, Österreich <br />
                Vertretungsberechtigt: Mathias Nahringbauer <br />
                E-Mail: info@superlight.me <br />
                Telefon: +43 676 411 77 13 <br />
                Impressum: https://www.superlight.me/transparency/imprint
              </p>
              <h4
                id="storage"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8"
              >
                6. Speicherdauer
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Dass wir personenbezogene Daten nur so lange speichern, wie es
                für die Bereitstellung unserer Dienstleistungen und Produkte
                unbedingt notwendig ist, gilt als generelles Kriterium bei uns.
                Das bedeutet, dass wir personenbezogene Daten löschen, sobald
                der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In
                einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte
                Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern,
                zum Beispiel zu Zwecken der Buchführung.Sollten Sie die Löschung
                Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung
                widerrufen, werden die Daten so rasch wie möglich und soweit
                keine Pflicht zur Speicherung besteht, gelöscht.Über die
                konkrete Dauer der jeweiligen Datenverarbeitung informieren wir
                Sie weiter unten, sofern wir weitere Informationen dazu haben.
              </p>
              <h4
                id="dsgvo"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8"
              >
                7. Datenschutzgrundverordnung
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die
                folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen
                und transparenten Verarbeitung von Daten kommt:Sie haben laut
                Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von
                Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf
                eine Kopie der Daten zu erhalten und die folgenden Informationen
                zu erfahren:zu welchem Zweck wir die Verarbeitung
                durchführen;die Kategorien, also die Arten von Daten, die
                verarbeitet werden;wer diese Daten erhält und wenn die Daten an
                Drittländer übermittelt werden, wie die Sicherheit garantiert
                werden kann;wie lange die Daten gespeichert werden;das Bestehen
                des Rechts auf Berichtigung, Löschung oder Einschränkung der
                Verarbeitung und dem Widerspruchsrecht gegen die
                Verarbeitung;dass Sie sich bei einer Aufsichtsbehörde beschweren
                können (Links zu diesen Behörden finden Sie weiter unten);die
                Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben
                haben;ob Profiling durchgeführt wird, ob also Daten automatisch
                ausgewertet werden, um zu einem persönlichen Profil von Ihnen zu
                gelangen.Sie haben laut Artikel 16 DSGVO ein Recht auf
                Berichtigung der Daten, was bedeutet, dass wir Daten richtig
                stellen müssen, falls Sie Fehler finden.Sie haben laut Artikel
                17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“),
                was konkret bedeutet, dass Sie die Löschung Ihrer Daten
                verlangen dürfen.Sie haben laut Artikel 18 DSGVO das Recht auf
                Einschränkung der Verarbeitung, was bedeutet, dass wir die Daten
                nur mehr speichern dürfen aber nicht weiter verwenden.Sie haben
                laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was
                bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem
                gängigen Format zur Verfügung stellen.Sie haben laut Artikel 21
                DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine
                Änderung der Verarbeitung mit sich bringt.Wenn die Verarbeitung
                Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse,
                Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f
                (berechtigtes Interesse) basiert, können Sie gegen die
                Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch
                wie möglich, ob wir diesem Widerspruch rechtlich nachkommen
                können.Werden Daten verwendet, um Direktwerbung zu betreiben,
                können Sie jederzeit gegen diese Art der Datenverarbeitung
                widersprechen. Wir dürfen Ihre Daten danach nicht mehr für
                Direktmarketing verwenden.Werden Daten verwendet, um Profiling
                zu betreiben, können Sie jederzeit gegen diese Art der
                Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach
                nicht mehr für Profiling verwenden.Sie haben laut Artikel 22
                DSGVO unter Umständen das Recht, nicht einer ausschließlich auf
                einer automatisierten Verarbeitung (zum Beispiel Profiling)
                beruhenden Entscheidung unterworfen zu werden.Sie haben laut
                Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können
                sich jederzeit bei der Datenschutzbehörde beschweren, wenn Sie
                der Meinung sind, dass die Datenverarbeitung von
                personenbezogenen Daten gegen die DSGVO verstößt.
                <br /> ‍Kurz gesagt: Sie haben Rechte – zögern Sie nicht, die
                oben gelistete verantwortliche Stelle bei uns zu kontaktieren!
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
                Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
                Ansprüche in sonst einer Weise verletzt worden sind, können Sie
                sich bei der Aufsichtsbehörde beschweren. Diese ist für
                Österreich die Datenschutzbehörde, deren Website Sie unter
                https://www.dsb.gv.at/ finden. In Deutschland gibt es für jedes
                Bundesland einen Datenschutzbeauftragten. Für nähere
                Informationen können Sie sich an die Bundesbeauftragte für den
                Datenschutz und die Informationsfreiheit (BfDI) wenden. ‍<br />{" "}
                Für unser Unternehmen ist die folgende lokale Datenschutzbehörde
                zuständig:
                <br /> ‍Österreich <br />
                Datenschutzbehörde Leiterin: Mag. Dr. Andrea Jelinek <br />
                Adresse: Barichgasse 40-42, 1030 Wien
                <br /> Telefonnr.: +43 1 52 152-0 <br />
                E-Mail-Adresse: dsb@dsb.gv.at
                <br />
                Website: https://www.dsb.gv.at/
              </p>
              <h4
                id="webhosting"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8"
              >
                8. Webhosting
              </h4>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.1 - Was ist Webhosting?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Wenn Sie heutzutage Websites besuchen, werden gewisse
                Informationen – auch personenbezogene Daten – automatisch
                erstellt und gespeichert, so auch auf dieser Website. Diese
                Daten sollten möglichst sparsam und nur mit Begründung
                verarbeitet werden. Mit Website meinen wir übrigens die
                Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der
                Startseite (Homepage) bis hin zur aller letzten Unterseite (wie
                dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de
                oder musterbeispiel.com.Wenn Sie eine Website auf einem
                Computer, Tablet oder Smartphone ansehen möchten, verwenden Sie
                dafür ein Programm, das sich Webbrowser nennt. Sie kennen
                vermutlich einige Webbrowser beim Namen: Google Chrome,
                Microsoft Edge, Mozilla Firefox und Apple Safari. Wir sagen kurz
                Browser oder Webbrowser dazu.Um die Website anzuzeigen, muss
                sich der Browser zu einem anderen Computer verbinden, wo der
                Code der Website gespeichert ist: dem Webserver. Der Betrieb
                eines Webservers ist eine komplizierte und aufwendige Aufgabe,
                weswegen dies in der Regel von professionellen Anbietern, den
                Providern, übernommen wird. Diese bieten Webhosting an und
                sorgen damit für eine verlässliche und fehlerfreie Speicherung
                der Daten von Websites. Eine ganze Menge Fachbegriffe, aber
                bitte bleiben Sie dran, es wird noch besser!Bei der
                Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop,
                Laptop, Tablet oder Smartphone) und während der Datenübertragung
                zu und vom Webserver kann es zu einer Verarbeitung
                personenbezogener Daten kommen. Einerseits speichert Ihr
                Computer Daten, andererseits muss auch der Webserver Daten eine
                Zeit lang speichern, um einen ordentlichen Betrieb zu
                gewährleisten.Ein Bild sagt mehr als tausend Worte, daher zeigt
                folgende Grafik zur Veranschaulichung das Zusammenspiel zwischen
                Browser, dem Internet und dem Hosting-Provider.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.2 - Warum verarbeiten wir personenbezogene Daten?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Die Zwecke der Datenverarbeitung sind: Professionelles Hosting
                der Website und Absicherung des Betriebs zur Aufrechterhaltung
                der Betriebs- und IT-Sicherheit Anonyme Auswertung des
                Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf.
                zur Strafverfolgung bzw. Verfolgung von Ansprüchen.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.3 - Welche Daten werden verarbeitet?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Auch während Sie unsere Website jetzt gerade besuchen, speichert
                unser Webserver, das ist der Computer auf dem diese Webseite
                gespeichert ist, in der Regel automatisch Daten wie die
                komplette Internetadresse (URL) der aufgerufenen Webseite
                Browser und Browserversion (z. B. Chrome 87) das verwendete
                Betriebssystem (z. B. Windows 10) die Adresse (URL) der zuvor
                besuchten Seite (Referrer URL) den Hostnamen und die IP-Adresse
                des Geräts von welchem aus zugegriffen wird Datum und Uhrzeit in
                Dateien, den sogenannten Webserver-Logfiles.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.4 - Wie lange werden Daten gespeichert?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                In der Regel werden die oben genannten Daten zwei Wochen
                gespeichert und danach automatisch gelöscht. Wir geben diese
                Daten nicht weiter, können jedoch nicht ausschließen, dass diese
                Daten beim Vorliegen von rechtswidrigem Verhalten von Behörden
                eingesehen werden. ‍Kurz gesagt: Ihr Besuch wird durch unseren
                Provider (Firma, die unsere Website auf speziellen Computern
                (Servern) laufen lässt), protokolliert, aber wir geben Ihre
                Daten nicht ohne Zustimmung weiter!
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.5 - Rechtsgrundlage
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im
                Rahmen des Webhosting ergibt sich aus Art. 6 Abs. 1 lit. f DSGVO
                (Wahrung der berechtigten Interessen), denn die Nutzung von
                professionellem Hosting bei einem Provider ist notwendig, um das
                Unternehmen im Internet sicher und nutzerfreundlich präsentieren
                und Angriffe und Forderungen hieraus gegebenenfalls verfolgen zu
                können.Zwischen uns und dem Hosting-Provider besteht in der
                Regel ein Vertrag über die Auftragsverarbeitung gemäß Art. 28 f.
                DSGVO, der die Einhaltung von Datenschutz gewährleistet und
                Datensicherheit garantiert.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.6 - 1&1 IONOS Webhosting Datenschutzerklärung
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                ‍Wir nutzen IONOS by 1&1 um unsere Website zu hosten. In
                Deutschland hat die 1&1 IONOS SE ihren Sitz in Elgendorfer Str.
                57, 56410 Montabaur, in Österreich finden Sie die 1&1 IONOS SE
                in der Gumpendorfer Straße 142/PF 266, 1060 Wien. IONOS bietet
                folgende Leistungen rund um Webhosting an: Domain, Website &
                Shop, Hosting & WordPress, Marketing, E-Mail & Office, IONOS
                Cloud und Server.Wie im Abschnitt “Automatische
                Datenspeicherung” erläutert, speichern Webserver, wie die von
                IONOS, Daten jedes Websitebesuchs ab.Wenn Sie mehr über den
                Datenschutz für IONOS Website erfahren möchten, besuchen Sie
                bitte die{" "}
                <Link
                  href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/?tid=112387616"
                  target="_blank"
                  className="underline"
                >
                  Datenschutzerklärung auf ionos.de
                </Link>
                .
              </p>
              <h4
                id="email"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8"
              >
                9. E-Mail Marketing
              </h4>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.1 - Was ist E-Mail Marketing?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Um Sie stets auf dem Laufenden zu halten, nutzen wir auch die
                Möglichkeit des E-Mail-Marketings. Dabei werden, sofern Sie dem
                Empfang unserer E-Mails bzw. Newsletter zugestimmt haben, auch
                Daten von Ihnen verarbeitet und gespeichert. E-Mail-Marketing
                ist ein Teilbereich des Online-Marketings. Dabei werden
                Neuigkeiten oder allgemeine Informationen über ein Unternehmen,
                Produkte oder Dienstleistungen per E-Mail an eine bestimmte
                Gruppe an Menschen, die sich dafür interessieren, gesendet.Wenn
                Sie an unserem E-Mail-Marketing (meist per Newsletter)
                teilnehmen wollen, müssen Sie sich im Normalfall einfach nur mit
                Ihrer E-Mail-Adresse anmelden. Dafür füllen Sie ein
                Online-Formular aus und senden es ab. Es kann aber auch
                vorkommen, dass wir Sie etwa um Ihre Anrede und Ihren Namen
                bitten, damit wir Sie auch persönlich anschreiben
                können.Grundsätzlich funktioniert das Anmelden zu Newslettern
                mit Hilfe des sogenannten „Double-Opt-In-Verfahrens“. Nachdem
                Sie sich für unseren Newsletter auf unserer Website angemeldet
                haben, bekommen Sie eine E-Mail, über die Sie die
                Newsletter-Anmeldung bestätigen. So wird sichergestellt, dass
                Ihnen die E-Mail-Adresse gehört und sich niemand mit einer
                fremden E-Mail-Adresse angemeldet hat. Wir oder ein von uns
                verwendetes Benachrichtigungs-Tool protokolliert jede einzelne
                Anmeldung. Dies ist nötig, damit wir den rechtlich korrekten
                Anmeldevorgang auch nachweisen können. Dabei wird in der Regel
                der Zeitpunkt der Anmeldung, der Zeitpunkt der
                Anmeldebestätigung und Ihre IP-Adresse gespeichert. Zusätzlich
                wird auch protokolliert, wenn Sie Änderungen Ihrer gespeicherten
                Daten vornehmen.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.2 - Warum nutzen wir E-Mail Marketing?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Wir wollen natürlich mit Ihnen in Kontakt bleiben und Ihnen
                stets die wichtigsten Neuigkeiten über unser Unternehmen
                präsentieren. Dafür nutzen wir unter anderem E-Mail-Marketing –
                oft auch nur “Newsletter” bezeichnet – als wesentlichen
                Bestandteil unseres Online-Marketings. Sofern Sie sich damit
                einverstanden erklären oder es gesetzlich erlaubt ist, schicken
                wir Ihnen Newsletter, System-E-Mails oder andere
                Benachrichtigungen per E-Mail. Wenn wir im folgenden Text den
                Begriff „Newsletter“ verwenden, meinen wir damit hauptsächlich
                regelmäßig versandte E-Mails. Natürlich wollen wir Sie mit
                unseren Newsletter in keiner Weise belästigen. Darum sind wir
                wirklich stets bemüht, nur relevante und interessante Inhalte zu
                bieten. So erfahren Sie etwa mehr über unser Unternehmen, unsere
                Leistungen oder Produkte. Da wir unsere Angebote auch immer
                verbessern, erfahren Sie über unseren Newsletter auch immer,
                wenn es Neuigkeiten gibt oder wir gerade spezielle, lukrative
                Aktionen anbieten. Sofern wir einen Dienstleister, der ein
                professionelles Versand-Tool anbietet, für unser
                E-Mail-Marketing beauftragen, machen wir das, um Ihnen schnelle
                und sichere Newsletter bieten zu können. Zweck unseres
                E-Mail-Marketings ist grundsätzlich, Sie über neue Angebote zu
                informieren und auch unseren unternehmerischen Zielen näher zu
                kommen.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.3 - Welche Daten werden verarbeitet?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Wenn Sie über unsere Website Abonnent unseres Newsletters
                werden, bestätigen Sie per E-Mail die Mitgliedschaft in einer
                E-Mail-Liste. Neben IP-Adresse und E-Mail-Adresse können auch
                Ihre Anrede, Ihr Name, Ihre Adresse und Ihre Telefonnummer
                gespeichert werden. Allerdings nur, wenn Sie dieser
                Datenspeicherungen zustimmen. Die als solche markierten Daten
                sind notwendig, damit Sie an dem angebotenen Dienst teilnehmen
                können. Die Angabe ist freiwillig, die Nichtangabe führt jedoch
                dazu, dass Sie den Dienst nicht nutzen können. Zusätzlich können
                etwa auch Informationen zu Ihrem Gerät oder zu Ihren bevorzugten
                Inhalten auf unserer Website gespeichert werden. Mehr zur
                Speicherung von Daten, wenn Sie eine Website besuchen, finden
                Sie im Abschnitt “Automatische Datenspeicherung”. Ihre
                Einwilligungserklärung zeichnen wir auf, damit wir stets
                nachweisen können, dass dieser unseren Gesetzen entspricht.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.4 - Dauer der Datenverarbeitung
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Wenn Sie Ihre E-Mail-Adresse aus unserem
                E-Mail/Newsletter-Verteiler austragen, dürfen wir Ihre Adresse
                bis zu drei Jahren auf Grundlage unserer berechtigten Interessen
                speichern, damit wir Ihre damalige Einwilligung noch nachweisen
                können. Verarbeiten dürfen wir diese Daten nur, wenn wir uns
                gegen etwaige Ansprüche wehren müssen.Wenn Sie allerdings
                bestätigen, dass Sie uns die Einwilligung zur
                Newsletter-Anmeldung gegeben haben, können Sie jederzeit einen
                individuellen Löschantrag stellen. Widersprechen Sie der
                Einwilligung dauerhaft, behalten wir uns das Recht vor, Ihre
                E-Mail-Adresse in einer Sperrliste zu speichern. Solange Sie
                freiwillig unseren Newsletter abonniert haben, solange behalten
                wir selbstverständlich auch Ihre E-Mail-Adresse.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.5 - Widerspruchsrecht
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Sie haben jederzeit die Möglichkeit Ihre Newsletter-Anmeldung zu
                kündigen. Dafür müssen Sie lediglich Ihre Einwilligung zur
                Newsletter-Anmeldung widerrufen. Das dauert im Normalfall nur
                wenige Sekunden bzw. einen oder zwei Klicks. Meistens finden Sie
                direkt am Ende jeder E-Mail einen Link, um das
                Newsletter-Abonnement zu kündigen. Wenn der Link im Newsletter
                wirklich nicht zu finden ist, kontaktieren Sie uns bitte per
                Mail und wir werden Ihr Newsletter-Abo unverzüglich kündigen.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.6 - Rechtsgrundlage
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Das Versenden unseres Newsletters erfolgt auf Grundlage Ihrer
                Einwilligung (Artikel 6 Abs. 1 lit. a DSGVO). Das heißt, wir
                dürfen Ihnen nur dann einen Newsletter schicken, wenn Sie sich
                zuvor aktiv dafür angemeldet haben. Gegebenenfalls können wir
                Ihnen auch Werbenachrichten senden, sofern Sie unser Kunde
                geworden sind und der Verwendung Ihrer E-Mailadresse für
                Direktwerbung nicht widersprochen haben.Informationen zu
                speziellen E-Mail-Marketing Diensten und wie diese
                personenbezogene Daten verarbeiten, erfahren Sie – sofern
                vorhanden – in den folgenden Abschnitten.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.7 - Mailjet Datenschutzerklärung
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Wir verwenden auf unserer Website Mailjet, ein Dienst für unser
                E-Mail-Marketing. Dienstanbieter ist das deutsche Unternehmen
                Mailjet GmbH, Alt-Moabit 2, 10557 Berlin, Deutschland.Mehr über
                die Daten, die durch die Verwendung von Mailjet verarbeitet
                werden, erfahren Sie in der{" "}
                <Link
                  href="https://www.mailjet.com/de/rechtliches/datenschutzerklaerung/"
                  target="_blank"
                  className="underline"
                >
                  Privacy Policy von MailJet
                </Link>
                .
              </p>
              <h4
                id="cloud"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8"
              >
                10. Cloud Dienste
              </h4>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.1 - Was sind Cloud-Dienste?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Cloud-Dienste stellen uns als Websitebetreiber Speicherplatz und
                Rechenleistung über das Internet zur Verfügung. Über das
                Internet können Daten an ein externes System übertragen,
                verarbeitet und gespeichert werden. Die Verwaltung dieser Daten
                übernimmt der entsprechende Cloud-Anbieter. Je nach Anforderung
                kann eine einzelne Person oder auch ein Unternehmen die
                Speicherplatzgröße oder Rechenleistung wählen. Zugegriffen wird
                auf Cloud-Speicher über eine API oder über Speicherprotokolle.
                API steht für Application Programming Interface und gemeint ist
                damit eine Programmierschnittstelle, die Software- mit
                Hardwarekomponenten verbindet.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.2 - Warum verwenden wir Cloud-Dienste?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Cloud-Dienste stellen uns als Websitebetreiber Speicherplatz und
                Rechenleistung über das Internet zur Verfügung. Über das
                Internet können Daten an ein externes System übertragen,
                verarbeitet und gespeichert werden. Die Verwaltung dieser Daten
                übernimmt der entsprechende Cloud-Anbieter. Je nach Anforderung
                kann eine einzelne Person oder auch ein Unternehmen die
                Speicherplatzgröße oder Rechenleistung wählen. Zugegriffen wird
                auf Cloud-Speicher über eine API oder über Speicherprotokolle.
                API steht für Application Programming Interface und gemeint ist
                damit eine Programmierschnittstelle, die Software- mit
                Hardwarekomponenten verbindet.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.3 - Welche Daten werden durch Cloud-Dienste verarbeitet?
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Viele von uns in der Cloud gespeicherten Daten haben keinen
                Personenbezug, einige Daten zählen jedoch, nach Definition der
                DSGVO, zu personenbezogenen Daten. Häufig handelt es sich um
                Kundendaten wie Name, Adresse, IP-Adresse oder Telefonnummer
                oder um technische Gerätinformationen. In der Cloud können des
                Weiteren auch Videos, Bilder und Audiodateien gespeichert
                werden. Wie die Daten genau erhoben und gespeichert werden,
                hängt vom jeweiligen Dienst ab. Wir versuchen nur Dienste zu
                nutzen, die sehr vertrauenswürdig und professionell mit den
                Daten umgehen. Grundsätzlich haben die Dienste, wie etwa Amazon
                Drive, Zugriff auf die gespeicherten Dateien, um ihren eigenen
                Service entsprechend anbieten zu können. Dafür benötigen die
                Dienste allerdings Genehmigungen wie beispielsweise das Recht
                Dateien wegen Sicherheitsaspekten zu kopieren. Diese Daten
                werden im Rahmen der Services und unter Einhaltung der geltenden
                Gesetze verarbeitet und verwaltet. Dazu zählt auch bei
                US-amerikanischen Anbietern (über die Standardvertragsklauseln)
                die DSGVO. Diese Cloud-Dienste arbeiten in einigen Fällen auch
                mit Drittanbietern zusammen, die unter Anweisung und in
                Übereinstimmung mit den Datenschutzrichtlinien und weiteren
                Sicherheitsmaßnahmen Daten verarbeiten können. Wir möchten an
                dieser Stelle nochmals betonen, dass sich alle bekannten
                Cloud-Dienste (wie Amazon Drive, Google Drive oder Microsoft
                Onedrive) das Recht einholen, Zugriff auf gespeicherte Inhalte
                zu haben, um ihr eigenes Service entsprechend anbieten und
                optimieren zu können.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.4 - Dauer der Datenverarbeitung
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Über die Dauer der Datenverarbeitung informieren wir Sie weiter
                unten, sofern wir weitere Informationen dazu haben. Im
                Allgemeinen speichern Cloud-Dienste Daten, bis Sie oder wir die
                Datenspeicherung widerrufen bzw. die Daten wieder löschen.
                Generell werden personenbezogene Daten nur so lange gespeichert,
                wie es für die Bereitstellung der Dienstleistungen unbedingt
                notwendig ist. Ein endgültiges Datenlöschen aus der Cloud kann
                allerdings einige Monate dauern. Das ist der Fall, weil die
                Daten meist nicht nur auf einem Server gespeichert sind, sondern
                auf verschiedenen Servern aufgeteilt werden.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.5 - Widerspruchsrecht
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Sie haben auch jederzeit das Recht und die Möglichkeit Ihre
                Einwilligung zur Datenspeicherung in einer Cloud zu widerrufen.
                Falls Cookies verwendet werden, haben Sie auch hier ein
                Widerrufsrecht. Das funktioniert entweder über unser
                Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum
                Bespiel können Sie auch die Datenerfassung durch Cookies
                verhindern, indem Sie in Ihrem Browser die Cookies verwalten,
                deaktivieren oder löschen. Wir empfehlen Ihnen auch unsere
                allgemeine Datenschutzerklärung über Cookies. Um zu erfahren,
                welche Daten von Ihnen genau gespeichert und verarbeitet werden,
                sollten Sie die Datenschutzerklärungen der jeweiligen
                Cloud-Anbieter durchlesen.{" "}
                <Link
                  href="https://privacy.microsoft.com/en-us/privacystatement"
                  target="_blank"
                  className="underline"
                >
                  Privacy - Microsoft
                </Link>
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.6 - Rechtsgrundlage
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Wir setzen Cloud-Dienste hauptsächlich auf Grundlage unserer
                berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) an einem
                guten Sicherheits- und Speichersystem ein.Bestimmte
                Verarbeitungen, insbesondere der Einsatz von Cookies sowie die
                Nutzung von Speicherfunktionen bedürfen Ihrer Einwilligung. Wenn
                Sie eingewilligt haben, dass Daten von Ihnen bei Cloud-Diensten
                verarbeitet und gespeichert werden können, gilt diese
                Einwilligung als Rechtsgrundlage der Datenverarbeitung (Art. 6
                Abs. 1 lit. a DSGVO). Die meisten von uns verwendeten Dienste
                setzen Cookies in Ihrem Browser, um Daten zu speichern. Darum
                empfehlen wir Ihnen, unseren Datenschutztext über Cookies genau
                durchzulesen und die Datenschutzerklärung oder die
                Cookie-Richtlinien des jeweiligen Dienstanbieters
                anzusehen.Informationen zu speziellen Tools erfahren Sie –
                sofern vorhanden – in den folgenden Abschnitten.{" "}
              </p>
              <h4
                id="terms"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mt-12 mb-8"
              >
                11. Begriffserklärung
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Wir sind stets bemüht unsere Datenschutzerklärung so klar und
                verständlich wie möglich zu verfassen. Besonders bei technischen
                und rechtlichen Themen ist das allerdings nicht immer ganz
                einfach. Es macht oft Sinn juristische Begriffe (wie z. B.
                personenbezogene Daten) oder bestimmte technische Ausdrücke (wie
                z. B. Cookies, IP-Adresse) zu verwenden. Wir möchte diese aber
                nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine
                alphabetische Liste von wichtigen verwendeten Begriffen, auf die
                wir in der bisherigen Datenschutzerklärung vielleicht noch nicht
                ausreichend eingegangen sind. Falls diese Begriffe der DSGVO
                entnommen wurden und es sich um Begriffsbestimmungen handelt,
                werden wir hier auch die DSGVO-Texte anführen und gegebenenfalls
                noch eigene Erläuterungen hinzufügen.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                11.1 - Einwilligung
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Begriffsbestimmung nach Artikel 4 der DSGVO ‍Im Sinne dieser
                Verordnung bezeichnet der Ausdruck:„Einwilligung“ der
                betroffenen Person jede freiwillig für den bestimmten Fall, in
                informierter Weise und unmissverständlich abgegebene
                Willensbekundung in Form einer Erklärung oder einer sonstigen
                eindeutigen bestätigenden Handlung, mit der die betroffene
                Person zu verstehen gibt, dass sie mit der Verarbeitung der sie
                betreffenden personenbezogenen Daten einverstanden ist;
                ‍Erläuterung: In der Regel erfolgt bei Websites eine solche
                Einwilligung über ein Cookie-Consent-Tool. Sie kennen das
                bestimmt. Immer wenn Sie erstmals eine Website besuchen, werden
                Sie meist über einen Banner gefragt, ob Sie der
                Datenverarbeitung zustimmen bzw. einwilligen. Meist können Sie
                auch individuelle Einstellungen treffen und so selbst
                entscheiden, welche Datenverarbeitung Sie erlauben und welche
                nicht. Wenn Sie nicht einwilligen, dürfen auch keine
                personenbezogene Daten von Ihnen verarbeitet werden.
                Grundsätzlich kann eine Einwilligung natürlich auch schriftlich,
                also nicht über ein Tool, erfolgen.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                11.2 - Personenbezogene Daten
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Begriffsbestimmung nach Artikel 4 der DSGVO Im Sinne dieser
                Verordnung bezeichnet der Ausdruck:„personenbezogene Daten“ alle
                Informationen, die sich auf eine identifizierte oder
                identifizierbare natürliche Person (im Folgenden „betroffene
                Person“) beziehen; als identifizierbar wird eine natürliche
                Person angesehen, die direkt oder indirekt, insbesondere mittels
                Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer,
                zu Standortdaten, zu einer Online-Kennung oder zu einem oder
                mehreren besonderen Merkmalen, die Ausdruck der physischen,
                physiologischen, genetischen, psychischen, wirtschaftlichen,
                kulturellen oder sozialen Identität dieser natürlichen Person
                sind, identifiziert werden kann; Erläuterung: Personenbezogene
                Daten sind also all jene Daten, die Sie als Person
                identifizieren können. Das sind in der Regel Daten wie etwa:
                Name, Adresse, E-Mail-Adresse, Post-Anschrift, Telefonnummer,
                Geburtsdatum, Kennnummern wie Sozialversicherungsnummer,
                Steueridentifikationsnummer, Personalausweisnummer oder
                Matrikelnummer, Bankdaten wie Kontonummer, Kreditinformationen,
                Kontostände uvm.Laut Europäischem Gerichtshof (EuGH) zählt auch
                Ihre IP-Adresse zu den personenbezogenen Daten. IT-Experten
                können anhand Ihrer IP-Adresse zumindest den ungefähren Standort
                Ihres Geräts und in weiterer Folge Sie als Anschlussinhabers
                feststellen. Daher benötigt auch das Speichern einer IP-Adresse
                eine Rechtsgrundlage im Sinne der DSGVO. Es gibt auch noch
                sogenannte „besondere Kategorien“ der personenbezogenen Daten,
                die auch besonders schützenswert sind. Dazu zählen: rassische
                und ethnische Herkunft, politische Meinungenreligiöse bzw.
                weltanschauliche Überzeugungen, die
                Gewerkschaftszugehörigkeitgenetische, Daten wie beispielsweise
                Daten, die aus Blut- oder Speichelproben entnommen werden,
                biometrische Daten (das sind Informationen zu psychischen,
                körperlichen oder verhaltenstypischen Merkmalen, die eine Person
                identifizieren können), Gesundheitsdaten, Daten zur sexuellen
                Orientierung oder zum Sexualleben.
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                11.3 - Profiling
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                Begriffsbestimmung nach Artikel 4 der DSGVO ‍Im Sinne dieser
                Verordnung bezeichnet der Ausdruck:„Profiling“ jede Art der
                automatisierten Verarbeitung personenbezogener Daten, die darin
                besteht, dass diese personenbezogenen Daten verwendet werden, um
                bestimmte persönliche Aspekte, die sich auf eine natürliche
                Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich
                Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche
                Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
                Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu
                analysieren oder vorherzusagen; ‍Erläuterung: Beim Profiling
                werden verschiedene Informationen über eine Person
                zusammengetragen, um daraus mehr über diese Person zu erfahren.
                Im Webbereich wird Profiling häufig für Werbezwecke oder auch
                für Bonitätsprüfungen angewandt. Web- bzw. Werbeanalyseprogramme
                sammeln zum Beispiel Daten über Ihre Verhalten und Ihre
                Interessen auf einer Website. Daraus ergibt sich ein spezielles
                Userprofil, mit dessen Hilfe Werbung gezielt an eine Zielgruppe
                ausgespielt werden kann.
              </p>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                <br />
                <br />
                Alle Texte sind urheberrechtlich geschützt.
                <br />
                Quelle: Erstellt mit dem{" "}
                <Link
                  href="https://www.adsimple.at/datenschutz-generator/"
                  target="_blank"
                  className="underline"
                >
                  Datenschutz Generator von AdSimple
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterLight />
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default Privacy;
