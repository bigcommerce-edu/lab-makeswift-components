import { lazy } from 'react'
import { Image, Style } from '@makeswift/runtime/controls'
import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  lazy(() => import('./ImageCompareSlider')),
  {
    type: 'img-compare-slider',
    label: 'Image Compare Slider',
    props: {

    },
  }
)

