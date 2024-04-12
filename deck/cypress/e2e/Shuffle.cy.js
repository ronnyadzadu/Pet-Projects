describe('Get New Deck', () => {
it('shuffle the card', () => {
    cy.request({
      method: "GET",
      url: 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.be.true
      expect(response.body.deck_id).to.be.a('string')
      expect(response.body.shuffled).to.be.true
      expect(response.body.remaining).to.be.a('number')
    });
  })
})

  it('Draw a card', () => {
      cy.request({
        method: "GET",
        url: 'https://www.deckofcardsapi.com/api/deck/new/draw/?count=2',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.a('string')
        expect(response.body.cards).to.have.length(2);
        expect(response.body.remaining).to.eq(50);
        response.body.cards.forEach(card => {
          expect(card).to.have.all.keys('code', 'image', 'images', 'value', 'suit')
        });
      });
    })

    it('Reshuffle card', ()=> {
      cy.request({
        method:"GET",
        url: 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?remaining=true',
       }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.success).to.be.true
        expect(response.body.deck_id).to.be.a('string')
        expect(response.body.shuffled).to.be.true
        expect(response.body.remaining).to.eq(52)
       })
    })
  
