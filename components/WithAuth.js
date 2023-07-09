import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = () => {
    const [user, loading] = useAuthState(auth);

    const router = useRouter();

    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (!user) {
      router.push("/");
      return null;
    }

    return <WrappedComponent />;
  };

  return WithAuthComponent;
};

export default withAuth;
