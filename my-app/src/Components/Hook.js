// import React, { useEffect, useState } from 'react'
// import { Row } from 'react-bootstrap'


// function Hook() {

//     const [cars, setCars] = useState("BMW");

//     useEffect(() => {
//         console.log("render" + cars);
//     }, [cars]);

//     return (
//         <div className='container '>

//             <Row className='justify-content-around'>
//                 <h3 className='mt-1 text-center text-danger'>{cars}</h3>
//                 <hr />
//                 <button className='btn btn-primary  mt-5 w-25  ' onClick={() => setCars('Audi')}>Audi</button>

//                 <button className='btn btn-warning  mt-5 w-25  ' onClick={() => setCars('Mers')}>Mers</button>
//                 <button className='btn btn-secondary  mt-5 w-25  ' onClick={() => setCars('Chevrolet')}>Chevrolet</button>
//             </Row>



//         </div>
//     )
// }

// export default Hook;
