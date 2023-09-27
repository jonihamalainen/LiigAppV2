import { styled } from "nativewind";
import { Ottelulistaus } from "../../types";
import { Linking, Text, View } from "react-native";
import { convertTime } from "../../utils/timeUtils";
import { Button } from "react-native-paper";
import { oddsConvert } from "../../utils/pelitUtils";
import { Pelipaikka } from "../../enums";

interface Props {
  ottelu: Ottelulistaus;
}

const StyledText = styled(Text);
const StyledView = styled(View);

function OtteluNotStarted({ ottelu }: Props): React.ReactElement {
  const startString: string = convertTime(ottelu.start);
  const lippuString: string | undefined = ottelu.buyTicketsUrl;
  const bettingString: string | undefined = ottelu.gamblingEvent?.url;
  const peliPaikka: string = Pelipaikka[ottelu.homeTeam.teamName];
  return (
    <StyledView className="flex flex-row">
      <StyledView className="flex flex-col w-2/4">
        <StyledText className="text-2xl font-bold">
          {ottelu.homeTeam.teamName} - {ottelu.awayTeam.teamName}
        </StyledText>
        <StyledText className="text-lg">{peliPaikka}</StyledText>
        <StyledText className=" text-lg text-bold">
          Ottelu alkaa klo: {startString}
        </StyledText>
      </StyledView>
      <StyledView className="flex flex-col items-center justify-center border-l-2 border-black p-1 w-2/4">
        <StyledView>
          {bettingString && (
            <>
              <StyledText className="text-lg font-bold ml-1">
                Kertoimet:
              </StyledText>
              <StyledText className=" text-lg ml-1">
                1: {oddsConvert(ottelu.gamblingEvent?.homeTeamOdds)}
              </StyledText>
              <StyledText className=" text-lg ml-1">
                X: {oddsConvert(ottelu.gamblingEvent?.tieOdds)}
              </StyledText>
              <StyledText className=" text-lg ml-1">
                2: {oddsConvert(ottelu.gamblingEvent?.awayTeamOdds)}
              </StyledText>
              <Button
                icon="cash"
                className="w-full p-1 ml-1 my-4"
                style={{ backgroundColor: "#2f2f2f" }}
                mode="contained"
                onPress={() => Linking.openURL(bettingString)}
              >
                Vedonlyönti
              </Button>
            </>
          )}
        </StyledView>
        <StyledView>
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
    </StyledView>
  );
}

export default OtteluNotStarted;
