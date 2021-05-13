import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, Image, TouchableHighlight,ImageBackground, ScrollView, TextInput,Modal } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          title: 'Home Finder',
          loadingPageDisplay: 'flex',
          listPageDisplay: 'none',
          totalListDisplay: 'flex',
          savedListDisplay: 'none',
          detailPageDisplay: 'none',
          lbsIcon: 'https://codehs.com/uploads/ed4591767163d29388cade04f98a85c2',
          bedIcon: 'https://codehs.com/uploads/26d54c7adbd9197209e667a849758bc3',
          bathIcon: 'https://codehs.com/uploads/5710dd4119f48a6da5ebfb3306367d81',
          squareIcon: 'https://codehs.com/uploads/4db97f0807fa336d02d1388875722db9',
          builtIcon: 'https://codehs.com/uploads/26093c3547ac575a75f6e657bdf78d73',
          neighborhoodIcon: 'https://codehs.com/uploads/d810f9d79b3146495c71961d48376cb4',
          taxIcon: 'https://codehs.com/uploads/14f3d9e173a6deda29b263d8c1203f9e',
          beforeSavedImage: 'https://codehs.com/uploads/0dd5937396f7ce4202c471b3deae991a',
          afterSavedImage: 'https://codehs.com/uploads/8ea21add134c802ae1deebf90fc60b9c',
          loadingImage: 'https://codehs.com/uploads/1545297e33174a9604a8a77a06d2766c',
          tabHouseActiveImage: 'https://codehs.com/uploads/fe058a3990781451b32de39a77c96ac7',
          tabHouseDeActiveImage: 'https://codehs.com/uploads/b448d2079d1cd7ddad19be879f3ca16e',
          tabSavedActiveImage: 'https://codehs.com/uploads/fdfa09e0b8c02b941c214bd8920ee33f',
          tabSavedDeActiveImage: 'https://codehs.com/uploads/8f9e552777eba09eb1ac199ab67acf7e',
          moveToLeftIcon: 'https://codehs.com/uploads/3752a4e690bae76f5980ccabf28ab5ea',
          moveToRightIcon: 'https://codehs.com/uploads/1b3d6a7b15d3d9590a28c394b3e58a90',
          tabActive: 'house',
          //tabActive: 'saved',
          houseList: [
        {
            "name": "Hyde Park",
            "road": "4024 SE 29TH AVE",
            "city": "Jersey City",
            "state": "NJ",
            "postCode": "07302",
            "bedRooms": 3,
            "bathRooms": 2,
            "square": 1809.0,
            "yearBuilt": 1926,
            "neighborhood": "Creston-Kenilworth",
            "money": 1295000.0,
            "taxPerYear": 2606.36,
            "remarks": null,
            "liked": false,
            "pictures": [
                "https://codehs.com/uploads/cb09d88aa9fd8875c2d45a8d1a57774e",
                "https://codehs.com/uploads/36dd966cb3e0b0c6827421250e199a1c",
                "https://codehs.com/uploads/2d516c5a45e343cb172732811a4eaa10",
                "https://codehs.com/uploads/3278e7ef2b224b04987ad7cdf56c068b"
            ],
            "number": 1,
            "pic": "https://codehs.com/uploads/941273a8b0038b2d499250b45273b03b"
        },
        {
            "name": "Rosedale",
            "road": "1904 W 39th St",
            "city": "Jersey City",
            "state": "NJ",
            "postCode": "07310",
            "bedRooms": 3,
            "bathRooms": 4,
            "square": 1863.0,
            "yearBuilt": 1926,
            "neighborhood": "Creston-Kenilworth",
            "money": 1295000.0,
            "taxPerYear": 2606.36,
            "remarks": null,
            "liked": false,
            "pictures": [
                "https://codehs.com/uploads/924f42158d5eb5b03c29aa08e2272372",
                "https://codehs.com/uploads/b6f1ad0b32a68a2bccd87cf7c9934bc3"
            ],
            "number": 2,
            "pic": "https://codehs.com/uploads/5ae4a4d946fa4730a2f6bca82feb49e0"
        },
        {
            "name": "Downtown",
            "road": "90 Fairlie St NW",
            "city": "Jersey City",
            "state": "NJ",
            "postCode": "07305",
            "bedRooms": 2,
            "bathRooms": 2,
            "square": 1550.0,
            "yearBuilt": 2001,
            "neighborhood": "Creston-Kenilworth",
            "money": 3755000.0,
            "taxPerYear": 2606.36,
            "remarks": null,
            "liked": false,
            "pictures": [
                "https://codehs.com/uploads/71f5b66c0dc967703ea06c180b6aa242",
                "https://codehs.com/uploads/53feed27b57b15a3ba61edbf2769d3d4"
            ],
            "number": 3,
            "pic": "https://codehs.com/uploads/87ace0bbd4f186861fd93dcb6647d062"
        },
        {
            "name": "Longfellow",
            "road": "4211 Martin Luther King Jr Way",
            "city": "Jersey City",
            "state": "NJ",
            "postCode": "07301",
            "bedRooms": 2,
            "bathRooms": 1,
            "square": 900.0,
            "yearBuilt": 2001,
            "neighborhood": "Creston-Kenilworth",
            "money": 1900000.0,
            "taxPerYear": 2606.36,
            "remarks": null,
            "liked": false,
            "pictures": [
                "https://codehs.com/uploads/d7ee546f885d95b08cc8a81613940cd1",
                "https://codehs.com/uploads/912051ffce6e891dbd3b86cac016be72"
            ],
            "number": 4,
            "pic": "https://codehs.com/uploads/b1275b66e981ce20445620a046054bc2"
        },
        {
            "name": "Logan Square",
            "road": "2108 Appletree St",
            "city": "Jersey City",
            "state": "NJ",
            "postCode": "07308",
            "bedRooms": 3,
            "bathRooms": 3,
            "square": 2462.0,
            "yearBuilt": 1926,
            "neighborhood": "Creston-Kenilworth",
            "money": 1295000.0,
            "taxPerYear": 2606.36,
            "remarks": null,
            "liked": false,
            "pictures": [
                "https://codehs.com/uploads/0720af493fb49069ecf7fd561bf314b8",
                "https://codehs.com/uploads/ab10a5d0b56387f5e4a264c1d2d23595"
            ],
            "number": 5,
            "pic": "https://codehs.com/uploads/4fbb02dc1c96d2c110cb7c12679ef925"
        }
    ],
          savedList: [],
          houseSelected: 0,
          tourName:'',
          tourEmail:'',
          tourPhone:'',
          detailPicIndex:0,
      }
      this.getData();
    }

    setModalVisible = (visible) => {
        this.setState({
            totalListDisplay: 'none',
            savedListDisplay: 'none',
            detailPageDisplay: 'none',
            detailPicsPageDisplay: 'flex',
        });
    }

    onChangeTextTourName = (text) => {
        this.setState({
            tourName: text,
        });
    }

    onChangeTextTourEmail = (text) => {
        this.setState({
            tourEmail: text,
        });
    }

    onChangeTextTourPhone = (text) => {
        this.setState({
            tourPhone: text,
        });   
    }

    getData = () => {
      let url = "https://nlp.microc.cn/finder/house/list"; 
      fetch(url, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((responseJson) => {  
         //alert(responseJson.data[0].liked);
         this.setState({
            houseList: responseJson.data
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }

   addTour = async (houseNum,tourName,tourEmail,tourPhone) => {
        let url = 'https://nlp.microc.cn/finder/tour';
        
        let rawData = await fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                name: tourName,
                email: tourEmail,
                phone: tourPhone,
                houseNum: houseNum,
            }),
        });
        
        let dataStr = await rawData.text();
        
        let jsonData = JSON.parse(dataStr);
        if(jsonData.code == 200){
            alert('You tour has been submitted!');
        } else {
            alert(jsonData.message);
        }
        
        //console.warn(jsonData);
    }

  onTryButtonPressed = () => {
      this.setState({
          loadingPageDisplay: 'none',
          listPageDisplay: 'flex',
          detailPageDisplay: 'none',
      });
    }
    
    onHomeButtonPressed = () => {
        this.setState({ 
            tabActive: 'house',
            totalListDisplay: 'flex',
            detailPageDisplay: 'none',
        });
    }

    onViewDetailPressed = (number) => {
        //alert(number);
        this.setState({
            houseSelected: number,
            totalListDisplay: 'none',
            savedListDisplay: 'none',
            detailPageDisplay: 'flex',
        });
    }
    
    onTabButtonPressed = (buttonName) => {
        this.setState({
            tabActive: buttonName,
            totalListDisplay: buttonName=='house' ? 'flex' : 'none',
            savedListDisplay: buttonName=='saved' ? 'flex' : 'none',
            detailPageDisplay: 'none',
        });
    }

    moveTo = (step) => {
        if( this.state.detailPicIndex + step >= 0 && this.state.detailPicIndex + step < this.state.houseList[this.state.houseSelected].pictures.length){
            this.setState({
                detailPicIndex: this.state.detailPicIndex + step
            });
        }
    }
    
    onSaveButtonPressed = (number) => {
        //alert(number);
        if( !this.state.houseList[number].liked ) {
            let houseList = this.state.houseList;
            houseList[number].liked = true;
            this.setState({
                houseList: houseList,
            });
            this.state.savedList.splice(0,0,{
                number: this.state.houseList[number].number,
                name: this.state.houseList[number].name,
                road: this.state.houseList[number].road,
                city: this.state.houseList[number].city,
                state: this.state.houseList[number].state,
                postCode: this.state.houseList[number].postCode,
                bedRooms: this.state.houseList[number].bedRooms,
                bathRooms: this.state.houseList[number].bathRooms,
                square: this.state.houseList[number].square,
                yearBuilt: this.state.houseList[number].yearBuilt,
                neighborhood: this.state.houseList[number].neighborhood,
                money: this.state.houseList[number].money,
                taxPerYear: this.state.houseList[number].taxPerYear,
                remarks: this.state.houseList[number].remarks,
                pic: this.state.houseList[number].pic,  
                pictures:this.state.houseList[number].pictures,
                liked: true,
            });
        } else {
            //alert('1');
            let houseList = this.state.houseList;
            houseList[number].liked = false;
            this.setState({
                houseList: houseList,
            });
            let deleteIndex = null;
            this.state.savedList.map((item,index)=>{
                if(item.number == this.state.houseList[number].number){
                    deleteIndex = index;
                    //alert(deleteIndex);
                }
            });
            if( deleteIndex!=null){
              //alert('3');
                this.state.savedList.splice(deleteIndex,1);
            }
        }
        
        //alert(this.state.savedList[0].road);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{  flex:1, 
                                display: this.state.loadingPageDisplay, 
                                backgroundColor:'#f6f6f6', 
                                alignItems: 'center',
                                justifyContent: 'center',
                }}>
                    <Image source={{uri:this.state.loadingImage, method: 'POST'}} style={styles.loadingImage}>
                    </Image>
                    <Text style={styles.tryText}>
                            {this.state.title}
                    </Text>
                    <TouchableHighlight onPress={this.onTryButtonPressed} underlayColor='transparent'>
                        
                        <View style={styles.tryButton}>
                            <Text style={styles.tryButtonText}>
                                Click Here!
                            </Text>
                        </View> 
                    </TouchableHighlight>
                </View>
                <View style={{flex: 1, display: this.state.listPageDisplay}}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>
                            {this.state.title}
                        </Text>
                    </View>
                    <View style={{flex: 9, padding: 10, display: this.state.totalListDisplay}}>
                        {
                          // style={styles.contentContainer}>
                          //contain information: pic money raod city state
                        }
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {this.state.houseList.map((item)=>(
                            <View style={styles.houseRowContainer}>
                                <ImageBackground source={{uri:item.pic, method: 'POST'}} style={styles.houseRow} imageStyle={{borderRadius:5}}>
                                    <View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={styles.cityText}>
                                                {item.city}, {item.state}    
                                            </Text>
                                            <TouchableHighlight onPress={()=>this.onSaveButtonPressed(item.number-1)} underlayColor='transparent'>
                                                <Image source={{uri:item.liked ? this.state.afterSavedImage : this.state.beforeSavedImage, method: 'POST'}}
                                                        style={{width:36, height:34}}>
                                                </Image>
                                            </TouchableHighlight>
                                          </View>
                                        <Text style={styles.nameText}>
                                            {item.name}
                                        </Text>
                                        <View style={{height: 15}}>
                                        {
                                          //fill the blank height, if I use the marginTop attribute on the Text component, the blank space will be clickable too.
                                        }
                                        </View>
                                        <TouchableHighlight onPress={()=>this.onViewDetailPressed(item.number-1)} underlayColor='transparent'>  
                                            <Text style={styles.viewDetailText}>
                                                View details    >
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </ImageBackground>
                            </View>    
                            ))}
                        </ScrollView>
                    </View>
                    
                    <View style={{flex: 9, padding: 10, display: this.state.savedListDisplay}}>
                        {
                          // style={styles.contentContainer}>
                          //contain information: pic money raod city state
                        }
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {this.state.savedList.map((item)=>(
                            <View style={styles.houseRowContainer}>
                                <ImageBackground source={{uri: item.pic, method: 'POST'}} style={styles.houseRow} imageStyle={{borderRadius:5}}>
                                    <View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={styles.cityText}>
                                                {item.city}, {item.state}  
                                            </Text>
                                          </View>
                                        <Text style={styles.nameText}>
                                            {item.name}
                                        </Text>
                                        <View style={{height: 40}}>
                                        {
                                          //fill the blank height, if I use the marginTop attribute on the Text component, the blank space will be clickable too.
                                        }
                                        </View>
                                        <TouchableHighlight onPress={()=>this.onViewDetailPressed(item.number-1)} underlayColor='transparent'>  
                                            <Text style={styles.viewDetailText}>
                                                View details    >
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </ImageBackground>
                            </View>    
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{display: this.state.detailPageDisplay, flex: 9}}>    
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <ImageBackground source={{uri: this.state.houseList[this.state.houseSelected].pictures[this.state.detailPicIndex], method: 'POST'}} style={styles.mainPic}>
                                <View style={styles.mainPicContainer}>
                                    <View style={styles.picMoveContainer}>
                                        <TouchableHighlight onPress={()=>this.moveTo(-1)}>
                                            <Image source={{uri:this.state.moveToLeftIcon, method: 'POST'}} style={styles.movePic}>
                                            </Image>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={()=>this.moveTo(1)}>
                                            <Image source={{uri:this.state.moveToRightIcon, method: 'POST'}} style={styles.movePic}>
                                            </Image>
                                        </TouchableHighlight>
                                    </View>
                                    <View style={styles.moneyContainer}>
                                        <Text style={styles.moneyText}>
                                            ${this.state.houseList[this.state.houseSelected].money}
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style={styles.addressContainer}>
                                <Image source={{uri: this.state.lbsIcon, method: 'POST'}} style={{width: 10, height: 17, marginLeft:10}}>
                                </Image>
                                <Text style={styles.addressText}>
                                    {this.state.houseList[this.state.houseSelected].road} {this.state.houseList[this.state.houseSelected].city},{this.state.houseList[this.state.houseSelected].state} {this.state.houseList[this.state.houseSelected].postCode}
                                </Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <View style={styles.infoRowContainer}>
                                    <View style={styles.infoRowDetailContainer}>
                                        <Image source={{uri: this.state.bedIcon, method: 'POST'}} style={styles.icon}>
                                        </Image>
                                        <Text style={styles.infoRowDataText}>
                                            {this.state.houseList[this.state.houseSelected].bedRooms}
                                        </Text>
                                        <Text style={styles.infoRowTitleText}>
                                            Bedrooms
                                        </Text>
                                    </View>
                                    <View style={styles.infoRowDetailContainer}>
                                        <Image source={{uri: this.state.bathIcon, method: 'POST'}} style={styles.icon}>
                                        </Image>
                                        <Text style={styles.infoRowDataText}>
                                            {this.state.houseList[this.state.houseSelected].bathRooms}
                                        </Text>
                                        <Text style={styles.infoRowTitleText}>
                                            Bathrooms
                                        </Text>
                                    </View>
                                    <View style={styles.infoRowDetailContainer}>
                                        <Image source={{uri:this.state.squareIcon, method: 'POST'}} style={styles.icon}>
                                        </Image>
                                        <Text style={styles.infoRowDataText}>
                                            {this.state.houseList[this.state.houseSelected].square}
                                        </Text>
                                        <Text style={styles.infoRowTitleText}>
                                            Square Footage
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.infoRowContainer}>
                                    <View style={styles.infoRowDetailContainer}>
                                        <Image source={{uri: this.state.builtIcon, method: 'POST'}} style={styles.icon}>
                                        </Image>
                                        <Text style={styles.infoRowDataText}>
                                            {this.state.houseList[this.state.houseSelected].yearBuilt}
                                        </Text>
                                        <Text style={styles.infoRowTitleText}>
                                            Year Built
                                        </Text>
                                    </View>
                                    <View style={styles.infoRowDetailContainer}>
                                        <Image source={{uri: this.state.neighborhoodIcon, method: 'POST'}} style={styles.icon}>
                                        </Image>
                                        <Text style={styles.infoRowDataText}>
                                            {this.state.houseList[this.state.houseSelected].neighborhood}
                                        </Text>
                                        <Text style={styles.infoRowTitleText}>
                                            Neighborhood
                                        </Text>
                                    </View>
                                    <View style={styles.infoRowDetailContainer}>
                                        <Image source={{uri: this.state.taxIcon, method: 'POST'}} style={styles.icon}>
                                        </Image>
                                        <Text style={styles.infoRowDataText}>
                                            {this.state.houseList[this.state.houseSelected].taxPerYear}
                                        </Text>
                                        <Text style={styles.infoRowTitleText}>
                                            Tax per Year
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.scheduleContainer}>
                                <View style={styles.nameRow}>
                                    <TextInput placeholder='Name' placeholderTextColor='lightgray' style={styles.nameInput} value={this.state.tourName} onChangeText={(text)=>this.onChangeTextTourName(text)}>
                                    </TextInput>
                                    <TextInput placeholder='Phone' placeholderTextColor='lightgray'  style={styles.phoneInput} value={this.state.tourPhone} onChangeText={(text)=>this.onChangeTextTourPhone(text)}>
                                    </TextInput>
                                </View>
                                <View style={styles.emailRow}>
                                    <TextInput placeholder='Email' placeholderTextColor='lightgray'  style={styles.emailInput} value={this.state.tourEmail} onChangeText={(text)=>this.onChangeTextTourEmail(text)}>
                                    </TextInput>
                                </View>
                                <View style={styles.scheduleRow}>
                                    <TouchableHighlight onPress={()=>this.addTour(this.state.houseList[this.state.houseSelected].number,this.state.tourName,this.state.tourEmail,this.state.tourPhone)}>
                                        <View style={styles.scheduleButton}>
                                            <Text style={styles.scheduleButtonText}>
                                                Schedule a Tour
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                                
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.bottomContainer}>
                        <TouchableHighlight onPress={() => this.onTabButtonPressed('house')} underlayColor='transparent'>
                            <View style={styles.tabButtonRowContainer}>
                                <Image source={{uri: this.state.tabActive=='house' ? this.state.tabHouseActiveImage : this.state.tabHouseDeActiveImage, method: 'POST'}} style={{width:30,height:30}}>
                                </Image>
                                <Text style={{color: this.state.tabActive=='house' ? '#2bc9b6' : '#c7c7c7'}}>
                                    Home
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.onTabButtonPressed('saved')}  underlayColor='transparent'>
                            <View style={styles.tabButtonRowContainer}>
                                <Image source={{uri: this.state.tabActive=='saved' ? this.state.tabSavedActiveImage : this.state.tabSavedDeActiveImage, method: 'POST'}} style={{width:30,height:30}}>
                                </Image>
                                <Text style={{color: this.state.tabActive=='saved' ? '#2bc9b6' : '#c7c7c7'}}>
                                    Saved
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    loadingImage: {
        width: deviceWidth/2,  
        height: deviceWidth/2,
    },
    tryText: {
        color: 'black',
        fontFamily: 'Brush Script MT',
        fontSize: deviceHeight/20,
        marginTop: 100,
    },
    tryButton: {
        width: deviceWidth/2,
        height: deviceHeight/20,
        borderColor: 'lightgreen',
        borderWidth: 2,
        //backgroundColor: '#8cc63e',
        backgroundColor: '#2bc9b6',
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    tryButtonText:{
        color: 'white',
        fontSize: deviceHeight/40,
        //fontWeight: 'bold',
        fontFamily: 'Brush Script MT',

    },
    titleContainer: {
        //House Assistant
        flex:1,
        //backgroundColor: '#8cc63e',
        backgroundColor: '#2bc9b6',
        alignItems: 'center',
        justifyContent: 'center',
        //borderBottomColor: 'black',
        borderBottomColor: 'lightgreen',
        borderBottomWidth: 1,
    },
    titleText: {
        color: 'black',
        fontSize: deviceHeight/20,
        fontWeight: 'bold',
        fontFamily: 'Brush Script MT',
        textAlign: 'center',
    },
    houseRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
    },
    houseRow: {
        width: deviceWidth - 40,
        height: deviceHeight/5,
        padding: 20,
    },
    cityText: {
        color: 'white',
        fontSize: deviceHeight/50,
        width: deviceWidth-40,
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: deviceHeight/40,
    },
    viewDetailText: {
        color: 'white',
        fontSize: deviceHeight/60,
        //marginTop: 40,
        //backgroundColor:'red',
    },
    bottomContainer:{
        flex: 1,
        backgroundColor: 'white',//'#8cc63e',
        borderTopColor: 'lightgreen',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabButtonRowContainer: {
        width: deviceWidth/2,
        height: deviceHeight/11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainPic: {
        width: deviceWidth,
        height: deviceHeight/11*9/11*5,
    },
    mainPicContainer:{
        width: deviceWidth,
        height: deviceHeight/11*9/13*6,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
    },
    picMoveContainer: {
        width: deviceWidth,
        height: deviceHeight/22,
        backgroundColor: 'transparent',
        marginBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:5,
        paddingRight:5,
    },
    moneyContainer: {
        width: deviceWidth/4,
        height: deviceHeight/22,
        backgroundColor: '#2bc9b6',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moneyText: {
        color: 'white',
        textAlign: 'center',
        fontSize: deviceHeight/50,
    },
    addressContainer: {
        width: deviceWidth,
        height: deviceHeight/11*9/13,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressText: {
        color: 'gray',
        fontSize: deviceHeight/60,
    },
    infoContainer: {
        width: deviceWidth,
        height: deviceHeight/11*9/13*6,
        backgroundColor: '#f5f5f5',
    },
    infoRowContainer: {
        width: deviceWidth,
        height: deviceHeight/11*9/13*6/2,
        alignItems: 'center',
        flexDirection: 'row',
    },
    infoRowDetailContainer: {
        width: deviceWidth/3,
        height: deviceHeight/11*9/13*6/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoRowDataText: {
        color: 'gray',
        fontSize: deviceHeight/40,
    },
    infoRowTitleText: {
        color: 'gray',
        fontSize: deviceHeight/60,
    },
    icon: {
        width: 34,
        height: 34,
    },
    scheduleContainer: {
        padding: 10,
        width: deviceWidth,
        height: deviceHeight/11*9/13*5,
        backgroundColor: 'white',
    },
    nameRow: {
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red',
    },
    nameInput: {
        width: deviceWidth/3,
        height: deviceHeight/20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        color: 'gray',
    },
    phoneInput: {
        width: deviceWidth/3,
        height: deviceHeight/20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        color: 'gray',
    },
    emailRow: {
        width: deviceWidth,
        alignItems: 'center',
        marginTop: 5,
        //backgroundColor: 'red',
    },
    scheduleRow: {
        width: deviceWidth,
        alignItems: 'center',
        marginTop: 5,
        //backgroundColor: 'red',
    },
    emailInput: {
        width: deviceWidth/3*2,
        height: deviceHeight/20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        color: 'gray',
    },
    scheduleButton: {
        width: deviceWidth/2,
        height: deviceHeight/20,
        borderColor: 'lightgreen',
        borderWidth: 2,
        //backgroundColor: '#8cc63e',
        backgroundColor: '#2bc9b6',
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    scheduleButtonText:{
        color: 'white',
        fontSize: deviceHeight/40,
    },
    movePic: {
        width:30, 
        height: 30,
        marginRight:5,
        opacity:0.6
    }
});
