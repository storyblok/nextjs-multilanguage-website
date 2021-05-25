import { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "YOUR_PREVIEW_TOKEN",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export function useStoryblok(originalStory, preview, locale) {
  let [story, setStory] = useState(originalStory);

  // adds the events for updating the visual editor
  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#initializing-the-storyblok-js-bridge
  function initEventListeners() {
    const { StoryblokBridge } = window
    if (typeof StoryblokBridge !== "undefined") {
      // initialize the bridge with your token
      const storyblokInstance = new StoryblokBridge({
        resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
        language: locale,
      });

      // reload on Next.js page on save or publish event in the Visual Editor
      storyblokInstance.on(["change", "published"], () =>
        location.reload(true)
      );

      // live update the story on input events
      storyblokInstance.on("input", (event) => {
        if (story && event.story._uid === story._uid) {
          setStory(event.story);
        }
      });

      storyblokInstance.on('enterEditmode', (event) => {
        // loading the draft version on initial enter of editor
        Storyblok
          .get(`cdn/stories/${event.storyId}`, {
            version: 'draft',
            resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
            language: locale,
          })
          .then(({ data }) => {
            if(data.story) {
              setStory(data.story)
            }
          })
          .catch((error) => {
            console.log(error);
          }) 
      }) 
    }
  }

  // appends the bridge script tag to our document
  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#installing-the-storyblok-js-bridge
  function addBridge(callback) {
    // check if the script is already present
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//app.storyblok.com/f/storyblok-v2-latest.js";
      script.id = "storyblokBridge";
      document.body.appendChild(script);
      script.onload = () => {
        // once the scrip is loaded, init the event listeners
        callback();
      };
    } else {
      callback();
    }
  }

  useEffect(() => {
      // only load inside preview mode
      if(preview) {
        // first load the bridge, then initialize the event listeners
        addBridge(initEventListeners);
      } 
  }, []);

  return story;
}

export default Storyblok;