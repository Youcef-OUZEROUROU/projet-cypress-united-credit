describe('Maried credit', () =>{

    let marier = require('../../fixtures/jdd/maried')

    before('site internet', () =>{
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('include', 'younited-credit')
        cy.get('title').should('contain', 'Le Crédit 100% en Ligne')
    })

    it("page d'accueil", () =>{
        cy.choix_user(marier.projet)
        cy.wait(3000)
        cy.buttonClick('CONTINUER')
    })

    it('Email', () =>{
        cy.urlWebSite('/email')
        cy.pageTitle('Younited Credit')
        cy.wait(3000)
        cy.emailUser(marier.identity)
        cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
        cy.wait(3000)
        cy.buttonClick('Voir mon offre personnalisée')
    })
    
    it('Situation familiale', () =>{
        cy.urlWebSite('/familysituation')
        cy.pageTitle('Younited Credit')
        cy.situation_familiale_user(marier.identity)
        cy.get('[type="checkbox"]')
            .uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('logement', () =>{
        cy.urlWebSite('/housing')
        cy.pageTitle('Younited Credit')
        cy.situation_user(marier.logement)
        cy.get('[type="checkbox"]').uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('Situation profetionnelle', () =>{
        cy.urlWebSite('/professionalsituation')
        cy.pageTitle('Younited Credit')
        cy.activityCeliba(marier.activityStatus, marier.activity)
        cy.get('#ISCOMPANYBANKRUPT_FALSE')
            .check({ force: true })
            .should('be.checked')
        cy.buttonClick('Suite')
    })
    if(marier.identity.maritalStatus != "SINGLE"){
        it("secteur d'activité du partenaire", () =>{
            cy.urlWebSite('/partnerprofession')
            cy.pageTitle('Younited Credit')
            cy.activite_conjoint_user(marier.activityStatus_partenaire, marier.activity_partenaire)
            cy.buttonClick('Suite')
            
        })
       
    }
    it('Revenu', () =>{
        cy.urlWebSite('/incomes')
        cy.pageTitle('Younited Credit')
        cy.revenu_user(marier.mariedStatus, marier.activity, marier.logement, marier.activity_partenaire)
        cy.buttonClick('Suite')
    })
    it('loyer', () =>{
        cy.urlWebSite('/outcomes')
        cy.pageTitle('Younited Credit')
        cy.wait(3000)
        cy.loyerUser(marier.situation_logement, marier.logement)
        cy.buttonClick('Suite')
    })
    it('Banque', () =>{
        cy.urlWebSite('/bank')
        cy.pageTitle('Younited Credit')
        cy.banque_user(marier.banque)
        cy.buttonClick('Suite')
    })
    it('Identité user', () =>{
        cy.urlWebSite('/identity')
        cy.pageTitle('Younited Credit')
        cy.identity(marier.identity)
        cy.buttonClick('Suite')
    })

    it('identity du partenaire', () =>{
        cy.urlWebSite('/partneridentity')
        cy.pageTitle('Younited Credit')
        cy.identity_Partner(marier.partnerStatus, marier.identity_partenaire)
        cy.buttonClick('Suite')
    })

    it('Contact', () =>{
        cy.urlWebSite('/contact')
        cy.pageTitle('Younited Credit')
        cy.contact( marier.identity)
        cy.buttonClick('Suite')
    })
    /*it('Assurance_Test', () =>{
        cy.urlWebSite('/offers')
        cy.pageTitle('Younited Credit')
        cy.assurance(marier.identity)
        cy.get('#INSURANCE-JOBLOSS_NO')
            .check({ force: true })
            .should('be.checked')
        cy.buttonClick('Suite')
    })
    it('Test_page_offre', () =>{
        cy.urlWebSite('/modify-offer')
        cy.pageTitle('Younited Credit')
    })*/
})