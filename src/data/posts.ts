import fiveThingsILearnedDevelopingACrossPlatformAudioEngineThumbnailDark from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/thumbnail/dark.png"
import fiveThingsILearnedDevelopingACrossPlatformAudioEngineThumbnailLight from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/thumbnail/light.png"
import type { Post } from "../models/post"

export const posts: Post[] = [
  {
    id: "audio-engine-part-i",
    title: {
      english: "5 Things I learned Building a Cross-platform Audio Engine",
      german: "Audio-Engine — Teil I",
    },
    datePosted: new Date(2025, 1, 3),
    preview: {
      english: "",
      german: "",
    },
    sections: [],
    thumbnailUrl: {
      dark: fiveThingsILearnedDevelopingACrossPlatformAudioEngineThumbnailDark,
      light: fiveThingsILearnedDevelopingACrossPlatformAudioEngineThumbnailLight,
    },
  },
].sort((a, b) => b.datePosted.getTime() - a.datePosted.getTime())
