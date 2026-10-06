function Footer() {
    return(
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__logo">
                    <h3>Grounded</h3>
                    <p>Stå stødig i en travel hverdag</p>
                </div>
                <div className="footer__nav">
                    <p>Utforsk</p>
                    <ul>
                        <li>
                            <a 
                        href="#"
                        onClick={(event) => event.preventDefault()}
                            >
                                Tjenester
                            </a>
                        </li>
                        <li>
                            <a 
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        >
                            For bedrifter
                            </a>
                        </li>
                        <li>
                            <a 
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        >
                            Om Grounded
                            </a>
                        </li>
                        <li>
                            <a 
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        >
                            Kontakt
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__contact">
                    <p>Kontakt</p>
                    <ul>
                        <li>
                            <a 
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        >
                            maria.k@grounded.no
                            </a>
                        </li>
                        <li>Bergen, Norge</li>
                        <li>
                            <a 
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        >
                            LinkedIn
                            </a>
                        </li>
                        <li>
                            <a 
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        >
                            Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
                

            <div className="footer__bottom">
                <p>© 2026 Grounded</p>
                <div className="footer__legal-links">
                    <a
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    >
                        Personvern
                    </a>
                    <a
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    >
                        Cookies
                    </a>    
                </div>
            </div>
        </footer>
    )
}

export default Footer