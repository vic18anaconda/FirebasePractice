import React from 'react';
import { useParams } from 'react-router-dom';

function AboutUsTest() {

  const { id } = useParams();

  return (
    <div className="AboutUsTest">
      About us page { id }
    </div>
  );
}

export default AboutUsTest;