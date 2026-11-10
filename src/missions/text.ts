/**
 * A number inside a Hebrew sentence. The isolate characters keep a sign and
 * its digits together and in order on a right to left line.
 */
export function num(value: number | string): string {
  return `⁦${value}⁩`
}
