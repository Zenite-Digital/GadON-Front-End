import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Pressable
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { iconSize } from '@assets/icons/constants';

type Option = { label: string; value: string | number };
type Props = {
  placeholder: string;
  value?: string | number | null;
  options: Option[];
  onChange: (value: Option) => void;
};

export const Select: React.FC<Props> = ({ placeholder, value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const selected = options.find(o => o.value === value);

  return (
    <>
      <TouchableOpacity
        style={[styles.input]}
        onPress={() => setOpen(true)}
        activeOpacity={0.85}
      >
        <Text style={[styles.inputText, !selected && styles.placeholder]}>
          {selected ? selected.label : placeholder}
        </Text>
        <Feather name="chevron-down" size={iconSize.md} color={Colors.outros.preto} />
      </TouchableOpacity>

      <Modal transparent visible={open} animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)} />
        <View style={styles.sheet}>
          <FlatList
            data={options}
            keyExtractor={(item) => String(item.value)}
            renderItem={({ item }) => {
              const isSel = item.value === value;
              return (
                <Pressable
                  style={[styles.item, isSel && { backgroundColor: Colors.brand.neutral }]}
                  onPress={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                >
                  <Text style={{ color: Colors.outros.preto }}>{item.label}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.outros.borda,
    backgroundColor: Colors.outros.branco, // força claro
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: { color: Colors.outros.preto },
  placeholder: { color: '#9CA3AF' },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)', // sem escurecer os inputs
  },
  sheet: {
    position: 'absolute',
    left: 16,
    right: 16,
    top: 120,
    maxHeight: 380,
    borderRadius: 12,
    paddingVertical: 6,
    backgroundColor: Colors.outros.branco, // claro no modal
    elevation: 6,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
});