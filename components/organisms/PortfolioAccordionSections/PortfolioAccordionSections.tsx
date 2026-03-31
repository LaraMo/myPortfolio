import { Typography } from "@/components/atoms/Typography";
import {
  AccordionCard,
  AccordionCardGroup,
} from "@/components/molecules/AccordionCard";
import { ArticlePreview } from "@/components/molecules/ArticlePreview";
import { Skill } from "@/components/molecules/Skill";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { buttonVariants } from "@/components/ui/button/button-variants";
import { classNames } from "@/libs/utils/classNames/classNames";
import type { PortfolioMainSections } from "@/lib/portfolio-content";

export type PortfolioAccordionSectionsProps = {
  sections: PortfolioMainSections;
};

export const PortfolioAccordionSections = ({
  sections,
}: PortfolioAccordionSectionsProps) => {
  const { intro, skills, work, articles } = sections;

  return (
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
          <div className="flex flex-col gap-6">
            <ul
              className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:items-stretch"
              role="list"
            >
              {articles.entries.map((article, index) => (
                <li
                  key={article.href}
                  className="flex min-h-0 min-w-0 flex-col"
                >
                  <ArticlePreview
                    title={article.title}
                    preview={article.preview}
                    image={{
                      src: article.imageSrc,
                      alt: article.imageAlt,
                    }}
                    publishedAt={article.publishedAt}
                    tags={article.tags}
                    href={article.href}
                    headingLevel={3}
                    titleId={`article-preview-${index}`}
                    density="compact"
                    className="min-h-0 flex-1"
                  />
                </li>
              ))}
            </ul>
            <a
              href={articles.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                buttonVariants({ variant: "outline", size: "default" }),
                "w-full justify-center self-center sm:w-auto"
              )}
            >
              {articles.catalogButtonLabel}
            </a>
          </div>
        </AccordionCard>
      </AccordionCardGroup>
    </div>
  );
};

PortfolioAccordionSections.displayName = "PortfolioAccordionSections";
