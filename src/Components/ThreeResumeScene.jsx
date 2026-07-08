import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  Sparkles,
  useAnimations,
  useGLTF,
} from "@react-three/drei";

const CHARACTER_MODEL_URL =
  "https://threejs.org/examples/models/gltf/Soldier.glb";

function CharacterRig() {
  const avatarRef = useRef(null);
  const modelRef = useRef(null);
  const { scene, animations } = useGLTF(CHARACTER_MODEL_URL);
  const { actions, names } = useAnimations(animations, avatarRef);

  const idleAnimation = useMemo(() => {
    if (names.includes("Idle")) {
      return "Idle";
    }

    return names[0] ?? null;
  }, [names]);

  useLayoutEffect(() => {
    if (!modelRef.current) {
      return;
    }

    scene.position.set(0, 0, 0);
    scene.scale.setScalar(1);
    scene.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    if (!size.y) {
      return;
    }

    const targetHeight = 5.6;
    const scale = targetHeight / size.y;

    scene.scale.setScalar(scale);
    scene.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);
    scene.updateMatrixWorld(true);
  }, [scene]);

  useEffect(() => {
    if (!idleAnimation || !actions[idleAnimation]) {
      return undefined;
    }

    const action = actions[idleAnimation];
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.reset().fadeIn(0.3).play();

    return () => {
      action.fadeOut(0.3);
    };
  }, [actions, idleAnimation]);

  useFrame((state) => {
    if (!avatarRef.current) {
      return;
    }

    avatarRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={avatarRef} position={[0, -4.1, 0]}>
      <group ref={modelRef}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

function SceneAccent({ position, color, scale = 1 }) {
  return (
    <group position={position}>
      <mesh>
        <icosahedronGeometry args={[0.3 * scale, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.22}
          metalness={0.32}
        />
      </mesh>
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <color attach="background" args={["#09111d"]} />
      <fog attach="fog" args={["#09111d", 10, 19]} />
      <ambientLight intensity={1.45} />
      <directionalLight position={[3, 8, 5]} intensity={2.4} color="#eff6ff" />
      <pointLight position={[-4, 5, 3]} intensity={14} color="#67e8f9" />
      <pointLight position={[4, 3, 2]} intensity={10} color="#fb923c" />

      <Sparkles
        count={55}
        size={2.6}
        speed={0.18}
        opacity={0.42}
        color="#dbeafe"
        scale={[11, 8, 11]}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.55, 0]}>
        <circleGeometry args={[4.6, 80]} />
        <meshStandardMaterial color="#1a2940" metalness={0.18} roughness={0.62} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.95, 0]}>
        <circleGeometry args={[7.8, 80]} />
        <meshStandardMaterial color="#0f2032" metalness={0.2} roughness={0.72} />
      </mesh>

      <CharacterRig />
      <SceneAccent position={[-2.15, -1.1, 0.4]} color="#67e8f9" scale={1.05} />
      <SceneAccent position={[2.15, -1.15, -0.1]} color="#fb923c" scale={1.1} />
      <SceneAccent position={[-2.7, 1.35, -0.4]} color="#67e8f9" scale={0.8} />
      <SceneAccent position={[2.75, 1.15, -0.6]} color="#fb923c" scale={0.85} />

      <ContactShadows
        position={[0, -4.88, 0]}
        opacity={0.42}
        scale={16}
        blur={3.6}
        far={7}
      />
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.1}
        target={[0, -1.55, 0]}
        minPolarAngle={Math.PI / 2.08}
        maxPolarAngle={Math.PI / 1.98}
      />
    </>
  );
}

export function ThreeResumeScene() {
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[42px] border border-white/12 bg-panel shadow-panel">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(103,232,249,0.08),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(251,146,60,0.08),transparent_22%)]" />
      <Canvas
        camera={{ position: [0, -0.35, 6.35], fov: 34 }}
        shadows
        dpr={[1, 1.6]}
      >
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-white/70">
                Loading 3D scene...
              </div>
            </Html>
          }
        >
          <SceneContent />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute left-5 top-5 z-20">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/55">
          3D Resume World
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-5 z-20 rounded-3xl border border-white/10 bg-slate-950/72 px-4 py-3 text-sm text-white/65 backdrop-blur-md">
        Drag to rotate the scene
      </div>
    </div>
  );
}

useGLTF.preload(CHARACTER_MODEL_URL);
