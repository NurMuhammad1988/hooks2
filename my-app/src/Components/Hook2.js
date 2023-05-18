import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'

function Hook2() {

    const [users, setUsers] = useState("users/1");
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${users}`)
            .then(response => response.json())
            .then(json => setData(json))
            .then(json => console.log(json))

    }, [users]);

    return (
        <div className='container '>

            <Row className='justify-content-around'>
                <h3 className='mt-1 text-center text-danger'>{users}</h3>
                <hr />
                <button className='btn btn-primary  mt-5 w-25  ' onClick={() => setUsers('posts/1')}>posts</button>
                <button className='btn btn-warning  mt-5 w-25  ' onClick={() => setUsers('photos/1')}>photos</button>
                <button className='btn btn-secondary  mt-5 w-25  ' onClick={() => setUsers('todos/1')}>comments</button>
            </Row>

            <pre className='preee'>

                {JSON.stringify(data, null, 2)}

            </pre>

        </div>
    )
    
}

export default Hook2;


