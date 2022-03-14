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
    <div
      className={`${
        styles.switch + ' relative m-0 overflow-hidden rounded-md bg-gray-600'
      }`}
    >
      <input
        id="setting_theme"
        name="setting_theme"
        type="checkbox"
        className={`${styles.checkbox + ' '}`}
      ></input>
      <div className={`${styles.knobs + ' align-middle'}`}></div>
      <div className={`${styles.layers + ' align-middle'}`}></div>
    </div>
  )
}

export default Switch
