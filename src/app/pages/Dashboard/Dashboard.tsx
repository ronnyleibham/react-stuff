import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import type { Thing } from '../../types';
import styled from 'styled-components';

export default function Dashboard(): JSX.Element {
  const [things, setThings] = useState<Thing[] | null>(null);

  useEffect(() => {
    async function fetchThings() {
      const response = await fetch('https://json-server.neuefische.de/stuff');
      const fetchedThings = await response.json();
      setThings(fetchedThings);
    }
    fetchThings();
  }, []);

  return (
    <main>
      <SiteTitle>Dashboard</SiteTitle>
      {things &&
        things.map((thing) => (
          <Card
            key={thing.id}
            name={thing.name}
            description={thing.description}
            // categories={thing.categories}
          />
        ))}
    </main>
  );
}

const SiteTitle = styled.h1`
  background-color: white;
  display: inline-block;
  color: #c92a2a;
  margin: 10px 30px;
  font-size: 50px;
  padding: 5px 25px;
  border-radius: 10px;
  border: 2px solid #c92a2a;
`;
