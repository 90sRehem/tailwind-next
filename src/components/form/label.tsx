import { ComponentProps } from 'react'

type LabelProps = ComponentProps<'label'>

export function Root(props: LabelProps) {
  return (
    <label
      className={'text-sm font-medium text-zinc-700 dark:text-zinc-300'}
      {...props}
    />
  )
}

type DescriptionProps = ComponentProps<'span'>
function Description(props: DescriptionProps) {
  return (
    <span
      className={'mt-0.5 block text-sm font-normal text-zinc-500'}
      {...props}
    />
  )
}

export const Label = {
  Root,
  Description,
}
