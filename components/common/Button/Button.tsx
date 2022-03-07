import styles from './button.module.scss'

const Button = (props: {
  [x: string]: any
  text?: 'Default Button' | undefined
  className?: string
}) => {
  // Default prop values
  const {
    text = 'Default Button',
    className = '',
    bg_colour = '#3BA55D',
    border_colour = '#00885D',
    onClick = null,
    ...restProps
  } = props

  return (
    // Button Container
    <div className={`${styles.btn_outer}` + ''}>
      {/* Button */}
      <button
        style={{ backgroundColor: bg_colour, borderColor: border_colour }}
        className={`${
          className + ' ' + styles.btn_inner + ' h-8 w-16 px-2 py-0 '
        }`}
        onClick={onClick}
      >
        {/* Button Text  */}
        <span className={`${styles.btn_text}` + ' text-primary'}>{text}</span>
      </button>
    </div>
  )
}

export default Button
