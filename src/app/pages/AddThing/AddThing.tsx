import React, { useState } from 'react';
// import styled from 'styled-components';

export default function AddThing(): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch('https://json-server.neuefische.de/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
