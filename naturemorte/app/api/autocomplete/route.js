// app/api/autocomplete/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get("input");
  const location = searchParams.get("location");
  const requestId = request.headers.get("x-request-id") || "no-id";

  if (!process.env.OLAMAPS_API_KEY) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  if (!input) {
    return NextResponse.json({ error: "input required" }, { status: 400 });
  }

  // Default location to Jaipur if not provided
  const defaultLocation = "26.9124,75.7873"; // Jaipur coordinates
  const searchLocation = location || defaultLocation;

  const url = `https://api.olamaps.io/places/v1/autocomplete?location=${encodeURIComponent(
    searchLocation
  )}&input=${encodeURIComponent(input)}&api_key=${encodeURIComponent(
    process.env.OLAMAPS_API_KEY
  )}`;

  try {
    const response = await fetch(url, {
      headers: { "X-Request-Id": requestId },
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error("Autocomplete API error:", err);
    return NextResponse.json({ error: "upstream error" }, { status: 502 });
  }
}
