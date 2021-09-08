import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const PostLists = ({ blok }) => {
  return (
    <ul
      {...sbEditable(blok)}
      key={blok._uid}
      className="mx-auto w-full flex flex-col items-center"
    >
      {blok.posts.map((post) => {
        const lang = post.lang === "default" ? "/en" : `/${post.lang}`;
        return (
          <li
            key={post.slug}
            className="max-w-4xl w-full px-10 my-4 py-6 rounded-lg shadow-md bg-white"
          >
            <div className="flex justify-between items-center">
              <span className="font-light text-gray-600">
                {`
                    ${new Date(post.created_at).getDay()}.
                    ${new Date(post.created_at).getMonth()}.
                    ${new Date(post.created_at).getFullYear()}`}
              </span>
            </div>
            <div className="mt-2">
              <a
                className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                href={`${lang}/blog/${post.slug}`}
              >
                {post.content.title}
              </a>
              <p className="mt-2 text-gray-600">{post.content.intro}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                className="text-blue-600 hover:underline"
                href={`${lang}/blog/${post.slug}`}
              >
                Read more
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PostLists;
