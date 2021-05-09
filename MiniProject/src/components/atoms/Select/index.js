import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = ({value, label, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.text}> {label} </Text>
      <View style={styles.input}>
        <Picker
          style={styles.input}
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item label="Debit" value="Debit" />
          <Picker.Item label="Credit" value="Credit" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
  },
});
