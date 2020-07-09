import { MessageBox } from 'element-ui'

/**
 *
 * @param {Function} action
 * @param text
 * @param title
 * @param type
 * @returns {function(...[*]=)}
 */
export function useConfirmAction (action, { text = 'Are you sure?', title, type = 'warning' } = {}) {
  return (item) => {
    MessageBox.confirm(text, title, { type })
      .then(() => action(item))
      .catch(() => {
      })
  }
}
