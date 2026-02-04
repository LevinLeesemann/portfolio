Native Layers: kaum shared Code. Jede Layer + kleine Test Harness App → Fokus auf Plattform Details, nur KMP Interface für Interaction.

Mit der Zeit traten Patterns auf: Start/Stop Audio, Producer/Consumer Threads, Platform Callbacks = ähnlich, Mechanics differieren. Annahmen hielten Plattform-übergreifend nicht, z.B. Buffer Size, Lifecycle, Threading.

Nicht zu früh abstrahieren, Layer allowed independently zu evolve, Responsibilities wurden klarer → leichter shared logic erkennen.

KMP, ursprünglich nur für Interfaces, übernahm größere Rolle: Koordination in Native Layers. Supported durch TDD → refactor sicher ohne extern sichtbare Changes.

Early Imperfect Implementations = wertvoll. Foundations setzen → erkennen, welche Responsibilities zusammengehören, welche Abstractions sinnvoll. Shared Code = bewährtes Verhalten auf allen Plattformen, Oberfläche für Consumer simplified, Native Interfaces modular und explicit.
