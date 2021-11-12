import React from 'react';
import Card from '../../components/Card/Card';
// import type { Thing } from '../../types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

export default function Dashboard(): JSX.Element {
  const things = useFetch<Thing[]>('https://json-server.neuefische.de/stuff');

  return (
    <main>
      <SiteTitle>Dashboard</SiteTitle>
      {things &&
        things.map((thing) => (
          <LinkStyle key={thing.id} to={`/stuff/${thing.id}`}>
            <Card name={thing.name} description={thing.description} />
          </LinkStyle>
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

const LinkStyle = styled(Link)`
  text-decoration: none;
  :visited {
    color: inherit;
  }
`;
