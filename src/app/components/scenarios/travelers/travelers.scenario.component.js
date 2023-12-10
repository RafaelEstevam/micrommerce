'use client'

import Scenario from '../../scenario/scenario.component';
import { TravelersContext } from './context';
import {scenarioCards, scenarioCards2} from './scenes';

const TravelersScenario = () => {

    const context = {};

    console.log(scenarioCards);

    return (
        <TravelersContext.Provider value={context}>
            <div className="h-screen w-full bg-slate-300 flex justify-center">
                <div className='w-3/6 h-4/6'>
                    <div className='flex h-1/2'>
                        {scenarioCards?.map(({id, cards}) => (
                            <Scenario key={id} cards={cards} side={'a'} />
                        ))}
                    </div>
                    <div className='flex h-1/2'>
                        {scenarioCards2?.map((item) => (
                            <Scenario key={id} cards={cards} side={'a'} />
                        ))}
                    </div>
                </div>
            </div>
        </TravelersContext.Provider>
    )
};

export default TravelersScenario;