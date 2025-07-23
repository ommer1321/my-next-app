// 'use client';

// import React, { Suspense, useRef, useEffect } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls, Html, useProgress } from '@react-three/drei';
// import { OBJLoader } from 'three-stdlib';
// import * as THREE from 'three';

// function Loader() {
//   const { progress } = useProgress();
//   return <Html center>{progress.toFixed(0)}%</Html>;
// }

// function ObjViewer({ url }: { url: string }) {
//   const obj = useLoader(OBJLoader, url);
//   const ref = useRef<THREE.Group>(null);

//   useEffect(() => {
//     if (ref.current) {
//       const box = new THREE.Box3().setFromObject(ref.current);
//       const size = new THREE.Vector3();
//       const center = new THREE.Vector3();
//       box.getSize(size);
//       box.getCenter(center);

//       // Modeli merkeze yerleştir
//       ref.current.position.sub(center);

//       // Otomatik sığdırmak için scale hesapla (400px pencereye göre)
//       const maxDim = Math.max(size.x, size.y, size.z);
//       const scale = 1.5 / maxDim;
//       ref.current.scale.setScalar(scale);
//     }
//   }, [obj]);

//   return <primitive ref={ref} object={obj} />;
// }

// export default function ObjModel({ url }: { url: string }) {
//   return (
//     <div
//       style={{
//         width: '400px',
//         height: '400px',
//         border: '1px solid #ccc',
//         borderRadius: '12px',
//         overflow: 'hidden',
//         margin: '0 auto',
//       }}
//     >
//       <Canvas camera={{ position: [30, 40, 45], fov: 40 }}>
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[115, 1445, 15]} intensity={1} />
//         <Suspense fallback={<Loader />}>
//           <ObjViewer url={url} />
//         </Suspense>
//         <OrbitControls enableZoom={true} />
//       </Canvas>
//     </div>
//   );
// }
