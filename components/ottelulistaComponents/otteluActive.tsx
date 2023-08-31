import { styled } from "nativewind";
import { Ottelulistaus } from "../../types";
import { Text } from "react-native";
import { convertTime } from "../../utils/timeUtils";

interface Props {
  ottelu: Ottelulistaus;
}

const StyledText = styled(Text);

function OtteluActive({ ottelu }: Props): React.ReactElement {
  const startString: string = convertTime(ottelu.start);
  return (
    <>
      <StyledText className="text-2xl font-bold">
        {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
      </StyledText>
      <StyledText className="text-lg text-black mb-2">
        {ottelu.homeTeam.goals} - {ottelu.awayTeam.goals}
      </StyledText>
      {!ottelu.started ? (
        <StyledText className=" text-lg text-bold">{startString}</StyledText>
      ) : (
        <StyledText>Ottelu on käynnissä</StyledText>
      )}
    </>
  );
}

export default OtteluActive;
