import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

const exampleContentRegular = {
  name: 'Old Toothbrush',
  description: 'You could use it to clean shoes',
};
const exampleContentDetail = {
  name: 'Old Toothbrush',
  description: 'You could use it to clean shoes',
  categories: ['18+', 'movies', 'action', 'german', 'fun', '2020'],
};

export const Regular = (): JSX.Element => (
    {things.length >= 0 &&
        things.map((thing) => (
          <Card
            name={thing.name}
            description={thing.description}
            categories={thing.categories}
          />
        ))}
);
export const Detail = (): JSX.Element => (
  <Card content={exampleContentDetail} />
);
