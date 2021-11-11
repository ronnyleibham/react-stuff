import React from 'react';
import DetailPage from './DetailPage';

export default {
  title: 'Component/DetailPage',
  component: DetailPage,
};

const exampleContentDetail = {
  name: 'Old Toothbrush',
  description: 'You could use it to clean shoes',
  categories: ['18+', 'adult only', 'action'],
};

export const Detail = (): JSX.Element => (
  <DetailPage
    name={exampleContentDetail.name}
    description={exampleContentDetail.description}
    categories={exampleContentDetail.categories}
  />
);
