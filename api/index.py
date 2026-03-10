from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Any, Dict, List, Optional
from pydantic import BaseModel
from clawlendar.bridge import (
    CalendarError,
    make_registry,
    run_calendar_month,
    run_astro_snapshot,
    run_capabilities,
    run_convert,
    run_day_profile,
    run_timeline,
)

# Initialize registry and warnings from the powerful Clawlendar core
REGISTRY, WARNINGS = make_registry()

app = FastAPI(
    title="Clawlendar Web API",
    description="FastAPI Wrapper for Clawlendar Python Core (Vercel Serverless Ready)",
    version="1.0.0",
)

# Crucial: Allow CORS so your GitHub Pages front-end can communicate with this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Security: For production, change to ["https://Hosuke.github.io"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define Pydantic models for structured incoming POST bodies

class TimelineRequest(BaseModel):
    input_payload: Dict[str, Any]
    timezone: str = "UTC"
    date_basis: str = "local"
    targets: Optional[List[str]] = None
    locale: str = "en"

class DayProfileRequest(BaseModel):
    input_payload: Dict[str, Any]
    timezone: str = "UTC"
    date_basis: str = "local"
    include_astro: bool = True
    include_metaphysics: bool = True
    locale: str = "en"

class AstroSnapshotRequest(BaseModel):
    input_payload: Dict[str, Any]
    timezone: str = "UTC"
    zodiac_system: str = "tropical"
    bodies: Optional[List[str]] = None

class CalendarMonthRequest(BaseModel):
    source: str
    month_payload: Dict[str, Any]

class ConvertRequest(BaseModel):
    source: str
    targets: List[str]
    source_payload: Dict[str, Any]
    locale: str = "en"


@app.get("/api")
def read_root():
    return {
        "status": "online",
        "engine": "Clawlendar",
        "message": "Clawlendar FastAPI is successfully spinning in the cloud."
    }

@app.get("/api/capabilities")
def api_capabilities():
    """List all supported calendars and their schemas."""
    return run_capabilities(REGISTRY, WARNINGS)


@app.post("/api/timeline")
def api_timeline(req: TimelineRequest):
    """Normalize an instant and project it into multiple calendar systems."""
    try:
        return run_timeline(
            registry=REGISTRY,
            warnings=WARNINGS,
            input_payload=req.input_payload,
            timezone_name=req.timezone,
            date_basis=req.date_basis,
            targets=req.targets,
            locale=req.locale,
        )
    except CalendarError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as e:
         raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/day-profile")
def api_day_profile(req: DayProfileRequest):
    """Return day-level profile: details, astrophysics, and metaphysics."""
    try:
        return run_day_profile(
            registry=REGISTRY,
            warnings=WARNINGS,
            input_payload=req.input_payload,
            timezone_name=req.timezone,
            date_basis=req.date_basis,
            include_astro=req.include_astro,
            include_metaphysics=req.include_metaphysics,
            locale=req.locale,
        )
    except CalendarError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as e:
         raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/astro")
def api_astro_snapshot(req: AstroSnapshotRequest):
    """Return an astro/astronomical snapshot for governors and remainders."""
    try:
        return run_astro_snapshot(
            warnings=WARNINGS,
            input_payload=req.input_payload,
            timezone_name=req.timezone,
            zodiac_system=req.zodiac_system,
            bodies=req.bodies,
        )
    except CalendarError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as e:
         raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/calendar-month")
def api_calendar_month(req: CalendarMonthRequest):
    """Return true month boundaries and day list for the selected source calendar."""
    try:
        return run_calendar_month(
            registry=REGISTRY,
            warnings=WARNINGS,
            source=req.source,
            month_payload=req.month_payload,
        )
    except CalendarError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as e:
         raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/convert")
def api_convert(req: ConvertRequest):
    """Convert a date from one calendar system to one or more target calendars."""
    try:
        return run_convert(
            registry=REGISTRY,
            warnings=WARNINGS,
            source=req.source,
            targets=req.targets,
            payload=req.source_payload,
            locale=req.locale,
        )
    except CalendarError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as e:
         raise HTTPException(status_code=500, detail=str(e))
