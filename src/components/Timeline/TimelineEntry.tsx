import type { Translation } from "../../models/translation"
import type { WorkExperience } from "../../models/work-experience"
import Chip from "../Chip"
import TimelineText from "./TimelineText"

type TimelineEntryProps = {
  isFirst: boolean
  isLast: boolean
  translation: Translation
  workExperiences: WorkExperience[]
}

export default function TimelineEntry(props: TimelineEntryProps) {
  return (
    <div className="flex flex-row gap-4 sm:gap-8 items-stretch">
      <div className="relative flex flex-col justify-center min-h-12">
        <div className={`absolute ${props.isFirst ? "" : "top-0"} ${props.isLast ? "" : "bottom-0"} inset-1/2 -translate-x-1/2 w-px bg-accent`} />
        <div>
          {props.isFirst && <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-accent animate-ping" />}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-accent" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start py-4 gap-2 md:gap-0">
        {props.workExperiences.map((workExperience, index) =>
          <div key={workExperience.id} className="flex flex-row items-center">
            {index !== 0 && <TimelineText className="hidden md:block px-4" text={props.translation.experienceSection.and} />}
            <div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-text">
                  {props.translation.experiences[workExperience.id].title}
                </p>
                <div className="flex flex-row gap-2 text-xs">
                  {workExperience.specializationIds?.map(specialization => <Chip key={specialization} className="text-accent bg-accent-muted" label={props.translation.experience.specializationLabel[specialization]} />)}
                </div>
              </div>
              <p className="text-text-muted text-sm">
                {props.translation.experiences[workExperience.id].employer} ({workExperience.typeIds.map(id => props.translation.experience.typeLabel[id]).join(", ")})
              </p>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
