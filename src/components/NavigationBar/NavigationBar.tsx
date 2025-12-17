import { useEffect, useRef } from "react"
import { GoBriefcase, GoChevronUp, GoFileCode, GoMoon, GoSun } from "react-icons/go"
import { PiHandWaving } from "react-icons/pi"
import NavigationBarButton from "./NavigationBarButton"
import NavigationBarGroup from "./NavigationBarGroup"

type NavigationBarProps = {
  activeSection: string
  isDarkModeActive: boolean
  setIsDarkModeActive: (isActive: boolean) => void
}

export default function NavigationBar(props: NavigationBarProps) {
  const navigationBar = useRef<HTMLDivElement>(null)
  const navigationBarToggle = useRef<HTMLDivElement>(null)
  const previousScrollLocation = useRef(0)

  function resetRef(ref: React.RefObject<HTMLDivElement | null>, transformation: string) {
    ref.current?.classList.remove(transformation)
  }

  function resetRefs() {
    resetRef(navigationBar, "translate-y-[150%]")
    resetRef(navigationBarToggle, "-translate-y-[150%]")
  }

  function updateRef(ref: React.RefObject<HTMLDivElement | null>, transformation: string, scrollLocation: number) {
    const hide = scrollLocation > previousScrollLocation.current && scrollLocation > 70
    ref.current?.classList.toggle(transformation, hide)
  }

  useEffect(() => {
    const onScrollListener = () => {
      const scrollLocation = window.scrollY

      updateRef(navigationBar, "translate-y-[150%]", scrollLocation)
      updateRef(navigationBarToggle, "-translate-y-[150%]", scrollLocation)

      previousScrollLocation.current = scrollLocation
    }

    window.addEventListener('scroll', onScrollListener, { passive: true })
    return () => { window.removeEventListener('scroll', onScrollListener) }
  }, [])

  return (
    <div>
      <div ref={navigationBarToggle} className="fixed flex flex-row inset-x-0 -bottom-16 sm:-bottom-18 justify-center gap-2 pointer-events-none transition-[translate] duration-250">
        <button onClick={resetRefs} className="flex flex-row items-center justify-center text-text hover:cursor-pointer p-2.5 sm:p-3 size-10 sm:size-12 pointer-events-auto">
          <GoChevronUp className="size-full" />
        </button>
      </div>
      <div ref={navigationBar} className="fixed flex flex-row inset-x-0 bottom-4 justify-center gap-2 pointer-events-none transition-[translate] duration-250">
        <NavigationBarGroup>
          <NavigationBarButton icon={PiHandWaving} isActive={props.activeSection === "welcome"} onClick={() => goTo("welcome")} />
          <NavigationBarButton icon={GoFileCode} isActive={props.activeSection === "projects"} onClick={() => goTo("projects")} />
          <NavigationBarButton icon={GoBriefcase} isActive={props.activeSection === "experience"} onClick={() => goTo("experience")} />
        </NavigationBarGroup>
        <NavigationBarGroup>
          <NavigationBarButton icon={props.isDarkModeActive ? GoMoon : GoSun} onClick={() => props.setIsDarkModeActive(!props.isDarkModeActive)} />
        </NavigationBarGroup>
      </div>
    </div>
  )
}

function goTo(section: string) {
  window.location.replace(`/#${section}`)
}
