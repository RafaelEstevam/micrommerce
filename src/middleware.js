import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const cookies = req.cookies.getAll();
  console.log(cookies);
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }