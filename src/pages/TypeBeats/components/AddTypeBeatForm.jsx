import React from 'react';
import { withTranslation } from 'react-i18next';
import withRouter from '../../../components/WithRouter/WithRouter';
import { connect } from "react-redux";
import BeatCard from "../../../components/BeatCard/BeatCard";
 
class AddTypeBeatForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        bpm: "",
        key: "",
        price: "",
        description: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.checkState = this.checkState.bind(this);
    }

    componentDidUpdate() {
        console.log(this.props)
        this.checkState()
    }
  
    checkState() {
        if (this.props.typeBeatAdded!=null) {
            this.props.resetState()
            this.props.router.navigate("/typeBeats", {})
        }
    }

    handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event){
        this.props.addTypeBeat(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div className="addTypeBeatFormContent">
                <div className="addTypeBeatFormContainer">
                    <form onSubmit={this.handleSubmit}>
                        <label>
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
                        </label>
                        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </form>
                </div>
                <div className="typeBeatImage">
                    <BeatCard key={this.state.key} title={this.state.title} price={this.state.price} photoUrl={null}></BeatCard>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      loading: state.typeBeats.loading,
      typeBeatAdded: state.typeBeats.typeBeatAdded,
      error: state.typeBeats.error
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        addTypeBeat: (beat) => dispatch({ type: "PUT_TYPEBEAT" , beat: beat}),
        resetState: () => dispatch({ type: "RESET_STATE"}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withTranslation('global')(AddTypeBeatForm)))