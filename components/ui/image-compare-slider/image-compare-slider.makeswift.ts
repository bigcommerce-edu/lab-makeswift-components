'use client';

import { lazy } from 'react';
import { Image, Style } from '@makeswift/runtime/controls';
import { runtime } from '~/lib/makeswift/runtime';

runtime.registerComponent(
  lazy(() => import('./image-compare-slider')),
  {
    type: 'img-compare-slider',
    label: 'Image Compare Slider',
    props: {
      image1: Image({
        label: "Image 1",
        format: Image.Format.URL,
      }),
      image2: Image({
        label: "Image 2",
        format: Image.Format.URL,
      }),
    },
  }
);
