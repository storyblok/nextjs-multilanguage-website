import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} key={blok._uid} className="bg-white w-full">
      <div className="container mx-auto py-12">{render(blok.text)}</div>
    </div>
  );
};

export default Text;
