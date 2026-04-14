function Header({ titulo, children }) {
  return (
    <header>
      <h1>{titulo}</h1>
      {children}
    </header>
  )
}

export default Header