import React, { useRef, useState } from "react";
import { View, FlatList, Text, Image, StyleSheet, Animated, ImageBackground, SafeAreaView } from "react-native";
import Images from '../../common/Images';
import { Colors } from "../../res/styles/Colors";
import { ResponsivePixels } from "../../res/styles/ResponsivePixels";
import { SafeAreaConsumer } from "react-native-safe-area-context";

const Home = () => {
  const movies = [
    { id: 1, name: 'Cyberpunk 2077', image: Images.ic_cyberpunk },
    { id: 2, name: 'Ghost Of Tsushima', image: Images.ic_ghost_of_tsushima },
    { id: 3, name: 'Predator Hunting Grounds', image: Images.ic_predator },
  ];

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const translateYInterpolation = scrollY.interpolate({
    inputRange: [0, 200], // Adjust the range based on when you want the translation to occur
    outputRange: [0, -30], // Adjust the translateY value based on how much you want it to move
    extrapolate: 'clamp',
  });

  const renderGameItem = ({ item, index }:{ item:any, index:number }) => {

    return (
      <View style={styles.gameItem}>
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        source={item.image}
        style={[styles.imageBackground,]}
        resizeMode={'cover'}
      >
        <View style={styles.animatedViewMain}>
        <Animated.View style={ { transform: [{ translateY: translateYInterpolation }], margin:25,marginBottom:10 , }}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.subTextStyle}>Esclusive PlayStation</Text>
          <Image style={styles.ps4Image} source={Images.ic_ps4}/>
        </Animated.View>
        </View>
      </ImageBackground>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.rowView,styles.headerView]}>
        <Image source={Images.ic_menu} style={styles.headerLargeIcon}/>
        <Image source={Images.ic_playstation} style={styles.headerLogoIcon}/>
        <View style={styles.rowView}>
          <Image source={Images.ic_cart} style={styles.headerSmallIcon}/>
          <Image source={Images.ic_search} style={styles.headerSmallIcon}/>
        </View>
      </View>
      <View style={styles.columnView}>
        <Text style={[styles.subTextStyle,{color:Colors.primaryColor}]}>Great Games</Text>
        <Text style={[styles.textStyle,{fontWeight:'normal',color:Colors.defaultGray}]}>Coming soon</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={renderGameItem}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor:'white'
  },
  headerView:{
    marginHorizontal:ResponsivePixels.size25,
    marginVertical:ResponsivePixels.size10,
  },
  gameItem:{
    height: ResponsivePixels.size400,
    margin: ResponsivePixels.size25,
    marginBottom:ResponsivePixels.size10
  },
  animatedViewMain:{
    backgroundColor:Colors.blackWithCustomOpacity(0.15),
    borderBottomEndRadius:ResponsivePixels.size10,
    borderBottomStartRadius:ResponsivePixels.size10,
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderRadius: ResponsivePixels.size10,
  },
  ps4Image:{
    height:ResponsivePixels.size30,
    width:ResponsivePixels.size60,
    tintColor:'white'
  },
  headerSmallIcon:{
    height:ResponsivePixels.size20,
    width:ResponsivePixels.size20,
    tintColor:Colors.primaryColor,
    marginHorizontal:ResponsivePixels.size10
  },
  headerLargeIcon:{
    height:ResponsivePixels.size30,
    width:ResponsivePixels.size30,
    tintColor:Colors.primaryColor,

  },
  headerLogoIcon:{
    height:ResponsivePixels.size40,
    width:ResponsivePixels.size40,
    tintColor:Colors.primaryColor,
    left:ResponsivePixels.size20,

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
  }
});

export default Home;
