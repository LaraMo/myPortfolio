import { Link } from "@/components/atoms/Link";
import { Typography } from "@/components/atoms/Typography";
import { AccordionCard, AccordionCardGroup } from "@/components/molecules/AccordionCard";
import { Article } from "@/components/molecules/Article";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button/buttonVariants";
import type { PortfolioMainSections } from "@/content/portfolioContent";
import { classNames } from "@/lib/utils/classNames/classNames";

export type PortfolioAccordionSectionsProps = {
  sections: PortfolioMainSections;
};

export const PortfolioAccordionSections = ({ sections }: PortfolioAccordionSectionsProps) => {
  const { intro, skills, work, articles } = sections;

  return (
    <div className="mx-auto max-w-4xl px-6 pb-20">
      <AccordionCardGroup>
        <AccordionCard title={intro.title} defaultOpen>
          <Typography variant="body" as="p">
            {intro.emoji} {intro.body}
          </Typography>
        </AccordionCard>

        <AccordionCard title={skills.title}>
          <div className="flex flex-wrap gap-2">
            {skills.items.map((item) => (
              <Badge key={item.label} icon={item.icon} variant="glass" size="lg">
                {item.label}
              </Badge>
            ))}
          </div>
        </AccordionCard>

        <AccordionCard title={work.title}>
          <ExperienceTimeline entries={work.entries} />
        </AccordionCard>

        <AccordionCard title={articles.title}>
          <div className="flex flex-col gap-6">
            <ul
              className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:items-stretch"
              role="list"
            >
              {articles.entries.map((article, index) => (
                <li key={article.href} className="flex min-h-0 min-w-0 flex-col">
                  <Article
                    title={article.title}
                    preview={article.preview}
                    image={{
                      src: article.imageSrc,
                      alt: article.imageAlt,
                    }}
                    publishedAt={article.publishedAt}
                    tags={article.tags}
                    href={article.href}
                    titleId={`article-${index}`}
                    className="min-h-0 flex-1"
                  />
                </li>
              ))}
            </ul>
            <Link
              href={articles.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                buttonVariants({ variant: "outline", size: "default" }),
                "w-full justify-center self-center sm:w-auto",
              )}
            >
              View full catalog here
            </Link>
          </div>
        </AccordionCard>
      </AccordionCardGroup>
    </div>
  );
};
