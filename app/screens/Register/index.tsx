import React from 'react';
import {Image, KeyboardAvoidingView, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import {BaseButton} from "react-native-gesture-handler";

interface IState {
    loginReducer: ILoginState;
}

const Register: React.FC = () => {
    const id = useSelector((state: IState) => state.loginReducer.id);
    const dispatch = useDispatch();
    const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
    const onForgot = () => NavigationService.navigate('ForgotPassword');
    const onRegister = () => NavigationService.navigate('Register');
    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.container}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../assets/froundesk_logo.png')}
                               style={{
                                   width: 200,
                                   height: 120,
                               }}/>
                    </View>


                    <View>
                        <TextInput style={styles.name} label="Name" mode="outlined"/>
                        <TextInput style={styles.name} label="Surname" mode="outlined"/>
                        <TextInput style={styles.name} label="Email" mode="outlined" keyboardType="email-address"/>
                        <TextInput style={styles.name} label="Password" mode="outlined"/>
                    </View>

                    <Button style={{marginTop: 5}} icon="account-plus" mode="contained"
                            onPress={() => console.log('Pressed')}>
                        Register
                    </Button>
                    <Button style={{marginTop: 5}} icon="arrow-left-circle" mode="contained"
                            onPress={() => NavigationService.goBack()}>
                        Back
                    </Button>

                </View>
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    );
};

export default Register;
