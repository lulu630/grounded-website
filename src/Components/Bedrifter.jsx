import bedrifter from "../assets/images/bedrifter.jpg"
import { useEffect, useRef, useState } from "react"


function Bedrifter() {

    const titleRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    
    
        useEffect( () => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                        setIsVisible(true)
                        observer.disconnect()
                    }
                },
                { threshold: 1 }
            )
    
            const title = titleRef.current
    
            if (title) {
                observer.observe(title)
            } return () => observer.disconnect()
        },[])



    return(
        <section className="bedrifter">
            <img 
            className="bedrifter__img"
            src={bedrifter} 
            alt="People sitting in a conference room"/>

            <svg width="0" height="0" className="img-wave" aria-hidden="true">
                <defs>
                    <clipPath id="imageCurve" clipPathUnits="objectBoundingBox">
                        <path d="
                        M 0 0
                        H 1
                        V .83
                        C .82 .82, .70 1, .5 1
                        C .30 1, .17 .82, 0 .82
                        Z
                    " />

                    </clipPath>
                </defs>
            </svg>

            <div className="bedrifter__content">
                <h2 ref={titleRef} className={`bedrifter__title${isVisible ? ' bedrifter__title--visible' : ''}`}
            
                >
                    For bedrifter
                </h2>
                <div className="bedrifter__text">
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
                    Ta kontakt for tilbud
                    </a>
                </div>

            </div>



        </section>
    )

}

export default Bedrifter