Früh musste ich entscheiden, wo die Shared Audio Logic leben sollte und in welcher Sprache. Kick Snare Hat Apps teilen schon High-Level App-Code via Kotlin Multiplatform, was für Non-Real-Time Stuff super funktioniert. Aber wenn Timing kritisch wird, stößt KMP an seine Grenzen.

Speziell auf Android: die primäre Audio API ist in C++, von Kotlin aus musst du via JNI gehen, und das Garbage-Collected JVM Umfeld macht Timing-sensitive Dinge fast unmöglich.

Web und iOS? Theoretisch könnte man KMP einbinden, aber das würde divergente Paths erzeugen – nicht optimal, wenn man Shared Implementation unifyen will.

Also blieb eine kleine Auswahl für den Core: C++ wäre obvious, aber Rust war spannend – Memory Safety, Performance, Dev Ergonomics, C-ABI. Noch nicht weit verbreitet in Audio Apps, aber Chance, in vertrautem Domain mit neuer Language zu arbeiten.

Mit Rust im Core wurde klar: die Interface zwischen Core und Native Layers ist Design, nicht Implementation Detail. Entscheidungen über Memory, Lifecycle, State Passing und Macros für FFI Boilerplate sind genauso wichtig wie die Audio Processing Logic selbst.
