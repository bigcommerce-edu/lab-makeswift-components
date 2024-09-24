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

    },
  }
);
