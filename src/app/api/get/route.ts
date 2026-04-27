export async function GET(request: Request) {
  let ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "";

  if (ip.startsWith("::ffff:")) {
    ip = ip.replace("::ffff:", "");
  }

  let location = null;

  if (ip && ip !== "127.0.0.1") {
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    location = await res.json();
  }

  return Response.json({ ip, location });
}