import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="bg-white w-full"
    >
      <div className="container mx-auto py-12">{render(blok.text)}</div>
    </div>
  );
};

export default Text;
