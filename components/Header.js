import Styles from "../Styles.js";
import { View, Image } from "react-native";

const Header = () => {
  return (
    <View style={Styles.header}>
      <Image
        resizeMode="contain"
        style={Styles.logo}
        source={require("../assets/img/imdb.png")}
      />
    </View>
  );
};

export default Header;
