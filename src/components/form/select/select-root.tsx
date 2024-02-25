'use client'

import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectRootProps = SelectPrimitive.SelectProps

export function SelectRoot({ ...props }: SelectRootProps) {
  return <SelectPrimitive.Root {...props} />
}
