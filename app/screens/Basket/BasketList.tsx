import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as basketActions from "../../store/actions/basketActions";
import {useDispatch, useSelector} from "react-redux";

interface IStateBasket {
    basketReducer: any;
}

const BasketList: React.FC = () => {


    const dispatch = useDispatch();

    const addToBasket = (item: object) => dispatch(basketActions.basketAddProduct(item));
    const removeToBasket = (index: object) => dispatch(basketActions.basketRemoveProduct(index));
    const dropBasket = () => dispatch(basketActions.basketDrop());
    const basketStore = useSelector((state: IStateBasket) => state.basketReducer);

    //const sumValues = (obj) => Object.keys(obj).reduce((acc, value) => acc + obj[value], 0);
    const sum = (key : any)  => {
        return basketStore.addedProducts.reduce((a, b) => a + (b[key] || 0), 0);
    }

    return (
        <View>
            <Text>{
                sum
            }</Text>
            <ScrollView style={styles.container}>
                {
                    basketStore.addedProducts.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => addToBasket(item)}>
                                <View style={styles.productItem}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{backgroundColor: 'white', width: 50, height: 50, borderRadius: 5}}/>
                                        <View style={{padding: 5}}>
                                            <Text style={{color: 'white'}}>{item.name}</Text>
                                            <Text style={{color: 'white'}}>{item.description}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => removeToBasket(index)}>
                                        <Ionicons name="trash" size={20} color="white"/>
                                    </TouchableOpacity>
                                    {/*<View style={{justifyContent: 'center'}}>
                                    <Ionicons name="arrow-up" size={20} color="white"/>
                                    <Ionicons name="arrow-down" size={20} color="white"/>
                                </View>*/}
                                </View>
                            </TouchableOpacity>
                        )
                    )
                }

                <TouchableOpacity onPress={() => dropBasket()}>
                    <View>
                        <Text style={{color: 'white'}}>Clear Baskets</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    login: {
        padding: 8
    },
    productItem: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#575757',
        margin: 5

    },
    preview: {},
});

export default BasketList;
