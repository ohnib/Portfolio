import React from 'react'
import './css/timeline.css'

const Timeline = () => {
  return (
    <>
        <div className='timeline-container'>
            <div className='timeline'>
                <div className='timeline-date vertical-bar-upper-item'>
                    2023
                </div>
                <div className='timeline-text horizontal-bar'>
                    <h3>FRAMEWORKS</h3>
                    <h4>I have already good knowledge about programming concepts so im currently learning about frameworks and libraries</h4>
                </div>
            </div>

            <div className='timeline'>
                <div className='timeline-date vertical-bar-month' style={{flexDirection: 'column'}}>
                    2022
                   <span className='timeline-month'>NOVEMBER</span>
                </div>
                <div className='timeline-text horizontal-bar'>
                    <h3>STUDIES</h3>
                    <h4>I got interested into math, and learned basics of Discrete math which helped me with logic </h4>
                </div>
            </div>

            <div className='timeline'>
                <div className='timeline-date vertical-bar-month' style={{flexDirection: 'column'}}>
                    2022
                   <span className='timeline-month'>OCTOBER</span>

                </div>
                <div className='timeline-text horizontal-bar'>
                    <h3>FREELANCE</h3>
                    <h4>I Started free lancing for a game development startup and made a website for them </h4>
                </div>
            </div>

            <div className='timeline'>
                <div className='timeline-date vertical-bar-month' style={{flexDirection: 'column'}}>
                    2022
                   <span className='timeline-month'>FEBRUARY</span>
                </div>
                <div className='timeline-text horizontal-bar'>
                    <h3>PROGRAMMING WORLD</h3>
                    <h4>i started learning code for real in 2022, i was introduced to Front-end and i got amazed </h4>
                </div>
            </div>

            <div className='timeline'>
                <div className='timeline-date vertical-bar'>
                    2013
                </div>
                <div className='timeline-text horizontal-bar'>
                    <h3>FIRST LINE OF CODE</h3>
                    <h4>My brother started coding at the age of 12, he made me wrote a “hello world” </h4>
                </div>
            </div>

            <div className='timeline'>
                <div className='timeline-date vertical-bar'>
                    2006
                </div>
                <div className='timeline-text horizontal-bar'>
                    <h3>FIRST COMPUTER</h3>
                    <h4>the first software i used was paint, Windows XP</h4>
                </div>
            </div>

            <div className='timeline'>
                <div className='timeline-date vertical-bar-lower-item'>
                    2003
                </div>
                <div className='timeline-text horizontal-bar'>
                    <h3>BORN</h3>
                    <h4>I Was born in 2003! on Campo mourão (PR-Brazil) </h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Timeline