export function getImgUrlWithWidth(url: string, width: number): string {
  return `${url}?param=${width}y${width}`
}
