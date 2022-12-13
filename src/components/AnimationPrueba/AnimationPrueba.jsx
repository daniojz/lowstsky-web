import { React, useEffect, useRef, useState } from 'react'
import PropTypes, { func } from 'prop-types'
import "./AnimationPrueba.css";
import CityCard from '../../molecules/CityCard';

const AnimationPrueba = ({ }) => {

    const [animationState, setAnimationState] = useState(1);

    useEffect(() => {
        console.log("cambió wey")

    }, animationState)

    return (
        <div className='AnimationPruebaComponent'>
            <div className='buttonContainer'>
                <p onClick={() => setAnimationState(2)}>click</p>
            </div>
            <div className={`textContainer ${animationState===1 ? 'textContainer-hidden' : 'textContainer-show'}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident qui officiis totam ea. Vel, omnis ad quas atque rerum vitae, cum sit animi modi earum minus recusandae esse officiis odit?</p>
            </div>
        </div>
    )
}



AnimationPrueba.propTypes = {
}

export default AnimationPrueba
