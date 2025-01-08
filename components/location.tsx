// import React, { useEffect, useState } from 'react';
// import { View, Text, PermissionsAndroid, Platform } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';

// const LocationMap = () => {
//   const [location, setLocation] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Request permissions if on Android
//     if (Platform.OS === 'android') {
//       requestLocationPermission();
//     } else {
//       getLocation();
//     }
//   }, []);

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: "Location Permission",
//           message: "We need access to your location",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK",
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         getLocation();
//       } else {
//         setError("Permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const getLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         setLocation(position.coords);
//       },
//       (error) => {
//         setError(error.message);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {error && <Text>{error}</Text>}
//       {location ? (
//         <MapView
//           style={{ flex: 1 }}
//           region={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
//         </MapView>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// };

// export default LocationMap;
