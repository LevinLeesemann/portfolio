import { translations } from "../../data/translations"
import { workExperienceSpecializations } from "../../data/work-experiences"
import type { Language } from "../../models/language"
import type { WorkExperience } from "../../models/work-experience"
import Chip from "../Chip"

type TimelineRolesProps = {
  language: Language
  workExperiences: WorkExperience[]
}

export default function TimelineRoles(props: TimelineRolesProps) {
  return (
    <ul className="flex flex-col gap-3 pb-4">
      {props.workExperiences.map(workExperience =>
        <li key={workExperience.id}>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 items-center">
            <p className="text-text">
              {workExperience.title[props.language]}
            </p>
            {workExperience.isActive && <Chip className="text-xs text-accent bg-accent-muted" label={translations[props.language].section.experience.current} />}
          </div>
          <p className="text-text-muted text-sm">
            {workExperience.specializationIds.map(id => workExperienceSpecializations[id][props.language]).join(", ")}
          </p>
        </li>)
      }
    </ul>
  )
}
