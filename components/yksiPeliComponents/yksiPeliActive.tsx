import { styled } from "nativewind";
import { View, Text } from "react-native";
import { Peli } from "../../types";

interface Props {
  peliData: Peli | null;
}

const StyledText = styled(Text);
const StyledView = styled(View);

function YksiPeliActive({ peliData }: Props): React.ReactElement {
  return (
    <StyledView>
      <StyledView
        className="flex flex-row bg-slate-400 rounded-lg shadow-mdw-screen w-full border-2 items-start justify-between"
        style={{ backgroundColor: "#ffcb74" }}
      >
        <StyledText className="text-3xl font-bold ml-5">
          {peliData?.game.homeTeam.teamName}
        </StyledText>
        <StyledText className="text-3xl font-bold mr-5">
          {peliData?.game.homeTeam.goals}
        </StyledText>
      </StyledView>
      <StyledView
        className="flex flex-row mt-2 bg-slate-400 rounded-lg shadow-mdw-screen w-full border-2 items-start justify-between"
        style={{ backgroundColor: "#ffcb74" }}
      >
        <StyledText className="text-3xl font-bold ml-5">
          {peliData?.game.awayTeam.teamName}
        </StyledText>
        <StyledText className="text-3xl font-bold mr-5 ">
          {peliData?.game.awayTeam.goals}
        </StyledText>
      </StyledView>
    </StyledView>
  );
}

export default YksiPeliActive;
