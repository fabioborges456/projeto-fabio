import react from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={true}>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" Size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" Size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" Size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" Size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" Size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '84',
    marginBottom: '',
    marginTop: '18',
    paddingEnd: '14',
    paddingStart: '14',
  },
  ActionButton: {
    alignItems: 'center',
    marginRight: 24,
  },
  areaButton: {
    backgroundColor: '#ffffff',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});