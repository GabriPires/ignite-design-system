import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

// const slideIn = keyframes({
//   from: {
//     transform: 'translateY(-100%)',
//   },
//   to: {
//     transform: 'translateY(0)',
//   },
// })

// const slideOut = keyframes({
//   from: {
//     transform: 'translateY(0)',
//   },
//   to: {
//     transform: 'translateY(-100%)',
//   },
// })

const zoomIn = keyframes({
  from: {
    transform: 'scale(0, 0)',
  },
  to: {
    transform: 'scale(1, 1)',
  },
})

const zoomOut = keyframes({
  from: {
    transform: 'scale(1, 1)',
  },
  to: {
    transform: 'scale(0, 0)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${zoomIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${zoomOut} 200ms ease-out`,
  },
})
