export function getItem(key, defaults = null) {
  const value = localStorage.getItem(key)
  try {
    return typeof value === 'undefined' ? defaults : (JSON.parse(value))
  } catch (e) {
    return value || defaults
  }
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function removeItem(key) {
  localStorage.removeItem(key)
}
