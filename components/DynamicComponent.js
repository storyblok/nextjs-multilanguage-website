import Teaser from './Teaser';
import Feature from './Feature';
import FeaturedPosts from './FeaturedPosts';
import Grid from './Grid';
import Placeholder from './Placeholder';

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  'featured-posts': FeaturedPosts,
};

const DynamicComponent = ({ blok, language }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return <Component blok={blok} language={language} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
