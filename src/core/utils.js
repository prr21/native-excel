export function storage(key, value = null) {
  if (!value) {
    return JSON.parse(localStorage.getItem(key))
    
  } else if (value === 'DELETE') {
    return localStorage.removeItem(key)
    
  } else if (value === 'CLEAR') {
    return localStorage.clear()
  }

  return localStorage.setItem(key, JSON.stringify(value))
}