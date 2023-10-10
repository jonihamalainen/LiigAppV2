import { styled } from "nativewind";
import { View } from "react-native";
import { Text } from "react-native-paper";

const StyledView = styled(View);

export default function Page(): React.ReactElement {
  return (
    <StyledView
      className="flex-1 items-center justify-center w-max"
      style={{ backgroundColor: "#2f2f2f" }}
    >
      <Text>Yksi peli</Text>
    </StyledView>
  );
}
