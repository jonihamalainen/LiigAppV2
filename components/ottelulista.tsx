import { Ottelulistaus } from "../types";

import { Text, View } from "react-native";
import { styled } from "nativewind";
import { convertTime } from "../utils/timeUtils";
interface Props {
  ottelu: Ottelulistaus;
}

const StyledText = styled(Text);

const StyledView = styled(View);

function OtteluLista({ ottelu }: Props): React.ReactElement {

    const startString: string = convertTime(ottelu.start)

  return (
    <StyledView className="flex items-center justify-center mb-5 bg-black rounded-lg p-2">
        <StyledText className="text-2xl text-white">
          {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
        </StyledText>
        <StyledText className="text-xl text-white">
          {ottelu.homeTeam.goals}   -   {ottelu.awayTeam.goals}
        </StyledText>
        {!ottelu.started
        ? <StyledText className="text-xl text-white">{startString}</StyledText>
        : <StyledText>Ottelu on käynnissä</StyledText>
        }
    </StyledView>
  );
}

export default OtteluLista;
