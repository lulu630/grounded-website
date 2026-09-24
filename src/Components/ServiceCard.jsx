function ServiceCard( {title, description, tags} ) {
    return (
        <article className="card">
            <div className="card__title">
                <h3>{title}</h3>
            </div>

            <div className="card__description">
                <p>{description}</p>
                <a
                className="card__link" 
                href="#"
                onClick={(event) => event.preventDefault()}
                >
                    Les mer
                </a>
            </div>
        
            <div className="card__tags">
                {tags.map((tag) => (
                    <span className="card__tag" key={tag}>
                        {tag}
                    </span>
                ))}

            </div>
        </article>
            
        
    )
}


export default ServiceCard