import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "./../../contexts/userContext";

const UserMenu = () => {
  const { userId } = useParams();

  const { isLoggedIn, username, age, logIn, logOut, makeOlder } = useUser();
  const btnRef = useRef();
  const counterRef = useRef(0);

  console.log(btnRef.current);

  const makeOlderWithRef = () => {
    makeOlder();
    console.log(btnRef.current);
    counterRef.current++;
    console.log(counterRef);
    console.log(counterRef.current);
  };

  return (
    <div>
      <h1>userId: {userId}</h1>
      {!isLoggedIn && <p>Not logged in...</p>}
      {isLoggedIn && <p>{username}</p>}
      {!isLoggedIn && (
        <p>
          {age}
          <button ref={btnRef} onClick={makeOlderWithRef}>
            Birthday!
          </button>
        </p>
      )}
      {isLoggedIn ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};

export default UserMenu;
