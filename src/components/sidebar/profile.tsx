import { LogOut } from 'lucide-react'
import { Button } from '@/components'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/90sRehem.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Jonathan Rehem
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          jonathan.rehem@outlook.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
