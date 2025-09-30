import React, { useState } from 'react';
import 'aframe-react';
import HelloName from './components/HelloName';
import ImageHotspot from './components/im';
import InfoPanel from './components/InfoPanel';

import car1 from './assets/car1.jpg';
import car2 from './assets/car2.jpg';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'a-entity': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'a-sky': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'a-box': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'a-image': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'a-camera': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const App: React.FC = () => {
  const [selectedInfo, setSelectedInfo] = useState<null | {
    title: string;
    description: string;
  }>(null);

  return (
    <div className="App">
      {selectedInfo && (
        <InfoPanel
          title={selectedInfo.title}
          description={selectedInfo.description}
          onClose={() => setSelectedInfo(null)}
        />
      )}

      <a-scene>
        <a-sky src="/fondo.jpg" rotation="0 -90 0"></a-sky>

        <HelloName name="Esteban" />

        <ImageHotspot
          id="car1"
          src={car1}
          position="2 1.5 -3"
          scale="2 1 1"
          onClick={() =>
            setSelectedInfo({
              title: 'Auto Deportivo',
              description: 'Motor V8, 450 HP, velocidad máxima de 300 km/h.',
            })
          }
        />


        <ImageHotspot
          id="car2"
          src={car2}
          position="-2 1.5 -3"
          scale="2 1 1"
          onClick={() =>
            setSelectedInfo({
              title: 'SUV Familiar',
              description: 'SUV espacioso y cómodo, ideal para la familia.',
            })
          }
        />


  <a-camera look-controls position="0 1.6 0">
    
  </a-camera>

      </a-scene>
    </div>
  );
};

export default App;
