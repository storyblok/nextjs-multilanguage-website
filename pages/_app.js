import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import BlogPost from "../components/BlogPost";
import Feature from "../components/Feature";
import FeaturedPosts from "../components/FeaturedPosts";
import Grid from "../components/Grid";
import Page from "../components/Page";
import PostsList from "../components/PostsList";
import Teaser from "../components/Teaser";
import Text from "../components/Text";

const components = {
  feature: Feature,
  "featured-posts": FeaturedPosts,
  grid: Grid,
  page: Page,
  post: BlogPost,
  "selected-posts": PostsList,
  teaser: Teaser,
  text: Text,
};

storyblokInit({
  accessToken: "YOUR_PREVIEW_TOKEN",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
