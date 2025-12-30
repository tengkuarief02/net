export default async function handler(req, res) {
  try {
    const id = req.query.id;
    if (!id) return res.status(400).json({ error: 'id required' });

    const r = await fetch(
      'https://netshort.sansekai.my.id/api/netshort/allepisode?shortPlayId=' + id
    );
    const j = await r.json();
    res.status(200).json(j);
  } catch {
    res.status(500).json({ error: 'episodes failed' });
  }
}
