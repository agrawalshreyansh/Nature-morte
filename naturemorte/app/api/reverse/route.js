// app/api/reverse/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const latlng = searchParams.get("latlng");
  const requestId = request.headers.get("x-request-id") || "no-id";

  if (!process.env.OLAMAPS_API_KEY) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }
  if (!latlng)
    return NextResponse.json({ error: "latlng required" }, { status: 400 });

  const url = `https://api.olamaps.io/places/v1/reverse-geocode?latlng=${encodeURIComponent(
    latlng
  )}&api_key=${encodeURIComponent(process.env.OLAMAPS_API_KEY)}`;

  try {
    const r = await fetch(url, { headers: { "X-Request-Id": requestId } });
    const data = await r.json();
    return NextResponse.json(data, { status: r.status });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "upstream error" }, { status: 502 });
  }
}
