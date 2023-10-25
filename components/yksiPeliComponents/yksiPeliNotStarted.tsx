import { styled } from "nativewind";
import { Peli } from "../../types";
import { View, Text } from "react-native";
import { convertTime } from "../../utils/timeUtils";
import { Pelipaikka } from "../../enums";
import { ActivityIndicator } from "react-native-paper";

interface Props {
  peliData: Peli | null;
}

const StyledText = styled(Text);
const StyledView = styled(View);

function YksiPeliNotStarted({ peliData }: Props): React.ReactElement {
  const startString: string | null = convertTime(peliData?.game.start);
  let peliPaikka: string = "";
  if (peliData) {
    peliPaikka = Pelipaikka[peliData?.game.homeTeam.teamName];
  }

  return (
    <StyledView>
      {peliData ? (
        <StyledView
          className="flex bg-slate-400 rounded-lg shadow-mdw-screen w-full border-2 items-center justify-center"
          style={{ backgroundColor: "#ffcb74" }}
        >
          <StyledText className="text-2xl font-bold">{peliPaikka}</StyledText>
          <StyledText className="text-2xl font-bold">
            Ottelu alkaa {startString}
          </StyledText>
        </StyledView>
      ) : (
        <>
          <ActivityIndicator
            animating={true}
            size={"large"}
          />
        </>
      )}
    </StyledView>
  );
}

export default YksiPeliNotStarted;
