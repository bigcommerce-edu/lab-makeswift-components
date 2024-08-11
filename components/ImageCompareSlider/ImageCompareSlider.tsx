'use client'

import { forwardRef, Ref } from 'react'

type Props = {

}

export const ImageCompareSlider = forwardRef((
  { 
    
  }: Props,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div ref={ref}>
      Image Compare Slider
    </div>
  )
})

export default ImageCompareSlider