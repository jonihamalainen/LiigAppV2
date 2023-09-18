import { styled } from "nativewind";
import { Text, View } from "react-native";
import { Ottelulistaus } from "../../types";
import { FinishedType } from "../../enums";

interface Props {
  ottelu: Ottelulistaus;
}

const StyledText = styled(Text);
const StyledView = styled(View);

function OtteluEnded({ ottelu }: Props): React.ReactElement {

  return (
    <StyledView className="flex flex-row">
      <StyledView className="flex flex-col w-3/4">
      <StyledText className="text-2xl font-bold">
        {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
      </StyledText>
      {ottelu.finishedType == FinishedType.EndedDuringWinningShotCompetition ? (
        <StyledText className="text-lg text-black mb-2">
          {ottelu.homeTeam.goals} - {ottelu.awayTeam.goals} vl.
        </StyledText>
      ) : ottelu.finishedType == FinishedType.EndedDuringExtendedGameTime ? (
        <StyledText className="text-lg text-black mb-2">
          {ottelu.homeTeam.goals} - {ottelu.awayTeam.goals} ja.
        </StyledText>
      ) : (
        <StyledText className="text-lg text-black mb-2">
          {ottelu.homeTeam.goals} - {ottelu.awayTeam.goals}
        </StyledText>
      )}
      <StyledText className="text-lg text-black">Ottelu päättynyt</StyledText>
    </StyledView>
    <StyledView className="flex flex-col items-center justify-center border-l-2 border-white p-1">
    <StyledText className="text-l font-bold ">Yleisömäärä:</StyledText>
      {ottelu.spectators
      ? <StyledText>{ottelu.spectators}</StyledText>
      : <StyledText>Ei ilmoitettu</StyledText>
      }
    </StyledView>
    </StyledView>
  );
}
export default OtteluEnded;
