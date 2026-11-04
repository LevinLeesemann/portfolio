import type { Language } from "../../models/language"
import type { WorkExperience } from "../../models/work-experience"
import TimelineEmployer from "./TimelineEmployer"
import TimelineRoles from "./TimelineRoles"

type TimelineCurrentGroupProps = {
  language: Language
  workExperiences: WorkExperience[]
}

export default function TimelineCurrentGroup(props: TimelineCurrentGroupProps) {
  return (
    <div className="relative pl-4 sm:pl-8">
      <div className="absolute left-0 top-6 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-accent animate-ping" />
      <div className="absolute left-0 top-6 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-accent" />
      <div className="flex flex-row items-center gap-2 h-12">
        <TimelineEmployer employerId={props.workExperiences.at(0)!.employerId} language={props.language} />
      </div>
      <TimelineRoles language={props.language} workExperiences={props.workExperiences} />
    </div>
  )
}
