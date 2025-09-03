import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export class AppStyles {
  static styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.outros.branco },
    center: { alignSelf: 'center', width: '100%' },
    stack: { paddingTop: 8, paddingBottom: 24, gap: 12 },
    row: { flexDirection: 'row', alignItems: 'flex-start', gap: 16 },
    col: { gap: 12 },
    colHalf: { flex: 1, minWidth: 0 },

    fab: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      backgroundColor: Colors.brand.main,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 999,
      elevation: 6,
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
    },
    fabText: {
      color: Colors.outros.branco,
      fontWeight: '700',
    },
  });
}