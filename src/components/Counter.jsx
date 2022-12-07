import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement, incrementByAmount } from '../redux/counter'

function Counter() {

    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>This count is: {count}</h2>
            <button type="button" onClick={ () => dispatch(increment() ) }>Increment</button>&nbsp;
            <button type="button" onClick={ () => dispatch(decrement() ) }>Decrement</button>
            <button type="button" onClick={ () => dispatch(incrementByAmount(5) ) }>Increment By 5</button>
        </div>
    )
}

export default Counter
