import { StyleSheet, Dimensions, Platform } from "react-native";
import Colors from "@constants/Colors";

const { width, height } = Dimensions.get('window');

const isWeb = Platform.OS === 'web';


const isMobile = width <= 768;
const isTablet = width > 768 && width <= 1024;
const isDesktop = width > 1024;

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.outros.branco
  },
  card: {
    backgroundColor: Colors.outros.secondary,
    borderRadius: isWeb ? (isDesktop ? 16 : 12) : 12,
    marginBottom: isWeb ? (isDesktop ? 20 : 16) : 14,
    borderWidth: 1,
    borderColor: Colors.outros.secondary,
    shadowColor: Colors.outros.preto,
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
    maxWidth: isDesktop ? 600 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  cardExpanded: {
    borderColor: Colors.brand.main,
    shadowOpacity: 0.08,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: isWeb ? (isDesktop ? 24 : isTablet ? 20 : 16) : 16,
    minHeight: isWeb ? (isDesktop ? 80 : 70) : 60,
  },
  cardTitle: {
    fontSize: isWeb ? (isDesktop ? 20 : isTablet ? 18 : 16) : 16,
    color: Colors.estados.normal.dark,
    fontWeight: "600",
    lineHeight: isDesktop ? 28 : 24,
  },
  cardSubtitle: {
    fontSize: isWeb ? (isDesktop ? 16 : isTablet ? 14 : 13) : 13,
    color: Colors.estados.normal.secondary,
    marginTop: 2,
    lineHeight: isDesktop ? 22 : 20,
  },
  cardContent: {
    padding: isWeb ? (isDesktop ? 24 : isTablet ? 20 : 16) : 16,
    paddingTop: 0,
    position: "relative",
  },
  loteImage: {
    width: "100%",
    height: isWeb ? (isDesktop ? 300 : isTablet ? 220 : 180) : 140,
    borderRadius: isWeb ? (isDesktop ? 12 : 10) : 8,
    marginBottom: isWeb ? (isDesktop ? 16 : 12) : 8,
  },
  editButton: {
    position: "absolute",
    bottom: isWeb ? (isDesktop ? 28 : isTablet ? 24 : 18) : 18,
    right: isWeb ? (isDesktop ? 28 : isTablet ? 24 : 18) : 18,
    backgroundColor: Colors.brand.main,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: isWeb ? (isDesktop ? 12 : 10) : 8,
    paddingVertical: isWeb ? (isDesktop ? 12 : 10) : 8,
    paddingHorizontal: isWeb ? (isDesktop ? 20 : 18) : 16,
    elevation: 2,
    minHeight: 44,
  },
  editButtonText: {
    color: Colors.outros.branco,
    marginLeft: isWeb ? (isDesktop ? 8 : 6) : 6,
    fontSize: isWeb ? (isDesktop ? 16 : 15) : 15,
    fontWeight: "600",
  },
  footer: {
    position: isWeb ? "relative" : "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.outros.branco,
    borderTopWidth: 1,
    borderTopColor: Colors.outros.secondary,
    padding: isWeb ? (isDesktop ? 32 : isTablet ? 24 : 16) : 16,
    elevation: isWeb ? 4 : 0,
    shadowColor: Colors.outros.preto,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: isWeb ? 0.1 : 0,
    shadowRadius: isWeb ? 4 : 0,
  },
  exportButton: {
    backgroundColor: Colors.brand.main,
    borderRadius: isWeb ? (isDesktop ? 12 : 10) : 8,
    paddingVertical: isWeb ? (isDesktop ? 16 : 14) : 14,
    paddingHorizontal: isWeb ? (isDesktop ? 32 : 24) : 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    minHeight: isWeb ? 52 : 48,
    width: isWeb ? (isDesktop ? 300 : 250) : '100%',
    alignSelf: isWeb ? 'center' : 'auto',
  },
  exportButtonText: {
    color: Colors.outros.branco,
    fontSize: isWeb ? (isDesktop ? 18 : 16) : 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});