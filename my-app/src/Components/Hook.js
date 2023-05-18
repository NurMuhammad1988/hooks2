import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'


function Hook() {

    const [cars, setCars] = useState("BMW");

    useEffect(() => {
        console.log("render" + cars);
    }, [cars]);

    return (
        <div className='container-fluid   '>

            <Row className='justify-content-around flex-wrap    '>
                <h3 className='mt-1 text-center text-danger'>{cars}</h3>
                <hr />
                <button className='btn btn-primary  mt-5  col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12 ' onClick={() => setCars('Audi')}>Audi</button>
                <button className='btn btn-warning  mt-5  col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12' onClick={() => setCars('Mers')}>Mers</button>
                <button className='btn btn-secondary mt-5 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12' onClick={() => setCars('Chevrolet')}>Chevrolet</button>
            </Row>



        </div>
    )
}

export default Hook;
