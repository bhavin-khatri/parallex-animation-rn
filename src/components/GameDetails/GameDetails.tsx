import React, {useState} from "react";
import {Animated, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ResponsivePixels} from "../../res/styles/ResponsivePixels";
import {HeaderView} from "../../common/HeaderView";
import {Colors} from "../../res/styles/Colors";
import Images from "../../common/Images";
import {goBack} from "../../navigation/Navigator";

const GameDetails = (props:any) => {
    const {params} = props.route;
    const {gameDetails} = params;


    return (
        <SafeAreaView style={styles.mainContainer}>
            <HeaderView backgroundColor={Colors.defaultBlack} headerIconColor={Colors.defaultWhite}/>
            <ImageBackground
                source={gameDetails?.image}
                style={[styles.imageBackground,]}
                resizeMode={'stretch'}
            >
                <TouchableOpacity
                    onPress={()=>goBack()}
                    style={styles.backView}
                >
                    <Image source={Images.ic_back} style={styles.headerSmallIcon}/>
                    <Text style={[styles.subTextStyle,{fontWeight:'bold'}]}>BACK</Text>
                </TouchableOpacity>

                <View style={styles.animatedViewMain}>
                    <View >
                        <Text style={styles.textStyle}>{gameDetails?.name}</Text>
                        <Text style={styles.subTextStyle}>Esclusive PlayStation</Text>
                        <Image style={styles.ps4Image} source={Images.ic_ps4}/>
                    </View>

                </View>

            </ImageBackground>
            <TouchableOpacity style={styles.buttonView}>
                <Text style={[styles.subTextStyle,{fontWeight:'bold'}]}>PRE - ORDER NOW</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:Colors.defaultBlack
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    ps4Image:{
        height:ResponsivePixels.size30,
        width:ResponsivePixels.size60,
        tintColor:'white'
    },
    animatedViewMain:{
        backgroundColor:Colors.blackWithCustomOpacity(0.15),
        borderBottomEndRadius:ResponsivePixels.size10,
        borderBottomStartRadius:ResponsivePixels.size10,
        paddingHorizontal:ResponsivePixels.size30,
        paddingVertical:ResponsivePixels.size30,
    },
    textStyle:{
        fontSize:ResponsivePixels.size22,
        color:'white',
        fontWeight:'bold',
    },
    subTextStyle:{
        fontSize:ResponsivePixels.size16,
        color:'white',
    },
    rowView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    columnView:{
        justifyContent:'center',
        alignItems:'center'
    },
    backView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        position:"absolute",
        top:ResponsivePixels.size20,
    },
    headerSmallIcon:{
        height:ResponsivePixels.size20,
        width:ResponsivePixels.size20,
        tintColor:Colors.defaultWhite,
        marginHorizontal:ResponsivePixels.size10
    },
    buttonView:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:ResponsivePixels.size25,
        paddingVertical:ResponsivePixels.size15,
        marginHorizontal:ResponsivePixels.size25,
        marginVertical:ResponsivePixels.size20,
        backgroundColor:Colors.primaryColor,
        borderRadius:ResponsivePixels.size8,
    }
});

export default GameDetails;
