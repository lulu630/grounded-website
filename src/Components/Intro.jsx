import { useEffect, useRef, useState } from "react"

function Intro() {
    const introRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        const section =introRef.current
        
        if (section) {
            observer.observe(section)
        }
        return () => observer.disconnect()
    },[])

    return(
        <section 
        ref={introRef}
        className={`intro${isVisible ? ' intro--visible' : ''}`}
        >
            <p className="intro__text">
                <span className="intro__line">
                    Arbeidsdagen kan være over, men hodet fortsetter. 
                </span>
                <span className="intro__line">
                    Beslutninger, ansvar og neste oppgave følger ofte med 
                </span>
                <span className="intro__line">
                    videre inn i kvelden, og det blir vanskelig å finne en
                </span>
                <span className="intro__line">
                    tydelig overgang mellom prestasjon og pause.
                </span>
            </p>

            <p className="intro__text">
                <span className="intro__line">
                    Grounded gir deg et sted å stoppe opp, legge merke til
                </span >
                <span className="intro__line">
                    egne mønstre og øve på å være mer til stede i det som 
                </span>
                <span className="intro__line">
                    faktisk skjer her og nå.
                </span>
                
            </p>
        </section>
    )
}


export default Intro