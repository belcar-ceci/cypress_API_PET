/* Given('I send a GET request', () => {
  cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold').as('response');
});
  
When('the response status should be {int}', (status) => {
  cy.get('@response').its('status').should('equal', status);
});
  
Then('the response should contain pets', () => {
  cy.get('@response').its('body').should('not.be.empty');
  cy.get('@response').its('body').each((pet) => {
    expect(pet).to.have.property('id');
    expect(pet).to.have.property('status', 'sold');
  });
}); */

Given('I am on the Petstore API page', () => {
  // Aquí puedes configurar la URL base de la API
  cy.visit('https://petstore.swagger.io');
});

When('I make a GET request to retrieve sold pet names', () => {
  cy.request({
    method: 'GET',
    url: 'https://petstore.swagger.io/v2/pet/findByStatus',
    qs: {
      status: 'sold', // Filtra las mascotas vendidas
    },
  }).then((response) => {
    expect(response.status).to.eq(200); // Verifica que la solicitud sea exitosa

    // Almacena los datos de las mascotas vendidas para su verificación posterior
    cy.wrap(response.body).as('soldPets');
  });
});

Then('the request should be successful', () => {
  // No es necesario agregar más código aquí, ya que la verificación se realiza en el paso "When"
});

Then('the sold pet names should be listed', () => {
  // Verifica los nombres de las mascotas vendidas en el paso "When"
  cy.get('@soldPets').then((soldPets) => {
    // Filtra solo el id y el nombre de las mascotas vendidas
    const soldPetNames = soldPets.map((pet) => ({
      id: pet.id,
      name: pet.name,
    }));

    // Imprimir la respuesta para depurar
    console.log('Respuesta de mascotas vendidas:');
    console.log(soldPetNames);

    // Realiza la verificación de los nombres de las mascotas vendidas
    expect(soldPetNames).to.not.be.empty; // Asegura que haya al menos una mascota vendida

    // Mostrar el formato de salida por consola
    console.log('Formato de salida de nombres de mascotas vendidas:');
    console.log(soldPetNames);

    // Puedes agregar más validaciones aquí según tus necesidades
  });
 
});