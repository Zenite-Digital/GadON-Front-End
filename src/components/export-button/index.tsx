// import React from "react";
// import { View, TouchableOpacity, Text, Alert } from "react-native";
// import Colors from "@constants/Colors";

// export default function ExportButton() {
//   return (
//     <View
//       className="absolute bottom-0 left-0 right-0 px-4 py-3 shadow"
//       style={{ backgroundColor: Colors.light.background }}
//     >
//       <TouchableOpacity
//         className="py-3 rounded-lg items-center"
//         style={{ backgroundColor: Colors.light.tint }}
//         onPress={() => Alert.alert("Exportar", "Exportar relatório dos lotes")}
//       >
//         <Text
//           className="font-bold text-base"
//           style={{ color: Colors.light.background }}
//         >
//           Exportar relatório
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "@components/lotes/styles";

export default function LotesFooter() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.exportButton}
        onPress={() => Alert.alert("Exportar", "Exportar relatório dos lotes")}
      >
        <Text style={styles.exportButtonText}>Exportar relatório</Text>
      </TouchableOpacity>
    </View>
  );
}