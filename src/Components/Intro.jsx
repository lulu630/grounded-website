import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText" // плагин для сплита, путь внутри пакета
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(SplitText, useGSAP) //регистрирует плагин в GSAP, чтобы они работали вместе 


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

        const section = introRef.current
        
        if (section) {
            observer.observe(section)
        }
        return () => observer.disconnect()
    },[])

    useGSAP(() => {
        if (!isVisible) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        
        SplitText.create(introRef.current.querySelectorAll('.intro__text'), {
            type: 'lines',
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.lines, {
                    y: 24,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                })
                },
                })
                }, { dependencies: [isVisible], scope: introRef, revertOnUpdate: true })
                return(
                    <section 
                    ref={introRef}
                    className={`intro${isVisible ? ' intro--visible' : ''}`}
                    >
                        <p className="intro__text">
                            Arbeidsdagen kan være over, men hodet fortsetter. Beslutninger, ansvar og neste oppgave følger ofte med videre inn i kvelden, og det blir vanskelig å finne en tydelig overgang mellom prestasjon og pause.
                        </p>

                        <p className="intro__text">
                            Grounded gir deg et sted å stoppe opp, legge merke til egne mønstre og øve på å være mer til stede i det som faktisk skjer her og nå.
                        </p>

                    </section> 
                    )
        }


export default Intro
