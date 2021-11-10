import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type CardProps = {
  content: {
    name: string;
    description: string;
    categories: string[];
  };
};

export default function Card({ content }: CardProps): JSX.Element {
  return (
    <CardBody>
      <CardHeading>{content.name}</CardHeading>
      <p>{content.description}</p>
      {content.categories.map((category) => (
        <Tag>{category}</Tag>
      ))}
    </CardBody>
  );
}

const CardBody = styled.article`
  padding: 1.5em;
  border: 5px solid #c92a2a;
  border-radius: 0.5em;
`;

const CardHeading = styled.h2`
  color: #c92a2a;
`;
