import React from 'react';
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
    // @ts-ignore
    const removeToBasket = (index: object) => dispatch(basketActions.basketRemoveProduct(index));
    const dropBasket = () => dispatch(basketActions.basketDrop());
    const basketStore = useSelector((state: IStateBasket) => state.basketReducer);

    //const sumValues = (obj) => Object.keys(obj).reduce((acc, value) => acc + obj[value], 0);
    const sum = (key: any) => {
        // @ts-ignore
        return basketStore.addedProducts.reduce((a, b) => a + (b[key] || 0), 0);
    }

    return (
        <View>
            <Text>{
                sum
            }</Text>
            <ScrollView style={styles.container}>
                {
                    //@ts-ignore
                    basketStore.addedProducts.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => addToBasket(item)}>
                                <View style={styles.productItem}>
                                    <View style={{}}>
                                        <View style={{padding: 3, flexDirection: 'row'}}>
                                            <Text style={{color: 'white'}}>{item.name}</Text>
                                            <Text style={{color: 'white'}}>{item.price}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{justifyContent: 'center'}}
                                                      onPress={() => removeToBasket(index)}>
                                        <Ionicons name="trash" size={20} color="white"/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    )
                }

            </ScrollView>
            <TouchableOpacity onPress={() => dropBasket()}>
                <View style={{padding: 5}}>
                    <Text style={{color: 'white', fontSize: 25}}>Clear Baskets</Text>
                </View>
            </TouchableOpacity>
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
