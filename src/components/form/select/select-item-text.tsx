'use client'
import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectItemTextProps = SelectPrimitive.SelectItemTextProps

export function SelectItemText(props: SelectItemTextProps) {
  return (
    <SelectPrimitive.ItemText asChild {...props}>
      <span className="flex items-center gap-2 text-left leading-5 text-black dark:text-zinc-100">
        {props.children}
      </span>
    </SelectPrimitive.ItemText>
  )
}
