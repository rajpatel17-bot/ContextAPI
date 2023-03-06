import React from 'react'
import Comp2 from './Comp2'

const Comp1 = ({ counter }) => {
    return (
        <div>
            <h2>Component 1: { counter }</h2>
            <Comp2 counter={counter} />
        </div>
    )
}

export default Comp1
