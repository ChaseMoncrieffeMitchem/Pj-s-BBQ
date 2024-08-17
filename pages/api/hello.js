// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.status(200).json({ name: "John Doe" });

  if (req.method === 'POST') {
    const { captcha } = req.body;

    if (!captcha) {
      return res.status(400).json({ error: 'No reCAPTCHA token provided.' });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

    const response = await fetch(verifyUrl, { method: 'POST' });
    const data = await response.json();

    if (data.success) {
      // Handle successful verification (e.g., save data, send email)
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: 'reCAPTCHA verification failed.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
