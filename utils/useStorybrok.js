import { useState, useEffect } from 'react';

import StoryblokService from './storyblok-service';

export default function useStoryblok({ initialStory }) {
  const [story, setStory] = useState(initialStory);

  useEffect(() => {
    StoryblokService.initEditor([story, setStory]);
  }, []);

  return { story };
}
