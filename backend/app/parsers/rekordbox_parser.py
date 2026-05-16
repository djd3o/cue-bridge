import xml.etree.ElementTree as ET

def parse_rekordbox_xml(xml_content: bytes):
    root = ET.fromstring(xml_content)

    tracks = []

    collection = root.find("COLLECTION")

    if collection is None:
        return []

    for track in collection.findall("TRACK"):
        track_name = track.attrib.get("Name", "Unknown")
        artist = track.attrib.get("Artist", "Unknown")

        cues = []

        for cue in track.findall("POSITION_MARK"):
            cues.append({
                "name": cue.attrib.get("Name"),
                "type": cue.attrib.get("Type"),
                "start": cue.attrib.get("Start"),
                "num": cue.attrib.get("Num"),
            })

        tracks.append({
            "trackTitle": track_name,
            "artist": artist,
            "cues": cues,
        })

    return tracks