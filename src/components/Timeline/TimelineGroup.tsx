import type { MouseEventHandler } from "react"
import { GoChevronDown } from "react-icons/go"
import type { Language } from "../../models/language"
import type { WorkExperience } from "../../models/work-experience"
import TimelineEmployer from "./TimelineEmployer"
import TimelineRoles from "./TimelineRoles"

type TimelineGroupProps = {
  isExpanded: boolean
  language: Language
  onClick: MouseEventHandler<HTMLButtonElement>
  workExperiences: WorkExperience[]
}

export default function TimelineGroup(props: TimelineGroupProps) {
  const { id, employerId } = props.workExperiences.at(0)!
  const rolesId = `${id}-roles`

  return (
    <div data-timeline-group-id={id} className="pl-4 sm:pl-8">
      <button
        type="button"
        aria-controls={rolesId}
        aria-expanded={props.isExpanded}
        className="flex flex-row items-center gap-2 w-full h-12 text-left hover:cursor-pointer"
        onClick={props.onClick}
      >
        <TimelineEmployer employerId={employerId} language={props.language} />
        {props.workExperiences.length > 1 && <span className="text-text-muted text-sm">{props.workExperiences.length}</span>}
        <GoChevronDown className={`text-text-muted transition-[rotate] duration-250 ${props.isExpanded ? "rotate-180" : ""}`} />
      </button>
      <div
        id={rolesId}
        inert={!props.isExpanded}
        className={`grid transition-[grid-template-rows,opacity] duration-250 ${props.isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <TimelineRoles language={props.language} workExperiences={props.workExperiences} />
        </div>
      </div>
    </div>
  )
}
