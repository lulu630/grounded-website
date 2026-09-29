import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText" 
import { useGSAP } from '@gsap/react'
import { useRef } from "react"

gsap.registerPlugin(SplitText, useGSAP)


function Hero() {
    const heroRef = useRef(null)

            useGSAP(() => {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
                
                SplitText.create(heroRef.current.querySelectorAll('.hero__title, .hero__text '), {
                    type: 'lines',
                    autoSplit: true,

    
                    onSplit(self) {
                    const links = heroRef.current.querySelectorAll('.hero__btn')
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
                    }, { scope: heroRef })
    
    

    return(
        <section className="hero" id="home" aria-label="hero">
                <div 
                className="hero__content"
                ref={heroRef}
                >

                    <h1 className="hero__title">
                        Stå stødig i en travel hverdag.
                    </h1>
                
                    <p className="hero__text">
                            Mindfulnesscoaching for deg som ønsker mindre stress, bedre fokus og mer overskudd.
                    </p>

                    <a className="hero__btn" href="#kontakt">Book samtale</a>
                </div>
            

        </section>
    )
}

export default Hero