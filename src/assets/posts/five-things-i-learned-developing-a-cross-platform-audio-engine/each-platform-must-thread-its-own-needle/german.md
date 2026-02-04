Ein frühes Ziel des Projekts war, duplizierte Logik über Plattformen hinweg zu reduzieren, was zunächst eine relativ einheitliche interne Struktur nahelegte. In der Praxis hielt diese Erwartung nicht, sobald die Plattform-Bedingungen offensichtlich wurden.

Jede Plattform bietet einen dedizierten Platz für Consumer-Code, die Producer-Seite ist jedoch weniger klar. iOS, Android und Web haben jeweils eigene Modelle für Threading, und unter den Echtzeit-Anforderungen einer Audio-Engine wurde schnell klar, dass eine Lösung benötigt wird, die zuverlässig über alle drei Plattformen funktioniert.

Statt alles in ein einziges Threading-Modell zu pressen, entwickelte sich das Design dahin, jeder nativen Schicht die Verwaltung eigener Threads zu überlassen, jeweils auf die Plattform zugeschnitten. In einigen Fällen war diese Entscheidung zunächst durch technische Einschränkungen getrieben, wie z.B. fehlende Thread-Unterstützung in Rust für WASM-Ziele.

Mit zunehmender Arbeit am Problem wurde jedoch klar, dass dieser Ansatz präzisere Kontrolle über Ressourcen erlaubt, was insbesondere auf mobilen Geräten wichtig ist. Das Austauschen eines Threading-Modells auf einer bestimmten Plattform oder das Hinzufügen einer neuen Plattform wurde dadurch relativ kostengünstig.

Der Kompromiss war, dass die nativen Layer intern leicht unterschiedlich aussehen, obwohl sie dasselbe Verhalten nach außen zeigen. Diese Unterschiede waren letztlich einem uniformen Design vorzuziehen, das plattformspezifische Details verschleiern und Debugging erschweren würde.
