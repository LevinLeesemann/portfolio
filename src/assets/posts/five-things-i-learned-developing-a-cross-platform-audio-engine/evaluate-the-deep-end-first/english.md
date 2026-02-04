The web was chosen as the first platform to integrate not because it was expected to be the easiest, but because it was the least familiar. I had worked with Android and iOS audio APIs before on my own metronome app ([Tempus](https://github.com/LevinLeesemann/Tempus)), and before committing fully to the cross-platform architecture, it was important to verify that the core assumptions would hold up in a browser environment.

Getting even a minimal setup working involved several layers: a small Kotlin Multiplatform interface defining how a consumer interacts with the engine, a TypeScript-based native layer, and a WebAssembly build of the Rust core.

Simply sharing memory between TypeScript, Rust, and Web Workers, already turned out to be non-trivial, and early attempts relied on global statics in Rust to make experimentation possible. However, that approach worked well enough for a proof of concept.

It quickly became apparent though, that this implementation wouldn’t scale. Parts of the WASM module would be reinitialized unexpectedly, and managing shared state without careful coordination led to brittle behavior. A significant amount of time was spent reading documentation, experimenting, and refining the integration before basic playback became reliable.

While this process was frustrating at times, it had an important side effect. Several assumptions that seemed reasonable when working only on native platforms were challenged early on by the web integration. Addressing those issues at that stage influenced later design decisions on iOS and Android, particularly around initialization, how each platform’s audio API was configured, and lifecycle management.
