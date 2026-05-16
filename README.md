# CueBridge

CueBridge is a full-stack DJ utility app built with **Python FastAPI** and **React TypeScript** that syncs and converts cue points between DJ platforms like **Rekordbox** and **Serato**.

The goal is to provide DJs with a local-first tool for migrating libraries, preserving cue points, and comparing metadata across ecosystems.

---

## Tech Stack

### Backend

- Python
- FastAPI
- Pydantic
- XML parsing

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

---

## Current MVP Goal

Build a working pipeline for:

```txt
Upload Rekordbox XML
        ↓
Parse tracks + cue points
        ↓
Normalize cue data
        ↓
Return parsed results to frontend
        ↓
Display cue information in UI
```
