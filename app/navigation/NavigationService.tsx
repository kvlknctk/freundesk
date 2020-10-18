import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

function push(name: string) {
  navigationRef.current?.push(name);
}

function reset(name: string) {
  navigationRef.current?.reset(name);
}

export default {
  navigate,
  goBack,
  push,
  reset
};
