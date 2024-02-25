'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export type SelectContentProps = SelectPrimitive.SelectContentProps

export function SelectContent(props: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        {...props}
        sideOffset={8}
        side="bottom"
        position="popper"
        className="group z-10 w-[var(--radix-select-trigger-width)] animate-slideUpAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white will-change-[opacity,transform] dark:border-zinc-700 dark:bg-zinc-800"
      >
        <ScrollArea.Root className="h-full w-full" type="auto">
          <SelectPrimitive.Viewport className="max-h-[300px]" asChild>
            <ScrollArea.Viewport className="h-full w-full overflow-y-scroll">
              {props.children}
            </ScrollArea.Viewport>
          </SelectPrimitive.Viewport>

          <ScrollArea.Scrollbar
            className="invisible flex w-2.5 touch-none select-none bg-zinc-100 p-0.5 group-hover:visible dark:bg-zinc-700"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-zinc-500" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}
