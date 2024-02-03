import { parse } from 'node-html-parser'

export const LOCALHOST_URL = 'http://localhost:3000'

export async function getActionNo(): Promise<string> {
  const res = await fetch(`${LOCALHOST_URL}/signup`)
  const html = await res.text()
  const $ = parse(html)
  const str = $.querySelector('input[name="$ACTION_1:0"]')
    ?.getAttribute('value')
    ?.toString() as string
  const data = JSON.parse(str)

  return data.id
}
