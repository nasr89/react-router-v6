import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  //const userId = params.userId;
  //   or using distructuring
  const { userId } = useParams();
  return <div>UserDetails about {userId}</div>;
};

export default UserDetails;
