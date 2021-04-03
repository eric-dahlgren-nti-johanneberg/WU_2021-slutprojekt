const createArticleHTML = (article) => {
  const { title, summary, author, published } = article;

  const date = new Date(published);

  return `<article>
    <h3>${title}</h3>
    <h4>${author} - ${date.toDateString()}<h4>
    <p>${summary}</p>
  </article>`;
};

const blogContainer = document.getElementById("blog");
const fetchLatestBlogPosts = async () => {
  const posts = await fetch("https://blog.dgren.dev/api/latest").then((res) =>
    res.json()
  );

  console.log(posts);

  blogContainer.innerHTML = posts
    .sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
    .map((p) => createArticleHTML(p))
    .join("");
};

fetchLatestBlogPosts();
