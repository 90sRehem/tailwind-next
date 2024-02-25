'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = SelectPrimitive.SelectItemProps

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      {children}
      <SelectPrimitive.ItemIndicator className={'mt-auto'}>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
