export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatUrl(path: string, baseUrl: string = 'https://uzairahmad.vercel.app'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');
  return `${cleanBase}/${cleanPath}`;
}
