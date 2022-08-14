import React from 'react';
import Layout from '@theme/Layout';

export default function Components() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>1</p>
      </div>
    </Layout>
  );
}
