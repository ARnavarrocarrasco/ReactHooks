import { useState } from 'react'
// import PropTypes from 'prop-types'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1 : 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3} = counter;

    const Añadir = () => {
        setCounter({
            ...counter,
            counter1: counter1 +1
        });
        
    }

    return (
        <>
            <h1>{counter1}</h1>
            <h1>{counter2}</h1>
            <h1>{counter3}</h1>
            <hr/>
            <button className="btn" onClick={Añadir}>+1</button>
        </>
    )
}

// CounterApp.propTypes = {
//     value: PropTypes.number.isRequired
// }




