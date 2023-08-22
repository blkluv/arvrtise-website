import React from 'react';
import Footer from './footer'; // Update the import path accordingly
import validateFooter from '../../../../cypress/util/validateFooter';

describe('<Footer />', () => {
  it('renders mobile footer', () => {
    cy.mount(<Footer mobileNav={{ /* Add the expected properties here */ }} />);
    validateFooter('mobile');
  });

  it('renders desktop footer', {
    viewportWidth: 1200
  }, () => {
    cy.mount(<Footer mobileNav={{ /* Add the expected properties here */ }} />);
    validateFooter('desktop');
  });
});
