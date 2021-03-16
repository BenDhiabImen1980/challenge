import React from 'react';

const ConvertTime = ms => {
    const msSeconds = 1000
    const msMinutes = msSeconds * 60
    const msHours = msMinutes * 60
    const hours = Math.floor(ms / msHours)
    const Rhours = ms % msHours
    const minutes = Math.floor(Rhours / msMinutes)
    const Rminutes = Rhours % msMinutes
    const seconds = Math.floor(Rminutes / msSeconds)

    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
}

const Times = ({ ms }) => {
    return (<div className='timerClock'>
        <div className='timerBlock'>
            <div className='timerNumbers'>
                {ConvertTime(ms)}
            </div>
            <div className='timerText'>
                <p className='timerTextItems'>Heures</p>
                <p className='timerTextItems'>Minutes</p>
                <p className='timerTextItems'>Secondes</p>
            </div>
        </div>
    </div>
    )
}

export default Times