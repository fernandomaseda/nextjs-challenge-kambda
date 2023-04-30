
export const API = process.env.NEXT_PUBLIC_API_URL ?? false;

if (!API) {
  throw new Error(
    'Please define the NEXT_PUBLIC_API_URL environment variable inside .env'
  )
}