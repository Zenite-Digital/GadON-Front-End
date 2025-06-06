import { setCustomText } from "react-native-global-props";

export function useGlobalProps() {
  setCustomText({
    style: {
      fontFamily: "InterRegular",
    },
  });
}
