import React from 'react';
import { withTranslation } from 'react-i18next';
import BeatCard from "../../../components/BeatCard/BeatCard";
import { connect } from "react-redux";

class AddTypeBeat extends React.Component {
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
        console.log("hey")
        this.props.addTypeBeat()
        event.preventDefault();
    }

    render() {
        return (
        <div className="addTypeBeatContent">
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
      typeBeats: state.typeBeats.typeBeats,
      error: state.typeBeats.error
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        addTypeBeat: () => dispatch({ type: "PUT_TYPEBEAT" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('global')(AddTypeBeat))