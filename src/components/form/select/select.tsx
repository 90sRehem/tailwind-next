import { SelectContent, type SelectContentProps } from './select-content'
import { SelectItem, type SelectItemProps } from './select-item'
import {
  SelectItemPrefix,
  type SelectItemPrefixProps,
} from './select-item-prefix'
import { SelectItemText, type SelectItemTextProps } from './select-item-text'
import { SelectItemValue, type SelectItemValueProps } from './select-item-value'
import { SelectRoot, type SelectRootProps } from './select-root'
import { SelectSeparator, type SelectSeparatorProps } from './select-separator'
import { SelectTrigger, type SelectTriggerProps } from './select-trigger'

export const Select = {
  Content: SelectContent,
  Item: SelectItem,
  ItemPrefix: SelectItemPrefix,
  ItemText: SelectItemText,
  Value: SelectItemValue,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
}

export type {
  SelectContentProps,
  SelectItemProps,
  SelectItemPrefixProps,
  SelectItemTextProps,
  SelectItemValueProps,
  SelectRootProps,
  SelectSeparatorProps,
  SelectTriggerProps,
}
