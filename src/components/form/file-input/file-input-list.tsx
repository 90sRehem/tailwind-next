'use client'
import { useFileInputContext } from '@/components/form/file-input/file-input.context'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileInputListItem } from '@/components/form/file-input/file-input-list-item'

export function FileInputList() {
  const [parent] = useAutoAnimate({
    duration: 200,
    easing: 'ease-in-out',
  })
  const { files } = useFileInputContext()
  return (
    <div className={'mt-4 space-y-3'} ref={parent}>
      {files.map((file) => (
        <FileInputListItem key={file.name} file={file} state={'progress'} />
      ))}
    </div>
  )
}
