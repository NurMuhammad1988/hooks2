import React, { useState } from 'react'
import { Row } from 'react-bootstrap'




export default function Window() {

    const [counter, setCounter] = useState(0)

    function qoshuv() {
        setCounter(counter + 1);
    }

    function ayiruv() {
        setCounter(counter - 1);
        console.log(qoshuv)
    }

    return (

        <div>

            <Row>
                <h1 className='d-flex justify-content-center'>{counter}</h1>
                <button className='btn btn-danger w-50 mb-5 ' onClick={ayiruv}>Ayiruv</button>
                <button className='btn btn-primary w-50 mb-5 ' onClick={qoshuv}>Qo'shuv</button>
            </Row>

        </div>

    )
}
