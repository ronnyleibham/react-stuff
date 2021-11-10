import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

const exampleContent = {
  name: 'Old Toothbrush',
  description: 'You could use it to clean shoes',
  categories: ['german', 'movies'],
};

export const Regular = (): JSX.Element => <Card content={exampleContent} />;
