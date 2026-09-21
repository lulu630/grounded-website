
function Hero() {
    return(
        <section className="hero" id="home" aria-label="hero">
        
                <div className="hero__content">
                    <h1 className="hero__title">
                        Stå stødig i en travel hverdag.
                    </h1>

                    <p className="hero__text">
                        <span className="hero__line">
                            Mindfulnesscoaching for deg som {' '}
                        </span>
                        <span className="hero__line">
                            ønsker mindre stress, bedre fokus {' '}
                        </span>
                         <span className="hero__line">
                            og mer overskudd.
                        </span> 
                    </p>

                    <a className="hero__btn" href="#kontakt">Book samtale</a>
                </div>


            
            
        </section>
    )
}

export default Hero