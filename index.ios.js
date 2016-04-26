/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      inputText: '',
    };
  }

  textChanged(params) {
    console.log('text changed', params)
    console.log(this.state.inputText)
    this.setState({inputText: params.inputText})
  }

  componentDidMount() {
    // runs once after component is loaded
    console.log('this', this)
    console.log('https://facebook.github.io/react-native/docs/tutorial.html#content')
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Image
          style={styles.vr}
          source={require('./vr.jpg')}
        />
        <Text style={styles.instructions}>
          Type a search term:
        </Text>
        <TextInput style={styles.textInput}
          value = {this.state.inputText}
          onChangeText = {(inputText) => this.textChanged({inputText})}
        />
        <View style={styles.button}>
        <Text style={styles.buttonText}>Button Text</Text>
        </View>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu</Text>
        <Text>text: {this.state.inputText} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 40,
    marginBottom: 20,
    marginLeft: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
  buttonText: {
    lineHeight: 17,
    margin: 5
  },
  vr: {
    flex: 1,
    margin: 10
  }
});

AppRegistry.registerComponent('NewProject', () => NewProject);
