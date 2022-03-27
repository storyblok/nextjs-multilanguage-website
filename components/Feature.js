import { storyblokEditable } from "@storyblok/react";
import DynamicIcon from "./icons/DynamicIcon";

const Feature = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col items-center"
    >
      <DynamicIcon type={blok.icon} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl my-4">{blok.name}</div>
        <p className="text-base text-gray-600">{blok.description}</p>
      </div>
    </div>
  );
};

export default Feature;
