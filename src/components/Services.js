// src/components/Services.js
import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServicesSection>
      <ServicesTitle>Our Services</ServicesTitle>
      <ServicesGrid>
        <ServiceCard>
          <ServiceTitle>Consulting</ServiceTitle>
          <ServiceDescription>Expert advice to drive your business forward.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Development</ServiceTitle>
          <ServiceDescription>Custom solutions tailored to your needs.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Support</ServiceTitle>
          <ServiceDescription>Round-the-clock support to ensure your success.</ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;

const ServicesSection = styled.div`
  padding: 4rem 2rem;
  background: #f8f8f8;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;
