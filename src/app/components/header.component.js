import Search from "./search.component";

export default function Header() {
    return (
        <header className="fixed w-full py-4 z-10">
            <div className="bg-transparent flex justify-center">
                <div className="flex flex-col items-center max-w-7xl w-full gap-4">
                    <h1 className="text-white text-3xl font-bold">Printi</h1>
                    <div className="flex justify-between w-full">
                        <button className="text-slate-500 text-white">menu</button>
                        <Search />
                        <h6 className="text-slate-500 text-1xl font-bold text-white">carrinho</h6>
                    </div>
                </div>
            </div>
        </header>
    )
}