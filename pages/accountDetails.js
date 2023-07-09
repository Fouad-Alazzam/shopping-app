import React from "react";
import Image from "next/image";
import withAuth from "../components/WithAuth";
import { useSelector } from "react-redux";
function accountDetails() {
  const user = useSelector((state) => state.list.user);

  return (
    <div>
      <div
        className="relative min-w-sm max-w-[414px] flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "cover",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2  text-black text-3xl font-semibold">
          <p>Account Details</p>
        </div>
      </div>
      <div className="text-center mx-auto mt-12">
        {user && user.image && (
          <Image
            className="text-center rounded-full mx-auto"
            src={user.image}
            height={200}
            width={200}
            alt="user image"
          />
        )}

        {user && <p className="text-2xl font-semibold m-5">{user.name}</p>}
      </div>
    </div>
  );
}

export default withAuth(accountDetails);
