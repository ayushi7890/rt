import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Pressable,
  TouchableOpacity
} from "react-native";

import * as Permissions from 'expo-permissions';
import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { RFValue,RFPercentage } from "react-native-responsive-fontsize";

import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class Feed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,
			faces: [],
      pickedImagePath:null,
    setPickedImagePath:null,
     fontsLoaded: false
		
		};
		this.onCameraPermission = this.onCameraPermission.bind(this);
		this.onFacesDetected = this.onFacesDetected.bind(this);
		this.onFaceDetectionError = this.onFaceDetectionError.bind(this);
	}

async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }



 showImagePicker = async () => { 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

openCamera = async () => {
  
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

	componentDidMount() {
		Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission);
     this._loadFontsAsync();
	}

	onCameraPermission({ status }) {
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	onFacesDetected({ faces }) {
		this.setState({ faces: faces });
	}
  
	onFaceDetectionError(error) {
		console.log(error);
	}
  
	render() {
 const {pickedImagePath, setPickedImagePath} = this.state;
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		}
		if (hasCameraPermission === false) {
			return (
				<View style={styles.container}>
					<Text>No access to camera</Text>
				</View>
			);
		}
    
      SplashScreen.hideAsync();
		return (
    
      
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo_1.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Retina Care</Text>
            </View>
          </View>
					
				<View style={styles.cameraStyle}>
					<Camera
						style={{ flex: 1 }}
						type={Camera.Constants.Type.front}
						faceDetectorSettings={{
							mode: FaceDetector.FaceDetectorMode.fast,
							detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
							runClassifications: FaceDetector.FaceDetectorClassifications.all,
						}}
						onFacesDetected={this.onFacesDetected}
						onFacesDetectionError={this.onFacesDetectionError}
					/>
          <View style={styles.buttonContainer}>

           <Pressable style={styles.button} onPress={this.showImagePicker}>
      <Text style={styles.text}>Select an image</Text>
    </Pressable>

     <Pressable style={styles.button} onPress={this.openCamera}>
      <Text style={styles.text}>Capture Image</Text>
    </Pressable>
       
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View>
					
				</View>
    
				<View style={styles.framesContainer}>
        <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.cboxsel}
        onPress={()=>this.setState({
          selected:`regular`
        })}>
        <Text style={styles.cboxbox}>Severity Level </Text>
        </TouchableOpacity>

        <TouchableOpacity style={this.state.selected=='wayfarer'?styles.cboxsel:styles.cbox}
        onPress={()=>this.setState({
          selected:`wayfarer`
        })}>
        <Text style={styles.cbox2}>1.0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={this.state.selected=='rimless'?styles.cboxsel:styles.cbox}
        onPress={()=>this.setState({
          selected:`rimless`
        })}>
        <Text style={styles.cbox2}>2.0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={this.state.selected=='aviator'?styles.cboxsel:styles.cbox}
        onPress={()=>this.setState({
          selected:`aviator`
        })}>
        <Text style={styles.cbox2}>3.0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={this.state.selected=='4.0'?styles.cboxsel:styles.cbox}
        onPress={()=>this.setState({
          selected:`4.0`
        })}>
        <Text style={styles.cbox2}>4.0</Text>
        </TouchableOpacity>
        
        </View>
				
				</View>
			</View>
		);
  }
	}
  

const styles = StyleSheet.create({
   container: {
    flex: RFValue(1),
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.08,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
    iconImage: {
    width: "100%",
    height: "200%",
    resizeMode: "contain",
    position:"absolute",
    marginBottom:RFValue(10)
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(32),
    fontFamily: "Bubblegum-Sans",
    paddingBottom:RFValue(10)
  },
	cameraStyle: {
		flex: 0.78,
	},
	framesContainer: {
		flex: 0.1,
		paddingLeft: RFValue(20),
		paddingRight: RFValue(20),
		paddingTop: RFValue(30),
    marginBottom:50,
    height: "8%",
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: "hidden",
    fontFamily: "Bubblegum-Sans",
	},
  categoryContainer:{
   
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginBottom:RFValue(10),
    marginLeft:2,
    fontFamily: "Bubblegum-Sans",
  },
   cboxbox:{
    flex:0.2,
    borderwidth:RFValue(1),
    width:'100%',
    padding:RFValue(2),
    marginLeft:RFValue(1),
    color:'black',
    fontWeight:'bold',
    fontFamily: "Bubblegum-Sans",
      fontSize:RFValue(20),
  },
  cbox:{
    flex:0.15,
    padding:RFValue(3),
    color:'black',
    fontWeight:'bold',
      fontSize:RFValue(20),
    fontFamily: "Bubblegum-Sans",
  },
   cbox2:{
    flex:0.35,
    borderwidth:1,
    width:'100%',
    padding:RFValue(3),
    margin:1,
    alignItems:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:RFValue(20),
    fontFamily: "Bubblegum-Sans",
     
  },
    cboxsel:{
    flex:0.3,
    borderRadius:5,
    borderwidth:1,
    backgroundColor:'white',
    color:'black',
    width:'100%',
    padding:RFValue(3),
    alignItems:'center',
    fontSize:RFValue(20),
    fontFamily: "Bubblegum-Sans",
  },
  buttonContainer: {
    width: RFValue(430),
    flexDirection: 'row',
    paddingTop:RFValue(5),
    fontFamily: "Bubblegum-Sans",
  },
  button: {
    alignItems: 'center',
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(20),
    borderRadius: RFValue(4),
    marginLeft:RFValue(15),
    justifyContent: 'space-around',
    backgroundColor: 'black',
    position:'relative',
    fontFamily: "Bubblegum-Sans",

  },
  text: {
    fontSize: RFValue(22),
    lineHeight: RFValue(21),
    fontWeight: 'bold',
    letterSpacing: RFValue(0.25),
    color: 'white',
    fontFamily: "Bubblegum-Sans",
  },
 
});
