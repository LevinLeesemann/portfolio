type TooltipProps = {
  children: React.ReactNode
  margin?: string
  text: string
}

export default function Tooltip(props: TooltipProps) {
  return (
    <div className="relative group inline-block">
      {props.children}
      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 ${props.margin ?? "mb-2"} hidden border border-border group-hover:block bg-background text-text text-xs py-1 px-2 rounded-full whitespace-nowrap`}>
        {props.text}
      </div>
    </div>
  )
}
