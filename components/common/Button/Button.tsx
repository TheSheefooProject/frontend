import styles from './button.module.scss'

const Button = (props: {
  [x: string]: any
  text?: string
  className?: string
}) => {
  // Default prop values
  const {
    icon = '',
    text = 'DEFAULT VALUE',
    className = '',
    bg_colour = '#4FDC7C',
    border_colour = '#00885D',
    onClick = null,
    ...restProps
  } = props

  return (
    <button
      style={{ backgroundColor: bg_colour, borderColor: border_colour }}
      className={`${
        className + ' ' + styles.btn + ' h-8 w-16 px-2 py-0 text-primary '
      }`}
      onClick={onClick}
    >
      <span>{icon}</span>
      {/* Button Text  */}
      {text}
    </button>
  )
}

export default Button
