import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {navigationRef} from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import Register from 'app/screens/Register';
import ForgotPassword from 'app/screens/ForgotPassword';

import ThemeController from '../components/ThemeController';
import {StatusBar} from 'react-native';
import {ILoginState} from 'app/models/reducers/login';
import ReadBarcode from "../screens/Barcode/ReadBarcode";
import BarcodeCompleted from "../screens/Barcode/BarcodeCompleted";
import Products from "../screens/Product/Products";
import BasketList from "../screens/Basket/BasketList";
import Session from 'app/screens/Session/Session';
import LeftController from "../components/LeftController";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions = {
    title: 'Freundeskreis',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerLeft: () => <LeftController/>,
    headerRight: () => <ThemeController/>,
};

interface IState {
    loginReducer: ILoginState;
}

interface IProps {
    theme: Theme;
}

const AuthNavigator = () => {
    const isLoggedIn = useSelector(
        (state: IState) => state.loginReducer.isLoggedIn,
    );
    return (
        <AuthStack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                    headerRight: () => <ThemeController/>,
                }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                    headerRight: () => <ThemeController/>,
                }}
            />

            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                    headerRight: () => <ThemeController/>,
                }}
            />
        </AuthStack.Navigator>
    );
};

const LoggedInNavigator = () => (
    <LoggedInStack.Navigator>
        <Stack.Screen name="Home" component={Home}
            // @ts-ignore
                      options={homeOptions}/>
        <Stack.Screen name="Basket" component={BasketList}
            // @ts-ignore
                      options={homeOptions}/>
        <Stack.Screen name="Session" component={Session}
            // @ts-ignore
                      options={homeOptions}/>
        <Stack.Screen name="ReadBarcode" component={ReadBarcode}
            // @ts-ignore
                      options={homeOptions}/>
        <Stack.Screen name="BarcodeCompleted" component={BarcodeCompleted}
            // @ts-ignore
                      options={homeOptions}/>
        <Stack.Screen name="Products" component={Products}
            // @ts-ignore
                      options={homeOptions}/>

    </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
    const {theme} = props;
    const isLoggedIn = useSelector(
        (state: IState) => state.loginReducer.isLoggedIn,
    );

    return (
        <NavigationContainer ref={navigationRef} theme={theme}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}/>

            <Stack.Navigator>
                {isLoggedIn ? (
                    <Stack.Screen
                        name="Home"
                        component={LoggedInNavigator}
                        // @ts-ignore
                        options={homeOptions}
                    />
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={AuthNavigator}
                        options={{
                            // When logging out, a pop animation feels intuitive
                            // You can remove this if you want the default 'push' animation
                            animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                            headerRight: () => <ThemeController/>,
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
