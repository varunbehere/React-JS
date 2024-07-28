describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173')
  })

  it("should display title", ()=>{
    cy.contains("Todo List").should("be.visible")
  })

  it ("should add new todo",()=>{
    const newtodotest = "linkedin.com/in/varunbehere"
    cy.get(".AddTodoTest").type(newtodotest)
    cy.contains('button','Add').click()
    cy.contains(newtodotest).should('be.visible')
  })
})