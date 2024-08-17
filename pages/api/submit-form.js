export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { captcha } = req.body;
  
      if (!captcha) {
        return res.status(400).json({ error: 'No reCAPTCHA token provided.' });
      }
  
      const secretKey = '6LcVnygqAAAAAA9DuM6xUp_TKo0OSqvCT6TCoKL2';
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;
  
      const response = await fetch(verifyUrl, { method: 'POST' });
      const data = await response.json();
  
      if (data.success) {
        // Handle form submission, e.g., save to database or send an email
        return res.status(200).json({ success: true });
      } else {
        return res.status(400).json({ error: 'reCAPTCHA verification failed.' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  