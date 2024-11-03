describe("Favorite Movies Feature", () => {
  it("Searches for a movie, adds to favorites, and verifies it in the favorites list", () => {
    cy.log("Visiting the homepage");
    cy.visit("http://localhost:5173/");

    cy.log("Entering search term: Inception");
    cy.fixture("example").then((data) => {
      // Step 1: Type search term and initiate search, with error handling
      if (!data.search) {
        cy.log("Fixture 'search' data is missing or undefined.");
        throw new Error("The search key is undefined in the fixture data");
      }
      cy.get('input[placeholder="Sök efter film..."]').type(data.search);
      cy.get("button").contains("Sök").click();

      // Step 2: Wait for and check API response for search results
      cy.intercept("GET", `https://www.omdbapi.com/*`).as("movieSearch");
      cy.wait("@movieSearch").its("response.statusCode").should("eq", 200);

      // Step 3: Validate that results include the searched term
      cy.get("#movieList").should("be.visible").find("li").should("contain.text", "Inception");

      // Step 4: Click the 'add to favorites' button for the first search result
      cy.get('[data-testid^="add-to-favorites"]').first().click();

      // Step 5: Navigate to 'favorites' and check that "Inception" is listed
      cy.get('a[href="/favorites"]').click();
      cy.url().should("include", "/favorites");
      cy.get("#movieList").should("contain.text", "Inception");
    });
  });
});
