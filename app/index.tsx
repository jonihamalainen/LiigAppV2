import { View, Text } from 'react-native';
import OtteluLista from '../components/ottelulista';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { haePelit } from '../redux/pelitSlice';
import { Ottelulistaus } from '../types';

export default function Page(): React.ReactElement {

  const dispatch: AppDispatch = useDispatch();

  const pelit: Ottelulistaus[] = useSelector((state : RootState) => state.pelit.peliData);

  const loading: boolean = useSelector((state : RootState) => state.pelit.loading);

  const haettu : React.MutableRefObject<boolean> = useRef<boolean>(false);

  useEffect(() => {

    if(!haettu.current) {

      dispatch(haePelit());

    }

    return () => { haettu.current = true}

    }, 
  [dispatch]);

  return <View className="flex-1 items-center justify-center m-2">
    {!loading
    ?pelit.map((ottelu: Ottelulistaus) => (
      <OtteluLista ottelu={ottelu}/>
    ))
    : <>
    <Text>Ladataan</Text>
    </>
    }
</View>
}
