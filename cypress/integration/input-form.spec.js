
describe ('Input Form', () => {
    beforeEach(() => {
        cy.visit('/')
    } )

    it('Focus set to Title input on load', () => {
        cy.focused()
        .should('have.id', 'titleTxtBox')
    })

    it('Title field access input', () => {
        const typedText = "I would like to paint my house"

        cy.get('#titleTxtBox')
        .type(typedText)
        .should('have.value', typedText)
    })

    it('Description field access input', () => {
        const typedText = "Test Description"

        cy.get('#descTxtBox')
        .type(typedText)
        .should('have.value', typedText)
    })

    it('Check Title and Desc holds the value after going to next page and coming back', () => {
        const typedtitleText = "Test Title"
        const typedDescText = "Test Description"

        cy.get('#titleTxtBox')
        .type(typedtitleText)

        cy.get('#descTxtBox')
        .type(typedDescText)

        cy.get('#servicesButton')
        .click()
        cy.get('#backDetailsButton')
        .click()

        //Check the values of Title and Description
        cy.get('#titleTxtBox')
        .should('have.value', typedtitleText)
        cy.get('#descTxtBox')
        .should('have.value', typedDescText)

    })

    it('Complete flow test to check the details on the value summary', () => {
        const typedtitleText = "Test Title"
        const typedDescText = "Test Description"

        cy.get('#titleTxtBox')
        .type(typedtitleText)

        cy.get('#descTxtBox')
        .type(typedDescText)

        cy.get('#servicesButton')
        .click()
        cy.get('#locationButton')
        .click()
        cy.get('#contactButton')
        .click()
        cy.get('#previewButton')
        .click()
        //Check the values of Title and Description
        cy.xpath('//*[@id="root"]/div/div[2]/div[1]/span/div/div/div')
        .contains(typedtitleText)
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/span/div/div/div')
        .contains(typedDescText)
        cy.get('#submitButton')
        .click()


    })




})

