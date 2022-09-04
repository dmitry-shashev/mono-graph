enum LS_KEYS {}

export abstract class LocalStorageHelper {
  private static save<T>(key: LS_KEYS, data: T): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(String(key), JSON.stringify(data))
    }
  }

  private static load<T>(key: LS_KEYS): T | null {
    if (typeof window !== 'undefined') {
      try {
        const data = localStorage.getItem(String(key))
        if (!data) {
          return null
        }
        return JSON.parse(data)
      } catch (_e) {
        return null
      }
    }
    return null
  }

  public static clearStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
  }
}
