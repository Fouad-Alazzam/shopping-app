import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";

import { setUser } from "../listSlice";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [user, setUserInfo] = useAuthState(auth);
  const router = useRouter();
  const googleAuth = new GoogleAuthProvider();

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, googleAuth);

    if (result.user) {
      const userData = {
        name: result.user.displayName,
        email: result.user.email,
        image: result.user.photoURL,
      };
      console.log(userData);
      dispatch(setUser(userData));

      router.push("/homePage");
    }
  };

  return (
    <div className="h-screen  min-w-sm max-w-[414px] mx-auto text-center">
      <div
        className="relative min-w-sm max-w-[414px] flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "cover",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2 text-black text-3xl font-semibold">
          <p>My Shopping App</p>
        </div>
      </div>
      <div>
        <Image className="mx-auto" src="/pic2.jpeg" height={200} width={300} />
      </div>

      <button
        onClick={handleLogin}
        className="bg-yellow-300 w-2/3 mx-auto rounded-2xl p-2 my-12">
        Login In
      </button>
    </div>
  );
}
