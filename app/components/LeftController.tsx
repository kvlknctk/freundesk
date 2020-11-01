import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector} from 'react-redux';
import {IThemeState} from 'app/models/reducers/theme';
import NavigationService from "../navigation/NavigationService";

interface IState {
    themeReducer: IThemeState;
}

const LeftController: React.FC = () => {
    const isDark = useSelector((state: IState) => state.themeReducer.isDark);
    const goHome = () => NavigationService.navigate('Home');
    const iconColor = isDark ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={goHome}>
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
