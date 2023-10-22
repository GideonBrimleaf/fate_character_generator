/* eslint-disable import/prefer-default-export */

export const createFakeCharacter = (id) => ({
  id,
  name: `${id} name`,
  aspects: {
    highConcept: `${id} highConcept`,
    trouble: `${id} trouble`,
    relationship: `${id} relationship`,
    aspectOne: `${id} aspectOne`,
    aspectTwo: `${id} aspectTwo`,
  },
  approaches: {
    careful: `${id} careful`,
    clever: `${id} clever`,
    flashy: `${id} flashy`,
    forceful: `${id} forceful`,
    quick: `${id} quick`,
    sneaky: `${id} sneaky`,
  },
  stunts: [],
  consequences: {
    mild: `${id} mild`,
    moderate: `${id} moderate`,
    severe: `${id} severe`,
  },
  refresh: 3,
})
