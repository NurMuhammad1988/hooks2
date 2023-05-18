import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'


function Counter() {

    const name = useFormInput("First Name")
    const surname = useFormInput("Last Name")
    const address = useFormInput("Adress")
    const width = useWindowWidth();
    const [counter, setCounter] = useState(0);
    {/* const [counter, setCounter] = useState('nur use effect');*/ }



    function inc() {
        setCounter(counter + 1);
    };

    useEffect(() => {
        document.title = name + "       " + surname;
    })

    useEffect(() => {
        document.title = counter;
    })

    return (
        <div>
            <div className="container flex-wrap">

                <Row>
                    <h2>Name</h2>
                    <input {...name} />
                </Row>

                <Row>
                    <h2>Surname</h2>
                    <input {...surname} />
                </Row>

                <Row>
                    <h2>Adress</h2>
                    <input {...address} />
                </Row>

                <Row>
                    <button className='btn btn-warning w-50 m-auto mt-5
                    ' onClick={inc}>Click</button>
                </Row>

                <Row>
                    {width}
                </Row>

            </div>
        </div>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return width;

}

export default Counter;








