export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return Response.json({ success: false, message: 'Method not allowed' }, { status: 405 });
  }

  const accessKey = process.env.WEB3FORMS_KEY ?? process.env.PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    return Response.json({ success: false, message: 'Contact form is not configured' }, { status: 500 });
  }

  const endpoint = process.env.WEB3FORMS_URL ?? process.env.PUBLIC_WEB3FORMS_URL ?? 'https://api.web3forms.com/submit';
  const formData = await req.formData();
  formData.set('access_key', accessKey);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    const payload = await response.json().catch(() => ({
      success: false,
      message: 'Unexpected response from contact service',
    }));

    return Response.json(payload, { status: response.ok ? 200 : response.status });
  } catch {
    return Response.json({ success: false, message: 'Unable to send message' }, { status: 502 });
  }
}
