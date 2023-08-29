import { Ottelulistaus } from "../types";

import { Text, View } from "react-native";
import { styled } from "nativewind";
import { convertTime } from "../utils/timeUtils";
interface Props {
  ottelu: Ottelulistaus;
}

const StyledView = styled(View);

function OtteluLista({ ottelu }: Props): React.ReactElement {
  const startString: string = convertTime(ottelu.start);

  return (
    <StyledView className="flex items-center justify-center mb-5 bg- rounded-lg p-4 shadow-md bg-white w-screen">
      <Text className="text-lg font-bold">
        {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
      </Text>
      <Text className="text-sm text-gray-600 mb-2">
      {ottelu.homeTeam.goals} - {ottelu.awayTeam.goals}
      </Text>
      {!ottelu.started ? (
        <Text className="text-xl text-bold">{startString}</Text>
      ) : (
        <Text>Ottelu on käynnissä</Text>
      )}
    </StyledView>
  );
}

export default OtteluLista;
