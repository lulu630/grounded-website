import couch from "../assets/images/couch.jpg"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)



function About() {

    const titleRef = useRef(null)
    const sectionRef = useRef(null)
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


        useGSAP(()=> {
            if (!isVisible) return // без этой строки анимация будет создаваться при первом запуске стр, и повторяться при открытии секции

            const media = gsap.matchMedia()

            media.add({
                vertical: "(width < 1300px)",
                horizontal: "(width >= 1300px)",
                reduceMotion: "(prefers-reduced-motion: reduce)",
            }, (context) => {
                const { vertical, reduceMotion } = context.conditions
                if(reduceMotion) return
            
                const direction = vertical ? "yPercent" : "xPercent"

                const timeline = gsap.timeline({
                    defaults: {
                        duration: 2, // длительность анимации
                        ease: "power1.inOut", // https://gsap.com/docs/v3/Eases/
                    },
                })

                timeline.to(".about__panel--left", {
                    [direction]: -100, // от размера самой створки вдоль выбранной оси
                }, 0)

                timeline.to(".about__panel--right", {
                    [direction]: 100
                }, 0)
            })

            return () => media.revert()
            
        }, {
            dependencies: [isVisible],
            scope: sectionRef, // искать элементы по селекторам только в этой секции
            revertOnUpdate: true, // перед новым запуском очистить пред. анимацию и восст. исходные знач
        })


    return(
        <section 
        className="about"
        ref={sectionRef}
        >
            <div
            className="about__panel about__panel--left"
            aria-hidden="true"
            />
            <div
            className="about__panel about__panel--right"
            aria-hidden="true"
            />

            <div className="about__content">
                <img 
                className="about__img"
                src={couch} 
                alt="red-haired woman in a feminine suit" />

                <div className="about__text">
                <h2 
                ref={titleRef} 
                className="about__title">Om Grounded
                </h2>
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
