import React, {useEffect} from 'react';
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

    const reducerf = (accumulator, currentValue) => accumulator + parseFloat(currentValue.price);
    const sumBasket = (addedProducts: object) => addedProducts.reduce(reducerf, 0);

    return (
        <View style={{flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>

            <ScrollView style={styles.container}>
                {
                    //@ts-ignore
                    basketStore.addedProducts.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => addToBasket(item)}>
                                <View style={styles.productItem}>
                                    <View style={{}}>
                                        <View style={{padding: 3, flexDirection: 'column'}}>
                                            <Text style={{color: 'white'}}>{item.name}</Text>
                                            <Text style={{color: 'white'}}>General Category</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{color: 'white', padding: 3}}>{item.price}£</Text>

                                        <TouchableOpacity style={{justifyContent: 'center'}}
                                                          onPress={() => removeToBasket(index)}>
                                            <Ionicons name="trash" size={20} color="white"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    )
                }

            </ScrollView>

            <View>
                <View style={{ flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>Total</Text>
                        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
                            {
                                sumBasket(basketStore.addedProducts).toFixed(2)
                            } £
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: 'white', fontSize: 30}}>Estimated</Text>
                        <Text style={{color: 'white', fontSize: 30}}>
                            21 Min
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{justifyContent: 'center'}}
                        onPress={() => console.log("asd")}>
                        <View style={{height: 50, backgroundColor: 'aquamarine'}}>
                            <Text style={{color: 'black', textAlign: 'center', fontSize: 30}}>Order Now</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                {/* <TouchableOpacity onPress={() => dropBasket()}>
                    <View style={{padding: 5}}>
                        <Text style={{color: 'white', fontSize: 25}}>Clear Baskets</Text>
                    </View>
                </TouchableOpacity>*/}
            </View>

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
