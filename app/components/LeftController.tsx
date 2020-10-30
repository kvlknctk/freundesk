import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Switch} from 'react-native-paper';

import * as themeActions from 'app/store/actions/themeActions';
import {IThemeState} from 'app/models/reducers/theme';
import NavigationService from "../navigation/NavigationService";

interface IState {
    themeReducer: IThemeState;
}

interface IStateBasket {
    basketReducer: any;
}

const LeftController: React.FC = () => {
    const isDark = useSelector((state: IState) => state.themeReducer.isDark);
    const basketStore = useSelector((state: IStateBasket) => state.basketReducer);
    const goBasket = () => NavigationService.navigate('Home');

    const dispatch = useDispatch();
    const onToggleTheme = () => dispatch(themeActions.setIsDarkTheme(!isDark));
    //const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
    const iconColor = isDark ? 'white' : 'black';

    return (
        <View style={styles.container}>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={goBasket}>
                <Icon name="home" size={25} style={styles.icon} color={iconColor}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 12,
    },
    icon: {marginLeft: 4},
});

export default LeftController;
