import DropMenu from "@/components/DropMenu";

export default function DataRowSeries({serie}){
    const {nome} = serie;
    return(
        <div id="data-row" className="group/row flex items-center justify-between hover:bg-slate-800 p-2 rounded cursor-pointer " >
            <div className="flex gap-1">
                <h2>{nome}</h2>
            </div>
            <div className="flex items-center">
                <span>teste</span>
                <span className="invisible group-hover/row:visible" >
                    <DropMenu />    
                </span>
            </div>
        </div>
    )
}