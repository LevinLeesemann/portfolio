Web wurde als erste Plattform nicht gewählt, weil es am einfachsten wäre, sondern weil es mir am wenigsten vertraut war. Ich hatte bereits mit Android- und iOS-Audio-APIs in meiner eigenen Metronom-App ([Tempus](https://github.com/LevinLeesemann/Tempus)) gearbeitet, und bevor ich mich vollständig auf die plattformübergreifende Architektur festlegte, war es wichtig zu prüfen, ob die Kernannahmen im Browser auch funktionieren.

Selbst ein minimales Setup erforderte mehrere Layer: eine kleines Kotlin Multiplatform-Interface, das definiert, wie ein Consumer mit der Engine interagiert, eine TypeScript-native Layer und eine WebAssembly-Build des Rust-Core.

Memory-Sharing zwischen TypeScript, Rust und Web-Workern erwies sich als nicht trivial, und frühe Versuche nutzten globale Rust-Statics, um Experimente zu ermöglichen. Diese Herangehensweise reichte für einen Proof of Concept.

Schnell zeigte sich jedoch, dass diese Implementierung nicht skaliert. Teile des WASM-Moduls wurden unerwartet reinitialisiert, und die Verwaltung des Shared State ohne sorgfältige Koordination führte zu fragilen Ergebnissen. Viel Zeit wurde in Dokumentation, Experimentieren und Verfeinern der Integration gesteckt, bevor einfache Wiedergabe zuverlässig funktionierte.

Dieser Prozess hatte jedoch einen wichtigen Nebeneffekt: Annahmen, die auf nativen Plattformen logisch erschienen, wurden durch die Web-Integration früh hinterfragt. Das beeinflusste spätere Designentscheidungen auf iOS und Android, insbesondere Initialisierung, Konfiguration der Audio-APIs und Lifecycle-Management.
