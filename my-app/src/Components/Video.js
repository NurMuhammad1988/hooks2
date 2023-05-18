import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container';




class Video extends Component {
    render() {
        return (
            <Container className='mb-5'>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player fixed-bottom m-auto'
                        url='https://youtu.be/XyuR-x5PMcU'
                        width='50%'
                        height='40%'
                        controls={true}

                    />
                </div>
            </Container>

        )
    }
}

export default Video