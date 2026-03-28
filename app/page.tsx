import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { PortfolioAccordionSections } from "@/components/organisms/PortfolioAccordionSections";
import { portfolioContent } from "@/lib/portfolio-content";

export default function Home() {
  const { header, hero, contact, footer, intro, skills, work, articles } =
    portfolioContent;

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header cvUrl={header.cvUrl} />
      <main className="flex-1">
        <Hero
          image={hero.image}
          title={hero.title}
          subtitles={[...hero.subtitles]}
          imageAlt={hero.imageAlt}
        />

        <PortfolioAccordionSections
          sections={{ intro, skills, work, articles }}
        />
      </main>
      <Footer
        contact={contact}
        note={footer.note}
        copyrightName={footer.copyrightName}
      />
    </div>
  );
}
