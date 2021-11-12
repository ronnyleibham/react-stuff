import React from 'react';
import { useParams } from 'react-router';
import DetailPage from '../../components/DetailPage/DetailPage';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const { thingID } = useParams();

  const thing = useFetch<Thing>(
    `https://json-server.neuefische.de/stuff/${thingID}`
  );

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
