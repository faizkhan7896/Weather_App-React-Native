import { Linking, PermissionsAndroid, Platform } from 'react-native';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';

const requestLocationAndroid = async (): void => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Can you give me your location?',
        message:
          'Through your location, I can tell you about your local weather :))',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const hasLocationPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };
  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow WeatherLocal show to you the weather in your local :)`,
      '',
      [
        { text: 'Go to Settings', onPress: openSetting },
        { text: "Don't Use Location", onPress: () => {} },
      ],
    );
  }

  return false;
};

export const requestLocationPermission = async (): boolean => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasLocationPermissionIOS();
    return hasPermission;
  }

  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await requestLocationAndroid();

  return hasPermission;
};

export const getLocation = (setPosition: () => void): GeoCoordinates => {
  Geolocation.getCurrentPosition(
    (position) => {
      setPosition(position.coords);
    },
    (error) => console.log(error.code + error.message),
    {
      accuracy: { android: 'high', ios: 'best' },
      maximumAge: 10000,
      timeout: 15000,
    },
  );
};
