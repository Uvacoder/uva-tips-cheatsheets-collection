# Firebase Database Cheatsheet
cheatsheet untuk Firebase Database ReactJS
***
## Table of Content
- [Firebase Config](#firebase-config)
	- [Basic Config](#basic-config)
	- [Alternative Config](#alternative-config)
- [Multiple Firebase Project](#multiple-firebase-project)
- [Retrieve Data](#retrieve-data)
  - [`on()`](#on())
  - [`once()`](#once())
- [Functions](#functions)
  - [`push()`](#push())
  - [`set()`](#set())
  - [`update()`](#update())
  - [`delete()`](#delete())
- [Checking Data](#checking-data)
- [Callback and Promise](#callback-and-promise)
  - [`Callback`](#callback)
  - [`Promise`](#promise)
- [Get firebase data key](#get-firebase-data-key)
- [Online Status](#online-status)
- [Firebase Queries](#firebase-queries)

  
***
***
## Firebase Config

file `firebaseConfig.jsx`
``` jsx
const config = {
	apiKey: "_from_your_firebase_project_", 
	authDomain: "_from_your_firebase_project_",
	databaseURL: "_from_your_firebase_project_",
	projectId: "_from_your_firebase_project_",
	storageBucket: "_from_your_firebase_project_",
	messagingSenderId: "_from_your_firebase_project_"
};
export default config;
```
***
### **Basic Config**
file `firebaseRef.jsx`
``` jsx
import firebase from '@firebase/app';
import '@firebase/database'; // jika hanya ingin menggunakan firebase database
import config from './firebaseConfig'

firebase.initializeApp( config );
export const rootRef = firebase.databas( ).ref( );
```
***
### **Alternative Config**
file `firebaseInit.jsx`
``` jsx
import firebase from "@firebase/app";
import "@firebase/database"; // jika hanya ingin menggunakan firebase database
import config from "./firebaseConfig";

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
```
file `firebaseRef.jsx`
``` jsx
import firebase from "./firebaseInit";

const rootRef = firebase.database( ).ref( )
```
***
***
## Multiple Firebase Project
``` jsx
import firebase from '@firebase/app';
import "@firebase/database"; // jika hanya ingin menggunakan firebase database
import config from "./firebaseConfig";

firebase.initializeApp( config );

const configOther = {
    databaseURL: "_from_your_other_firebase_project_"
};

var firebaseOther = firebase.initializeApp(configOther, "other");
export const rootRefOther = firebaseOther.database().ref()
```
***
***
## Retrieve Data
### `on()` 
>menerima data secara realtime
### **Retrieve array data with `on()`**
``` js
firebaseRef.on('value', snap => {
	let tmp = [];
	snap.forEach(shot => {
		tmp.push({
			// data1: shot
			// 	.val( )
			// 	.data1,
			// data2: shot
			// 	.val( )
			// 	.data2,
			// data3: shot
			// 	.val( )
			// 	.data3,
			...shot.val( )
		})
	});
	console.log( tmp )
})
```
***
### **Retrieve specific data with `on()`**
``` js
firebaseRef.child( _key_ ).on("value", snap => {
	console.log( snap.val( ).data1 )
});
```
***
### `once()`
>menerima data hanya sekali dan tidak realtime
### **Retrieve array data with `once()`**
```js
firebaseRef.once('value', snap => {
	let tmp = [ ];
	snap.forEach(shot => {
		tmp.push({
			// data1: shot
			// 	.val( )
			// 	.data1,
			// data2: shot
			// 	.val( )
			// 	.data2,
			// data3: shot
			// 	.val( )
			// 	.data3,
			...shot.val( )
		})
	});
	console.log( tmp )
})
```
***
### **Retrieve specific data with `once()`**
``` js
firebaseRef.child( _key_ ).once("value", snap => {
	console.log( snap.val( ).data1 )
});
```
***
***
## Functions

### `push()`
>menambahkan data dengan key yang dibuat secara otomatis
```js
const PushData = () => {
	const content = {
	    data1: null,
		data2: null,
		data3: null
	};
	firebaseRef.push( content )
}
```
### `set()`
>menambahkan data dengan key yang ada
```js
const SetData = ( _PRIMARY_KEY_ ) => {
	const content = {
		data1: null,
		data2: null,
		data3: null
	};
	firebaseRef.child( _PRIMARY_KEY_ ).set( content )
}
```
### `update()`
>memperbarui data dengan  key yang ada
```js
const UpdateData = ( _PRIMARY_KEY_ ) => {
	const content = {
		data1: null,
		data2: null,
		data3: null
	};
    firebaseRef.child( _PRIMARY_KEY_ ).update( content )
}
```
### `delete()`
menghapus data dengan key yang ada
```js
const DeleteData = ( _PRIMARY_KEY_ ) => {
    firebaseRef.child( _PRIMARY_KEY_ ).remove()
}
```
***
***
## Checking Data
mengecek terdapat data atau tidak meggunakan `.once()`
```js
Checking = ( _PRIMARY_KEY_ ) => {
	firebaseRef.child( _PRIMARY_KEY_ ).once('value', snap => {
		if (snap.exists( )) {
			//if exists
		} else {
			//if not
		}
	})
}
```
***
***
## Callback and Promise

### **Callback**
>callback on `.set()`
```js
const Callback = ( ) => {
    const content = {
		data1: null,
		data2: null,
		data3: null
	};

	firebaseRef.set(content, ( error ) => {
		if ( error ) {
			//if write fail
		} else {
			//if write success
		}
	})
}
```
### **Promise**
>promise on `.update()`
```js
const Promise = ( ) => {
	const content = {
		data1: null,
		data2: null,
		data3: null
	};

	firebaseRef.update( content )
	.then(( ) => {
			//if write success
		})
		.catch(( error ) => {
			//if write fail
		})
}
```
***
***
## Get `firebase` data key
```js
const newPostKey = firebaseRef.child('user').push().key;
```
***
***
## Online Status
file `firebaseRef.jsx`
```js
export const connectedRef = rootRef.child( 'info/connected' );
export const myConnectionsRef = rootRef.child( 'player/1/connections' );
export const lastOnlineRef = rootRef.child( 'player/1/lastOnline' );
```
on `componentWillMount()`
```js
// firebaseRefDC.onDisconnect().set("I disconnected!");
connectedRef.on('value', (snap)=> {
    if (snap.val() === true) {

        // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
        let con = myConnectionsRef.push();
                     
        // When I disconnect, remove this device
    	myConnectionsRef.onDisconnect().set(false);
                      
        // Add this device to my connections list
        // this value could contain info about the device or a timestamp too
		myConnectionsRef.set(true);
		              
        // When I disconnect, update the last time I was seen online
        lastOnlineRef.onDisconnect().set(firebase.database.ServerValue.TIMESTAMP);
    }
});
```
***
***
## Firebase Queries
data `mahasiswa`
```json
{
	"mahasiswa": {
		"1": {
			"nama" : "ahmad dazzle",
			"nim" : 16102201,
			"kelas" : "c",
			"prodi" : "informatika",
			"semester" : 6
		},
		"2": {
			"nama" : "ahmad suryana",
			"nim" : 16102202,
			"kelas" : "a",
			"prodi" : "elektro",
			"semester" : 4 
		},
		"3": {
			"nama" : "eko batrider",
			"nim" : 16102203,
			"kelas" : "c",
			"prodi" : "informatika",
			"semester" : 6
		},
		"4": {
			"nama" : "surya adi",
			"nim" : 16102204,
			"kelas" : "b",
			"prodi" : "informatika",
			"semester" : 4 
		},
		"5": {
			"nama" : "bayu adi",
			"nim" : 16102205,
			"kelas" : "a",
			"prodi" : "elektro",
			"semester" : 4 
		},
		"6": {
			"nama" : "ajie warlock",
			"nim" : 16102206,
			"kelas" : "d",
			"prodi" : "informatika",
			"semester" : 4 
		},
		"7": {
			"nama" : "handoko invoker",
			"nim" : 16102207,
			"kelas" : "d",
			"prodi" : "informatika",
			"semester" : 4 
		},
		"8": {
			"nama" : "ajie adi",
			"nim" : 16102208,
			"kelas" : "b",
			"prodi" : "informatika",
			"semester" : 4 
		},
		"9": {
			"nama" : "anisa maiden",
			"nim" : 16102209,
			"kelas" : "c",
			"prodi" : "informatika",
			"semester" : 6
		},
		"10": {
			"nama" : "fitria enchantress",
			"nim" : 16102210,
			"kelas" : "a",
			"prodi" : "elektro",
			"semester" : 4 
		}
	}
}
```
***
>`get mahasiswa dengan id = 1`
```js
firebaseRef.child('mahasiswa').child('1');
//alternatif
firebaseRef.child('mahasiswa/1');
```
***
>`get mahasiswa dengan nim = 16102201`
```js
firebaseRef.child('mahasiswa').orderByChild('nim').equalTo(16102201);
```
***
>`get 5 data mahasiswa dari awal`
```js
firebaseRef.child('mahasiswa').limitToFirst(5)
```
***
>`get 5 data mahasiswa dari akhir`
```js
firebaseRef.child('mahasiswa').limitToLast(5)
```
***
>`get mahasiswa dengan nama depan "ahmad"`
```js
firebaseRef.child('mahasiswa').orderByChild('nama').startAt('ahmad').endAt('ahmad\uf8ff')
```
***
>`get mahasiswa dengan semester < 6`
```js
firebaseRef.child('mahasiswa').orderByChild('semester').endAt(5) //semester-1
```
>`get mahasiswa dengan semester > 4`
```js
firebaseRef.child('mahasiswa').orderByChild('semester').startAt(4)
```
***
>`get mahasiswa dengan semester antara 2 dan 6`
```js
firebaseRef.child('mahasiswa').orderByChild('semester').startAt(2).endAt(6)
```
***
>`get mahasiswa semester 4 dan prodinya elektro`
```js
firebaseRef.child('mahasiswa').orderByChild('semester').equalTo(4).on('value', snap => {
    snap.forEach(shot => {
        if(shot.val( ).prodi === 'elektro' ){
            console.log(shot.val( ));
        }
    });
})
```
