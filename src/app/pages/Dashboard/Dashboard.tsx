import React from 'react';
import Card from '../../components/Card/Card';

export default function Dashboard(): JSX.Element {
  const exampleContentRegular = {
    name: 'Old Toothbrush',
    description: 'You could use it to clean shoes',
  };

  return (
    <main>
      <h1>Dashboard</h1>
      <Card content={exampleContentRegular} />
    </main>
  );
}
