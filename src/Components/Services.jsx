import { useEffect, useRef, useState } from "react"


function Services() {
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
        <section className="services">
            <h2
            ref={titleRef}
            className={`services__title${isVisible ? ' services__title--visible' : ''}`}
            >
                Finn et opplegg som passer din hverdag
            </h2>

        </section>
    )   
}


export default Services