import { Icon } from '@iconify/react'

const LanguageButton = (handleClick) => {
  return (
    <button
      type='button'
      onClick={() => handleClick}
      className='languageButton'
    >
      <Icon icon='akar-icons:globe' width='30' height='30' />
      <span>ES</span>
      <Icon icon='akar-icons:chevron-up' width='25' height='25' />
    </button>
  )
}

export default LanguageButton
