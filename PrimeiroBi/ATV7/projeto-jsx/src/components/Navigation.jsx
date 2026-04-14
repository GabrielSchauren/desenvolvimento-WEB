function Navigation({ links }) {
  return (
    <nav>
      {links.map((link) => (
        <a key={link.id} href={link.url}>
          {link.texto}
        </a>
      ))}
    </nav>
  )
}

export default Navigation