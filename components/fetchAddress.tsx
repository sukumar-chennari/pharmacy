import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [locationData, setLocationData] = useState({
    area: '',
    postalCode: '',
    detailedAddress: '',
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          setLoading(false);
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const [reverseGeocodedAddress] = await Location.reverseGeocodeAsync(location.coords);

        if (reverseGeocodedAddress) {
          const { street, name, district, city, region, postalCode } = reverseGeocodedAddress;

          const area = street || district || name || city || region || 'Unknown Area';
          const detailedAddress = [
            name,
            street,
            district,
            city,
            region,
            postalCode,
          ]
            .filter(Boolean) // Remove null/undefined values
            .join(', ');

          setLocationData({
            area,
            postalCode: postalCode || 'Unknown Code',
            detailedAddress,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        } else {
          setError('Unable to retrieve address');
        }
      } catch (err) {
        setError('Unable to fetch location. Please try again later.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { locationData, loading, error };
};

export default useLocation;
