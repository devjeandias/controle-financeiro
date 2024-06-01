import Menu from "../menu"

function Header() {
    return (
        <>
            <header id="header" className="header bg-pink-400 pt-5 pb-2 mb-5 md:pb-0">
                <div className="container mx-auto md:flex justify-between">
                    <h1 className="text-2xl font-thin leading-7 text-white uppercase text-center md:text-left mb-2 pb-4 border-b md:border-0">Controle Financeiro</h1>
                    <Menu />
                </div>
            </header>
        </>
    )
}

export default Header