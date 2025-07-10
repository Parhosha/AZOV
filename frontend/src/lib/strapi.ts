export async function fetchStrapi(endpoint: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  }