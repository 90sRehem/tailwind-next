'use client'
import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectSeparatorProps = SelectPrimitive.SelectSeparatorProps

export function SelectSeparator(props: SelectSeparatorProps) {
  return <SelectPrimitive.Separator {...props} />
}
