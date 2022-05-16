import Styles from "../Styles.js";
import { View, Text, Image } from "react-native";

const Actors = ({ name, role, source }) => {
  return (
    <View style={Styles.actor}>
      <Image style={Styles.img} source={{ uri: source }} />
      <View style={Styles.actorView}>
        <Text numberOfLines={1} style={Styles.textActorName}>
          {name}
        </Text>
        <Text style={Styles.textActorRole}>{role}</Text>
      </View>
    </View>
  );
};

export default Actors;
