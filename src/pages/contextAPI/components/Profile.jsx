import React, { useContext } from "react";
import UserContext from "@/context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="bg-black border border-green-600 rounded mx-2 p-1">
        please login
      </div>
    );

  return (
    <div className="bg-black border border-green-600 rounded mx-2 p-1">
      Welcome {user.username}
    </div>
  );
}

export default Profile;
