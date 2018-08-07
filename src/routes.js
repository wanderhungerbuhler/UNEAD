import { createStackNavigator } from 'react-navigation';

import HomePage from './components/Home';

const Routes = createStackNavigator({
  Home: { screen: HomePage },
});

export default Routes;