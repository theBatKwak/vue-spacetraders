import { useCookies } from '@vueuse/integrations/useCookies'

export class LocalDataService {
  public static setLocalData(token: string): void {
    const { set } = useCookies(['auth'])
    set('auth', token)
  }

  public static getLocalData(): string | undefined {
    const { get } = useCookies(['auth'])
    return get('auth')
  }

  public static removeLocalData(): void {
    const { remove } = useCookies(['auth'])
    remove('auth')
  }
}
