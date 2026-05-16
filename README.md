CueBridge

CueBridge is a full-stack DJ utility app built with Python FastAPI and React TypeScript that syncs and converts cue points between DJ platforms like Rekordbox and Serato.

The goal is to provide DJs with a local-first tool for migrating libraries, preserving cue points, and comparing metadata across ecosystems.

Tech Stack
Backend
Python
FastAPI
Pydantic
XML parsing

Frontend
React
TypeScript
Vite
Tailwind CSS
shadcn/ui
Current MVP Goal

Build a working pipeline for:

Upload Rekordbox XML
↓
Parse tracks + cue points
↓
Normalize cue data
↓
Return parsed results to frontend
↓
Display cue information in UI

Next Steps
Frontend Integration
build drag-and-drop upload UI
send XML file to FastAPI
display parsed tracks in React
Cue Normalization

Create a unified cue model shared between:

Rekordbox
Serato
Serato Parsing

Research and implement:

crate parsing
cue metadata extraction
hot cue mapping
Cue Comparison UI

Build:

side-by-side cue comparison
missing cue detection
duplicate cue handling
Exporters

Support exporting converted cues back into:

Rekordbox
Serato-compatible formats

Long-Term Vision

CueBridge aims to become a cross-platform DJ library interoperability tool that helps DJs migrate between ecosystems without losing:

cue points
loops
memory markers
playlists
metadata organization
