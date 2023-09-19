export async function loadProduct() {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.HOMEPRODUCT);
  const data = await res.json();

  return data;
}
