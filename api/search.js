export default async function handler(req, res) {
  try {
    const q = req.query.q || '';
    const url = `https://netshort.sansekai.my.id/api/netshort/search?query=${encodeURIComponent(q)}`;
    const r = await fetch(url);
    const j = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(j);
  } catch (e) {
    res.status(500).json({ error: 'search failed' });
  }
}
