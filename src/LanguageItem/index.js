import './index.css'

const LanguageItem = props => {
  const {languageDetails, onChangeLanguage, isActive} = props
  const {buttonText, id} = languageDetails
  const activeBtn = isActive ? 'active-btn-style' : 'normal-btn-style'

  const onClickLanguageBtn = () => {
    onChangeLanguage(id)
  }

  return (
    <li>
      <button type="button" className={activeBtn} onClick={onClickLanguageBtn}>
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
