import React from 'react';
import { useParams } from 'react-router';

export default function Stuff(): JSX.Element {
  const { userID } = useParams();
  return <p>Stuff: {userID}</p>;
}
