import { styled } from "nativewind";
import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Peli } from "../../types";
import React, { useEffect, useRef } from "react";
import CustomDialog from "../../components/dialogComponents/dialog";
import { yksiPeliJson } from "../../utils/pelitUtils";
import { haePeli } from "../../redux/yksiPeliSlice";
import { useLocalSearchParams } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Page(): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const yksiPeli: string = useSelector(
    (state: RootState) => state.peli.yksiPeliData
  );

  const loading: boolean = useSelector(
    (state: RootState) => state.pelit.loading
  );

  const error: boolean = useSelector((state: RootState) => state.pelit.error);

  const peliData: Peli | null = yksiPeliJson(yksiPeli);

  const local = useLocalSearchParams();

  const gameId: string | string[] | undefined = local.id;

  const haettu: React.MutableRefObject<boolean> = useRef<boolean>(false);

  useEffect(() => {
    if (!haettu.current) {
      if (gameId) {
        dispatch(haePeli(gameId));
      }
    }
    return () => {
      haettu.current = true;
    };
  }, [dispatch]);

  return (
    <StyledView
      className="flex-1 items-center justify-center w-max"
      style={{ backgroundColor: "#2f2f2f" }}
    >
      {!error ? (
        !loading ? (
          <>
            <StyledText className="text-white">{peliData?.game.id}</StyledText>
          </>
        ) : (
          <>
            <ActivityIndicator
              animating={true}
              size={"large"}
            />
          </>
        )
      ) : (
        <>
          <StyledText>Hae uudestaan</StyledText>
          <CustomDialog
            title="Virhe"
            viesti="Pelien haku epäonnistui, tarkista verkkoyhteys ja yritä uudestaan"
          />
        </>
      )}
    </StyledView>
  );
}
