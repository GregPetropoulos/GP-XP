import { createFileRoute } from '@tanstack/react-router';
// import React, { useRef, useMemo } from 'react';
// import { Route as Contact } from './contact';
// import { Canvas, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
import Animation from '../components/Animation';

export const Route = createFileRoute('/')({ component: HomeIndexComponent });

function HomeIndexComponent() {
  return (
    <>
      <div
        // className='hero min-h-screen'
        className='hero bg-[url(assets/mechanical.jpg)] '
        >
        <div className='hero-overlay'></div>
        <div className='hero-content text-neutral-content text-center'>
          <div className='max-w-md'>
            <p className='m-2 text-left'>i am an engineer.</p>
            <p className='m-2 text-left'>i am a leader.</p>
            <p className='m-2 text-left'>i am humble.</p>
            <p className='m-2 text-left'>i am human.</p>
          </div>
        </div>
      </div>
      {/* <Animation /> */}
    
    </>
  );
}
