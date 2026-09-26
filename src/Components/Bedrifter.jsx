import bedrifter from "../assets/images/bedrifter.jpg"

function Bedrifter() {
    return(
        <section className="bedrifter">
            <img 
            className="bedrifter__img"
            src={bedrifter} 
            alt="People sitting in a conference room"/>

            <div className="bedrifter__content">
                <h2 className="bedrifter__title">For bedrifter</h2>
                <div className="bedrifter__details">
                    <p>
                         Praktiske workshops og programmer som hjelper team med å håndtere stress, styrke fokus og skape en mer bærekraftig arbeidshverdag.
                    </p>
                   
                    <a
                    className="card__link" 
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    >
                    Les mer
                    </a>


                    <a 
                    className="bedrifter__btn" 
                    href="#book"
                    onClick={(event) => event.preventDefault()}
                    >
                    Book samtale
                    </a>
                </div>

            </div>



        </section>
    )

}

export default Bedrifter