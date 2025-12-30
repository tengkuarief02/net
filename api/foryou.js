export default async function handler(req, res) {
  try {
    const r = await fetch('https://netshort.sansekai.my.id/api/netshort/foryou');
    const j = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(j);
  } catch (e) {
    res.status(500).json({ error: 'foryou failed' });
  }
}
