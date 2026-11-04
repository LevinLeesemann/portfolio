import johnDeere from "../assets/employers/john-deere.svg"
import kickSnareHatApps from "../assets/employers/kick-snare-hat-apps.png"
import spotify from "../assets/employers/spotify.svg"
import universityOfIowa from "../assets/employers/university-of-iowa.png"
import type { WorkExperience, WorkExperienceEmployers, WorkExperienceSpecializations } from "../models/work-experience"

export const workExperiences: WorkExperience[] = [
  {
    id: "backend-engineer-ii",
    title: {
      english: "Backend Engineer II",
      german: "Backend Engineer II",
    },
    employerId: "spotify",
    specializationIds: ["backend", "data"],
    isActive: true,
  },
  {
    id: "software-engineer-audio",
    title: {
      english: "Software Engineer - Audio",
      german: "Software Engineer - Audio",
    },
    employerId: "kick-snare-hat-apps",
    specializationIds: ["systems", "backend"],
    isActive: true,
  },
  {
    id: "senior-software-engineer",
    title: {
      english: "Senior Software Engineer",
      german: "Senior Software Engineer",
    },
    employerId: "john-deere",
    specializationIds: ["backend"],
  },
  {
    id: "software-engineer-ii",
    title: {
      english: "Software Engineer II",
      german: "Software Engineer II",
    },
    employerId: "john-deere",
    specializationIds: ["backend", "frontend"],
  },
  {
    id: "software-engineer-i",
    title: {
      english: "Software Engineer I",
      german: "Software Engineer I",
    },
    employerId: "john-deere",
    specializationIds: ["backend"],
  },
  {
    id: "software-engineering-intern-backend",
    title: {
      english: "Software Engineering Intern",
      german: "Software Engineer Praktikant",
    },
    employerId: "john-deere",
    specializationIds: ["backend"],
  },
  {
    id: "software-engineering-intern-fullstack",
    title: {
      english: "Software Engineering Intern",
      german: "Software Engineer Praktikant",
    },
    employerId: "john-deere",
    specializationIds: ["fullstack"],
  },
  {
    id: "software-development-intern",
    title: {
      english: "Software Development Intern",
      german: "Softwareentwickler Praktikant",
    },
    employerId: "university-of-iowa",
    specializationIds: ["fullstack"],
  },
]

export const workExperienceSpecializations: WorkExperienceSpecializations = {
  backend: {
    english: "Backend",
    german: "Backend",
  },
  data: {
    english: "Data",
    german: "Data",
  },
  frontend: {
    english: "Frontend",
    german: "Frontend",
  },
  fullstack: {
    english: "Fullstack",
    german: "Fullstack",
  },
  systems: {
    english: "Systems",
    german: "Systems",
  },
}

export const workExperienceEmployers: WorkExperienceEmployers = {
  spotify: {
    name: {
      english: "Spotify",
      german: "Spotify",
    },
    logo: spotify,
  },
  "kick-snare-hat-apps": {
    name: {
      english: "Kick Snare Hat Apps",
      german: "Kick Snare Hat Apps",
    },
    logo: kickSnareHatApps,
  },
  "john-deere": {
    name: {
      english: "John Deere",
      german: "John Deere",
    },
    logo: johnDeere,
  },
  "university-of-iowa": {
    name: {
      english: "University of Iowa",
      german: "Universität von Iowa",
    },
    logo: universityOfIowa,
  },
}
