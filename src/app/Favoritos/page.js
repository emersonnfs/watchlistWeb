import NavBar from "@/components/NavBar";
import DataRowSeries from "./DataRowSeries";

async function getSeries() {
    const url = "http://localhost:8080/api/serie";
    const resp = await fetch(url, { next: { revalidate: 0 } });

    if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error(`Erro ao carregar os dados: ${errorData.message}`);
    }

    const responseData = await resp.json();
    return responseData._embedded.entityModelList; // Retorna a lista de séries
}



export default async function Favoritos() {
    const data = await getSeries();

    return (
        <>

            <NavBar active={"favoritos"}/>
            <main className="bg-slate-900 m-20 p-12 rounded">
                <h2>Favoritos</h2>
                <div id="data" className="text-slate-300 m-1">
                    {data.map(serie => <DataRowSeries serie={serie} /> )}
                </div>
            </main>

        </>
    )
}