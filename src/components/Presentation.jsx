import React from 'react'
import ReactGoogleSlides from 'react-google-slides'

const PresentationComp = () => {
  return (
    <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/1NXZHC6f6Lu7C5R1jbjg-apCAE4S6h9tNA1mjdHTtiyQ/"
      position={1}
      showControls
      loop
    />
  )
}

export default PresentationComp