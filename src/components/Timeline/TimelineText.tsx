type TimelineTextProps = {
  className?: string
  text: string
}

export default function TimelineText(props: TimelineTextProps) {
  return (
    <h3 className={`${props.className ? `${props.className} ` : ""}font-bold text-text-muted text-base`}>
      {props.text}
    </h3>
  )
}