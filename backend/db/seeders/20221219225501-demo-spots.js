'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   options.tableName = 'Spots'
   await queryInterface.bulkInsert(options, [
    {
      ownerId: 4,
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "testStateUSA",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123,
      previewImage: "image url"
    },
    {
      ownerId: 2,
      address: "12 Disey Lne",
      city: "San Franco",
      state: "testStateUSA",
      country: "United America",
      lat: 3.7645358,
      lng: -12.4730327,
      name: "App emy",
      description: "Place where webs are created",
      price: 13,
      previewImage: "image url"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
    {
      ownerId: 1,
      address: "test",
      city: "test",
      state: "test",
      country: "test",
      lat: 100.21,
      lng: -100.21,
      name: "test",
      description: "test",
      price: 123,
      previewImage: "test"
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      state: { [Op.in]: ['testStateUSA'] }
    }, {});
  }
};
