export async function GET() {
    const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trainers`)
    const response = await query.json()
    const data = await response.json()
   
    return Response.json({ data })
  }