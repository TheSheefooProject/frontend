import styles from './switch.module.scss'

const typeColours = {
  default: '#444444',
  positive: '#008044',
  negative: '#BC203F',
  neutral: '#3F67AB',
}
const Switch = (props: {}) => {
  // Default prop values
  const { ...restProps } = props

  return (
    <div className={`${styles.switch}`}>
      <input
        id="setting_theme"
        name="setting_theme"
        type="checkbox"
        className={`${styles.checkbox}`}
      ></input>
      <label htmlFor="setting_theme" className={`${styles.label}`}></label>
    </div>
  )
}

export default Switch
