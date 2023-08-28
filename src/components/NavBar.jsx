import Link from "next/link";

export default function NavBar({active}) {
    return (
        <>
            <nav className="bg-yellow-400 flex justify-between items-center">

                <ul className="flex gap-12 p-6 items-end text-slate-400 text-sm">
                    <li>
                        <Link href="#">
                            <h1 className="text-2xl font-bold text-black">WatchList</h1>
                        </Link>
                    </li>
                    <li><Link className={active=="home" && "text-gray-800 font-bold"} href="/home">Home</Link></li>
                    <li><Link className={active=="favoritos" && "text-gray-800 font-bold"} href="/favoritos">Favoritos</Link></li>
                    <li><Link className={active=="configuracoes" && "text-gray-800 font-bold"} href="/configuracoes">Configurações</Link></li>
                </ul>

                <div className="h-12 w-12  overflow-hidden flex-col">
                    <img src="https://i.pravatar.cc/100" alt="Avatar do usúario" className="rounded-full"/>
                    <p className="text-gray-800">Usúario</p>
                </div>
            </nav>
        </>
    )
}