import { Icon } from '@iconify/react'

const LanguageButton = () => {
  return (
    <div className='languageButton'>
      <Icon icon='akar-icons:globe' width='30' height='30' />
      <span>ES</span>
      <Icon icon='akar-icons:chevron-up' width='25' height='25' />
    </div>
  )
}

export default LanguageButton
