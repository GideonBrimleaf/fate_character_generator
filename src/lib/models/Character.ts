export interface Character {
  id: string,
  name: string,
  aspects: {
    highConcept: string,
    trouble: string,
    relationship: string,
    aspectOne: string,
    aspectTwo: string,
  },
  approaches: {
    careful: string,
    clever: string,
    flashy: string,
    forceful: string,
    quick: string,
    sneaky: string,
  },
  stunts: [],
  consequences: {
    mild: string,
    moderate:string,
    severe: string,
  },
  refresh: number,
}
