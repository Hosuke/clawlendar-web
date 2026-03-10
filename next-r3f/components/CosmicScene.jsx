"use client";

import { Canvas } from "@react-three/fiber";
import { Html, Line, OrbitControls, Stars } from "@react-three/drei";
import { useMemo } from "react";

const BODY_THEME = {
  sun: { color: "#f8be56", size: 1.15, label: "Sun" },
  mercury: { color: "#98f0e5", size: 0.33, label: "Mercury" },
  venus: { color: "#ff9ecd", size: 0.38, label: "Venus" },
  earth: { color: "#8ab5ff", size: 0.42, label: "Earth" },
  moon: { color: "#dce3ff", size: 0.2, label: "Moon" },
  mars: { color: "#ff886d", size: 0.35, label: "Mars" },
  jupiter: { color: "#f4c593", size: 0.72, label: "Jupiter" },
  saturn: { color: "#f2e3a7", size: 0.66, label: "Saturn" },
};

const ORBIT_ORDER = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "moon"];

const ORBIT_THEME = {
  mercury: "#58d6c4",
  venus: "#e57cad",
  earth: "#5f8ce0",
  mars: "#de694f",
  jupiter: "#cb8b58",
  saturn: "#d0be78",
  moon: "#b0bbdf",
};

const REMAINDER_THEME = {
  ascending_node: { color: "#72f1f6", short: "AN" },
  descending_node: { color: "#53b8ff", short: "DN" },
  lunar_apogee_mean: { color: "#ff9a63", short: "LA" },
  earth_perihelion: { color: "#ffe380", short: "EP" },
};

function sceneVector(vector, scale) {
  if (!Array.isArray(vector)) {
    return [vector.x * scale, vector.z * scale, vector.y * scale];
  }
  return [vector[0] * scale, vector[2] * scale, vector[1] * scale];
}

function ringPoints(radius, y, segments = 128) {
  const points = [];
  for (let i = 0; i <= segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    points.push([Math.cos(angle) * radius, y, Math.sin(angle) * radius]);
  }
  return points;
}

function BodyNode({ name, position, showLabel }) {
  const theme = BODY_THEME[name] || { color: "#fff", size: 0.3, label: name };
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[theme.size, 22, 22]} />
        <meshStandardMaterial color={theme.color} emissive={theme.color} emissiveIntensity={name === "sun" ? 0.9 : 0.35} />
      </mesh>
      {showLabel ? (
        <Html distanceFactor={14} center>
          <div className="r3f-label">{theme.label}</div>
        </Html>
      ) : null}
    </group>
  );
}

function RemainderNode({ item, radius, layerY, showLabel }) {
  const theme = REMAINDER_THEME[item.name] || { color: "#ffffff", short: item.name.slice(0, 2) };
  const angle = ((item.longitude_deg || 0) * Math.PI) / 180;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  return (
    <group position={[x, layerY, z]}>
      <mesh>
        <octahedronGeometry args={[0.34, 0]} />
        <meshStandardMaterial color={theme.color} emissive={theme.color} emissiveIntensity={0.9} />
      </mesh>
      {showLabel ? (
        <Html distanceFactor={11} center>
          <div className="r3f-label r3f-label-remainder">{theme.short}</div>
        </Html>
      ) : null}
    </group>
  );
}

export default function CosmicScene({ model, layers, sceneScale }) {
  const renderScale = Math.max(1.2, Number(sceneScale) || 3.8);

  const orbitLines = useMemo(() => {
    if (!model?.orbits) return [];
    return ORBIT_ORDER.filter((key) => Array.isArray(model.orbits[key])).map((key) => ({
      key,
      color: ORBIT_THEME[key] || "#ffffff",
      points: model.orbits[key].map((point) => sceneVector(point, renderScale)),
    }));
  }, [model, renderScale]);

  const bodyPositions = useMemo(() => {
    const heliocentric = model?.heliocentric || {};
    return {
      sun: [0, 0, 0],
      mercury: heliocentric.mercury ? sceneVector(heliocentric.mercury, renderScale) : null,
      venus: heliocentric.venus ? sceneVector(heliocentric.venus, renderScale) : null,
      earth: heliocentric.earth ? sceneVector(heliocentric.earth, renderScale) : null,
      moon: heliocentric.moon ? sceneVector(heliocentric.moon, renderScale) : null,
      mars: heliocentric.mars ? sceneVector(heliocentric.mars, renderScale) : null,
      jupiter: heliocentric.jupiter ? sceneVector(heliocentric.jupiter, renderScale) : null,
      saturn: heliocentric.saturn ? sceneVector(heliocentric.saturn, renderScale) : null,
    };
  }, [model, renderScale]);

  const remainderRadius = useMemo(() => 11.6 * renderScale, [renderScale]);
  const remainderLayerY = 2.8;

  return (
    <Canvas camera={{ position: [22, 14, 24], fov: 48 }}>
      <color attach="background" args={["#090f1d"]} />
      <fog attach="fog" args={["#090f1d", 22, 90]} />
      <ambientLight intensity={0.35} color="#d8e2ff" />
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#ffd38f" />
      <directionalLight position={[15, 12, 8]} intensity={0.6} color="#d1e9ff" />
      <Stars radius={140} depth={55} count={2600} factor={4} saturation={0.2} fade speed={0.2} />

      {layers.showOrbits
        ? orbitLines.map((orbit) => (
            <Line key={orbit.key} points={orbit.points} color={orbit.color} lineWidth={1} transparent opacity={0.7} />
          ))
        : null}

      {layers.showGovernors ? (
        <>
          <BodyNode name="sun" position={bodyPositions.sun} showLabel={layers.showLabels} />
          {Object.entries(bodyPositions)
            .filter(([name, value]) => name !== "sun" && value)
            .map(([name, value]) => (
              <BodyNode key={name} name={name} position={value} showLabel={layers.showLabels} />
            ))}
        </>
      ) : null}

      {layers.showFourRemainders ? (
        <>
          <Line
            points={ringPoints(remainderRadius, remainderLayerY)}
            color="#72e0ff"
            lineWidth={1.1}
            transparent
            opacity={0.85}
          />
          {(model?.four_remainders || []).map((item) => (
            <RemainderNode
              key={item.name}
              item={item}
              radius={remainderRadius}
              layerY={remainderLayerY}
              showLabel={layers.showLabels}
            />
          ))}
        </>
      ) : null}

      <OrbitControls enablePan enableZoom enableRotate maxDistance={120} minDistance={8} />
    </Canvas>
  );
}
