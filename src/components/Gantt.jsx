import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Gantt = () => {
  return (
    <Container>
      <a href='https://i.imgur.com/2y0EVO3.png' target="_blank" rel='noreferrer'>
        <Image src='https://i.imgur.com/2y0EVO3.png' fluid />
      </a>
      <h6 className='text-danger'>Click on the picture to open the original</h6>
    </Container>
  )
}

export default Gantt