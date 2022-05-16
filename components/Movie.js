import Styles from "../Styles.js";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Movie = ({
  title,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  tag6,
  source,
  summary,
}) => {
  return (
    <View style={Styles.movie}>
      <Text style={Styles.title}>{title}</Text>
      <View style={Styles.tag}>
        <Text style={Styles.tagDes}>{tag1}</Text>
        <Text style={Styles.tagDes}>{tag2}</Text>
        <Text style={Styles.tagDes}>{tag3}</Text>
        <Text style={Styles.tagDes}>{tag4}</Text>
        <Text style={Styles.tagDes}>{tag5}</Text>
        <Text style={Styles.tagDes}>{tag6}</Text>
      </View>
      <View style={Styles.infos}>
        <View>
          <Image
            resizeMode="contain"
            style={Styles.image}
            source={{ uri: source }}
          />
        </View>
        <View style={Styles.summaryContainer}>
          <Text style={Styles.summary}>{summary}</Text>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>+ ADD TO WATCHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Movie;
