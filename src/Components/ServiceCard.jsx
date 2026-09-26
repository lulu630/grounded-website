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
       

        const horisontal = x / rect.width - 0.5
        const vertical = y / rect.height - 0.5

        card.style.setProperty("--rotate-y", `${horisontal * 5}deg`)
        card.style.setProperty("--rotate-x", `${vertical * -5}deg`)


        /* 
        x / rect.width determines the mouse position as a fraction of the card’s width. After subtracting 0.5, we get:
            - left — -0.5;
            - center — 0;
            - right — 0.5.
        
        */

    }


    function handleMouseLeave(event) {
        const card = event.currentTarget
        card.style.setProperty("--rotate-x", "0deg")
        card.style.setProperty("--rotate-y", "0deg")
    }




    return (
        <article 
        className="card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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