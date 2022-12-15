import React from "react";
import PropTypes from 'prop-types'
import BeatCard from "../../components/BeatCard/BeatCard";
import { connect } from "react-redux";
import { useState } from "react";

class EditTypeBeats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      photoUrl: ''
    }
  }

  renderBeat = (beat) => {
    const { title, price, photourl } = beat;

    return (
      <BeatCard title={title} price={price} photoUrl={photourl}></BeatCard>
    )
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.addBeat(this.state)
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <>
        <section id="editTypeBeats_section">
          <div className="editTypeBeats_editBeat">
            <form onSubmit={this.onSubmit} className="editTypeBeats_editBeat_form">
              <div className="editTypeBeats_editBeat_form_content">
                <label className="">
                  <span>Title:</span>
                  <input
                    name="title"
                    type="text"
                    onChange={this.handleInputChange} />
                </label>
                <label>
                  <span>Price:</span>
                  <input
                    name="price"
                    type="text"
                    onChange={this.handleInputChange} />
                </label>
                <label>
                  <span>PhotoUrl:</span>
                  <input
                    name="photoUrl"
                    type="text"
                    onChange={this.handleInputChange} />
                </label>
              </div>
              <button className="editTypeBeats_editBeat_form_addButton">Añadir Beat</button>
            </form>
          </div>
          <div className="editTypeBeats_list">
            {this.props.beatList.map(beat => this.renderBeat(beat))}
            <p>hola</p>
          </div>
        </section>
      </>
    );
  }
}

EditTypeBeats.propTypes = {
  beatList: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    beatList: state.beats
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addBeat: (title, price, photoUrl) => { dispatch({ type: 'ADD_BEAT', payload: { title, price, photoUrl }})}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTypeBeats);

