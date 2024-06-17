import { lazy } from 'react'
import { 
  Color, 
  Image, 
  List, 
  Number, 
  Select, 
  Shape, 
  Slot, 
  Style, 
  TextInput 
} from '@makeswift/runtime/controls'
import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  lazy(() => import('./TeamMembers')),
  {
    type: 'team-members',
    label: 'Team Members',
    props: {

    },
  }
)
