'use client'
import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectItemValueProps = SelectPrimitive.SelectValueProps

export function SelectItemValue(props: SelectItemValueProps) {
  if (!props.children) {
    return <SelectPrimitive.Value {...props} />
  }
  return (
    <SelectPrimitive.Value {...props}>
      <span className="flex items-center gap-2 text-black dark:text-zinc-100">
        {props.children}
      </span>
    </SelectPrimitive.Value>
  )
}
