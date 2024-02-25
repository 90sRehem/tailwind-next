'use client'
import React, { ComponentProps } from 'react'
import { useFileInputContext } from './file-input.context'

type FileInputControlProps = ComponentProps<'input'>

export function FileInputControl({
  multiple = false,
  ...props
}: FileInputControlProps) {
  const { id, onFilesSelected } = useFileInputContext()

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return
    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type={'file'}
      className={'sr-only'}
      id={id}
      onChange={handleFileSelected}
      multiple={multiple}
      {...props}
    />
  )
}
