import React from 'react';
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/constants/colors';
import useLocation from './fetchAddress';
import { useNavigation } from '@react-navigation/native';



function Address() {
  const navigation =useNavigation()
  const { locationData, loading, error } = useLocation();
  const { area, postalCode } = locationData;

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate('MakeAddress')}>
      <View style={styles.addressContainer}>
        <View style={styles.locationInfo}>
          <Text style={[styles.text, { fontSize: 18 }]}>Add Address</Text>
          <Ionicons name="arrow-down" size={22} color="white" />
        </View>
        {loading ? (
          <Text style={[styles.opaqueText]}>Fetching location...</Text>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <Text style={[styles.opaqueText]}>
            {area} {postalCode}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

export default Address;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  addressContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 50,
    gap: 8,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  opaqueText: {
    color: 'white',
    opacity: 0.8,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    opacity: 0.8,
    fontSize: 14,
  },
});
