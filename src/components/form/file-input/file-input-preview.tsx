'use client'
import { User } from 'lucide-react'
import { useFileInputContext } from '@/components/form/file-input/file-input.context'
import { useMemo } from 'react'

export function FileInputPreview() {
  const { files } = useFileInputContext()

  const previewURL = useMemo(() => {
    if (files.length === 0) return null
    return URL.createObjectURL(files[0])
  }, [files])

  return (
    <div
      className={
        'flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10'
      }
    >
      {previewURL ? (
        <img
          src={previewURL}
          alt={'preview'}
          className={'h-16 w-16 rounded-full object-cover'}
        />
      ) : (
        <User className={'h-8 w-8 text-violet-500 dark:text-violet-300'} />
      )}
    </div>
  )
}