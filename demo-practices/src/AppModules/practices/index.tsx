import { useState, useEffect, createContext } from "react";
import ComponentOne from "./components/component-one";

export const UserDataContext = createContext({});
export default function Practices() {
  const [userData, setUserData] = useState<any[]>([]);

  const fetch_data = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const user_details = await response?.json();
      console.log("user_details >>>>>", user_details)
      setUserData(user_details);

    } catch (error) {
      console.log("error", error);
    }
  };
  function add_user_data() {
    console.log("add_user_data >>>>>>>.", userData)
    setUserData([...userData, {"name": Date.now()}])
  }
  useEffect(() => {
    let interval: any = null;
    if (!userData?.length) {
      fetch_data();
    }
    else {
      // interval = setInterval(() => add_user_data() , 1000)
    }
    
    return () => {
      console.log("Component UnMount", Date.now());
      clearInterval(interval)
    };
  }, [userData]);
  return (
    <>
      <h1>Component render </h1>
      <UserDataContext.Provider value={userData} >
        <ComponentOne />
      </UserDataContext.Provider>
    </>
  );
}
