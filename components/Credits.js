import Styles from "../Styles.js";
import { View, Text } from "react-native";

const Credits = ({ director, writer }) => {
  return (
    <View style={Styles.credits}>
      <Text style={Styles.textTitleCredits}>Director</Text>
      <Text style={Styles.textCredit}>{director}</Text>
      <Text style={Styles.textTitleCredits}>Writers</Text>
      <Text style={Styles.textCredit}>{writer}</Text>
    </View>
  );
};

export default Credits;
