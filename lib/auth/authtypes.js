import { auth } from "@/app/firebase"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"


export const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
}

