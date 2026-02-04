Web als erste Plattform nicht, weil easiest, sondern weil least familiar. Android/iOS APIs kannte ich schon aus meiner Metronom-App. Vor Commitment auf Cross-Platform Architecture musste ich prüfen, ob Kernannahmen im Browser halten.

Setup = mehrere Layers: kleine KMP Interface für Consumer Interaction, TypeScript Native Layer, Rust Core via WASM.

Memory-Sharing TypeScript ↔ Rust ↔ Web Workers = tricky. Frühe Experimente mit global statics in Rust. Reichte für Proof of Concept.

Schnell klar: so scaling nicht möglich. Teile des WASM Modules wurden unerwartet reinitialisiert, Shared State Management ohne Koordination = brittle. Viel Zeit für Docs, Experimente, Refinement bis Playback reliable war.

Nebenwirkung: Annahmen, die auf Native logisch waren, wurden früh durch Web hinterfragt → beeinflusste Design iOS/Android: Init, API Config, Lifecycle.
