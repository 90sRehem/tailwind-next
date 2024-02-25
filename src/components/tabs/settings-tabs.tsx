'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tab-item'
import { useState } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { Button, FileInput, Input, Label, Select, Textarea } from '@/components'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

const tabItems = [
  { value: 'tab1', title: 'My details' },
  { value: 'tab2', title: 'Profile' },
  { value: 'tab3', title: 'Password' },
  { value: 'tab4', title: 'Team' },
  { value: 'tab5', title: 'Plan' },
  { value: 'tab6', title: 'Billing' },
  { value: 'tab7', title: 'Email' },
  { value: 'tab8', title: 'Notifications' },
  { value: 'tab9', title: 'Integrations' },
  { value: 'tab10', title: 'API' },
] as const

const toggleMenuMap = [
  {
    name: 'Bold',
    icon: Bold,
  },
  {
    name: 'Italic',
    icon: Italic,
  },
  {
    name: 'Link',
    icon: Link,
  },
  {
    name: 'List',
    icon: List,
  },
  {
    name: 'List Ordered',
    icon: ListOrdered,
  },
] as const

export function SettingsTabs() {
  const [selectedTab, setSelectedTab] = useState('tab1')
  return (
    <Tabs.Root
      value={selectedTab}
      onValueChange={setSelectedTab}
      defaultValue={'tab1'}
    >
      <ScrollArea.Root className={'w-full'} type={'scroll'}>
        <ScrollArea.Viewport className={'w-full overflow-x-scroll'}>
          <Tabs.List
            className={
              'mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700'
            }
          >
            {tabItems.map(({ value, title }) => (
              <TabItem
                key={value}
                value={value}
                title={title}
                isSelected={selectedTab === value}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation={'horizontal'}
          className={
            'flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100'
          }
        >
          <ScrollArea.Thumb
            className={'relative flex-1 rounded-lg bg-zinc-300'}
          />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <Tabs.Content value="tab1">
        <div className={'mt-6 flex flex-col'}>
          <div
            className={
              'flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center'
            }
          >
            <div className={'space-y-1'}>
              <h2
                className={
                  'text-lg font-medium text-zinc-900 dark:text-zinc-100'
                }
              >
                Personal info
              </h2>
              <span className={'text-sm text-zinc-500 dark:text-zinc-400'}>
                Update your pensonal info
              </span>
            </div>
            <div className={'flex items-center gap-2'}>
              <Button type={'button'}>Cancel</Button>
              <Button
                type={'submit'}
                form={'settings-form'}
                variant={'outline'}
              >
                Save
              </Button>
            </div>
          </div>

          <form
            id={'settings-form'}
            className={
              'mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700'
            }
          >
            <div className={'flex flex-col gap-3 lg:grid lg:grid-cols-form'}>
              <Label.Root htmlFor={'firstName'}>Name</Label.Root>
              <div className={'flex flex-col gap-6 lg:grid lg:grid-cols-2'}>
                <Input.Root>
                  <Input.Control
                    type={'text'}
                    id={'firstName'}
                    placeholder={'First name'}
                  />
                </Input.Root>

                <div className={'flex flex-col gap-3 lg:block'}>
                  <Label.Root htmlFor={'firstName'}>Last name</Label.Root>
                  <Input.Root>
                    <Input.Control
                      type={'text'}
                      id={'firstName'}
                      placeholder={'Last name'}
                    />
                  </Input.Root>
                </div>
              </div>
            </div>

            <div
              className={'flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form'}
            >
              <Label.Root htmlFor={'email'}>Email</Label.Root>

              <Input.Root>
                <Input.Prefix>
                  <Mail className={'h-5 w-5 text-zinc-400'} />
                </Input.Prefix>
                <Input.Control
                  type={'email'}
                  id={'email'}
                  placeholder={'email@example.com'}
                />
              </Input.Root>
            </div>

            <div
              className={'flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form'}
            >
              <Label.Root htmlFor={'photo'}>
                Your photo
                <Label.Description>
                  {' '}
                  This will be displayed on your profile.
                </Label.Description>
              </Label.Root>

              <FileInput.Root
                className={'flex flex-col gap-5 lg:flex-row lg:items-start'}
              >
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>

            <div
              className={'flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form'}
            >
              <Label.Root htmlFor={'role'}>Role</Label.Root>

              <Input.Root>
                <Input.Control
                  type={'text'}
                  id={'role'}
                  placeholder={'Admin'}
                />
              </Input.Root>
            </div>

            <div
              className={'flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form'}
            >
              <Label.Root htmlFor={'role'}>Country</Label.Root>

              <Select.Root placeholder={'Select a country'}>
                <Select.Item value={'US'} text={'United States'} />
                <Select.Item value={'BR'} text={'Brazil'} />
              </Select.Root>
            </div>

            <div
              className={'flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form'}
            >
              <Label.Root htmlFor={'role'}>Timezone</Label.Root>

              <Select.Root placeholder={'Select a timezone'}>
                <Select.Item
                  value="utc8"
                  text="Pacific Standard Time (UTC-08:00)"
                />{' '}
                <Select.Item
                  value="utc3"
                  text="America São Paulo (UTC-03:00)"
                />
              </Select.Root>
            </div>

            <div
              className={'flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'}
            >
              <Label.Root htmlFor={'photo'}>
                Bio
                <Label.Description>
                  {' '}
                  Write a short introduction.
                </Label.Description>
              </Label.Root>

              <div className={'space-y-3 '}>
                <div className={'flex flex-col gap-3 lg:grid lg:grid-cols-2'}>
                  <Select.Root placeholder={''} defaultValue={'normal'}>
                    <Select.Item
                      value="normal"
                      text="Normal text"
                      defaultChecked
                    />{' '}
                    <Select.Item value="md" text="markdown" />
                  </Select.Root>

                  <div className={'flex items-center gap-1'}>
                    {toggleMenuMap.map(({ name, icon: Icon }) => (
                      <Button key={name} type="button" variant="ghost">
                        <Icon
                          className="h-4 w-4 text-zinc-500"
                          strokeWidth={3}
                        />
                      </Button>
                    ))}
                  </div>
                </div>

                <Textarea
                  id={'bio'}
                  defaultValue={
                    "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.\n"
                  }
                />
              </div>
            </div>

            <div
              className={'flex flex-col gap-3 py-5 lg:grid lg:grid-cols-form'}
            >
              <Label.Root htmlFor={'projects'}>
                Portfolio projects
                <Label.Description>
                  Share a few snippets of your work.
                </Label.Description>
              </Label.Root>

              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.List />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>

            <div className={'flex items-center justify-end gap-2 pt-5'}>
              <Button type={'button'} variant={'outline'}>
                Cancel
              </Button>
              <Button type={'submit'}>Save</Button>
            </div>
          </form>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  )
}
