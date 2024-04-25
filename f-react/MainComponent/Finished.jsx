import React from 'react';
import { CardData } from '../src/Data/Data';
import styled from "styled-components";

const Finished = () => {
  return (
    <div>
      <CardsContainer>
        {CardData.map((oh) => (
          <CardContainer key={oh.id}>
            <Cardbodyo>
              <img src={oh.imageSrc} alt="" style={{ height: '5rem', width: "100%" }} />
              <p>Location: {oh.location}</p>
              <p>Status: {oh.Status}</p>
            </Cardbodyo>
          </CardContainer>
        ))}
      </CardsContainer>
    </div>
  );
};

export default Finished;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 200px; /* Adjust this value to create space from the sidebar */
`;

const CardContainer = styled.div`
  background-color: white;
  height: auto;
  width: 150px; /* Adjust the width as per your requirement */
  margin: 10px; /* Adjust the margin as per your preference */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const Cardbodyo = styled.div`
  color: black;
`;