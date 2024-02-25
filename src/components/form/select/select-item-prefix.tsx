'use client'
import { ComponentProps, PropsWithChildren } from 'react'

export type SelectItemPrefixProps = PropsWithChildren<ComponentProps<'div'>>

export function SelectItemPrefix(props: SelectItemPrefixProps) {
  return <div {...props} />
}
