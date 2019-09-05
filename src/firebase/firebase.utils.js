import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCYB5FhP8w0zdkgH6K-thCzGwcbns92IKk',
	authDomain: 'crwn-db-59322.firebaseapp.com',
	databaseURL: 'https://crwn-db-59322.firebaseio.com',
	projectId: 'crwn-db-59322',
	storageBucket: '',
	messagingSenderId: '701010817494',
	appId: '1:701010817494:web:62314a74b052e0b4133477'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
