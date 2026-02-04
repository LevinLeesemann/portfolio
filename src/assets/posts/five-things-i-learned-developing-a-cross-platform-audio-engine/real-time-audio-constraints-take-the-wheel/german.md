Auf hoher Ebene ist Real-Time Audio eigentlich einfach: Audio besteht aus einem Stream von Float-Samples, die Samples werden in Buffers gepackt, und die Plattform zieht die Buffers in regelmäßigen Intervallen, die eng an die Hardware gebunden sind. Wer sich die API-Unterschiede zwischen Plattformen anschaut, merkt schnell: dieses einfache Modell bringt ziemlich strenge Regeln mit sich, wie alles drumherum organisiert sein muss.

Ein zentraler Punkt ist, wie Plattformen Audio konsumieren. Meistens über einen platform-eigenen Audio Thread, der zuverlässig Daten bekommen muss, ohne zu blockieren. Dinge, die sonst normal sind – Speicher allokieren, I/O machen – gehen hier nicht. Selbst zeitlich deterministische Berechnungen können hörbare Artefakte erzeugen, wenn sie nicht richtig kontrolliert werden.

Daraus ergibt sich fast automatisch ein Producer–Consumer-Modell, meistens mit Ring Buffer. So läuft es auch in DAWs: kleiner, effizienter Footprint, Producer bleibt leicht voraus, Consumer kann jederzeit auslesen.

Obwohl das Pattern bekannt ist, ist die Umsetzung über Plattformen hinweg tricky: wo wird State gespeichert, wie werden Threads managed, und wie bleibt alles responsive für User Input?

Früh wurde klar: Diese Constraints sind nicht plattformspezifisch. Ob AudioWorklet im Web, Audio Unit Callback auf iOS oder Oboe Callback auf Android – dieselben Regeln gelten. Sobald man sie als fixe Punkte akzeptiert statt als Stolpersteine, wird eine gemeinsame Architektur sichtbar.

Plattform-eigener Audio Thread = nur fürs Konsumieren, dedizierter Producer Thread = bleibt voraus und bereitet Buffers vor, Main Thread = frei für State Changes. Diese Isolation hilft, Timing-Sensitive Sachen zu verstehen, während man trotzdem komplexe Interaktion von außen erlaubt.
