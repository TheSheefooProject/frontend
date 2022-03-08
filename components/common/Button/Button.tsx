import styles from './button.module.scss'

const typeColours = {
  default: '#DF51D1',
  positive: '#00BA9A',
  negative: '#FF6969',
  neutral: '#5E9AFF',
  disabled: '#A8805F',
}
const Button = (props: {
  [x: string]: any
  text?: string
  className?: string
  type?: keyof typeof typeColours
  disabled?: boolean
}) => {
  // Default prop values
  const {
    icon = '',
    text = 'DEFAULT VALUE',
    type = 'default',
    disabled = false,
    className = '',
    bg_colour = '#4FDC7C',
    onClick = null,
    ...restProps
  } = props

  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: typeColours[type] }}
      className={`${
        className +
        ' ' +
        styles.btn +
        ' mx-1 h-8 w-16 px-2 py-0 font-body font-bold text-white shadow-md'
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
