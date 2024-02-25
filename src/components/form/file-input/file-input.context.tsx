'use client'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextData = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple?: boolean) => void
  onRemoveFile: (file: File) => void
}

const FileInputContext = createContext<FileInputContextData | null>(null)
export const useFileInputContext = () => {
  const context = useContext(FileInputContext)
  if (context === null) {
    throw new Error('useFileInputContext must be used within a FileInput.Root')
  }
  return context
}

type FileInputProviderProps = PropsWithChildren<NonNullable<unknown>>

export function FileInputProvider({ children }: FileInputProviderProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  const onFilesSelected = (files: File[], multiple = false) => {
    if (multiple) {
      setFiles((prevState) => [...prevState, ...files])
    } else {
      setFiles(files)
    }
  }

  const onRemoveFile = (file: File) => {
    setFiles((prevState) => prevState.filter((f) => f !== file))
  }

  return (
    <FileInputContext.Provider
      value={{ id, onFilesSelected, files, onRemoveFile }}
    >
      {children}
    </FileInputContext.Provider>
  )
}
