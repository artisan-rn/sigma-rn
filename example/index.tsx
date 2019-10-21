import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App from './App';
import {routers} from './routers';
const Navigation = createStackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: {
        title: 'Sigma React Native',
          headerBackTitle: '返回',
      },
    },
    ...routers.reduce((res, item) => {
      res[item.key] = {
        ...item,
        navigationOptions: {
          title: `${item.key} ${item.label}`,
        },
      };
      return res;
    }, {}),
  },
  {
    initialRouteName: 'App',
    mode: 'card',
  },
);

const AppContainer = createAppContainer(Navigation);

export default () => {
  return <AppContainer />;
};
