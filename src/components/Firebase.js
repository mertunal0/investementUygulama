//@flow
import * as firebase from "firebase";
require('firebase/auth')

const firebaseConfig = {
    apiKey: "bu kısım gizlendi",
    authDomain: "investement-app.firebaseapp.com",
    databaseURL: "https://investement-app.firebaseio.com",
    projectId: "investement-app",
    storageBucket: "investement-app.appspot.com",
    messagingSenderId: "883247599662",
    appId: "1:883247599662:web:ba837b05d9d63a5f474fbf"
};

class Firebase {

    static auth;
    static registrationInfo = {
        displayName: "",
        email: "",
        password: "",
        activationCode: "",
    }

    static init() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            Firebase.auth = firebase.auth();
        }
    }

    //static createUser() {
    //    firebase.auth().createUserWithEmailAndPassword(this.registrationInfo.email, this.registrationInfo.password)
    //    .then(function() {
    //        
    //    }).catch(
    //        error => {
    //            alert(error);
    //        }
    //    );
    //}
//
    //static Login() {
    //    firebase.auth().signInWithEmailAndPassword(this.registrationInfo.email, this.registrationInfo.password)
    //    .then(
    //        user => {
    //            const newUser = {
    //                id: user.uid
    //            }
    //            this.user = newUser;
    //            console.log(this.user);
    //        }
    //    ).catch(
    //        error => {
    //            if (error.code == "auth/user-not-found" || error.code == "auth/invalid-email" || error.code == "auth/invalid-password") {
    //                alert("Girdiğiniz bilgiler hatalıdır.");
    //            }
    //            else if(error.code == "auth/internal-error") {
    //                alert("Bir terslik oldu. Lütfen daha sonra tekrar deneyin.");
    //            }
    //            else {
    //                alert(error);
    //            }
    //        }
    //    );
    //    if(this.user) {
    //        if (this.user.emailVerified) {
    //            this.next = 'Home';   
    //        }
    //        else{
    //            alert("Hesap aktivasyonunu gerçekleştirin.")
    //        }
    //    }
    //}
//
    //static sendVerification() {
    //    firebase.auth().currentUser.displayName = this.registrationInfo.displayName;
    //    this.user.sendEmailVerification().then(function() {
    //       console.log("verification sent")         
    //    }
    //    ).catch(
    //        error => {
    //            alert(error);
    //        }
    //    )
    //}
}

export {Firebase};
