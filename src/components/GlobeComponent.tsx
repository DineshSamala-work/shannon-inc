// src/GlobeComponent.tsx
import React, { useEffect } from 'react';
import Globe from 'globe.gl';
import * as THREE from 'three';

const GlobeComponent: React.FC = () => {
  useEffect(() => {
    const N = 20;
    const emeraldColor = '#50C878';
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [emeraldColor, emeraldColor],
    }));

    const globe = new Globe(document.getElementById('globeViz') as HTMLElement)
      .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg')
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(() => Math.random())
      .arcDashGap(() => Math.random())
      .arcDashAnimateTime(() => Math.random() * 4000 + 500);

    const globeScene = globe.scene();
    if (globeScene) {
      globeScene.background = new THREE.Color(0x000000);
    }

    const controls = globe.controls();
    if (controls) {
      controls.enableZoom = false;
    }

    document.body.style.margin = '0';

    return () => {
      const globeCanvas = document.getElementById('globeViz')?.querySelector('canvas');
      if (globeCanvas) {
        globeCanvas.remove();
      }
    };
  }, []);

  return <div id="globeViz" style={{ width: '100%', height: '100vh' }}></div>;
};

export default GlobeComponent;
