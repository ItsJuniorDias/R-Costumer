/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Reactotron from 'reactotron-react-native';
import {
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

// import { } from './styles';

export default class Map extends Component {
  watchId = null;

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      updatesEnabled: false,
      location: {},
    };
  }

  hasLocationPermission = async () => {
    if (
      Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)
    ) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Permissão de local negada pelo usuário.',
        ToastAndroid.LONG
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Permissão de local removida pelo usuário.',
        ToastAndroid.LONG
      );
    }

    return false;
  };

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({ location: position, loading: false });
          Reactotron.log(position);
        },
        error => {
          this.setState({ location: error, loading: false });
          Reactotron.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 50,
          forceRequestLocation: true,
        }
      );
    });
  };

  getLocationUpdates = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;
    this.setState({ updatesEnabled: true }, () => {
      this.watchId = Geolocation.watchPosition(
        position => {
          this.setState({ location: position });
          Reactotron.log(position);
        },
        error => {
          this.setState({ location: error });
          Reactotron.log(error);
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
        }
      );
    });
  };

  removeLocationUpdates = () => {
    if (this.watchId !== null) {
      Geolocation.clearWatch(this.watchId);
      this.setState({ updatesEnabled: false });
    }
  };

  render() {
    const { loading, location, updatesEnabled } = this.state;
    return (
      <View style={styles.container}>
        <Button
          title="Get Location"
          onPress={this.getLocation}
          disabled={loading || updatesEnabled}
        />
        <View style={styles.buttons}>
          <Button
            title="Start Observing"
            onPress={this.getLocationUpdates}
            disabled={updatesEnabled}
          />
          <Button
            title="Stop Observing"
            onPress={this.removeLocationUpdates}
            disabled={!updatesEnabled}
          />
        </View>
        <View>
          <Text>{JSON.stringify(location, null, 4)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 12,
  },
  result: {
    borderWidth: 1,
    borderColor: '#666',
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
    width: '100%',
  },
});

Map.navigationOptions = {
  title: 'Localização Atual',
};
