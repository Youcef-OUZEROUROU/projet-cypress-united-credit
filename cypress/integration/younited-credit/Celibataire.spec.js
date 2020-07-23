describe(' testé le profil célibataire avec ressource limité ', () => {
    
    let profile = require('/Users/youcef/Desktop/projet-cypress/Projet_younited_credit/cypress/fixtures/single')
    before(() => {
        cy.visit('https://www.younited-credit.com')
        cy.title().should('include', 'Le Crédit 100% en Ligne')
    })

        it("Page d'acceuil", () => {
            cy.choix_du_consomateur(profile.projectSelect, profile.amount, profile.creditMaturity)
       /* cy.get('#projectSelect').select('HOMEIMPROVEMENT').should('contain',"Travaux et amélioration de l'habitat")
        cy.get('#amount').select('10K').should('contain' , '10000 €')
        cy.get('#creditMaturity').select('M6').should('contain' , '6 mois')*/
        cy.contains('CONTINUER').click()
        cy.url().should('contain', '/email')
    })
        it ('Page email', () =>{
        cy.title().should('include', 'Younited Credit')
        cy.email(profile.email)
        //cy.get('#email-input').type('youyou@yopmail.com').should('have.value', 'youyou@yopmail.com')
        cy.contains('Voir mon offre personnalisée',{timeout:3000}).click()
        cy.url().should('contain', '/familysituation')
    })
    it('Situation familliale : Célibataire', () => {
        cy.situation_familiale(profile.maritalStatus, profile.childNumber)
       /* cy.get('#maritalStatus-input').select('SINGLE').should('contain' , 'Célibataire')
        cy.get('#childNumberPropal-input').select('0').should('contain' , '0')*/
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/housing')
    })
        it('Logement : Locataire', () => {
        cy.logement(profile.housingStatus, profile.housingStatusMouth, profile.housingStatusYear)
        /*cy.get('#housingStatus-input').select('TENANT').should('contain' , 'Locataire')
        cy.get('#housingStatusFrom-input-month').type('01').should('have.value', '01')
        cy.get('#housingStatusFrom-input-year').type('2020').should('have.value', '2020')*/
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/professionalsituation')
    })
        it('Situation proffetionnelle : Independant', () => {
        cy.situation_pro(prodile.isIndependent, prodile.isSalarie, profile.isRetired, profile.activitySector, profile.profession, profile.businessActivityStartDateMouth, profile.businessActivityStartDateYear, profile.contractType, profile.employedFromMouth, profile.employedFromYear, profile.pensionFromMouth, profile.pensionFromYear)
        /*cy.get('#activitySector-input').select('INDEPENDENT').should('contain' , 'Indépendants / Travailleurs non salariés')
        cy.get('#profession-input').select('CRAFTSMAN')
        cy.get('#businessActivityStartDate-input-month').type('06').should('have.value', '06')
        cy.get('#businessActivityStartDate-input-year').type('2019').should('have.value', '2019')*/
        cy.get('#ISCOMPANYBANKRUPT_FALSE').check({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/incomes')
    })
        it('Salaire', () => {
       // cy.get('#mainIncome-input').type('2000').should('have.value', '2000')
        cy.contains('Suite').click()
    })
        it('Montant du loyer', () => {
        //cy.get('#rentAmount-input').type('450').should('have.value', '450')
        cy.url().should('contain', '/outcomes')
    })
        it('Credit en cours', () => {
       /* cy.get('#loanCount-input').select('1')
        cy.get('#type-input').select('AUTO_MOTO')
        cy.get('#loanAmount-input').type('100').should('have.value', '100')*/
        cy.contains('Suite').click()
        cy.url().should('contain','/bank')
    })
        it('Banque', () => {
       /* cy.get('#bankCode-input').select('BANQUE_POSTALE').should('contain','Banque Postale')
        cy.get('#bankFrom-input-year').type('2007').should('have.value','2007')*/
        cy.contains('Suite').click()
        cy.url().should('contain','/identity')
    })
        it('Identité', () => {
        /*cy.get('#GENDERCODE_M').check({force:true})
        cy.get('#lastName-input').type('Toto').should('have.value','Toto')
        cy.get('#firstName-input').type('Kiki').should('have.value','Kiki')
        cy.get('#dateOfBirth-input-day').type('15').should('have.value','15')
        cy.get('#dateOfBirth-input-month').type('08').should('have.value','08')
        cy.get('#dateOfBirth-input-year').type('1986').should('have.value','1986')
        cy.get('#postalCode-input').type('33300').should('have.value','33300')
        cy.get('#city-input').select('3306333300').should('contain','BORDEAUX')*/
        cy.contains('Suite').click()
        cy.url().should('contain','/contact')
    })
        it('Contacte', () => {
        /*cy.get('#cellPhoneNumber-input').type('0651736111').should('have.value','0651736111')
        cy.get('#phoneNumber-input').type('0551736112').should('have.value','0551736112')
        cy.get('#address-input').type('3 rue des tulipiers').should('have.value',"3 rue des tulipiers")
        cy.get('#postalCode-input').type('33170').should('have.value','33170')
        cy.get('#city-input').select('3319233170').should('contain','GRADIGNAN')
        cy.get('#countryZone-input').select('FR').should('contain','France')*/
        cy.contains('Suite').click() 
        cy.wait(5000)
        cy.url().should('contain', '/offers/refused_reoptin')

        //cy.contains('Obtenir votre financement en 1 clic').click() 
    }) 
})