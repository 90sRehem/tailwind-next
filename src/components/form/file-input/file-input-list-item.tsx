import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { convertBytes } from '@/utils'
import { Button } from '@/components'
import { useFileInputContext } from './file-input.context'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    root: 'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: [
      'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
      'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    ],
    removeButton: '',
  },
  variants: {
    state: {
      progress: {
        root: 'dark:border-zinc-700',
      },
      completed: {
        root: ['border-violet-500, dark:border-violet-300/30'],
      },
      error: {
        root: [
          'bg-error-25 border-error-300',
          'dark:bg-error-500/5 dark:border-error-500/30',
        ],
        icon: [
          'border-error-50 bg-error-100 text-error-600',
          'dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        ],
        removeButton: [
          'text-error-700',
          'hover:text-error-900',
          'dark:text-error-400 dark:hover:text-error-300',
        ],
      },
    },
    defaultVariants: {
      state: 'progress',
    },
  },
})

type FileInputListItemProps = {
  file: File
} & VariantProps<typeof fileItem>

// const state: 'completed' | 'pending' | 'error' = 'error'

export function FileInputListItem({ file, state }: FileInputListItemProps) {
  const { onRemoveFile } = useFileInputContext()
  const { root, icon, removeButton } = fileItem({ state })
  return (
    <div className={root()}>
      <div className={icon()}>
        <UploadCloud className={'h-4 w-4'} />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700 dark:text-error-400">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-error-600 dark:text-error-500">
              {file.name}
            </span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {file.name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {convertBytes(file.size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className={`h-2 ${state === 'completed' ? 'w-full' : 'w-4/5'} rounded-full bg-violet-600 dark:bg-violet-400`}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {state === 'completed' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'completed' ? (
        <CheckCircle2 className={'h-4 w-4 fill-violet-600 text-white'} />
      ) : (
        <Button
          type="button"
          variant="ghost"
          className={removeButton()}
          onClick={() => onRemoveFile(file)}
        >
          <Trash2 className={'h-4 w-4'} />
        </Button>
      )}
    </div>
  )
}
