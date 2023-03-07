import React from 'react'
import useGlobalData from '../hooks/useGlobalData'

const Comp3 = () => {
    const { counter } = useGlobalData();

    return (
        <div>
            <h2>Child Component 3: { counter }</h2>
        </div>
    )
}

export default Comp3
