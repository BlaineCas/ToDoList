import React from 'react'
import Particles from 'react-particles-js'
import './Particle.css'

function Particle() {
    return (
        <div className='par'>
            <Particles
                params={{
            		particles: {
                        number: {
                            value: 100,
                            density:{
                                enable: true,
                                value_area:789.1476416322727,
                            }
                        },
                        color: {
                            value: '#000'
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                              width: 0,
                              color: "#000000"
                            },
                            polygon: {
                                nb_sides: 5
                              }},
                        size:{
                            value: 2,
                            random: true,
                            anim: {
                              enable: true,
                              speed: 10,
                              size_min: 0,
                              sync: false
                            }},
                        opacity:{
                            value: 0.48927153781200905,
                            random: false,
                            anim: {
                              enable: true,
                              speed: 5,
                              opacity_min: 0,
                              sync: false
                            }},
                        move:{
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                              enable: false,
                              rotateX: 600,
                              rotateY: 1200
                            }},
                        line_linked:{
                            enable: true,
                            distance: 150,
                            color: "#000",
                            opacity: 0.4,
                            width: 1
                          }

            		},
                     interactivity:{
                        detect_on: 'window',
                        events:{
                            onClick: {
                                enable: true,
                                mode: 'push'
                            }
                        }
                    } 
            	}}
            />
        </div>
    )
}

export default Particle
