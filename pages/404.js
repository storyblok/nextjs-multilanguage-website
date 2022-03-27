import Layout from "../components/Layout";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

export default function Page404({ locale, locales, defaultLocale }) {
  const storyLoaded = useStoryblokState(null, {
    resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
    language: locale,
  });

  let content = <h1>Not found</h1>;

  if (storyLoaded && storyLoaded.content) {
    content = <StoryblokComponent blok={storyLoaded.content} />;
  }

  return (
    <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}>
      {content}
    </Layout>
  );
}

export async function getStaticProps({ locale, locales, defaultLocale }) {
  return {
    props: {
      locale,
      locales,
      defaultLocale,
    },
  };
}
