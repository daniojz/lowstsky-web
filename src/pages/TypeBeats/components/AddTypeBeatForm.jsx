import React from 'react'
import { withTranslation } from 'react-i18next'
import withRouter from '../../../components/WithRouter/WithRouter'
import { connect } from 'react-redux'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import InputSelect from '../../../components/Select/Select'

class AddTypeBeatForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      bpm: '',
      key: '',
      price: '',
      description: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkState = this.checkState.bind(this)
  }

  componentDidUpdate() {
    console.log(this.props)
    this.checkState()
  }

  checkState() {
    if (this.props.typeBeatAdded != null) {
      this.props.resetState()
      this.props.router.navigate('/typeBeats', {})
    }
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    this.props.addTypeBeat(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <div className='addTypeBeatFormContent'>
        <div className='addTypeBeatFormContainer'>
          <form>
            <Input
              name={this.props.t('commonWords.title')}
              type='text'
              color='grey1'
              sizing='max-size'
              label={this.props.t('commonWords.title')}
              onChange={this.handleChange}
            ></Input>
            <Input
              name={this.props.t('commonWords.bpm')}
              type='text'
              color='grey1'
              sizing='max-size'
              label={this.props.t('commonWords.bpm')}
              onChange={this.handleChange}
            ></Input>
            <InputSelect
              name={this.props.t('commonWords.key')}
              color='grey1'
              sizing='max-size'
              list={this.props.t('keyScales')}
              defaultValue={this.props.t('commonWords.key')}
              onChange={this.handleChange}
            ></InputSelect>
            <Input
              name={this.props.t('commonWords.price')}
              type='text'
              color='grey1'
              sizing='max-size'
              label={this.props.t('commonWords.price')}
              onChange={this.handleChange}
            ></Input>
            <Input
              name={this.props.t('commonWords.description')}
              type='text'
              color='grey1'
              sizing='max-size'
              label={this.props.t('commonWords.description')}
              onChange={this.handleChange}
            ></Input>
            {/* <label>
                            <span>{this.props.t('commonWords.title')}</span>
                            <input type="text" name='title' defaultValue={this.state.title} onChange={this.handleChange} />
                        </label>
                        <label>
                            <span>{this.props.t('commonWords.bpm')}</span>
                            <input type="number" name='bpm' defaultValue={this.state.bpm} onChange={this.handleChange} />
                        </label>
                        <select defaultValue={this.state.bpm} name='key' onChange={this.handleChange}>
                            {
                                (this.props.t('keyScales')).map((key) => {
                                    return <option key={key} value={key}>{key}</option>
                                })}
                        </select>
                        <label>
                            <span>{this.props.t('commonWords.price')}</span>
                            <input type="number" name='price' defaultValue={this.state.price} onChange={this.handleChange} />
                        </label>
                        <label>
                            <span>{this.props.t('commonWords.description')}</span>
                            <textarea defaultValue={this.state.description} name='description' onChange={this.handleChange} />
                        </label> */}
          </form>
        </div>
        <div className='addTypeBeatFormButtons'>
          <Button
            type='submit'
            text='Add'
            color='blue'
            sizing='medium'
            onClick={this.handleSubmit}
          ></Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.typeBeats.loading,
    typeBeatAdded: state.typeBeats.typeBeatAdded,
    error: state.typeBeats.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTypeBeat: (beat) => dispatch({ type: 'PUT_TYPEBEAT', beat }),
    resetState: () => dispatch({ type: 'RESET_STATE' }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(withTranslation('global')(AddTypeBeatForm)))
