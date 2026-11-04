import Subtitle from "../components/Subtitle"
import SubtitleLink from "../components/SubtitleLink"
import Timeline from "../components/Timeline/Timeline"
import Title from "../components/Title"
import { translations } from "../data/translations"
import { urls } from "../data/urls"
import type { Language } from "../models/language"

type ExperienceProps = {
  language: Language
}

export default function Experience(props: ExperienceProps) {
  return (
    <section id="experience" className="flex flex-col gap-8">
      <Title className="hover:cursor-pointer" onClick={() => window.location.replace("/#experience")}>{translations[props.language].section.experience.title}</Title>
      <Subtitle>
        {translations[props.language].section.experience.subtitle.head} <SubtitleLink label="LinkedIn" url={urls.linkedIn} /> {translations[props.language].section.experience.subtitle.tail}
      </Subtitle>
      <Timeline language={props.language} />
    </section>
  )
}
