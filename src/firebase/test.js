import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('hTIIhWq7be7UQ4OAwFby').collection('cartItems').doc('BAFTuEanSX4YhJfzLgWB');

firestore.doc('/user/hTIIhWq7be7UQ4OAwFby/cartItems/BAFTuEanSX4YhJfzLgWB');
firestore.collection('/user/hTIIhWq7be7UQ4OAwFby/cartItems/');
