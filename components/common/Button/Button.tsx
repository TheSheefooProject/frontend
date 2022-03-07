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
    ...restProps
  } = props

  return (
    // Button Container
    <div className={styles.btn_outer}>
      {/* Button */}
      <button
        style={{ backgroundColor: bg_colour }}
        className={`${className + ' ' + styles.btn_inner}`}
        onClick={() => console.log('I was clicked 💀')}
      >
        {/* Button Outline */}
        <svg
          width="180px"
          height="60px"
          viewBox="0 0 180 60"
          style={{ stroke: border_colour }}
          className={styles.border}
        >
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        {/* Button Text  */}
        <span className={`${styles.btn_text}` + ' text-primary'}>{text}</span>
      </button>
    </div>
  )
}

export default Button
