import Styles from "../Styles.js";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Rates = ({ note, number, score, nbCritics }) => {
  return (
    <View style={Styles.ratesContainer}>
      <View style={Styles.rates}>
        <FontAwesome name="star" size={28} color="yellow" />
        <View style={Styles.ratesView}>
          <Text style={Styles.ratesText}>{note}</Text>
          <Text style={Styles.text}>/10</Text>
        </View>

        <Text style={Styles.textNumber}>{number} M</Text>
      </View>
      <View style={Styles.rates}>
        <FontAwesome name="star-o" size={28} color="white" />
        <Text style={Styles.textRateThis}>RATE THIS</Text>
      </View>
      <View style={Styles.rates}>
        <View style={Styles.green}>
          <Text style={Styles.text}>{score}</Text>
        </View>
        <Text style={Styles.textMegaScore}>Metascore</Text>
        <Text style={Styles.textNumber}>{nbCritics} critic reviews</Text>
      </View>
    </View>
  );
};

export default Rates;
