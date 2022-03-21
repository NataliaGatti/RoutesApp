import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const username = params.username

  return (
    <div>
      <h1> soy {username}</h1>
    </div>
  );
}

export default User;
