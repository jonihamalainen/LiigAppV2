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
    <StyledView className="flex items-center justify-center mt-5 bg-white rounded-lg p-4 shadow-mdw-screen w-screen">
      <Text className="text-2xl font-bold">
        {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
      </Text>
      <Text className="text-lg text-gray-600 mb-2">
        {ottelu.homeTeam.goals} - {ottelu.awayTeam.goals}
      </Text>
      {!ottelu.started ? (
        <Text className=" text-lg text-bold">{startString}</Text>
      ) : (
        <Text>Ottelu on käynnissä</Text>
      )}
    </StyledView>
  );
}

export default OtteluLista;
