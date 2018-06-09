import { Device } from '../models/device';
const device: Device = {
  id: null,
  params: {
    name: null,
    host: null,
    port: 0,
    username: null,
    password: null,
    default: false
  },
  data: null
}
export default {
  /**
   * API host
   */
  API_HOST: 'http://localhost:9090',
  /**
   * Current device
   */
  currentDevice: device
}
