import { initializeApp } from 'firebase/app';
import { 
  GoogleAuthProvider,
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
 } from 'firebase/auth';
import { firebaseConfig } from '@/config';

initializeApp(firebaseConfig);

const auth = getAuth();

if (window.location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
}

// sign in with email/password
function toggleSignIn(email, password) {
  if (auth.currentUser) {
      signOut(auth);
  } else {
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    signInWithEmailAndPassword(auth, email, password).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      signInButton.disabled = false;
    });
  }
}

// sign in with Google Auth
function toggleSignIn() {
  if (!auth.currentUser) {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    signInWithRedirect(auth, provider);
  } else {
    signOut(auth);
  }
  signInButton.disabled = true;
}

getRedirectResult(auth)
  .then(function (result) {
    if (!result) return;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential?.accessToken;
      oauthToken.textContent = token ?? '';
    } else {
      oauthToken.textContent = 'null';
    }
    // The signed-in user info.
    const user = result.user;
  })
  .catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    if (errorCode === 'auth/account-exists-with-different-credential') {
      alert(
        'You have already signed up with a different auth provider for that email.',
      );
      // If you are using multiple auth providers on your app you should handle linking
      // the user's accounts here.
    } else {
      console.error(error);
    }
  });

// Listening for auth state changes.
onAuthStateChanged(auth, function (user) {
  if (user) {
    // User is signed in.
    const uid = user.uid;
    const email = user.email;
    const emailVerified = user.emailVerified;
  }
  updateSignInButtonUI();
  updateSignOutButtonUI();
  updateSignedInUserStatusUI();
});

// -----------------------------------------------------------------------------

export default function LoginScreen() {
  return (
    <div>hello</div>
  );
}