import bedrifter from "../assets/images/bedrifter.jpg"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText" // плагин для сплита, путь внутри пакета
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(SplitText, useGSAP) //регистрирует плагин в GSAP, чтобы они работали вместе 


function Bedrifter() {
    const contentRef = useRef(null)
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


        useGSAP(() => {
            if (!isVisible) return
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
            
            SplitText.create(contentRef.current.querySelectorAll('.bedrifter__text p '), {
                type: 'lines',
                autoSplit: true,

                onSplit(self) {
                const links = contentRef.current.querySelectorAll('.bedrifter__text a')
                const timeline = gsap.timeline()

                timeline.from(self.lines, {
                    y: 24,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                })

                timeline.from(links, {
                    y: 16,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power2.out',
                })

                return timeline
                },}
            )
                }, { dependencies: [isVisible], scope: contentRef, revertOnUpdate: true })




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

            <div 
            ref={contentRef}
            className="bedrifter__content">
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