'use client'
import { type ComponentProps } from 'react'
import { FileInputProvider } from '@/components/form/file-input/file-input.context'

export type RootProps = ComponentProps<'div'>
export function FileInputRoot(props: RootProps) {
  return (
    <FileInputProvider>
      <div
        // className={
        //   'mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm'
        // }
        {...props}
      />
    </FileInputProvider>
  )
}
