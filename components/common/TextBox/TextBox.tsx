import styles from './textbox.module.scss'

const typeColours = {
  default: '#444444',
  positive: '#008044',
  negative: '#BC203F',
  neutral: '#3F67AB',
}
const TextBox = (props: {
  [x: string]: any
  text?: string
  className?: string
  type?: keyof typeof typeColours
  disabled?: boolean
  noMargin?: boolean
  fixedWidth?: boolean
  iconOnly?: boolean
}) => {
  // Default prop values
  const {
    icon = '',
    text = '',
    type = 'default',
    disabled = false,
    className = '',
    bg_colour = '#4FDC7C',
    onClick = null,
    noMargin = false,
    fixedWidth = false,
    iconOnly = false,
    ...restProps
  } = props

  return <input type="text"></input>
}

export default TextBox
