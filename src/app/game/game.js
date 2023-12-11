import { scenarios } from "../items/scenarios";
import {Kratos} from '../items/kratos';
import {Atreus} from '../items/atreus';
import {Mimir} from '../items/mimir';
import {Freya} from '../items/freya';
import {Brok, Sindri} from '../items/brok_sindri';

export const game = {
  campaing: {
    misson1: {id: 1},
    mission2: [
      {id: 4},
      {id: 5},
    ],
    boss: [
      {id: 7},
      {id: 8},
      {id: 10},
    ]
  },
  campaingStage: 1,
  missionActivated: {id: 1},
  characters: {
    kratos: new Kratos({life: 10, fury: 0, skillOne: () => {}, skillTwo: () => {}}),
    atreus: new Atreus({life: 7, fury: 0, skillOne: () => {}}),
    mimir: new Mimir({life: 4, fury: 0, skillOne: () => {}, hero: ''}),
    freya: new Freya({life: 8,  fury: 0, skillOne: () => {}}),
    brok: new Brok({life: 6,  fury: 0, skillOne: () => {}}),
    sindri: new Sindri({life: 6,  fury: 0, skillOne: () => {}})
  },
  whoStart: '',
}