import { Ottelulistaus } from "../types";

export const paivanPelit = (peliLista: Ottelulistaus[], paiva: Date): Ottelulistaus[] => {

    let valittuPaiva : string = paiva.toLocaleDateString("fi-Fi");

    let paivanPelit: Ottelulistaus[] = [];

    peliLista.map((peli: Ottelulistaus)=> {
        let pelinPaiva: string = new Date(peli.start).toLocaleDateString('fi-Fi');
        if(valittuPaiva === pelinPaiva )
        
        paivanPelit.push(peli)
    })

    return paivanPelit;
}

