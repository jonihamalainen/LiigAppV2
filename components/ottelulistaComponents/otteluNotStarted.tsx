import { styled } from "nativewind";
import { Ottelulistaus } from "../../types";
import { Linking, Text, View } from "react-native";
import { convertTime } from "../../utils/timeUtils";
import { Button } from "react-native-paper";

interface Props {
  ottelu: Ottelulistaus;
}

const StyledText = styled(Text);
const StyledView = styled(View);

function OtteluNotStarted({ ottelu }: Props): React.ReactElement {
  const startString: string = convertTime(ottelu.start);
  const lippuString: string | undefined = ottelu.buyTicketsUrl;
  return (
    <StyledView className="flex flex-row">
      <StyledView className="flex flex-col w-2/4">
        <StyledText className="text-2xl font-bold">
          {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
        </StyledText>
        <StyledText className=" text-lg text-bold">{startString}</StyledText>
      </StyledView>
      <StyledView className="flex flex-col items-center justify-center border-l-2 border-black p-1 w-2/4">
        {lippuString ? (
          <Button
            icon="ticket-outline"
            className="w-full p-1 ml-1"
            style={{ backgroundColor: "#2f2f2f" }}
            mode="contained"
            onPress={() => Linking.openURL(lippuString)}
          >
            Osta liput!
          </Button>
        ) : null}
      </StyledView>
    </StyledView>
  );
}

export default OtteluNotStarted;
