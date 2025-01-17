type Size = 'mobile' | 'desktop'

const validateFooter = (size: Size) => {

    cy.log('-----START FOOTER-----')
    // since both mobile and desktop versions are in the DOM as the same time, we scope with [data-cy]
    cy.get(`[data-cy=${size}-footer]`).within(() => {
        cy.validateLink('Home', '/')
        cy.validateLink('ARVRtise', '/')
        cy.validateLink('Newsletter', 'https://arvrtise.substack.com/', 'new tab')
        cy.validateLink('About', '/about')
        cy.validateLink('Contact Us', '/contact')
    
        // now test the SVG icon links at the bottom
        cy.validateLink('Twitter for ARVRtise', 'https://www.twitter.com/arvrtise', 'new tab')
        cy.validateLink('Discord for ARVRtise', 'https://discord.gg/nfAmqTGNAU', 'new tab')
        cy.validateLink('LinkedIn for Tech Is Hiring', 'https://www.linkedin.com/showcase/89771536', 'new tab')
        cy.validateLink('ARVRtise Newsletter on Substack', 'https://arvrtise.substack.com/', 'new tab')
    
        cy.contains(`p`, `© Copyright ${new Date().getFullYear()}, All rights reserved.`).should('be.visible')
        cy.contains(`p`, `Website designed by Inetimi Ade (info@arvrtise.com)`).should('be.visible')
    })
    // test the main navigation links for the site
    cy.log('-----END FOOTER-----')
}

export default validateFooter