FROM python:3.10-slim

WORKDIR /app

# Install dependencies (uvicorn, fastapi, clawlendar with all heavy astronomical engines)
RUN pip install --no-cache-dir uvicorn fastapi "clawlendar[api,lunar,extra-calendars,metaphysics]" pydantic

# Copy the FastAPI wrapper from the api folder
COPY api /app/api

# Expose the port for the API server
EXPOSE 8000

# Run the FastAPI server via Uvicorn on 0.0.0.0 (all interfaces)
CMD ["uvicorn", "api.index:app", "--host", "0.0.0.0", "--port", "8000"]
