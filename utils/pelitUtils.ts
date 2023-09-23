import { Ottelulistaus } from "../types";

export const paivanPelit = (
  peliLista: Ottelulistaus[],
  paiva: Date
): Ottelulistaus[] => {
  let valittuPaiva: string = paiva.toLocaleDateString("fi-Fi");

  let paivanPelit: Ottelulistaus[] = [];

  peliLista.map((peli: Ottelulistaus) => {
    let pelinPaiva: string = new Date(peli.start).toLocaleDateString("fi-Fi");
    if (valittuPaiva === pelinPaiva) paivanPelit.push(peli);
  });

  return paivanPelit;
};

export const oddsConvert = (odds: number | undefined): number | null => {
  if (odds) {
    const oddString: string = odds.toString();
    const modifiedString: string =
      oddString.slice(0, 1) + "." + oddString.slice(1);
    return parseFloat(modifiedString);
  } else {
    return null;
  }
};
