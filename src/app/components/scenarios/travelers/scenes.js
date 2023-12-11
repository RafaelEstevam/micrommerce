import DraugerReach from '../../enemies/draugerReach.component';

export const scenarioCards = [
    {
        id: 1,
        name: 'travelers-1',
        cards: [
            { id: 1, side: 'a', runes: ['F'], flipAction: 'death', component: <DraugerReach life={3} attack={2} />, triggerAction: 'attack', value:2, type: 'reach' },
            { id: 2, side: 'b', runes: ['F'], flipAction: '' }
        ]
    },
    // {
    //     id: 2,
    //     name: 'travelers-2',
    //     cards: [
    //         { id: 3, side: 'a', runes: ['F'], flipAction: 'attack' },
    //         { id: 4, side: 'b', runes: [], flipAction: '' }
    //     ]
    // },
    // {
    //     id: 3,
    //     name: 'travelers-3',
    //     cards: [
    //         { id: 5, side: 'a', runes: ['X', 'Y'], flipAction: 'attack' },
    //         { id: 6, side: 'b', runes: ['F'], flipAction: 'attack' }
    //     ]
    // },
    // {
    //     id: 4,
    //     name: 'travelers-4',
    //     cards: [
    //         { id: 7, side: 'a', runes: ['Y'], flipAction: 'attack' },
    //         { id: 8, side: 'b', runes: [], flipAction: '' }
    //     ]
    // },

]

export const scenarioCards2 = [
    // {
    //     id: 5,
    //     name: 'travelers-5',
    //     cards: [
    //         { id: 1, side: 'a', runes: ['F', 'R', 'X', 'Y'], flipAction: 'attack' },
    //         { id: 2, side: 'b', runes: ['F', 'R'], flipAction: 'attack' }
    //     ]
    // },
    // {
    //     id: 6,
    //     name: 'travelers-6',
    //     cards: [
    //         { id: 3, side: 'a', runes: ['F'], flipAction: 'attack' },
    //         { id: 4, side: 'b', runes: [], flipAction: '' }
    //     ]
    // },
    // {
    //     id: 7,
    //     name: 'travelers-7',
    //     cards: [
    //         { id: 5, side: 'a', runes: ['X', 'Y'], flipAction: 'attack' },
    //         { id: 6, side: 'b', runes: ['F'], flipAction: 'attack' }
    //     ]
    // },
    // {
    //     id: 8,
    //     name: 'travelers-8',
    //     cards: [
    //         { id: 7, side: 'a', runes: ['Y'], flipAction: 'attack' },
    //         { id: 8, side: 'b', runes: [], flipAction: '' }
    //     ]
    // },

]