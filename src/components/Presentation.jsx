import React from 'react'
import ReactGoogleSlides from 'react-google-slides'

const PresentationComp = () => {
  return (
    <ReactGoogleSlides
      width={960}
      height={569}
      // slidesLink="https://docs.google.com/presentation/d/1NXZHC6f6Lu7C5R1jbjg-apCAE4S6h9tNA1mjdHTtiyQ/" -- templte
      slidesLink="https://docs.google.com/presentation/d/1ZiOPaXLIyatmTfw7uy650TiD6i4KOPZc4kY1OxJTI5A/"
      position={1}
      showControls
      loop
    />
  )
}

export default PresentationComp