import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Map from './pages/Map';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Map,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0f70b5',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
