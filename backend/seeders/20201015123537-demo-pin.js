'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pins', [{
      imgSource : 'fox.jpg',
      alt : 'fox',
      title : 'Fox sitting with eyes closed',
      body : 'Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush)',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      imgSource : 'foxSittingBig.jpg',
      alt : 'fox sitting',
      title : 'Fox Sitting in Snow',
      body : 'The word fox comes from Old English, which derived from Proto-Germanic *fuhsaz.[nb 1] This in turn derives from Proto-Indo-European *puḱ-, meaning ’thick-haired; tail’.[nb 2] Male foxes are known as dogs, tods or reynards, females as vixens, and young as cubs, pups, or kits, though the latter name is not to be confused with a distinct species called kit foxes. Vixen is one of very few words in modern English that retains the Middle English southern dialect "v" pronunciation instead of "f" (i.e. northern English "fox" versus southern English "vox").[3] A group of foxes is referred to as a skulk, leash, or earth.',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      imgSource : 'foxPortraitBig.jpg',
      alt : 'fox portrait',
      title : 'Fox Portrait',
      body : 'The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World. ',
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Pins', null, {});
  }
};
