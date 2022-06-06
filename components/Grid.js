import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => (
  <ul {...storyblokEditable(blok)} className="flex py-8 mb-6 container mx-auto">
    {blok.columns.map((nestedBlok) => (
      <li key={nestedBlok._uid} className="flex-auto px-6">
        <StoryblokComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
