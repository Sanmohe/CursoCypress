/* BLOQUE DESCRIBE
Incluye toda la serie de pruebas de una página o bloque de pruebas, pasándole dos argumentos:
  - El primer argumento describe lo que se está probando (String).
  - El segundo es una función callback a la que se le pasa a su vez otra función que contiene las pruebas
*/
describe('Fundamental test', () => {
  /* BLOQUE IT 
  Define las pruebas individuales, pasandole dos argumentos:
  - El primer argumento describe la prueba (String).
  - El segundo es una función que contiene el código de la prueba y las aserciones que validan el comportamiento esperado.
    */

  it('Texto correcto en encabezado', () => {
    /* OBJETO CY 
    Es global y siempre está disponible (no hay que declararlo). 
    Encapsula todos los comandos que permiten interactuar con el DOM o las solicitudes HTTP.
    */
   /* MÉTODO VISIT 
   Navega hacia la URL indicada en su argumento.
   La aplicación debe estar en ejecución (run) e indicar la URL del localhost.
   */
    cy.visit('http://localhost:3000/fundamentals')
    cy.visit('/fundamentals')
      //Ruta relativa a partir de la URL base configurada en cypress.config.js

    /* MÉTODO GET 
    Recibe como argumento un String con el selector CSS o ruta XPATH que apunta a los elementos del DOM.
    Se encadena con aserciones.
    */
   /* ASERCION CONTAINS
    Verifica que el contenido del elemento coincide con el String que se le pasa como argumento.
    Puede usarse un String literal o emplearse expresiones regulares
    */
    cy.get('[data-test="fundamentals-header"]').contains("Testing Fundamentals")
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
      //Expresión regular: /i indica que es Case Insensitive

    /* ASERCIÓN SHOULD
    Indica la acción que debería verificarse (primer argumento: String) y el valor esperado (segundo argumento: String).
    En este caso, se verifica que el elemento contiene un texto (CONTAIN.TEXT)
    */
    cy.get('[data-test="fundamentals-header"]').should('contain.text', "Testing Fundamentals")
  })

  it('Acordeon funciona correctamente', () => {
    cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
cy.xpath('rutaXPATH')
  })
})



/* MÉTODOS (COMANDOS) CYPRESS
- Son asincrónicos, es decir, no se ejecutan de inmediato sino que los pone en cola y espera que los elementos del DOM estén cargados y disponibles.
- No devuelven directamente sus resultados ("subjects", elementos del DOM), no puede asignarse su resultado a una variable.
- Para obtener acceso al "subject" deben encadenarse métodos o usar ".then"
*/

/* MÉTODO .THEN()
Funciona de forma similar a una promesa en JavaScript, pero es un método, no una promesa.
En el argumento se puede establecer una $variable que represente el elemento del DOM
y dentro de la función pueden accederse a dicho elemento, recuperar sus valores y asignarlos a variables. 
*/

/* MÉTODO .WRAP()
Permite encapsular un valor (objeto, array, elemento DOM, valor primitivo...) y convertirlo en un "subject" que pueda ser manejado por Cypress.
Es decir, realiza una "conversión" a Cypress para poder hacer aserciones (verificaciones).
*/