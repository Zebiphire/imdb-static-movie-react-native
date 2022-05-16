import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import Styles from "./Styles.js";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Rates from "./components/Rates";
import Actors from "./components/Actors";
import Credits from "./components/Credits";

import source1 from "./assets/img/matthew.jpg";
import source2 from "./assets/img/anne.jpg";
import source3 from "./assets/img/jessica.jpg";
import source4 from "./assets/img/mackenzie.jpg";
import sourceFilm from "./assets/img/film.jpg";

export default function App() {
  // Data example
  const name1 = "Matthew McConaughey";
  const role1 = "Cooper";
  const name2 = "Anne Hataway";
  const role2 = "Brand";
  const name4 = "Jessica Chastain";
  const role4 = "Murph";
  const name3 = "Mackenzie Foy";
  const role3 = "Young Murph (10 Yrs.)";

  const title = "Interstellar";
  const tag1 = "2014";
  const tag2 = "PG-13";
  const tag3 = "2H49min";
  const tag4 = "Adventure";
  const tag5 = "Drama";
  const tag6 = "Sci-Fi";
  const summary =
    "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.";

  const imageUri1 = Image.resolveAssetSource(source1).uri;
  const imageUri2 = Image.resolveAssetSource(source2).uri;
  const imageUri3 = Image.resolveAssetSource(source3).uri;
  const imageUri4 = Image.resolveAssetSource(source4).uri;
  const imageUriFilm = Image.resolveAssetSource(sourceFilm).uri;

  const note = "8,6";
  const number = "1,7";
  const score = "74";
  const nbCritics = "630";

  const director = "Christopher Nolan";
  const writer =
    "Jonathan Nolan (written by) and Christopher Nolan (written by)";

  return (
    <SafeAreaView style={Styles.app}>
      <ScrollView>
        <Header />
        <Movie
          title={title}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          tag4={tag4}
          tag5={tag5}
          tag6={tag6}
          source={imageUriFilm}
          summary={summary}
        />
        <Rates
          note={note}
          number={number}
          score={score}
          nbCritics={nbCritics}
        />
        <View style={Styles.sectionActors}>
          <Text style={Styles.title}>Top Billed Cast</Text>
          <ScrollView horizontal={true}>
            <Actors name={name1} role={role1} source={imageUri1} />
            <Actors name={name2} role={role2} source={imageUri2} />
            <Actors name={name3} role={role3} source={imageUri3} />
            <Actors name={name4} role={role4} source={imageUri4} />
          </ScrollView>
        </View>
        <Credits director={director} writer={writer} />
      </ScrollView>
    </SafeAreaView>
  );
}

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
