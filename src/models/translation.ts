import type { ProjectId } from "./project"
import type { WorkExperienceId } from "./work-experience"

type ContactFormField = { missingMessage: string, label: string, placeholder: string }
type Subtitle = { head: string, tail: string }
type TranslationExperiences = Record<WorkExperienceId, { title: string; employer: string }>
type TranslationProjects = Record<ProjectId, { title: string; description: string }>

export type Translation = {
  navigationBar: {
    buttonLabel: {
      welcome: string
      projects: string
      experience: string
    }
  }
  settingsBar: {
    hideLabel: string
    showLabel: string
    language: string
    lightDarkMode: string
  },
  contactButton: {
    label: string
  },
  contactForm: {
    header: string
    email: ContactFormField
    message: ContactFormField
    buttonLabel: {
      submit: string
      cancel: string
      close: string
    }
    thankYou: string
  }
  welcomeSection: {
    title: {
      top: string
      bottom: string
    }
    subtitle: string
  }
  project: {
    resourceLabel: {
      article: string
      download: string
      researchPaper: string
      sourceCode: string
    }
  }
  projectsSection: {
    title: string
    subtitle: Subtitle
  }
  projects: TranslationProjects
  experience: {
    specializationLabel: {
      backend: string
      frontend: string
      fullstack: string
      systems: string
    }
    typeLabel: {
      fullTime: string
      partTime: string
      contract: string
      internship: string
    }
  }
  experiences: TranslationExperiences
  experienceSection: {
    and: string
    timelineEnd: string
    timelineStart: string
    title: string
    subtitle: Subtitle
  }
  footerSection: {
    builtWithText: {
      head: string
      tail?: string
    }
    drummerIconText: string
  }
}
