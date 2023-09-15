import { Icon } from '@iconify/react'
import { connect } from 'react-redux'

const Loading = ({ loading }) => {
  return (
    <>
      <div className={`loadingContainer ${loading ? 'show' : 'hidden'}`}>
        <span className='loadingIcon'>
          <Icon icon='akar-icons:arrow-clockwise' width='30'></Icon>
        </span>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.typeBeats.loading,
  }
}

export default connect(mapStateToProps)(Loading)
