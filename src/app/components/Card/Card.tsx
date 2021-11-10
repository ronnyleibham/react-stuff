import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type CardProps = {
  content: {
    name: string;
    description: string;
    categories?: string[];
  };
};

export default function Card({ content }: CardProps): JSX.Element {
  return (
    <CardBody>
      <CardHeading>{content.name}</CardHeading>
      <CardDescription>{content.description}</CardDescription>
      <TagContainer>
        {content.categories?.map((category) => (
          <Tag>{category}</Tag>
        ))}
      </TagContainer>
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

const CardDescription = styled.p`
  margin-bottom: 40px;
`;

const TagContainer = styled.div`
  overflow-x: scroll;
  display: flex;
`;
