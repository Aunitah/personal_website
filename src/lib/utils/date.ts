export function formatDate(dateString: string) {
  // Add UTC time to ensure consistent dates across timezones
  const date = new Date(`${dateString}T00:00:00Z`)
  
  // Use UTC methods to prevent timezone offset issues
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'  // Force UTC timezone
  }).format(date)
}

export function formatShortDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00Z`)
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC'  // Force UTC timezone
  }).format(date)
}