export default async function handler(req, res) {
  const q = req.query.q || '';
  const url = `https://netshort.sansekai.my.id/api/netshort/search?query=${encodeURIComponent(q)}`;
  const r = await fetch(url);
  const data = await r.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
