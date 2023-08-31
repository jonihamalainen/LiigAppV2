import { IconButton } from "react-native-paper";

interface Props{
  iconType: string;
  onIconPress: () => void;
}

function CustomIcon({iconType, onIconPress}: Props): React.ReactElement {
    return (
      <IconButton
        icon={iconType}
        size={30}
        onPress={onIconPress}
        iconColor="black"
      />
    );
  }

  export default CustomIcon;