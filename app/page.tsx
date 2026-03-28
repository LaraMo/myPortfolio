import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/molecules/Card";
import { Header } from "@/components/molecules/Header";
import { Skill } from "@/components/molecules/Skill";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { portfolioContent } from "@/lib/portfolio-content";

export default function Home() {
  const { header, hero, intro, skills, work, articles, contact, footer } =
    portfolioContent;

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header cvUrl={header.cvUrl} byline={header.byline} />
      <main className="flex-1">
        <Hero
          image={hero.image}
          title={hero.title}
          subtitles={[...hero.subtitles]}
          imageAlt={hero.imageAlt}
        />

        <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-20">
          <Card title={intro.title}>
            <Typography variant="bodyLarge" as="p">
              {intro.emoji} {intro.body}
            </Typography>
          </Card>

          <Card title={skills.title}>
            <div className="flex flex-wrap gap-2">
              {skills.items.map((item) => (
                <Skill key={item.label} label={item.label} icon={item.icon} />
              ))}
            </div>
          </Card>

          <Card title={work.title}>
            <ol className="list-decimal space-y-6 pl-5">
              {work.entries.map((job) => (
                <li key={job.period} className="marker:font-medium">
                  <Typography variant="small" className="text-muted-foreground">
                    {job.period}
                  </Typography>
                  <Typography variant="h4" as="p" className="mt-1">
                    {job.title}{" "}
                    <span className="text-muted-foreground">@ {job.company}</span>
                  </Typography>
                  <Typography variant="body" as="p" className="mt-2">
                    {job.description}
                  </Typography>
                </li>
              ))}
            </ol>
          </Card>

          <Card title={articles.title}>
            <ul className="space-y-4">
              {articles.entries.map((article) => (
                <li key={article.title}>
                  <Typography variant="h5" as="p">
                    {article.title}
                  </Typography>
                  <Typography variant="caption" as="p">
                    {article.ago}
                  </Typography>
                  <Typography variant="small" className="mt-1 text-muted-foreground">
                    {article.tags.map((tag) => `#${tag}`).join(" ")}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="small" className="mt-4 text-muted-foreground">
              Read More — links coming soon.
            </Typography>
          </Card>
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
