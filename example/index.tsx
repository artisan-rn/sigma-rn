import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App from './App';
import {routers} from './routers';
const Navigation = createStackNavigator(
  {
    App: App,
    ...routers.reduce((res, item) => {
      res[item.key] = {
        ...item,
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
