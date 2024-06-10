import PropTypes from 'prop-types'
import React from 'react'
// import { useCounter } from '../hooks/useCounter'

export const ShowIncrement = React.memo( ({increment}) => {

    console.log("Me volví a generar :C")

    return (
        <>
            <button 
                className='btn btn-primary mt.2'
                onClick={() => increment(5)}
            >
                Incrementar    
            </button> 
        </>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
