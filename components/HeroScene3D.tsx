"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import {
  IconPython,
  IconFastAPI,
  IconPandas,
  IconTypeScript,
  IconNextJS,
  IconTableau,
} from "./TechIcons";

interface OrbitBadgeProps {
  radius: number;
  speed: number;
  initialAngle: number;
  icon: React.ReactNode;
  label: string;
  color: string;
}

function OrbitBadge({
  radius,
  speed,
  initialAngle,
  icon,
  label,
  color,
}: OrbitBadgeProps) {
  const ref = useRef<THREE.Group>(null);
  const angleRef = useRef(initialAngle);

  useFrame((_, delta) => {
    angleRef.current += speed * delta;
    if (ref.current) {
      ref.current.position.x = Math.cos(angleRef.current) * radius;
      ref.current.position.y = Math.sin(angleRef.current) * (radius * 0.55);
      ref.current.position.z = Math.sin(angleRef.current) * 0.8;
    }
  });

  return (
    <group ref={ref}>
      <Html center distanceFactor={10} zIndexRange={[100, 0]}>
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/15 border border-cyan-100 dark:border-cyan-900/60 select-none cursor-pointer transition-transform hover:scale-110 active:scale-95"
          style={{ borderColor: `${color}35` }}
        >
          <span style={{ color }}>{icon}</span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            {label}
          </span>
        </div>
      </Html>
    </group>
  );
}

function SceneInteractive() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.25,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.y * 0.15,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.6}>
        <OrbitBadge
          radius={2.5}
          speed={0.4}
          initialAngle={0}
          icon={<IconPython className="w-4 h-4" />}
          label="Python"
          color="#38bdf8"
        />
        <OrbitBadge
          radius={2.6}
          speed={-0.35}
          initialAngle={1.05}
          icon={<IconFastAPI className="w-4 h-4" />}
          label="FastAPI"
          color="#009688"
        />
        <OrbitBadge
          radius={2.7}
          speed={0.3}
          initialAngle={2.1}
          icon={<IconPandas className="w-4 h-4" />}
          label="Pandas"
          color="#e11d48"
        />
        <OrbitBadge
          radius={2.5}
          speed={-0.38}
          initialAngle={3.14}
          icon={<IconTypeScript className="w-4 h-4" />}
          label="TypeScript"
          color="#3b82f6"
        />
        <OrbitBadge
          radius={2.8}
          speed={0.33}
          initialAngle={4.2}
          icon={<IconNextJS className="w-4 h-4" />}
          label="Next.js"
          color="#0ea5e9"
        />
        <OrbitBadge
          radius={2.4}
          speed={-0.42}
          initialAngle={5.3}
          icon={<IconTableau className="w-4 h-4" />}
          label="Tableau"
          color="#e97627"
        />
      </Float>
    </group>
  );
}

export default function HeroScene3D({
  avatarSrc,
}: {
  avatarSrc: string;
}) {
  const [canRender3D, setCanRender3D] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery.matches) {
      setCanRender3D(true);
    }
  }, []);

  return (
    <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] flex items-center justify-center select-none">
      {/* Glowing Outer Cyan Aura */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-400/40 via-sky-300/30 to-blue-500/30 blur-2xl animate-pulseGlow pointer-events-none" />

      {/* Center Circular Frame with Glowing Ring */}
      <div className="relative z-10 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full p-2.5 bg-gradient-to-tr from-cyan-400 via-sky-300 to-blue-500 shadow-glow-lg transition-transform hover:scale-[1.02]">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-slate-800 dark:to-slate-900 border-4 border-white dark:border-slate-800">
          <Image
            src={avatarSrc}
            alt="Kashish Kumari"
            fill
            sizes="(max-width: 768px) 260px, 300px"
            className="object-cover object-top scale-110"
            priority
          />
        </div>
      </div>

      {/* Orbiting 3D Scene */}
      {canRender3D && !hasError ? (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            onError={() => setHasError(true)}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          >
            <ambientLight intensity={0.9} />
            <directionalLight position={[2, 3, 4]} intensity={1.2} />
            <Suspense fallback={null}>
              <SceneInteractive />
            </Suspense>
          </Canvas>
        </div>
      ) : (
        /* CSS Orbit Fallback */
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-4 right-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-md border border-cyan-100 dark:border-slate-800 animate-float">
            <IconPython className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Python
            </span>
          </div>
          <div className="absolute bottom-6 left-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-md border border-cyan-100 dark:border-slate-800 animate-float-slow">
            <IconFastAPI className="w-4 h-4 text-teal-500" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              FastAPI
            </span>
          </div>
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-md border border-cyan-100 dark:border-slate-800 animate-float-reverse">
            <IconPandas className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Pandas
            </span>
          </div>
          <div className="absolute bottom-12 right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-md border border-cyan-100 dark:border-slate-800 animate-float">
            <IconTypeScript className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              TypeScript
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
