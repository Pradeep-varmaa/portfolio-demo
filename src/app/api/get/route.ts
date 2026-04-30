import pool from "@/lib/db";

export async function GET(request: Request) {
  let ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "";

  if (ip.startsWith("::ffff:")) {
    ip = ip.replace("::ffff:", "");
  }

  let location = ' ';

  if (ip && ip !== "127.0.0.1") {
    const ress = await fetch(`http://ip-api.com/json/${ip}`);
    const location = await ress.json();
    const req = await pool.query(`
      insert into portfolio_visits(ip_address,location,longitude,latitude) 
      values($1, $2, $3, $4)ON CONFLICT (ip_address) DO NOTHING;`
      , [location.query, location.city, location.lat, location.lon])

  }
  return Response.json({ ip, location });
}