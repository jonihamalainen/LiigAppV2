import { styled } from "nativewind";
import { Ottelulistaus } from "../../types";
import { Text, View } from "react-native";
import { convertTime } from "../../utils/timeUtils";
import { pelinAika, pelinEra } from "../../utils/pelitUtils";

interface Props {
  ottelu: Ottelulistaus;
}

const StyledText = styled(Text);
const StyledView = styled(View);

function OtteluActive({ ottelu }: Props): React.ReactElement {
  const startString: string = convertTime(ottelu.start);
  return (
    <StyledView className="flex flex-row">
      <StyledView className="flex flex-col w-2/4">
        <StyledText className="text-2xl font-bold">
          {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
        </StyledText>
        <StyledText className="text-lg text-black mb-2">
          {ottelu.homeTeam.goals} - {ottelu.awayTeam.goals}
        </StyledText>
        <StyledText className="text-lg text-bold">
          {pelinEra(ottelu)}
        </StyledText>
        <StyledText className="text-lg text-bold">
          {pelinAika(ottelu.gameTime)}
        </StyledText>
      </StyledView>
      <StyledView className="flex flex-col items-center justify-center border-l-2 border-black p-1 w-2/4">
        <StyledText className="text-lg">
          Viimeisin päivitys klo: {convertTime(ottelu.cacheUpdateDate!)}
        </StyledText>
      </StyledView>
    </StyledView>
  );
}

export default OtteluActive;
