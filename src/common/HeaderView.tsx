import {Image, StatusBar, StyleSheet, View} from "react-native";
import Images from "./Images";
import React from "react";
import {ResponsivePixels} from "../res/styles/ResponsivePixels";
import {Colors} from "../res/styles/Colors";

interface HeaderProps{
    backgroundColor?:any
    headerIconColor?:any
}
export const HeaderView =(props:HeaderProps)=>{
    const {backgroundColor,headerIconColor}= props;
    return(
        <>
            <StatusBar backgroundColor={backgroundColor || Colors.defaultWhite} barStyle={backgroundColor ? 'light-content' : 'dark-content'}/>
        <View style={[styles.rowView,styles.headerView,{backgroundColor:backgroundColor||Colors.defaultWhite}]}>
            <Image source={Images.ic_menu} style={[styles.headerLargeIcon,{ tintColor: headerIconColor || Colors.primaryColor}]}/>
            <Image source={Images.ic_playstation} style={[styles.headerLogoIcon,{ tintColor: headerIconColor || Colors.primaryColor}]}/>
            <View style={styles.rowView}>
                <Image source={Images.ic_cart} style={[styles.headerSmallIcon,{ tintColor: headerIconColor || Colors.primaryColor}]}/>
                <Image source={Images.ic_search} style={[styles.headerSmallIcon,{ tintColor: headerIconColor || Colors.primaryColor}]}/>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerView:{
        paddingHorizontal:ResponsivePixels.size25,
        paddingVertical:ResponsivePixels.size10,
    },
    headerSmallIcon:{
        height:ResponsivePixels.size20,
        width:ResponsivePixels.size20,
        marginHorizontal:ResponsivePixels.size10
    },
    headerLargeIcon:{
        height:ResponsivePixels.size30,
        width:ResponsivePixels.size30,
    },
    headerLogoIcon:{
        height:ResponsivePixels.size40,
        width:ResponsivePixels.size40,
        left:ResponsivePixels.size20,
    },
    rowView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    columnView:{
        justifyContent:'center',
        alignItems:'center'
    }
});
