import { useRouter } from 'next/router'

interface UseRouteTabsResult {
  currentTab: number
  onTabChange: (value: number) => void
}

export function useRouteTabs(): UseRouteTabsResult {
  const router = useRouter()

  const currentTab = Number(router.query['tab'] ?? 0)

  const onTabChange = (newCurrentTab: number): void => {
    router.push({
      query: {
        ...router.query,
        tab: newCurrentTab,
      },
    })
  }

  return {
    currentTab,
    onTabChange,
  }
}
