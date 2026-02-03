import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return NextResponse.json(data);
}
