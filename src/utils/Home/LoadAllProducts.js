export async function loadAllProduct() {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.PRODUCTS);
  const data = await res.json();

  return data;
}
