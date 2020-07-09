import { Notification } from 'element-ui'

export function useNotifications () {
  return {
    success: msg => Notification.success(msg),
    error: msg => Notification.error(msg),
  }
}
