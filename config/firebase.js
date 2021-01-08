import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyAfP1GjVMzTZB2ho6IBivAkkr4gTZoez38",
    authDomain: "posts-7835c.firebaseapp.com",
    databaseURL: "https://posts-7835c.firebaseio.com",
    projectId: "posts-7835c",
    storageBucket: "posts-7835c.appspot.com",
    messagingSenderId: "441814660462",
    appId: "1:441814660462:web:72a3a64f64aa6467153d7f"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
    db,
    auth,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
