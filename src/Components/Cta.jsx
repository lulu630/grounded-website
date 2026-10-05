import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText" 
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(SplitText, useGSAP)


function Cta() {
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
                
                SplitText.create(contentRef.current.querySelectorAll('.cta__text'), {
                    type: 'lines',
                    autoSplit: true,
    
                    onSplit(self) {
                    const links = contentRef.current.querySelectorAll('.cta__btn')
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
        <section className="cta">
            <h2 
            ref={titleRef} 
            className={`cta__title${isVisible ? ' cta__title--visible' : ''}`}
            >
                La oss skape mer rom i hverdagen
            </h2>

            <div
            ref={contentRef}
            className="cta__content">

                <p className="cta__text">Ta kontakt for en uforpliktende samtale, så finner vi ut hva som passer deg eller din bedrift.</p>
                <a 
                className="cta__btn" 
                href="#book"
                onClick={(event) => event.preventDefault()}
                >
                    <span>
                        Book en samtale
                    </span>
                
                </a>

            </div>

        </section>

    )
}

export default Cta