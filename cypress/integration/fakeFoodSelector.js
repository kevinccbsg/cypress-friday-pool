
describe('fakeFoodSelector', () => {
  it('Select one option', () => {
    cy.visit('/poll/7ywkanw95qbr434x');
    cy.get('#d-newParticipantInput').type('fake user');
    cy.get('#d-pollView > article > div > div > div > ul > li:nth-child(3) input').click({ force: true });
    cy.get('.d-actionButtons > .d-button').click();
  })
});