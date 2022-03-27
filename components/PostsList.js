import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const PostLists = ({ blok }) => {
  return (
    <ul
      {...storyblokEditable(blok)}
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
              <Link href={`${lang}/blog/${post.slug}`}>
                <a className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                  {post.content.title}
                </a>
              </Link>

              <p className="mt-2 text-gray-600">{post.content.intro}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link href={`${lang}/blog/${post.slug}`}>
                <a className="text-blue-600 hover:underline">Read more</a>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PostLists;
