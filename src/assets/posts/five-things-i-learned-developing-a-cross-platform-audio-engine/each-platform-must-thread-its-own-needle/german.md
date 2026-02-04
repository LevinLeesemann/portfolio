Frühziel: Duplicate Logic across Platforms vermeiden → ein relativ uniformer Internal Aufbau. In der Praxis hielt das nicht, sobald Platform Constraints sichtbar wurden.

Jede Platform hat einen Consumer-Platz, Producer ist weniger klar. iOS, Android, Web = eigene Threading-Mechaniken, und mit Echtzeit-Constraints braucht es eine Lösung, die überall zuverlässig läuft.

Statt alles in ein Threading-Modell zu pressen, bekam jede Native Layer eigene Threads – passend zur Platform. Anfangs durch technische Limits getrieben (z.B. Rust on WASM: kein Threading), später auch, weil man so Ressourcen besser kontrollieren kann – wichtig auf Mobile. Neue Plattformen oder andere Threading-Modelle waren dadurch low-cost.

Tradeoff: Native Layers intern leicht unterschiedlich, außen gleiches Verhalten. Besser so als uniformes Design, das Platform-Specific Stuff verschleiert und Debugging schwerer macht.
