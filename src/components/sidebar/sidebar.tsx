'use client'
import { Logo } from './logo'
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import { Button, Navigation, NavItem } from '@/components'
import { UnusedSpaceWidget } from './unused-space-widget'
import { Profile } from './profile'
import { Input } from '@/components/input'
import * as Collapsible from '@radix-ui/react-collapsible'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className={'flex items-center justify-between'}>
        <Logo />
        <Collapsible.Trigger className={'lg:hidden'} asChild>
          <Button type={'button'} variant={'ghost'}>
            <Menu className={'h-6 w-6'} />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className={
          'flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex'
        }
      >
        <Input.Root>
          <Input.Prefix>
            <Search className={'h-5 w-5 text-zinc-500'} />
          </Input.Prefix>
          <Input.Control placeholder={'Search'} />
        </Input.Root>
        <Navigation />
        <div className={'mt-auto flex flex-col gap-6'}>
          <nav className={'space-y-0.5'}>
            <NavItem title={'Support'} icon={LifeBuoy} />
            <NavItem title={'Settings'} icon={Cog} />
          </nav>

          <UnusedSpaceWidget />

          <div className={'h-px bg-zinc-200 dark:bg-zinc-700'} />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
