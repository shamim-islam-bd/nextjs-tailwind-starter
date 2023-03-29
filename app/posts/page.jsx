import Posts from "./posts";

export default async function About() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  const slice = posts.slice(0, 10);

  return (
    <main>
      <p className="text-2xl py-3">All Posts</p>
      <ul className="grid lg:grid-cols-6 md:grid-cols-4">
        {slice.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </ul>
    </main>
  );
}
