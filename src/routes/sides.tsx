import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
export const Route = createFileRoute('/sides')({ component: SidesComponent });
// const fetchData = () => {
//   return fetch(`https://api.github.com/users/${githubUser}`)
//     .then((response) => response.json())
//     .then((data) => setGithubData(data));

function SidesComponent() {
  const name = 'Greg Petropoulos'.split('');
  return (
    <div className='w-full h-screen relative bg-base-100'>
      {/* Canvas for 3D Scene */}
      <Canvas className='absolute inset-0'>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.2}
            color='#ffffff'
          />
          <pointLight position={[-5, -5, -5]} intensity={0.6} color='#93c5fd' />

          {/* Planet and Stars */}
          <Stars
            radius={150}
            depth={100}
            count={5000}
            factor={4}
            saturation={0}
            // fade
            speed={0.25}
          />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.25}
          />
        </Suspense>
      </Canvas>

      {/* Name Overlay */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='flex-wrap w-full h-2/3'>
          <h1 className='text-center lg:text-6xl font-extralight text-primary tracking-tight w-full'>
            {name.map((letter, index) => (
              <span
                key={index}
                className='neon-letter'
                style={{
                  animationDelay: `${index * 0.1 + Math.random() * 0.5}s`
                }}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          <h4 className='text-center mt-8'>Coming Soon...</h4>
          {/* MAKE A FETCH CALL FOR GITHUB OPEN SOURCE CONTRINUTIONS */}
        </div>
      </div>
    </div>
  );
}
