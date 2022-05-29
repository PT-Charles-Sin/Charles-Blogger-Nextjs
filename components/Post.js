import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="card">
      <picture>
        <source
          media="(max-width: 799px)"
          srcset={post.frontmatter.cover_image}
        />
        <source
          media="(min-width: 800px)"
          srcset={post.frontmatter.cover_image}
        />
        <img
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.cover_image}
          title={post.frontmatter.cover_image}
          loading="eager"
        />
      </picture>

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <button className="btn">Read More</button>
      </Link>
    </div>
  );
}
