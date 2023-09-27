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

export const pelinAika = (sekunnit: number | undefined): string | null => {
  if (sekunnit) {
    const minuutit: number = Math.floor(sekunnit / 60);
    const ylijaamaSekunnit: number = sekunnit % 60;
    return `${minuutit.toString().padStart(2, "0")}:${ylijaamaSekunnit
      .toString()
      .padStart(2, "0")}`;
  }
  return null;
};

export const pelinEra = (ottelu: Ottelulistaus): string => {
  let eraString: string = "";
  if (ottelu.gameTime != undefined) {
    if (ottelu.gameTime === 1200 || ottelu.gameTime === 2400) {
      eraString = "Erätauko";
    }
    if (ottelu.gameTime > 0 && ottelu.gameTime < 1200) {
      eraString = "1. erä käynnissä";
    } else if (ottelu.gameTime > 1200 && ottelu.gameTime < 2400) {
      eraString = "2. erä käynnissä";
    } else if (ottelu.gameTime > 2400 && ottelu.gameTime < 3600) {
      eraString = "3. erä käynnissä";
    } else if (ottelu.gameTime > 3600 && ottelu.gameTime < 3900) {
      eraString = "Jatkoaika käynnissä";
    } else if (ottelu.gameTime == 3900) {
      eraString = "Voittolaukauskilpailu käynnissä";
    }
  }
  return eraString;
};
