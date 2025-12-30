export default async function handler(req, res) {
  const r = await fetch('https://netshort.sansekai.my.id/api/netshort/foryou');
  const data = await r.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
