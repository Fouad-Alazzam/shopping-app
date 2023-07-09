import Image from "next/image";
import { useRouter } from "next/router";
import { setUser } from "../listSlice";
import { signOut } from "next-auth/react";
import {
  ChevronLeftIcon,
  PlusCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import withAuth from "../components/WithAuth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
const HomePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await auth.signOut();
    dispatch(setUser(null));

    router.push("/");
  };
  return (
    <div className="relative">
      <ArrowLeftOnRectangleIcon
        onClick={handleLogout}
        className="w-7 h-7 z-50 min-w-sm max-w-[414px] cursor-pointer absolute top-4 right-2"
      />
      <div
        className="relative min-w-sm max-w-[414px]  flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "cover",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2   text-black text-3xl font-semibold">
          {/* <ChevronLeftIcon className="h-7 w-7 cursor-pointer" /> */}
          <p>My Shopping Lists</p>
        </div>
      </div>

      <div>
        <Image className=" mx-auto" src="/pic2.jpeg" height={200} width={250} />
      </div>

      <div
        onClick={() => router.push("/createYourList")}
        className="flex cursor-pointer items-center justify-center mt-10 space-x-2 bg-yellow-500 rounded-2xl p-2 w-2/3 mx-auto ">
        <PlusCircleIcon className="h-7 w-7" />
        <p>Add a new List</p>
      </div>
    </div>
  );
};
export default withAuth(HomePage);
