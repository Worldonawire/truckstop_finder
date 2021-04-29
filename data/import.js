const fs = require("fs");
const db = require("../server/knex.js");

const seedDatabase = async () => {
  try {
    const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
    for (const location of locations) {
      const name = location.PreferredName;
      const type = location.FacilitySubtype.Name;
      const state = location.Addresses.map((element) => {
        return element.State;
      }).toString();
      const city = location.Addresses.map((element) => {
        return element.City;
      }).toString();
      const address = location.Addresses.map((element) => {
        return element.Address1;
      }).toString();
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const amenities = [];

      // helper function that generate arrays of amenities per stop
      const amenitiesGenerator = () => {
        // loops through ameneties and return all of then in an array of string
        location.CustomFields.forEach((element) => {
          amenities.push(element.CustomField.Label);
        });

        location.FilteredCustomFields.forEach((element) => {
          amenities.push(element.CustomField.Label);
        });
        location.AdditionalAmenities.forEach((element) => {
          amenities.push(element.SiteManagementItem.Title);
        });
      };
      amenitiesGenerator();

      // Generates array of payment methods per stop
      const payments = location.AcceptedPaymentTypes.map((element) => {
        return element.SiteManagementItem.Title;
      });

      // Generates array of restaurants methods per stop
      const restaurants = location.Site.Concepts.map((element) => {
        return element.Concept.Name;
      });

      await db("locations").insert({
        name,
        type,
        state,
        city,
        address,
        latitude,
        longitude,
        amenities,
        payments,
        restaurants,
      });
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
};
module.exports = { seedDatabase };
