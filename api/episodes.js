export default async function handler(req, res) {
  try {
    const id = req.query.id;
    if (!id) return res.status(400).json({ error: 'shortPlayId required' });

    const url = `https://netshort.sansekai.my.id/api/netshort/allepisode?shortPlayId=${id}`;
    const r = await fetch(url);
    const j = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(j);
  } catch (e) {
    res.status(500).json({ error: 'episodes failed' });
  }
}
