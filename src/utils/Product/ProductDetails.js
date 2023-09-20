export async function loadProductDetails() {
  const res = await fetch(process.env.PRODUCTS);
  const posts = await res.json();
  const paths = posts.data.map((post) => ({
    params: { productId: post.id },
  }));
  return paths;
}
