import Layout from "../components/Layout";

export default function Page404({ locale, locales, defaultLocale }) {
  return (
    <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}>
      <h1>Not found</h1>
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
