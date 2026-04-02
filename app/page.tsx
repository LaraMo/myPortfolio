import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { PortfolioAccordionSections } from "@/components/organisms/PortfolioAccordionSections";
import { getMediumArticleEntries } from "@/content/mediumArticles";
import { articlesSectionMeta, portfolioContent } from "@/content/portfolioContent";

export default async function Home() {
  const { header, hero, intro, skills, work } = portfolioContent;
  const entries = await getMediumArticleEntries();
  const articles = { ...articlesSectionMeta, entries };

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

        <PortfolioAccordionSections sections={{ intro, skills, work, articles }} />
      </main>
      <Footer />
    </div>
  );
}
