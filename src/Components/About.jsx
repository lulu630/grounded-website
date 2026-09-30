import couch from "../assets/images/couch.jpg"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(SplitText, useGSAP) 



function About() {

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
            
            SplitText.create(titleRef.current.querySelectorAll('.about__text p '), {
                type: 'lines',
                autoSplit: true,

                onSplit(self) {
                const links = titleRef.current.querySelectorAll('.about__text a')
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
                }, { dependencies: [isVisible], scope: titleRef, revertOnUpdate: true })



    return(
        <section className="about">
            <div
            className="about__panel about__panel--left"
            aria-hidden="true"
            />
            <div
            className="about__panel about__panel--right"
            aria-hidden="true"
            />

            <div 
            ref={titleRef}
            className="about__content">
                <img 
                className="about__img"
                src={couch} 
                alt="red-haired woman in a feminine suit" />

                <div className="about__text">
                <h2 
                ref={titleRef} className={`about__title${isVisible ? ' about__title--visible' : ''}`}>Om Grounded</h2>
                <p>
                    Jeg heter Maria Kowalska og jeg står bak Grounded. Med bakgrunn innen organisasjonspsykologi, lederutvikling og mindfulness hjelper jeg mennesker som lever med høyt tempo og stort ansvar, med å finne mer ro, fokus og balanse i hverdagen.
                </p>

                 <p>
                    Grounded kombinerer forskningsbasert mindfulness med praktiske verktøy som faktisk fungerer i en travel hverdag.
                </p>
                    

                <a
                className="card__link" 
                href="#"
                onClick={(event) => event.preventDefault()}
                >
                Les mer
                </a>


                </div>

            </div>
            
        </section>
    )
}

export default About