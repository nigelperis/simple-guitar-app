import React from 'react';
import MuteBtns from './MuteBtns.js';
import FretboardBg from './FretBoardBg.js';
import FretMarkers from './FretMarkers.js';

function FretBoard({ currFrets, updateCurrFrets }){

    return (
        <div className="fretboard-container">
            <MuteBtns
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
            />
            <FretboardBg />
            <FretMarkers
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
            />
        </div>
    )
}

export default FretBoard;