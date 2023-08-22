import React from 'react';
import Footer from './footer'; // Update the import path accordingly
import validateFooter from '../../../../cypress/util/validateFooter';

describe('<Footer />', () => {
  it('renders mobile footer', () => {
    cy.mount(<Footer mobileNav={{}} />); // Provide an empty object as mobileNav prop
    validateFooter('mobile');
  });

  it('renders desktop footer', {
    viewportWidth: 1200
  }, () => {
    cy.mount(<Footer mobileNav={{}} />); // Provide an empty object as mobileNav prop
    validateFooter('desktop');
  });
});
