import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
type InputPrefixProps = ComponentProps<'div'>

function InputPrefix({ ...props }: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

function InputControl({ ...props }: InputControlProps) {
  return (
    <input
      type={'text'}
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-zinc-900 outline-none placeholder:text-zinc-600',
        'dark:text-zinc-100 dark:placeholder:text-zinc-400',
        props.className,
      )}
      {...props}
    />
  )
}

type InputProps = ComponentProps<'div'>

function InputRoot(props: InputProps) {
  return (
    <div
      className={twMerge(
        'mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:focus:within:border-violet-500 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Prefix: InputPrefix,
  Control: InputControl,
}
