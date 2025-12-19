type WorkExperienceId = "seniorSoftwareEngineer" | "softwareEngineer" | "softwareEngineerII" | "softwareEngineerI" | "graduateTeachingAssistant" | "softwareEngineeringInternBackend" | "softwareEngineeringInternFrontend" | "softwareDevelopmentIntern"
type WorkExperienceSpecializationId = "backend" | "frontend" | "fullstack" | "systems"
type WorkExperienceTypeId = "fullTime" | "partTime" | "contract" | "internship"

export type WorkExperience = {
  id: WorkExperienceId
  specializationIds?: WorkExperienceSpecializationId[]
  typeIds: WorkExperienceTypeId[]
  isActive?: boolean
}
