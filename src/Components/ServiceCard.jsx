function ServiceCard( {title, description, tags} ) {
    

    function handleMouseMove(event) {
        const card = event.currentTarget
        const rect = card.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)

        /* 
        1) currentTarget — card which event handler is attached to.
        
        2) rect — card’s size and position in the viewport.
        
        3) x and y — mouse position relative to the card’s top-left corner.
        
        4) setProperty stores the coordinates in CSS variables for that specific card.

        */


    }


    return (
        <article 
        className="card"
        onMouseMove={handleMouseMove}
        >

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