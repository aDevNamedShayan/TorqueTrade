export async function getCars() {
  const baseUrl = process.env.BASE_URL
  if(!baseUrl) throw new Error('BASE_URL is missing from your enviroment')

  const res = await fetch(baseUrl);
  return res.json();
}