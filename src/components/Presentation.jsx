import React from 'react'
import ReactGoogleSlides from 'react-google-slides'

const PresentationComp = () => {
  return (
    <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/1wJGj3iT7hiWlgFF-IN6MiYr2z6VwmmBcV_jB8CFgQ_Q/"
      slideDuration={5}
      position={1}
      showControls
      loop
    />
  )
}

export default PresentationComp