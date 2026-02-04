Eine frühe, entscheidende Frage war, wo die gemeinsame Audio-Logik leben sollte und in welcher Sprache sie geschrieben werden sollte. Kick Snare Hat Apps teilen bereits höherwertigen Anwendungscode über [Kotlin Multiplatform](https://kotlinlang.org/docs/multiplatform/kmp-overview.html), was für viele nicht-echtzeitbezogene Logik gut funktioniert, aber dieser Ansatz stößt an seine Grenzen, sobald Timing-Garantien wichtig werden.

Insbesondere auf Android stellt die Tatsache, dass die primäre Audio-API in C++ geschrieben ist, eine zusätzliche Hürde dar. Auf sie von Kotlin aus zuzugreifen, erfordert JNI, und das Garbage-collected JVM-Umfeld macht es nahezu unmöglich, zeitkritisches Verhalten zuverlässig zu steuern.

Web und iOS haben andere Ausführungsmodelle. Kotlin Multiplatform-Code lässt sich dort zwar integrieren, aber es würde zu divergierenden Pfaden führen in einem Projekt, das darauf abzielt, gemeinsame Implementierungen so weit wie möglich zu vereinheitlichen.

Damit blieb eine überschaubare Menge an Optionen für die Kern-Audio-Engine. C++ wäre die naheliegende Wahl, aber Rust gewann zunehmend Aufmerksamkeit als System-Sprache mit starken Garantien in puncto Speicher-Sicherheit, Performance, Entwickler-Ergonomie und C-kompatiblem [ABI](https://de.wikipedia.org/wiki/Bin%C3%A4rschnittstelle). Obwohl es zu diesem Zeitpunkt noch nicht weit verbreitet in Mainstream-Audio-Apps war, bot es die Chance, in einem mir vertrauten Bereich mit einer neuen Sprache zu arbeiten.

Als Rust für den Core gewählt wurde, wurde klar, dass das Interface zwischen Core und den nativen Layern als Teil des Designs behandelt werden muss und nicht nur als Implementierungsdetail. Entscheidungen über Speicherallokation, Instanziierung und Zerstörung, Status-Übergabe und die Nutzung von Makros zur Reduzierung von [FFI](https://en.wikipedia.org/wiki/Foreign_function_interface)-Boilerplate waren genauso wichtig wie die Audio-Verarbeitungslogik selbst.

![architektur](./architecture-german.png)
