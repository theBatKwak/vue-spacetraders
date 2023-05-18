import type { System } from '@/models/system.model'
import axios from 'axios'

export class SystemsService {
  public static async getSystemData(systemSymbol: string): Promise<System> {
    const { data } = await axios.get('https://api.spacetraders.io/v2/systems/' + systemSymbol)
    return data.data as System
  }
}
