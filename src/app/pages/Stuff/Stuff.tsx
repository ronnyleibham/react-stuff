import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailPage from '../../components/DetailPage/DetailPage';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const [thing, setThing] = useState<null | Thing>(null);
  const { thingID } = useParams();

  useEffect(() => {
    async function fetchThing() {
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${thingID}`
      );
      const fetchedThing = await response.json();
      setThing(fetchedThing);
    }
    fetchThing();
  }, []);

  return (
    <>
      {thing && (
        <DetailPage
          name={thing.name}
          description={thing.description}
          categories={thing.categories}
        ></DetailPage>
      )}
    </>
  );
}
