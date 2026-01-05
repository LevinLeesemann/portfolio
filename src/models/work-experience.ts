type WorkExperienceSpecializationId = "backend" | "frontend" | "fullstack" | "systems"
type WorkExperienceTypeId = "fullTime" | "partTime" | "contract" | "internship"

export type WorkExperienceId = "seniorSoftwareEngineer" | "softwareEngineerAudio" | "softwareEngineerII" | "softwareEngineerI" | "graduateTeachingAssistant" | "softwareEngineeringInternBackend" | "softwareEngineeringInternFrontend" | "softwareDevelopmentIntern" | "developerAudioEngineer" | "intern"

export type WorkExperience = {
  id: WorkExperienceId
  specializationIds?: WorkExperienceSpecializationId[]
  typeIds: WorkExperienceTypeId[]
  isActive?: boolean
}
