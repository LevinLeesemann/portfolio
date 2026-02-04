import choosingTheLanguageYouNeedToSpeakEnglish from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/choosing-the-language-you-need-to-speak/english.md?raw"
import choosingTheLanguageYouNeedToSpeakGerman from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/choosing-the-language-you-need-to-speak/german.md?raw"
import conclusionEnglish from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/conclusion/english.md?raw"
import conclusionGerman from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/conclusion/german.md?raw"
import eachPlatformMustThreadItsOwnNeedleEnglish from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/each-platform-must-thread-its-own-needle/english.md?raw"
import eachPlatformMustThreadItsOwnNeedleGerman from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/each-platform-must-thread-its-own-needle/german.md?raw"
import evaluateTheDeepEndFirstEnglish from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/evaluate-the-deep-end-first/english.md?raw"
import evaluateTheDeepEndFirstGerman from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/evaluate-the-deep-end-first/german.md?raw"
import introductionEnglish from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/introduction/english.md?raw"
import introductionGerman from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/introduction/german.md?raw"
import realTimeAudioConstraintsTakeTheWheelEnglish from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/real-time-audio-constraints-take-the-wheel/english.md?raw"
import realTimeAudioConstraintsTakeTheWheelGerman from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/real-time-audio-constraints-take-the-wheel/german.md?raw"
import theBestAbstractionsRevealThemselvesEnglish from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/the-best-abstractions-reveal-themselves/english.md?raw"
import theBestAbstractionsRevealThemselvesGerman from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/the-best-abstractions-reveal-themselves/german.md?raw"
import fiveThingsILearnedDevelopingACrossPlatformAudioEngineThumbnailDark from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/thumbnail/dark.png"
import fiveThingsILearnedDevelopingACrossPlatformAudioEngineThumbnailLight from "../assets/posts/five-things-i-learned-developing-a-cross-platform-audio-engine/thumbnail/light.png"
import type { Post } from "../models/post"

export const posts: Post[] = [
  {
    id: "five-things-i-learned-building-a-cross-platform-audio-engine",
    title: {
      english: "5 Things I Learned Building a Cross-Platform Audio Engine",
      german: "5 Erkenntnisse aus dem Bau einer plattformübergreifenden Audio-Engine",
    },
    datePosted: new Date(2025, 1, 3),
    preview: {
      english: "A deep dive into the practical lessons learned while building a cross-platform real-time audio engine for web, iOS, and Android, covering language choices, threading, and shared abstractions",
      german: "Ein Einblick in die praktischen Lektionen beim Aufbau einer plattformübergreifenden Echtzeit-Audio-Engine für Web, iOS und Android, mit Fokus auf Sprachwahl, Threading und wiederverwendbare Logik",
    },
    sections: [
      {
        id: "introduction",
        title: {
          english: "Introduction",
          german: "Einführung",
        },
        content: {
          english: introductionEnglish,
          german: introductionGerman,
        },
      },
      {
        id: "real-time-audio-constraints-take-the-wheel",
        title: {
          english: "1. Real-Time Audio Constraints Take the Wheel",
          german: "1. Echtzeit-Audio bestimmt das Tempo",
        },
        content: {
          english: realTimeAudioConstraintsTakeTheWheelEnglish,
          german: realTimeAudioConstraintsTakeTheWheelGerman,
        },
      },
      {
        id: "choosing-the-language-you-need-to-speak",
        title: {
          english: "2. Choosing the Right Language Matters",
          german: "2 Die Sprache bestimmt die Möglichkeiten",
        },
        content: {
          english: choosingTheLanguageYouNeedToSpeakEnglish,
          german: choosingTheLanguageYouNeedToSpeakGerman,
        },
      },
      {
        id: "each-platform-must-thread-its-own-needle",
        title: {
          english: "3. Each Platform Must Thread Its Own Needle",
          german: "3. Jede Plattform muss ihr eigenes Nadelöhr finden",
        },
        content: {
          english: eachPlatformMustThreadItsOwnNeedleEnglish,
          german: eachPlatformMustThreadItsOwnNeedleGerman,
        },
      },
      {
        id: "evaluate-the-deep-end-first",
        title: {
          english: "4. Evaluate the Deep End First",
          german: "4. Zuerst den tiefen Sprung wagen",
        },
        content: {
          english: evaluateTheDeepEndFirstEnglish,
          german: evaluateTheDeepEndFirstGerman,
        },
      },
      {
        id: "the-best-abstractions-reveal-themselves",
        title: {
          english: "5. The Best Abstractions Reveal Themselves",
          german: "5. Die besten Abstraktionen zeigen sich von selbst",
        },
        content: {
          english: theBestAbstractionsRevealThemselvesEnglish,
          german: theBestAbstractionsRevealThemselvesGerman,
        },
      },
      {
        id: "conclusion",
        title: {
          english: "Conclusion",
          german: "Fazit",
        },
        content: {
          english: conclusionEnglish,
          german: conclusionGerman,
        },
      },
    ],
    thumbnailUrl: {
      dark: fiveThingsILearnedDevelopingACrossPlatformAudioEngineThumbnailDark,
      light: fiveThingsILearnedDevelopingACrossPlatformAudioEngineThumbnailLight,
    },
  },
].sort((a, b) => b.datePosted.getTime() - a.datePosted.getTime())
