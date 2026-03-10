const EARTH_RADIUS_TO_AU = 6371 / 149597870.7;

const ZODIAC_SIGNS = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

export const BODY_ORDER = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"];

function normalizeDegrees(value) {
  const result = value % 360;
  return result < 0 ? result + 360 : result;
}

function zodiacSignFromLongitude(longitudeDeg) {
  const index = Math.floor(normalizeDegrees(longitudeDeg) / 30) % 12;
  return ZODIAC_SIGNS[index];
}

function julianDayFromDate(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

function solveKepler(meanAnomalyRad, eccentricity) {
  let estimate = meanAnomalyRad + eccentricity * Math.sin(meanAnomalyRad) * (1 + eccentricity * Math.cos(meanAnomalyRad));
  for (let i = 0; i < 10; i += 1) {
    const delta =
      (estimate - eccentricity * Math.sin(estimate) - meanAnomalyRad) /
      (1 - eccentricity * Math.cos(estimate));
    estimate -= delta;
    if (Math.abs(delta) < 1e-9) break;
  }
  return estimate;
}

function orbitalElements(body, daysSinceEpoch) {
  const d = daysSinceEpoch;
  if (body === "earth") {
    return {
      N: 0,
      i: 0,
      w: 282.9404 + 4.70935e-5 * d,
      a: 1.0,
      e: 0.016709 - 1.151e-9 * d,
      M: 356.047 + 0.9856002585 * d,
    };
  }
  if (body === "moon") {
    return {
      N: 125.1228 - 0.0529538083 * d,
      i: 5.1454,
      w: 318.0634 + 0.1643573223 * d,
      a: 60.2666,
      e: 0.0549,
      M: 115.3654 + 13.0649929509 * d,
    };
  }
  if (body === "mercury") {
    return {
      N: 48.3313 + 3.24587e-5 * d,
      i: 7.0047 + 5e-8 * d,
      w: 29.1241 + 1.01444e-5 * d,
      a: 0.387098,
      e: 0.205635 + 5.59e-10 * d,
      M: 168.6562 + 4.0923344368 * d,
    };
  }
  if (body === "venus") {
    return {
      N: 76.6799 + 2.4659e-5 * d,
      i: 3.3946 + 2.75e-8 * d,
      w: 54.891 + 1.38374e-5 * d,
      a: 0.72333,
      e: 0.006773 - 1.302e-9 * d,
      M: 48.0052 + 1.6021302244 * d,
    };
  }
  if (body === "mars") {
    return {
      N: 49.5574 + 2.11081e-5 * d,
      i: 1.8497 - 1.78e-8 * d,
      w: 286.5016 + 2.92961e-5 * d,
      a: 1.523688,
      e: 0.093405 + 2.516e-9 * d,
      M: 18.6021 + 0.5240207766 * d,
    };
  }
  if (body === "jupiter") {
    return {
      N: 100.4542 + 2.76854e-5 * d,
      i: 1.303 - 1.557e-7 * d,
      w: 273.8777 + 1.64505e-5 * d,
      a: 5.20256,
      e: 0.048498 + 4.469e-9 * d,
      M: 19.895 + 0.0830853001 * d,
    };
  }
  if (body === "saturn") {
    return {
      N: 113.6634 + 2.3898e-5 * d,
      i: 2.4886 - 1.081e-7 * d,
      w: 339.3939 + 2.97661e-5 * d,
      a: 9.55475,
      e: 0.055546 - 9.499e-9 * d,
      M: 316.967 + 0.0334442282 * d,
    };
  }
  throw new Error(`Unsupported body '${body}'`);
}

function orbitalPosition(elements) {
  const N = (normalizeDegrees(elements.N) * Math.PI) / 180;
  const i = (elements.i * Math.PI) / 180;
  const w = (normalizeDegrees(elements.w) * Math.PI) / 180;
  const M = (normalizeDegrees(elements.M) * Math.PI) / 180;

  const E = solveKepler(M, elements.e);
  const xv = elements.a * (Math.cos(E) - elements.e);
  const yv = elements.a * (Math.sqrt(1 - elements.e * elements.e) * Math.sin(E));
  const v = Math.atan2(yv, xv);
  const r = Math.sqrt(xv * xv + yv * yv);

  const xh = r * (Math.cos(N) * Math.cos(v + w) - Math.sin(N) * Math.sin(v + w) * Math.cos(i));
  const yh = r * (Math.sin(N) * Math.cos(v + w) + Math.cos(N) * Math.sin(v + w) * Math.cos(i));
  const zh = r * (Math.sin(v + w) * Math.sin(i));

  return {
    x: xh,
    y: yh,
    z: zh,
    r,
    longitude: normalizeDegrees((Math.atan2(yh, xh) * 180) / Math.PI),
  };
}

function sampleOrbitPoints(elements, segments = 180) {
  const N = (normalizeDegrees(elements.N) * Math.PI) / 180;
  const i = (elements.i * Math.PI) / 180;
  const w = (normalizeDegrees(elements.w) * Math.PI) / 180;
  const points = [];

  for (let step = 0; step <= segments; step += 1) {
    const v = (step / segments) * Math.PI * 2;
    const r = (elements.a * (1 - elements.e * elements.e)) / (1 + elements.e * Math.cos(v));
    const x = r * (Math.cos(N) * Math.cos(v + w) - Math.sin(N) * Math.sin(v + w) * Math.cos(i));
    const y = r * (Math.sin(N) * Math.cos(v + w) + Math.cos(N) * Math.sin(v + w) * Math.cos(i));
    const z = r * (Math.sin(v + w) * Math.sin(i));
    points.push([x, y, z]);
  }

  return points;
}

function angularSeparation(left, right) {
  const diff = Math.abs(normalizeDegrees(left) - normalizeDegrees(right));
  return diff <= 180 ? diff : 360 - diff;
}

function majorAspects(pointsMap) {
  const defs = [
    ["conjunction", 0, 8],
    ["sextile", 60, 5],
    ["square", 90, 6],
    ["trine", 120, 6],
    ["opposition", 180, 8],
  ];

  const names = Object.keys(pointsMap);
  const aspects = [];

  for (let i = 0; i < names.length; i += 1) {
    for (let j = i + 1; j < names.length; j += 1) {
      const left = names[i];
      const right = names[j];
      const separation = angularSeparation(pointsMap[left], pointsMap[right]);
      let best = null;
      for (const [aspect, exact, orbLimit] of defs) {
        const orb = Math.abs(separation - exact);
        if (orb <= orbLimit && (!best || orb < best.orb)) {
          best = { aspect, exact, orb };
        }
      }
      if (best) {
        aspects.push({
          left,
          right,
          aspect: best.aspect,
          exact_angle_deg: best.exact,
          separation_deg: Number(separation.toFixed(6)),
          orb_deg: Number(best.orb.toFixed(6)),
        });
      }
    }
  }

  aspects.sort((a, b) => a.orb_deg - b.orb_deg);
  return aspects;
}

export function computeLocalAstroModel(date) {
  const instant = new Date(date);
  const julianDay = julianDayFromDate(instant);
  const daysSinceEpoch = julianDay - 2451543.5;

  const earthElements = orbitalElements("earth", daysSinceEpoch);
  const earthPos = orbitalPosition(earthElements);
  const moonElements = orbitalElements("moon", daysSinceEpoch);
  const moonPosEarthRadii = orbitalPosition(moonElements);

  const moonPosAu = {
    x: moonPosEarthRadii.x * EARTH_RADIUS_TO_AU,
    y: moonPosEarthRadii.y * EARTH_RADIUS_TO_AU,
    z: moonPosEarthRadii.z * EARTH_RADIUS_TO_AU,
  };

  const sunLongitude = normalizeDegrees((Math.atan2(-earthPos.y, -earthPos.x) * 180) / Math.PI);

  const heliocentric = {
    sun: { x: 0, y: 0, z: 0 },
    earth: { x: earthPos.x, y: earthPos.y, z: earthPos.z },
  };

  const raw = {
    sun: {
      longitude_deg: Number(sunLongitude.toFixed(6)),
      zodiac_sign: zodiacSignFromLongitude(sunLongitude),
      distance_au: Number(earthPos.r.toFixed(6)),
    },
    moon: {
      longitude_deg: Number(moonPosEarthRadii.longitude.toFixed(6)),
      zodiac_sign: zodiacSignFromLongitude(moonPosEarthRadii.longitude),
      distance_earth_radii: Number(moonPosEarthRadii.r.toFixed(6)),
    },
  };

  for (const body of ["mercury", "venus", "mars", "jupiter", "saturn"]) {
    const helio = orbitalPosition(orbitalElements(body, daysSinceEpoch));
    heliocentric[body] = { x: helio.x, y: helio.y, z: helio.z };

    const geoX = helio.x - earthPos.x;
    const geoY = helio.y - earthPos.y;
    const geoZ = helio.z - earthPos.z;
    const geoR = Math.sqrt(geoX * geoX + geoY * geoY + geoZ * geoZ);
    const geoLongitude = normalizeDegrees((Math.atan2(geoY, geoX) * 180) / Math.PI);
    raw[body] = {
      longitude_deg: Number(geoLongitude.toFixed(6)),
      zodiac_sign: zodiacSignFromLongitude(geoLongitude),
      distance_au: Number(geoR.toFixed(6)),
    };
  }

  heliocentric.moon = {
    x: earthPos.x + moonPosAu.x,
    y: earthPos.y + moonPosAu.y,
    z: earthPos.z + moonPosAu.z,
  };

  const ascNode = normalizeDegrees(moonElements.N);
  const descNode = normalizeDegrees(ascNode + 180);
  const lunarApogee = normalizeDegrees(moonElements.N + moonElements.w + 180);
  const earthPerihelion = normalizeDegrees(earthElements.N + earthElements.w);

  const sevenGovernors = BODY_ORDER.map((name) => ({
    name,
    longitude_deg: raw[name].longitude_deg,
    zodiac_sign: raw[name].zodiac_sign,
  }));

  const longitudes = {};
  for (const governor of sevenGovernors) {
    longitudes[governor.name] = governor.longitude_deg;
  }

  const fourRemainders = [
    { name: "ascending_node", longitude_deg: Number(ascNode.toFixed(6)), zodiac_sign: zodiacSignFromLongitude(ascNode) },
    { name: "descending_node", longitude_deg: Number(descNode.toFixed(6)), zodiac_sign: zodiacSignFromLongitude(descNode) },
    {
      name: "lunar_apogee_mean",
      longitude_deg: Number(lunarApogee.toFixed(6)),
      zodiac_sign: zodiacSignFromLongitude(lunarApogee),
    },
    {
      name: "earth_perihelion",
      longitude_deg: Number(earthPerihelion.toFixed(6)),
      zodiac_sign: zodiacSignFromLongitude(earthPerihelion),
    },
  ];

  const orbitElements = {
    mercury: orbitalElements("mercury", daysSinceEpoch),
    venus: orbitalElements("venus", daysSinceEpoch),
    earth: earthElements,
    mars: orbitalElements("mars", daysSinceEpoch),
    jupiter: orbitalElements("jupiter", daysSinceEpoch),
    saturn: orbitalElements("saturn", daysSinceEpoch),
  };

  const orbits = {
    mercury: sampleOrbitPoints(orbitElements.mercury),
    venus: sampleOrbitPoints(orbitElements.venus),
    earth: sampleOrbitPoints(orbitElements.earth),
    mars: sampleOrbitPoints(orbitElements.mars),
    jupiter: sampleOrbitPoints(orbitElements.jupiter),
    saturn: sampleOrbitPoints(orbitElements.saturn),
    moon: sampleOrbitPoints(moonElements).map(([x, y, z]) => [
      earthPos.x + x * EARTH_RADIUS_TO_AU,
      earthPos.y + y * EARTH_RADIUS_TO_AU,
      earthPos.z + z * EARTH_RADIUS_TO_AU,
    ]),
  };

  return {
    command: "astro_snapshot",
    source: "local_model",
    instant: {
      timestamp: instant.getTime() / 1000,
      iso_utc: instant.toISOString(),
      julian_day: Number(julianDay.toFixed(6)),
    },
    seven_governors: sevenGovernors,
    four_remainders: fourRemainders,
    major_aspects: majorAspects(longitudes),
    raw_positions: raw,
    heliocentric,
    orbits,
    warnings: [
      "Analytical model for visualization. Use backend /astro as canonical agent payload when available.",
    ],
  };
}

export function mergeWithApiSnapshot(localModel, apiSnapshot) {
  if (!apiSnapshot || typeof apiSnapshot !== "object") return localModel;
  const merged = { ...localModel };

  if (Array.isArray(apiSnapshot.seven_governors)) {
    merged.seven_governors = apiSnapshot.seven_governors;
  }
  if (Array.isArray(apiSnapshot.four_remainders)) {
    merged.four_remainders = apiSnapshot.four_remainders;
  }
  if (Array.isArray(apiSnapshot.major_aspects)) {
    merged.major_aspects = apiSnapshot.major_aspects;
  }

  merged.source = apiSnapshot.command === "astro_snapshot" ? "api_plus_local_3d" : merged.source;
  merged.warnings = Array.from(new Set([...(localModel.warnings || []), ...(apiSnapshot.warnings || [])]));
  return merged;
}

export function toLocalInputValue(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  const hour = `${d.getHours()}`.padStart(2, "0");
  const minute = `${d.getMinutes()}`.padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}`;
}

export function parseInputDate(value) {
  if (!value) return new Date();
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return new Date();
  return parsed;
}
