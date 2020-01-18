# NewM
### Application build CRUD
![Capturar](https://user-images.githubusercontent.com/50254416/72656052-86949f80-3977-11ea-8084-dbc87a59237d.PNG)
![Capturar1](https://user-images.githubusercontent.com/50254416/72656055-898f9000-3977-11ea-9375-fef6f201a7fc.PNG)


## Installers
If you want to test the App in the Production mode, the installers are listed below
- ReactNative [Link](https://facebook.github.io/react-native/docs/getting-started) for mobile

## Backend
## Configuration
- Configuration **Express** , a microframework that deals with routes, requests and responses;
- Configuration **nodemon** to monitor code changes and restart the server automatically when changes occur;
- Creation of *Models* and *Controllers*;
- Configuration of **mongoose** (ODM that uses Javascript syntax) to handle **MongoDB**, a nonrelational database;

## Mobile
## Configuration  
- Use of **react-native-vector-icons**, for styling the pages with the icons;
- Using **react-navigation** to deal with navigation in a basic way;
- Use of **react-native-gesture-handler**, dependent on *react-navigation*, responsible for handling user gestures;
- Use of **react-native-reanimated**, used to animate transitions at times when the user navigates between screens;
- Configuration of **axios** to make requests to external APIs;

## Getting Started

### Extra Settings :

- Change the IP number in the ./services/api.js file, for your machine, this will allow requests to Api; 

**Running**

**Cloning the Repository**

```
$ git clone https://github.com/ItsJuniorDias/NewM

$ cd NewM
```

**Backend**

```
$ cd backend
$ npm install
$ yarn dev
```


Android

```
$ cd appmobile
$ react-native run-android
$ react-native start
```

iOS

```
$ cd appmobile
$ react-native run-ios
$ react-native start
```



