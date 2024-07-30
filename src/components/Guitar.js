import React, { useState } from 'react';
import GuitarBody from './GuitarBody.js';
import Fretboard from './Fretboard.js';

function Guitar(){

    const [currFrets, setCurrFrets] = useState([0,0,0,0,0,0]);

    function updateCurrFrets(string, fret){
        let newFrets = [...currFrets];
        newFrets[string] = fret !== undefined ? fret : newFrets[string] * -1;
        setCurrFrets(newFrets);
    }

    return (
        <div className="guitar">
            <GuitarBody
                currFrets={currFrets}
            />
            <Fretboard
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
            />
        </div>
    )
}

export default Guitar;