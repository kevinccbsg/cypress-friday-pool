
describe('fakeFoodSelector', () => {
  it('Select one option', () => {
    cy.fixture('options.json').as('option');
    cy.get('@option').each((option) => {
      cy.selectOption('7ywkanw95qbr434x', option);
    });
  })
});