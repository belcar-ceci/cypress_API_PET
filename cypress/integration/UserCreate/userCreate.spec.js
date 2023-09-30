Given('I am on the Petstore API page', () => {
  
    //cy.visit('https://petstore.swagger.io');
  });
  
  When('I make a POST request to create a user with the following data:', (userDataJson) => {
    const userData = JSON.parse(userDataJson);
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: userData,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.eq(200); 
    });
  });
  
  Then('the request should be successful', () => {
    // No es necesario agregar más código aquí, ya que la verificación se realiza en el paso "When"
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/ferka', // Ajusta la URL para obtener los datos del usuario creado
    }).then((response) => {
      expect(response.status).to.eq(200); // Verifica que la solicitud para obtener los datos del usuario sea exitosa
      const userData = response.body;
  
      // Agrega más validaciones según los datos del usuario
      expect(userData.username).to.eq('ferka');
      expect(userData.email).to.eq('ferkar@petshop.com');
      // Agrega más validaciones según tus necesidades
    });
  });