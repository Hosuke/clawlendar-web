"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

import {
  computeLocalAstroModel,
  mergeWithApiSnapshot,
  parseInputDate,
  toLocalInputValue,
} from "@/lib/astroMath";

const CosmicScene = dynamic(() => import("@/components/CosmicScene"), {
  ssr: false,
  loading: () => <div className="scene-loading">Loading WebGL scene...</div>,
});

const TZ_FALLBACK = "UTC";
const DEFAULT_TIMEZONE =
  typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone || TZ_FALLBACK : TZ_FALLBACK;

function parseApiBase(rawValue) {
  const value = String(rawValue || "").trim();
  if (!value) return "";
  try {
    return new URL(value).toString().replace(/\/$/, "");
  } catch (_error) {
    return null;
  }
}

function formatDegree(value) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return "-";
  return `${numeric.toFixed(3)}°`;
}

function formatDateTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export default function HomePage() {
  const [dateInput, setDateInput] = useState(toLocalInputValue(new Date()));
  const [timezone, setTimezone] = useState(DEFAULT_TIMEZONE);
  const [apiBase, setApiBase] = useState("");
  const [apiSnapshot, setApiSnapshot] = useState(null);
  const [apiStatus, setApiStatus] = useState("Local model only");
  const [apiError, setApiError] = useState("");
  const [sceneScale, setSceneScale] = useState(3.8);
  const [layers, setLayers] = useState({
    showOrbits: true,
    showGovernors: true,
    showFourRemainders: true,
    showLabels: true,
  });

  const selectedDate = useMemo(() => parseInputDate(dateInput), [dateInput]);
  const localModel = useMemo(() => computeLocalAstroModel(selectedDate), [selectedDate]);
  const activeModel = useMemo(() => mergeWithApiSnapshot(localModel, apiSnapshot), [localModel, apiSnapshot]);

  async function syncFromApi() {
    const normalizedApiBase = parseApiBase(apiBase);
    if (normalizedApiBase === null) {
      setApiError("Invalid API URL");
      setApiStatus("API base invalid");
      return;
    }
    if (!normalizedApiBase) {
      setApiError("Please set Clawlendar API base first.");
      setApiStatus("Local model only");
      return;
    }

    const localDateTime = dateInput.length === 16 ? `${dateInput}:00` : dateInput;

    setApiError("");
    setApiStatus("Syncing /astro...");

    try {
      const response = await fetch(`${normalizedApiBase}/astro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input_payload: { local_datetime: localDateTime },
          timezone,
          zodiac_system: "tropical",
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(typeof payload?.detail === "string" ? payload.detail : "Request failed");
      }

      setApiSnapshot(payload);
      setApiStatus("Synced with canonical /astro payload");
    } catch (error) {
      setApiStatus("API sync failed, using local model");
      setApiError(error instanceof Error ? error.message : "Unknown API error");
      setApiSnapshot(null);
    }
  }

  function toggleLayer(key) {
    setLayers((current) => ({ ...current, [key]: !current[key] }));
  }

  const warnings = activeModel?.warnings || [];

  return (
    <div className="page-shell">
      <header className="hero">
        <p className="hero-kicker">Clawlendar WebGL Lab</p>
        <h1>Next.js + React Three Fiber Celestial Console</h1>
        <p>
          Seven Governors and Four Remainders in layered 3D. This Next.js build coexists with your static
          <code> clawlendar-web </code>
          version.
        </p>
      </header>

      <main className="workspace">
        <aside className="panel controls">
          <h2>Control Deck</h2>

          <label>
            Instant (Local)
            <input
              type="datetime-local"
              step="60"
              value={dateInput}
              onChange={(event) => {
                setDateInput(event.target.value);
                setApiSnapshot(null);
                setApiStatus("Local model only");
              }}
            />
          </label>

          <label>
            Timezone
            <input
              type="text"
              value={timezone}
              onChange={(event) => {
                setTimezone(event.target.value);
                setApiSnapshot(null);
                setApiStatus("Local model only");
              }}
              placeholder="Asia/Taipei"
            />
          </label>

          <label>
            Clawlendar API Base (optional)
            <input
              type="url"
              value={apiBase}
              onChange={(event) => setApiBase(event.target.value)}
              placeholder="http://127.0.0.1:8000"
            />
          </label>

          <button type="button" className="primary" onClick={syncFromApi}>
            Sync Canonical /astro
          </button>

          <div className="status-box">
            <strong>Status</strong>
            <span>{apiStatus}</span>
            {apiError ? <em>{apiError}</em> : null}
          </div>

          <fieldset>
            <legend>Scene Layers</legend>
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={layers.showOrbits}
                onChange={() => toggleLayer("showOrbits")}
              />
              <span>3D Orbit Layer</span>
            </label>
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={layers.showGovernors}
                onChange={() => toggleLayer("showGovernors")}
              />
              <span>Seven Governors</span>
            </label>
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={layers.showFourRemainders}
                onChange={() => toggleLayer("showFourRemainders")}
              />
              <span>Four Remainders Dedicated Layer</span>
            </label>
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={layers.showLabels}
                onChange={() => toggleLayer("showLabels")}
              />
              <span>Body Labels</span>
            </label>
          </fieldset>

          <label>
            Scene Scale ({sceneScale.toFixed(1)}x)
            <input
              type="range"
              min="2"
              max="7"
              step="0.1"
              value={sceneScale}
              onChange={(event) => setSceneScale(Number(event.target.value))}
            />
          </label>
        </aside>

        <section className="panel scene-panel">
          <CosmicScene model={activeModel} layers={layers} sceneScale={sceneScale} />
        </section>

        <aside className="panel metrics">
          <h2>Astro Payload</h2>
          <div className="meta-row">
            <span>Display Time</span>
            <strong>{formatDateTime(selectedDate)}</strong>
          </div>
          <div className="meta-row">
            <span>Data Source</span>
            <strong>{activeModel.source}</strong>
          </div>

          <h3>Seven Governors</h3>
          <div className="list-grid">
            {(activeModel.seven_governors || []).map((item) => (
              <div key={item.name} className="list-item">
                <b>{item.name}</b>
                <span>{formatDegree(item.longitude_deg)}</span>
                <small>{item.zodiac_sign}</small>
              </div>
            ))}
          </div>

          <h3>Four Remainders</h3>
          <div className="list-grid remainders">
            {(activeModel.four_remainders || []).map((item) => (
              <div key={item.name} className="list-item">
                <b>{item.name}</b>
                <span>{formatDegree(item.longitude_deg)}</span>
                <small>{item.zodiac_sign}</small>
              </div>
            ))}
          </div>

          <h3>Major Aspects</h3>
          <div className="aspects">
            {(activeModel.major_aspects || []).slice(0, 8).map((item) => (
              <div key={`${item.left}-${item.right}-${item.aspect}`} className="aspect-item">
                <span>
                  {item.left} • {item.right}
                </span>
                <span>{item.aspect}</span>
                <small>orb {formatDegree(item.orb_deg)}</small>
              </div>
            ))}
          </div>

          <h3>Warnings</h3>
          <ul className="warnings">
            {warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}
