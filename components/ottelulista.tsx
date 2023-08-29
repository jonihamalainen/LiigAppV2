import { Ottelulistaus } from "../types"

import {Text, View} from 'react-native'
interface Props {
    ottelu: Ottelulistaus
}

function OtteluLista ({ottelu}: Props) : React.ReactElement {
return <View className="flex-1 items-center justify-center m-2">
    <Text>{ottelu.id}</Text>
    </View>
}

export default OtteluLista