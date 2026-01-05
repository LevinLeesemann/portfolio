type ButtonType = "button" | "submit"

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  type?: ButtonType
}

type ButtonTheme = {
  background: string
  backgroundHover: string
  text: string
}

const buttonThemes: Record<ButtonType, ButtonTheme> = {
  button: {
    background: "bg-text",
    backgroundHover: "active:bg-text-muted",
    text: "text-background",
  },
  submit: {
    background: "bg-accent",
    backgroundHover: "active:bg-accent-muted",
    text: "text-background",
  },
}

export default function Button(props: ButtonProps) {
  const buttonTheme = `${getButtonTheme().text} ${getButtonTheme().background} ${getButtonTheme().backgroundHover}`

  function getButtonTheme() {
    return buttonThemes[props.type ?? "button"]
  }

  return (
    <button disabled={props.disabled} onClick={props.onClick} type={props.type} className={`${buttonTheme} rounded-full text-sm sm:text-base md-text-lg py-2 px-4 hover:px-6 hover:cursor-pointer transition-[gap,padding] duration-250 group`}>
      {props.children}
    </button>
  )
}
