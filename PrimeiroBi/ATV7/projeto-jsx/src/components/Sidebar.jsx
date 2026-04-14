function Sidebar({ posts }) {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.link}>{post.titulo}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar