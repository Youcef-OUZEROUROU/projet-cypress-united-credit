describe('test younited credit', () => {
    beforeEach(() =>{
        cy.visit("https://www.younited-credit.com")
        //
        cy.title().should('include', 'Le Crédit 100% en Ligne')
        //
        cy.get('#projectSelect').select('HOMEIMPROVEMENT').should('contain' , "Travaux et amélioration de l'habitat")
        cy.get('#amount').select('2K').should('contain' , '2000 €')
        cy.get('#creditMaturity').select('M12').should('contain' , '12 mois')
        cy.contains('CONTINUER').click()
        cy.url().should('contain','/email')
        cy.get('#email-input').type('youcef@yopmail.com').should('have.value', 'youcef@yopmail.com')
        cy.contains("Voir mon offre personnalisée").click()
        cy.url().should('contain','/familysituation')
        //cy.wait(2000)
    })
   
    it('Automatiser le parcours pour un Célibataire',()=>{
        //familysituation
        cy.get('#maritalStatus-input').select('Célibataire').should('contain' , 'Célibataire')
        cy.get('#childNumberPropal-input').select('0').should('contain' , '0')
        cy.get('#yucOptin_dynCboxId').uncheck({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/housing')
        
        //votre logement
        cy.get('#housingStatus-input').select('Locataire').should('contain' , 'Locataire')
        cy.get('#housingStatusFrom-input-month').type('05').should('have.value' , '05')
        cy.get('#housingStatusFrom-input-year').type('2005').should('have.value' , '2005')
        cy.get('#yucPartnerOptin_dynCboxId').uncheck({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/professionalsituation')

        //professionalsituation
        cy.get('#activitySector-input').select('Indépendants / Travailleurs non salariés').should('contain' , 'Indépendants / Travailleurs non salariés')
        cy.get('#profession-input').select('Profession libérale').should('contain' , 'Profession libérale')
        cy.get('#businessActivityStartDate-input-month').type('04').should('have.value' , '04')
        cy.get('#businessActivityStartDate-input-year').type('2004').should('have.value' , '2004')
        cy.get('#ISCOMPANYBANKRUPT_FALSE').check({force:true})
        cy.contains('Suite').click()
        cy.contains('Suite').click()
         cy.url().should('contain', '/incomes')

         // incomes

         cy.get('#mainIncome-input').type('2020').should('have.value' , '2020')
         cy.get('#housingAssistance-input').type('165').should('have.value' , '165')
         cy.get('#additionalIncome-input').type('0').should('have.value' , '0')
         cy.contains('Suite').click()
         cy.url().should('contain', '/outcomes')

         // outcomes

         cy.get('#rentAmount-input').type('650').should('have.value' , '650')
         cy.get('#loanCount-input').select('1').should('have.value' , '1')
         cy.get('#type-input').select('AUTO_MOTO').should('contain' , 'Auto-Moto')
         cy.get('#loanAmount-input').type('200').should('have.value' , '200')
         cy.contains('Suite').click()
         cy.url().should('contain', '/bank')

         ///bank
         cy.get('#bankCode-input').select('CREDIT_AGRICOLE').should('contain' , 'Crédit Agricole')
         cy.get('#bankFrom-input-year').type('2008').should('have.value' , '2008')
         cy.contains('Suite').click()
         cy.url().should('contain', '/identity')

         ///identity
         cy.get('#GENDERCODE_M').check({force:true})
         cy.get('#lastName-input').type('Batman').should('have.value' , 'Batman')
         cy.get('#firstName-input').type('tintin').should('have.value' , 'tintin')
         cy.get('#dateOfBirth-input-day').type('02').should('have.value' , '02')
         cy.get('#dateOfBirth-input-month').type('04').should('have.value' , '04')
         cy.get('#dateOfBirth-input-year').type('1984').should('have.value' , '1984')
         cy.get('#postalCode-input').type('33700').should('have.value' , '33700')
         cy.get('#city-input').select('3328133700').should('contain' , 'MERIGNAC')

         cy.contains('Suite').click()
         cy.url().should('contain', '/contact')

         //contact
         cy.get('#cellPhoneNumber-input').type('0652814585').should('have.value' , '0652814585')
         cy.get('#phoneNumber-input').type('0551736112').should('have.value' , '0551736112')
         cy.get('#address-input').type('85 Avenue Naudet').should('have.value' , '85 Avenue Naudet')
         cy.get('#postalCode-input').type('33700').should('have.value' , '33700')
         cy.get('#city-input').select('3328133700').should('contain' , 'MERIGNAC')
         cy.get('#countryZone-input').select('FR').should('contain' , 'France')
         cy.contains('Suite').click()
         cy.wait(5000)
         //cy.url().should('contain', '/insurance/offers')
         cy.url().should('contain', '/offers/refused_reoptin')
         

/*         ///insurance/offers
         cy.get('#insurance-subscribers-input').select('YES').should('contain' , 'Oui, je souhaite une assurance')
         cy.contains('Suite').click() 
         cy.url().should('contain', '/offers/modify-offer')

         ////offers/proactivedebtconsolidation/choice
         cy.get('#refuse').check({force:true})
         cy.contains('Suite').click() 
         //cy.url().should('contain', '/')

         //offers/modify-offer
         
         cy.get('#commercialOffer4').check({force:true})
         cy.contains('Suite').click() 
         cy.url().should('contain', '/offers/upsell_v2')

         //offers/upsell_v2
         cy.get(':nth-child(1) > .text-left > .card-choice').check({force:true})
         cy.contains('Suite').click() 
         cy.url().should('contain', 'completion/signer')

         //fast-completion/signer
         cy.contains('Importer manuellement').click() 
         cy.url().should('contain', '/upload')

         //26b589e5-3599-4df5-96c3-cfd0d7361a3f/upload
         cy.contains('Reprendre plus tard').click() 
         //cy.url().should('contain', '/26b589e5-3599-4df5-96c3-cfd0d7361a3f/upload')
         cy.contains('Non merci').click()
         
         */
           



    



    
    })
   
    after(()=>{
        cy.log("")

    })
})