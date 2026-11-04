import { useEffect, useRef, useState, type MouseEvent } from "react"
import { workExperiences } from "../../data/work-experiences"
import type { Language } from "../../models/language"
import type { WorkExperience } from "../../models/work-experience"
import TimelineCurrentGroup from "./TimelineCurrentGroup"
import TimelineGroup from "./TimelineGroup"

const hoverIntentDelayInMilliseconds = 120
const pointerMarginInPixels = 8

const workExperienceGroups = workExperiences.reduce<WorkExperience[][]>((groups, workExperience) => {
  const lastGroup = groups.at(-1)
  if (lastGroup?.at(0)?.employerId === workExperience.employerId) lastGroup.push(workExperience)
  else groups.push([workExperience])
  return groups
}, [])

const isActive = (group: WorkExperience[]) => group.some(workExperience => workExperience.isActive)
const activeGroups = workExperienceGroups.filter(isActive)
const inactiveGroups = workExperienceGroups.filter(group => !isActive(group))

type ExpandedGroup = {
  id: string
  pointerAnchor?: {
    element: Element
    y: number
  }
}

type TimelineProps = {
  language: Language
}

export default function Timeline(props: TimelineProps) {
  const [expandedGroup, setExpandedGroup] = useState<ExpandedGroup | null>(null)
  const list = useRef<HTMLDivElement>(null)
  const hoveredGroupId = useRef<string>(undefined)

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return

    let lastMousePosition = { x: 0, y: 0 }
    let hoverTimeout: number | undefined

    const expandOnHover = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || (event.clientX === lastMousePosition.x && event.clientY === lastMousePosition.y)) return
      lastMousePosition = { x: event.clientX, y: event.clientY }

      const element = (event.target as Element).closest<HTMLElement>("[data-timeline-group-id]")
      const id = element?.dataset.timelineGroupId
      if (id === hoveredGroupId.current) return
      hoveredGroupId.current = id
      window.clearTimeout(hoverTimeout)

      if (id !== undefined) hoverTimeout = window.setTimeout(() => setExpandedGroup({ id, pointerAnchor: { element: element!, y: event.clientY } }), hoverIntentDelayInMilliseconds)
      else if (list.current!.getBoundingClientRect().bottom > 0) setExpandedGroup(null)
    }

    window.addEventListener("pointermove", expandOnHover)
    return () => {
      window.removeEventListener("pointermove", expandOnHover)
      window.clearTimeout(hoverTimeout)
    }
  }, [])

  useEffect(() => {
    if (!expandedGroup?.pointerAnchor) return
    const { element, y } = expandedGroup.pointerAnchor

    let animationFrame = window.requestAnimationFrame(function keepPointerInGroup() {
      const overshoot = y - element.getBoundingClientRect().bottom + pointerMarginInPixels
      if (overshoot > 0) window.scrollBy({ top: -overshoot, behavior: "instant" })
      if (element.getAnimations({ subtree: true }).length > 0) animationFrame = window.requestAnimationFrame(keepPointerInGroup)
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [expandedGroup])

  const handleClick = (id: string, event: MouseEvent<HTMLButtonElement>) => {
    const isKeyboard = event.detail === 0
    const isHovered = hoveredGroupId.current === id
    const pointerAnchor = isKeyboard ? undefined : { element: event.currentTarget.parentElement!, y: event.clientY }

    setExpandedGroup(current => {
      if (current?.id !== id) return { id, pointerAnchor }
      return isHovered && !isKeyboard ? current : null
    })
  }

  return (
    <div ref={list} className="w-fit">
      <div className="relative">
        <div className="absolute left-0 top-6 bottom-0 w-px -translate-x-1/2 bg-accent" />
        {activeGroups.map(group => <TimelineCurrentGroup key={group.at(0)!.id} language={props.language} workExperiences={group} />)}
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-6 w-px -translate-x-1/2 bg-linear-to-t from-accent/20 to-accent" />
        {inactiveGroups.map(group => <TimelineGroup key={group.at(0)!.id} isExpanded={expandedGroup?.id === group.at(0)!.id} language={props.language} onClick={event => handleClick(group.at(0)!.id, event)} workExperiences={group} />)}
      </div>
    </div>
  )
}
