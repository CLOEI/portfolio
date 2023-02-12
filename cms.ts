import { createClient } from "contentful"

console.log(process.env.ACCESS_TOKEN)
const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!
})

export default client;