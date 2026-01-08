import { useState } from "react"
import Chip from "../Chip"
import ProjectCardLink from "./CardLink"

type ExternalLink = {
  label: string
  url: string
}

type ThumbnailUrl = {
  dark: string
  light: string
}

type ProjectCardProps = {
  accentChipLabels?: string[]
  chipLabels?: string[]
  description: string
  externalLinks: ExternalLink[]
  isDarkModeActive: boolean
  thumbnail: ThumbnailUrl
  title: string
}

export default function ProjectCard(props: ProjectCardProps) {
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false)

  return (
    <article className="flex flex-col gap-6">
      <h1 className="text-text md:text-lg">
        {props.title}
      </h1>
      <a href={props.externalLinks.at(0)?.url} target="_blank">
        {!isThumbnailLoaded &&
          <div className="flex items-center justify-center w-full aspect-2/1">
            <div className="size-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        }
        <img src={props.isDarkModeActive ? props.thumbnail.dark : props.thumbnail.light} className={`${isThumbnailLoaded ? "" : "hidden"} border-0 rounded-lg w-max aspect-2/1 object-cover hover:scale-105 transition-[scale] duration-250`} onLoad={() => setIsThumbnailLoaded(true)} />
      </a>
      <div className="flex flex-col gap-2">
        {
          props.chipLabels &&
          <div className="flex flex-row flex-wrap gap-2 text-sm">
            {props.chipLabels.map(label => <Chip key={label} className="text-text" label={label} />)}
          </div>
        }
        {
          props.accentChipLabels &&
          <div className="flex flex-row flex-wrap gap-2 text-sm">
            {props.accentChipLabels.map(label => <Chip key={label} className="text-accent bg-accent-muted" label={label} />)}
          </div>
        }

      </div>
      <p className="text-text-muted">
        {props.description}
      </p>
      <div className="flex flex-row flex-wrap gap-2 mt-auto">
        {props.externalLinks.map(externalLink => <ProjectCardLink key={externalLink.label} label={externalLink.label} url={externalLink.url} />)}
      </div>
    </article>
  )
}
