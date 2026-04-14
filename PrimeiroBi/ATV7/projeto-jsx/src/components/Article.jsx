function Article({ titulo, data, autor, conteudo, imagemUrl, imagemAlt, imagemLegenda }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <time dateTime="2026-02-15">{data}</time>
      <p className="autor">Por: {autor}</p>
      
      <p>{conteudo}</p>

      <figure>
        <img src={imagemUrl} alt={imagemAlt} />
        <figcaption>{imagemLegenda}</figcaption>
      </figure>
    </article>
  )
}

export default Article