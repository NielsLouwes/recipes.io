import { readFile } from 'fs/promises'
import { join } from 'path'


export default defineEventHandler(async () => {
  const data = await readFile(join(process.cwd(), 'server/runtime/data/recipes.json'), 'utf-8')
 
  return JSON.parse(data)
})
