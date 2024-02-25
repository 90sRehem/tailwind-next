import { SettingsTabs } from '@/components'

export default function Home() {
  return (
    <>
      <h1 className={'text-3xl font-medium text-zinc-900 dark:text-zinc-100'}>
        Settings
      </h1>
      <SettingsTabs />
    </>
  )
}
