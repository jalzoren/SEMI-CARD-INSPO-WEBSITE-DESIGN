let viewCount = 1000; // Starting count

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    // Increment counter
    viewCount += 1;
    return res.status(200).json({ count: viewCount });
  }

  if (req.method === 'GET') {
    // Return current count
    return res.status(200).json({ count: viewCount });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}