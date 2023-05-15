import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080", id: 67890 }];
import { hotels } from "../fixtures/data.json";

let baseServerURL = Cypress.env("serverUrl");
data.map(({ submission_link: url, id }) => {
  function checkCards(index, parent, data) {
    cy.get(`${parent}>div`).eq(index).contains(data.name);
    cy.get(`${parent}>div`).eq(index).contains(data.price);
    cy.get(`${parent}>div`).eq(index).contains(data.city);
  }
  describe("Test", () => {
    let acc_score = 1;

    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    beforeEach(() => {
      cy.intercept(`http://localhost:*/hotels`, (req) => {
        req.reply(hotels);
      }).as("apiRequestHome");
    });

    it(`Api request is done`, () => {
      cy.visit(url);
      cy.wait("@apiRequestHome");
      cy.then(() => {
        acc_score += 2;
      });
    }); //1

    it(`Check the DOM after api request`, () => {
      for (let i = 0; i < hotels.length; i++) {
        checkCards(i, "#hotel-container", hotels[i]);
      }
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  }); // describe
});
