export function useConfirmAction (action, text) {
  return (item) => {
    if (confirm(text || 'Are you sure?')) {
      action(item)
    }
  }
}
