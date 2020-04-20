import React from 'react';
import {
  StyleSheet, ActivityIndicator, View, Text,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Input, Icon } from 'react-native-elements';
import { DO_LOGIN, SET_EMAIL, SET_PASSWORD } from '../actions';
import i18n from '../translation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.9,
    padding: 20,
  },
  subContainer: {
    marginBottom: 20,
    padding: 5,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    margin: 5,
    width: windowWidth * 0.8,
  },
});

class Login extends React.PureComponent {
  render() {
    const {
      email, password, doLogin, setEmail, setPassword, navigation: { navigate }, isLoading, auth,
    } = this.props;
    if (auth) navigate('PrincipalFlow');
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 28, height: 50 }}>{i18n.t('loginTitle')}</Text>
          </View>
          <View style={styles.subContainer}>
            <Input
              style={styles.textInput}
              placeholder={i18n.t('placeholderEmail')}
              leftIcon={(
                <Icon
                  name="mail"
                  size={24}
                />
                          )}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.subContainer}>
            <Input
              style={styles.textInput}
              placeholder={i18n.t('placeholderPassword')}
              leftIcon={(
                <Icon
                  name="lock"
                  size={24}
                />
                          )}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.subContainer}>
            <Button
              style={styles.textInput}
              icon={(
                <Icon
                  name="input"
                  size={15}
                  color="white"
                />
                          )}
              title={i18n.t('login')}
              onPress={() => doLogin(email, password)}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{i18n.t('fogotPassword')}</Text>
          </View>
          <View style={styles.subContainer}>
            <Button
              style={styles.textInput}
              icon={(
                <Icon
                  name="refresh"
                  size={15}
                  color="white"
                />
                          )}
              title={i18n.t('resetPassword')}
              onPress={() => {
                navigate('Reset');
              }}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Not a user?</Text>
          </View>
          <View style={styles.subContainer}>
            <Button
              style={styles.textInput}
              icon={(
                <Icon
                  name="check-circle"
                  size={15}
                  color="white"
                />
                          )}
              title={i18n.t('register')}
              onPress={() => {
                navigate('Register');
              }}
            />
          </View>
          {isLoading
                    && (
                    <View style={styles.activity}>
                      <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    )}
        </View>
      </View>
    );
  }
}

Login.defaultProps = {
  email: '',
  password: '',
  isLoading: false,
  auth: false,
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  isLoading: PropTypes.bool,
  auth: PropTypes.bool,
  doLogin: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.login.isLoading,
  email: state.login.email,
  password: state.login.password,
  error: state.login.error,
  auth: state.login.auth,
  message: state.login.message,
});

const mapDispatchToProps = (dispatch) => ({
  doLogin: (email, password) => dispatch({ type: DO_LOGIN, email, password }),
  setEmail: (email) => dispatch({ type: SET_EMAIL, email }),
  setPassword: (password) => dispatch({ type: SET_PASSWORD, password }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
