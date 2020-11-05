/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * Joel's and Lenny's
 * P1935446 + P19499913
 *
 */

import * as React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// navigation bar
class HomeScreen extends React.Component {
  state = {
    selectedTab: 'list',
  };

  render() {
    return (
      <TabNavigator>
        {/* User Profile */}
        <TabNavigator.Item
          selected={this.state.selectedTab === 'user'}
          title="Profile"
          renderIcon={() => (
            <Image source={require('./images/user.png')} style={styles.icon} />
          )}
          renderSelectedIcon={() => (
            <Image
              source={require('./images/blueuser.png')}
              style={styles.icon}
            />
          )}
          //badgeText="4"
          onPress={() => this.setState({ selectedTab: 'user' })}>
          <View style={styles.container}>
            <Image
              source={require('./images/profile-user.png')}
              style={styles.profileImage}
            />
            <Text style={styles.titleProfile}>My Profile</Text>
            <Text style={{ position: 'absolute', paddingBottom: 300, left: 20, color: 'gray', fontFamily: 'Montserrat-Regular' }}>Name</Text>
            <Text style={{ position: 'absolute', paddingBottom: 200, left: 20, color: 'gray', fontFamily: 'Montserrat-Regular' }}>Gender</Text>
            <Text style={{ position: 'absolute', paddingBottom: 100, left: 20, color: 'gray', fontFamily: 'Montserrat-Regular' }}>Completed Items</Text>
            <Text style={{ position: 'absolute', paddingBottom: 0, left: 20, color: 'gray', fontFamily: 'Montserrat-Regular' }}>To be completed</Text>

            <Text style={{ position: 'absolute', paddingBottom: 300, right: 20, fontFamily: 'Montserrat-Regular' }}>Joel Surya</Text>
            <Text style={{ position: 'absolute', paddingBottom: 200, right: 20, fontFamily: 'Montserrat-Regular' }}>Male</Text>
            <Text style={{ position: 'absolute', paddingBottom: 100, right: 20, fontFamily: 'Montserrat-Regular' }}>4</Text>
            <Text style={{ position: 'absolute', paddingBottom: 0, right: 20, fontFamily: 'Montserrat-Regular' }}>4</Text>
          </View>
        </TabNavigator.Item>

        {/* List */}
        <TabNavigator.Item
          selected={this.state.selectedTab === 'list'}
          title="List"
          renderIcon={() => (
            <Image source={require('./images/event.png')} style={styles.icon} />
          )}
          renderSelectedIcon={() => (
            <Image
              source={require('./images/blueevent.png')}
              style={styles.icon}
            />
          )}
          onPress={() => this.setState({ selectedTab: 'list' })}>
          <View style={styles.container}>
            <Text style={styles.titleList}>Bucket List</Text>
            <View elevation={5} style={styles.listItem0}>
              <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', paddingRight: 193.5 }}>Climb Mt. Everest</Text>
              <CheckBox
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
            </View>
            <View elevation={5} style={styles.listItem1}>
              <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', paddingRight: 96 }}>
                Visit the 7 wonders of the world
              </Text>
              <CheckBox />
            </View>
            <View elevation={5} style={styles.listItem2}>
              <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', paddingRight: 250 }}>Go to Bali</Text>
              <CheckBox />
            </View>
            <View elevation={5} style={styles.listItem3}>
              <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', paddingRight: 123 }}>Go scuba diving in Maldives</Text>
              <CheckBox />
            </View>

            <View style={styles.addButtonWrapper}>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
                style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>

            </View>
          </View>

          {/* Completed Bucket List */}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'completed'}
          title="Completed"
          renderIcon={() => (
            <Image
              source={require('./images/checked.png')}
              style={styles.icon}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              source={require('./images/bluechecked.png')}
              style={styles.icon}
            />
          )}
          onPress={() => this.setState({ selectedTab: 'completed' })}>
          <View style={styles.container}>
            <Text style={styles.title}>Completed</Text>
            <View elevation={5} style={styles.listItem0}>
              <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', paddingRight: 138 }}>Go to Lombok, Indonesia</Text>
              <CheckBox />
            </View>
            <View elevation={5} style={styles.listItem1}>
              <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', paddingRight: 133 }}>
                Go swimming with sharks
              </Text>
              <CheckBox />
            </View>
            <View elevation={5} style={styles.listItem2}>
              <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', paddingRight: 206 }}>Get into college</Text>
              <CheckBox />
            </View>
            <View elevation={5} style={styles.listItem3}>
              <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', paddingRight: 157 }}>Make lasagne at home</Text>
              <CheckBox />
            </View>

            <View style={styles.addButtonWrapper}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
                style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TabNavigator.Item>

        {/* Setting */}
        <TabNavigator.Item
          selected={this.state.selectedTab === 'settings'}
          title="Settings"
          renderIcon={() => (
            <Image
              source={require('./images/settings.png')}
              style={styles.icon}
            />
          )}
          //on that page
          renderSelectedIcon={() => (
            <Image
              source={require('./images/bluesettings.png')}
              style={styles.icon}
            />
          )}
          onPress={() => this.setState({ selectedTab: 'settings' })}>
          <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={{ position: 'absolute', paddingBottom: 400, left: 20, fontFamily: 'Montserrat-Regular' }}>Themes</Text>
            <Text style={{ position: 'absolute', paddingBottom: 300, left: 20, fontFamily: 'Montserrat-Regular' }}>Edit Profile</Text>
            <Text style={{ position: 'absolute', paddingBottom: 200, left: 20, fontFamily: 'Montserrat-Regular' }}>Notices</Text>
            <Text style={{ position: 'absolute', paddingBottom: 100, left: 20, fontFamily: 'Montserrat-Regular' }}
              onPress={() => {
                this.props.navigation.navigate('Login');
                this.setState({ selectedTab: 'list' });
              }
              }
            >Log Out</Text>
          </View>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}


// Add list page
class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontFamily: 'Montserrat-Light', position: 'absolute', paddingBottom: 587, }}>Add to List</Text>

        <TouchableOpacity
          style={styles.backButtonWrapper}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Image
            source={require('./images/cancel.png')}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <Text style={styles.addlisttitle}>Title: </Text>

        <TextInput
          style={styles.textbox}
          placeholder="Enter title here!                                  "
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />

        <Text style={styles.addlistdesc}>Description: </Text>
        <TextInput
          style={styles.textboxdesc}
          placeholder="Enter Description here!                     "
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />

        {/* done button */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.doneButton}>
          <Text style={styles.addButtonText}>Done</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
//Login page
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.state = { password: '' };
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>

        {/* bucket icon */}
        <Image
          source={require('./images/bucket_black.png')} style={styles.bucket} />
        {/* Login email */}
        <TextInput
          style={styles.textboxlogin}
          placeholder="example@gmail.com"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.email}
        />
        {/* Login Password */}
        <TextInput
          style={styles.textboxloginpw}
          placeholder="********"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.password}
        />
        {/* forgot password */}
        <Text style={styles.forgotpassword}>Forget password</Text>

        {/* login button */}
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity style={styles.buttonAlignStyle} onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
            <Text style={styles.loginText}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>

        {/* below text */}
        <View style={styles.containerLoginCreate}>
          <Text style={styles.logincreateaccount}>No account yet?</Text>
          <Text style={styles.CreateAnAccount}
            onPress={() => { this.props.navigation.navigate('Signup'); }} > Create an account</Text>
        </View>
      </View>
    );
  }
}
//Signup page
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.state = { email: '' };
    this.state = { password: '' };
  }

  _onButtonLeft() {
    Alert.alert('you have register!');
  }

  render() {
    return (
      <View style={styles.container}>

        {/* bucket icon */}
        <Image
          source={require('./images/bucket_black.png')} style={styles.bucket} />
        {/* Login email */}
        <TextInput
          style={styles.yourname}
          placeholder="Your Name"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.name}
        />
        {/* Login Password */}
        <TextInput
          style={styles.youremail}
          placeholder="Your Email"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.email}
        />
        {/* Login Password */}
        <TextInput
          style={styles.yourpassword}
          placeholder="Password"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.password}
        />

        {/* login button */}
        <View style={styles.signupButtonContainer}>
          <TouchableOpacity style={styles.signupbuttonAlignStyle} onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
            <Text style={styles.signupText}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>

        {/* below text */}
        <View style={styles.containerLoginCreate}>
          <Text style={styles.logincreateaccount}>Already have an account?</Text>
          <Text style={styles.CreateAnAccount}
            onPress={() => { this.props.navigation.navigate('Login'); }} > Try to Log In</Text>
        </View>
      </View>
    );
  }

}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Login: Login,
    Signup: SignUp,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headershown: false,
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  //STYLING FOR TITLES
  title: {
    fontSize: 25,
    fontFamily: 'Montserrat-Light',
    position: 'absolute',
    paddingBottom: 550,
  },
  //STYLING FOR ICONS IN FOOTER
  icon: {
    width: 20,
    height: 20,
  },
  //STYLING FOR ADD TO BUCKET LIST BUTTON
  addButtonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 240,
    marginBottom: 20,
  },
  addButton: {
    width: 65,
    height: 65,
    backgroundColor: '#97D2FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
  },
  //STYLING FOR PROFILE PAGE
  profileImage: {
    height: 60,
    width: 60,
    marginBottom: 0,
  },
  titleProfile: {
    marginBottom: 480,
    fontSize: 25,
    fontFamily: 'Montserrat-Light',
  },
  //STYLING FOR LIST ITEMS
  listItem0: {
    marginTop: 70,
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexDirection: 'row',
  },
  listItem1: {
    marginTop: 30,
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexDirection: 'row',
  },
  listItem2: {
    marginTop: 30,
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexDirection: 'row',
  },
  listItem3: {
    marginTop: 30,
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexDirection: 'row',
  },
  titleList: {
    fontSize: 25,
    fontFamily: 'Montserrat-Regular',
    position: 'absolute',
    paddingBottom: 550,
  },
  listStyle: {
    fontFamily: 'Montserrat-Regular',
    marginTop: 6,
  },
  //STYLING FOR ADD TO LIST PAGE
  iconBack: {
    width: 20,
    height: 20,
  },
  backButtonWrapper: {
    position: 'absolute',
    paddingBottom: 584,
    paddingRight: 320,
  },
  addlisttitle: {
    position: 'absolute',
    paddingBottom: 450,
    paddingRight: 250,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  addlistdesc: {
    position: 'absolute',
    paddingBottom: 250,
    paddingRight: 180,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  textbox: {
    fontFamily: 'Montserrat-Regular',
    position: 'absolute',
    paddingBottom: 400,
    fontSize: 20,
  },
  textboxdesc: {
    fontFamily: 'Montserrat-Regular',
    position: 'absolute',
    paddingBottom: 200,
    fontSize: 20,
  },
  //STYLING FOR LOGIN PAGE
  doneButton: {
    width: 105,
    height: 35,
    backgroundColor: '#97D2FB',
    marginTop: 520,
    marginLeft: 270,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: 20,
  },
  // login
  loginButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAlignStyle: {
    width: 80,
    height: 32,
    backgroundColor: '#97D2FB',
    borderRadius: 30,
    fontFamily: 'Roboto-Medium',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'Roboto-Medium',
    color: 'white',
    fontSize: 14,
  },
  // forgot password
  forgotpassword: {
    paddingTop: 5,
    color: '#1f87c7',
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 159,
    marginBottom: 30,
  },
  //  logo
  bucket: {
    width: 132,
    height: 132,
  },
  //textbox style
  textboxlogin: {
    fontFamily: 'Roboto-Light',
    paddingBottom: 0,
    fontSize: 20,
    borderBottomColor: '#000000',
    paddingRight: 100,
    borderBottomWidth: 1,
    textAlign: 'left',
    color: '#18385E',
  },
  textboxloginpw: {
    fontFamily: 'Roboto-Light',
    paddingBottom: 0,
    fontSize: 20,
    borderBottomColor: '#000000',
    marginTop: 35,
    paddingRight: 215,
    borderBottomWidth: 1,
    textAlign: 'left',
  },
  logincreateaccount: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  containerLoginCreate: {
    paddingTop: 365,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
  },
  //styling for "create an account" text
  CreateAnAccount: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: '#1f87c7',
  },
  //CREATE ACCOUNT PAGE
  yourname: {
    fontFamily: 'Roboto-Light',
    paddingBottom: 0,
    fontSize: 20,
    borderBottomColor: '#000000',
    paddingRight: 195,
    borderBottomWidth: 1,
    textAlign: 'left',
    color: '#18385E',
  },
  youremail: {
    marginTop:20,
    fontFamily: 'Roboto-Light',
    paddingBottom: 0,
    fontSize: 20,
    borderBottomColor: '#000000',
    paddingRight: 195,
    borderBottomWidth: 1,
    textAlign: 'left',
    color: '#18385E',
  },
  yourpassword: {
    marginTop:20,
    fontFamily: 'Roboto-Light',
    paddingBottom: 0,
    fontSize: 20,
    borderBottomColor: '#000000',
    paddingRight: 200,
    borderBottomWidth: 1,
    textAlign: 'left',
    color: '#18385E',
  },
  signupButtonContainer: {
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupbuttonAlignStyle: {
    width: 80,
    height: 32,
    backgroundColor: '#97D2FB',
    borderRadius: 30,
    fontFamily: 'Roboto-Medium',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontFamily: 'Roboto-Medium',
    color: 'white',
    fontSize: 14,
  },
});


