import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    justifyContent: "space-between",
  },
  headerTitle: {

    fontSize: 20,
    textAlign: "center",
    flex: 1,
    color: "#222",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fafafa",
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  cardExpanded: {
    borderColor: "#00994C",
    shadowOpacity: 0.08,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  cardTitle: {

    fontSize: 16,
    color: "#222",
  },
  cardSubtitle: {

    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  cardContent: {
    padding: 16,
    paddingTop: 0,
    position: "relative",
  },
  loteImage: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  editButton: {
    position: "absolute",
    bottom: 18,
    right: 18,
    backgroundColor: "#00994C",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  editButtonText: {
    color: "#fff",

    marginLeft: 6,
    fontSize: 15,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 16,
  },
  exportButton: {
    backgroundColor: "#00994C",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  exportButtonText: {
    color: "#fff",

    fontSize: 16,
  },
});