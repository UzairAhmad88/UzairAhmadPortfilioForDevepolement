'use client';

import { useEffect, useState } from 'react';

interface SplineViewerProps {
  sceneUrl: string;
}

export function SplineViewer({ sceneUrl }: SplineViewerProps) {
  const [SplineComponent, setSplineComponent] = useState<any>(null);

  useEffect(() => {
    // Dynamic import to prevent build-time static asset bundling issues with Turbopack
    const loadSpline = async () => {
      try {
        const packageName = '@splinetool/react-spline';
        const mod = await import(/* webpackIgnore: true */ packageName);
        setSplineComponent(() => mod.default);
      } catch (err) {
        console.warn('Spline component runtime load failed:', err);
      }
    };
    loadSpline();
  }, []);

  if (!SplineComponent) {
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '100%', color: 'var(--text-muted)' }}>
        Loading 3D Spline Scene...
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <SplineComponent scene={sceneUrl} />
    </div>
  );
}
