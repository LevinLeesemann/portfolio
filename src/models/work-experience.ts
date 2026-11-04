import type { Translated } from "./translation"

export type WorkExperience = {
  id: string
  title: Translated<string>
  employerId: WorkExperienceEmployerId
  specializationIds: WorkExperienceSpecializationId[]
  isActive?: boolean
}

export type WorkExperienceEmployerId = "spotify" | "kick-snare-hat-apps" | "john-deere" | "university-of-iowa"

export type WorkExperienceEmployers = Record<WorkExperienceEmployerId, WorkExperienceEmployer>

export type WorkExperienceSpecializations = Record<WorkExperienceSpecializationId, Translated<string>>

type WorkExperienceEmployer = {
  name: Translated<string>
  logo: string
}

type WorkExperienceSpecializationId = "backend" | "data" | "frontend" | "fullstack" | "systems"
