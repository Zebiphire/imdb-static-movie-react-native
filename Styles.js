import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  // APP
  app: {
    flex: 1,
    backgroundColor: "black",
  },

  // Header
  header: {
    height: 60,
    backgroundColor: "#393939",
    padding: 15,
    marginTop: 40,
  },
  logo: {
    alignContent: "center",
    height: 30,
    width: 60,
  },

  // Movie
  movie: {
    padding: 10,
    backgroundColor: "#212121",
    marginTop: 10,
  },
  title: { fontSize: 30, color: "#D0D0D0", marginBottom: 15 },
  tag: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  tagDes: { color: "#919191" },
  infos: { flexDirection: "row" },
  image: { height: 200, width: 150 },
  summaryContainer: { flex: 1, paddingLeft: 10 },
  summary: { color: "white", lineHeight: 25 },
  button: {
    height: 40,
    width: "100%",
    backgroundColor: "#0177BD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: { color: "white", fontWeight: "bold" },

  // rates
  ratesContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#212121",
  },
  rates: { alignItems: "center", flex: 1 },
  ratesView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 10,
    // marginBottom: 10,
  },
  ratesText: { color: "white", fontWeight: "bold", fontSize: 18 },
  text: { color: "white" },
  green: {
    height: 25,
    width: 25,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  textRateThis: {
    color: "white",
    marginTop: 4,
    fontWeight: "bold",
  },
  textNumber: {
    color: "#393939",
    fontSize: 12,
    marginTop: 2,
  },
  textMegaScore: {
    color: "white",
    marginTop: 6,
    marginBottom: 2,
  },

  // Actors
  sectionActors: {
    padding: 10,
    backgroundColor: "#212121",
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    color: "#D0D0D0",
    marginBottom: 15,
  },
  actorView: { padding: 10 },
  actor: { backgroundColor: "#2A2A2A", margin: 10 },
  img: { height: 200, width: 160 },
  textActorName: {
    color: "white",
    fontSize: 16,
    justifyContent: "flex-start",
    width: 140,
  },
  textActorRole: { color: "#919191" },
  // Credits
  credits: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  textTitleCredits: { color: "white", fontSize: 16, marginBottom: 5 },
  textCredit: { color: "#808080", marginBottom: 20 },
});

export default Styles;
