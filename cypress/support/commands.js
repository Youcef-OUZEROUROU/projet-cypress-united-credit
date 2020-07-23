Cypress.Commands.add("choix_du_consomateur", (projectSelect, amount, creditMaturity) => {
    cy.get('#projectSelect')
            .select(projectSelect)
        cy.get('#amount')
            .select(amount)
        cy.get('#creditMaturity')
            .select(creditMaturity)
})

Cypress.Commands.add("email", (email) => {
    cy.get('#email-input')
        .type(email)
        .should('have.value',email)
})

Cypress.Commands.add("situation_familiale", (maritalStatus, childNumber) => {
    cy.get('#maritalStatus-input').select(maritalStatus).should('have.class', 'ng-valid')
    cy.get('#childNumberPropal-input').select(childNumber).should('have.class', 'ng-valid')
})

Cypress.Commands.add("logement", (housingStatus, housingStatusMouth, housingStatusYear) => {
    cy.get('#housingStatus-input').select(housingStatus)
    cy.get('#housingStatusFrom-input-month').type(housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(housingStatusYear)
})

Cypress.Commands.add("situation_pro", (isIndependent, isSalarie, isRetired, activitySector, profession, businessActivityStartDateMouth, businessActivityStartDateYear, contractType, employedFromMouth, employedFromYear, pensionFromMouth, pensionFromYear) => {
    cy.get('#activitySector-input').select(activitySector)
    cy.get('#profession-input').select(profession)
    if(isIndependent){
        cy.get('#businessActivityStartDate-input-month').type(businessActivityStartDateMouth)
        cy.get('#businessActivityStartDate-input-year').type(businessActivityStartDateYear).should('have.class', 'ng-valid')
    }
    if(isSalarie){
        cy.get('#contractType-input').select(contractType).should('have.class', 'ng-valid')
        cy.get('#employedFrom-input-month').type(employedFromMouth)
        cy.get('#employedFrom-input-year').type(employedFromYear).should('have.class', 'ng-valid')
    }
    if(isRetired){
        cy.get('#pensionFrom-input-month').type(pensionFromMouth).should('have.class', 'ng-valid')
        cy.get('#pensionFrom-input-year').type(pensionFromYear).should('have.class', 'ng-valid')
    }

})

