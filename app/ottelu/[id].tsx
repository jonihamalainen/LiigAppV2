import { styled } from "nativewind";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const StyledView = styled(View);

export default function Page(): React.ReactElement {
  const yksiPeli: string = useSelector(
    (state: RootState) => state.peli.yksiPeli
  );

  const loading: boolean = useSelector(
    (state: RootState) => state.pelit.loading
  );

  const error: boolean = useSelector((state: RootState) => state.pelit.error);

  console.log(yksiPeli);

  return (
    <StyledView
      className="flex-1 items-center justify-center w-max"
      style={{ backgroundColor: "#2f2f2f" }}
    >
      <Text>Yksi peli</Text>
    </StyledView>
  );
}
