import styles from './switch.module.scss'

const typeColours = {
  default: '#444444',
  positive: '#008044',
  negative: '#BC203F',
  neutral: '#3F67AB',
}
const Switch = (props: { name: string }) => {
  // Default prop values
  const { name = 'setting_default', ...restProps } = props

  return (
    <div className={`${styles.switch}` + ' '}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className={`${styles.checkbox}` + ' '}
      ></input>
      <label
        htmlFor={name}
        className={`${styles.label}` + ' border-2 border-primary'}
      ></label>
    </div>
  )
}

export default Switch
