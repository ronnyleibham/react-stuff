import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type CardProps = {
  id?: number;
  name: string;
  description: string;
  categories?: string[];
};

export default function Card({
  name,
  description,
  categories,
}: CardProps): JSX.Element {
  return (
    <CardBody>
      <CardHeading>{name}</CardHeading>
      <CardDescription>{description}</CardDescription>
      <TagContainer>
        {categories &&
          categories.map((category) => <Tag key={category}>{category}</Tag>)}
      </TagContainer>
    </CardBody>
  );
}

const CardBody = styled.article`
  padding: 1.5em;
  border: 2px solid #c92a2a;
  background-color: white;
  border-radius: 0.5em;
  box-shadow: 3px 3.6px 5.4px rgba(0, 0, 0, 0.02),
    9.9px 11.8px 18.2px rgba(0, 0, 0, 0.03), 61px 73px 81px rgba(0, 0, 0, 0.05);
  margin: 15px 30px;
`;

const CardHeading = styled.h1`
  color: #c92a2a;
`;

const CardDescription = styled.p`
  margin-bottom: 40px;
`;

const TagContainer = styled.div`
  overflow-x: scroll;
  display: flex;
`;
