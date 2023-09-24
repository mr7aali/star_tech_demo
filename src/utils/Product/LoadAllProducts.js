export async function loadAllProduct(page) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://assignment-3-8p6flgq4f-mr7aali.vercel.app/api/v1/product?page=${page}&limit=10`
  );
  const data = await res.json();

  return data;
}
