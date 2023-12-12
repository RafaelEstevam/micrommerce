"use client";

import SceneA0 from "./scene/sceneA0.component";

const TravelersScenario = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-5/6">
        <div className="flex">
          <SceneA0 />
          {/* <SceneA0 />
          <SceneA0 />
          <SceneA0 /> */}
        </div>
        <div className="flex">
          {/* <SceneA0 />
          <SceneA0 />
          <SceneA0 />
          <SceneA0 /> */}
        </div>
      </div>
    </div>
  );
};

export default TravelersScenario;
