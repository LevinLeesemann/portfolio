import { workExperienceEmployers } from "../../data/work-experiences"
import type { Language } from "../../models/language"
import type { WorkExperienceEmployerId } from "../../models/work-experience"

type TimelineEmployerProps = {
  employerId: WorkExperienceEmployerId
  language: Language
}

export default function TimelineEmployer(props: TimelineEmployerProps) {
  const employer = workExperienceEmployers[props.employerId]

  return (
    <>
      <img src={employer.logo} alt="" className="size-5 shrink-0 rounded-sm" />
      <span className="text-text font-bold">{employer.name[props.language]}</span>
    </>
  )
}
