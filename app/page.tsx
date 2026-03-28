import { Typography } from "@/components/atoms/Typography";
import {
  AccordionCard,
  AccordionCardGroup,
} from "@/components/molecules/AccordionCard";
import { Header } from "@/components/molecules/Header";
import { Skill } from "@/components/molecules/Skill";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
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

        <div className="mx-auto max-w-4xl px-6 pb-20">
          <AccordionCardGroup>
            <AccordionCard title={intro.title}>
              <Typography variant="bodyLarge" as="p">
                {intro.emoji} {intro.body}
              </Typography>
            </AccordionCard>

            <AccordionCard title={skills.title}>
              <div className="flex flex-wrap gap-2">
                {skills.items.map((item) => (
                  <Skill key={item.label} label={item.label} icon={item.icon} />
                ))}
              </div>
            </AccordionCard>

            <AccordionCard title={work.title}>
              <ExperienceTimeline entries={[...work.entries]} />
            </AccordionCard>

            <AccordionCard title={articles.title}>
              <ul className="space-y-4">
                {articles.entries.map((article) => (
                  <li key={article.title}>
                    <Typography variant="h5" as="p">
                      {article.title}
                    </Typography>
                    <Typography variant="caption" as="p">
                      {article.ago}
                    </Typography>
                    <Typography
                      variant="small"
                      className="mt-1 text-muted-foreground"
                    >
                      {article.tags.map((tag) => `#${tag}`).join(" ")}
                    </Typography>
                  </li>
                ))}
              </ul>
            </AccordionCard>
          </AccordionCardGroup>
        </div>
      </main>
      <Footer
        contact={contact}
        note={footer.note}
        copyrightName={footer.copyrightName}
      />
    </div>
  );
}
