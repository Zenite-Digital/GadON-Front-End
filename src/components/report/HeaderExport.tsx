import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { iconSize } from '@assets/icons/constants';

type Props = {
  title: string;
  onPressMenu?: () => void;
  onPressSettings?: () => void;
};

export const AppHeader: React.FC<Props> = ({ title, onPressMenu, onPressSettings }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity accessibilityRole="button" onPress={onPressMenu} style={styles.iconBtn}>
          <Feather name="menu" size={iconSize.md} color={Colors.outros.preto} />
        </TouchableOpacity>

        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <TouchableOpacity accessibilityRole="button" onPress={onPressSettings} style={styles.iconBtn}>
          <Feather name="settings" size={iconSize.md} color={Colors.outros.preto} />
        </TouchableOpacity>
      </View>
      <View style={styles.greenLine} />
    </View>
  );
};

export { AppHeader as HeaderExport };

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    width: '100%',
    backgroundColor: Colors.outros.branco,
  },
  container: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.outros.branco,
  },
  iconBtn: {
    width: 40,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.outros.preto,
    fontFamily: 'InterMedium',
  },
  greenLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.brand.secondary,
  },
});