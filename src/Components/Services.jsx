import ServiceCard from "./ServiceCard"
import useIntersectionObserver from "../hooks/useIntersectionObserver"

const services = [
    {
        id: "coaching",
        title: "1:1 Coaching",
        description: "Personlig mindfulnesscoaching for deg som ønsker mindre stress, bedre fokus og mer ro i hverdagen. Sammen finner vi verktøy og praksiser som passer din livssituasjon, ditt tempo og det du trenger mest akkurat nå.",
        tags: ["Personlig oppfølging", "Fokus", "Stressmestring"]
    },

    {
        id: "grounded-reset",
        title: "Grounded Reset",
        description: "Et seks ukers program som hjelper deg med å senke skuldrene, finne klarhet og bygge en mer bærekraftig hverdag. Gjennom enkle og praktiske øvelser får du støtte til å skape ro, fokus og bedre tilstedeværelse over tid.",
        tags: ["6 uker", "Praktiske øvelser", "Varige vaner"]
    },

    {
        id: "executive-reset",
        title: "Executive Reset",
        description: "En individuell intensivøkt for ledere, gründere og profesjonelle som trenger rom til å stoppe opp og få oversikt. Denne tjenesten passer for deg som ønsker en målrettet pause for refleksjon, mental avlastning og ny klarhet.",
        tags: ["For ledere", "Intensivøkt", "Klarhet"]
    },
]


function Services() {
   const { ref: titleRef, isVisible } = useIntersectionObserver()

    return(
        <section className="services">
            <h2
            ref={titleRef}
            className={`services__title${isVisible ? ' services__title--visible' : ''}`}
            >
                Finn et opplegg som passer din hverdag
            </h2>
            
            <div className="cards-container">
                {
                    services.map((service) => (
                    <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    tags={service.tags}
                    />
                ))}
            </div>
        </section>
    )   
}



export default Services