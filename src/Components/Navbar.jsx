

function Navbar() {
    return (
        <header className="site-header">
          
                <a className="site-header__logo" href="#home">
                Grounded
                </a>

                <nav className="site-header__nav" aria-label="Hovedmeny">
                    <a className="site-header__link" href="#tjenester">Tjenester</a>
                    <a className="site-header__link" href="#bedrifter">For bedrifter</a>
                    <a className="site-header__link" href="#om-grounded">Om Grounded</a>
                    <a className="site-header__link" href="#kontakt">Kontakt</a>
                </nav>

        </header>
    )
}

export default Navbar