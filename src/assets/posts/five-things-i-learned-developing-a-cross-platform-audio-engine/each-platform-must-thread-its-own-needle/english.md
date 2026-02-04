One of the early goals of the project was to reduce duplicated logic across platforms, which initially suggested a fairly uniform internal structure. In practice, that expectation didn’t hold up very well once platform constraints became apparent.

While each platform provides a dedicated spot to house consumer code, the producer side of things isn't as clear-cut. iOS, Android, and web each have unique offerings when it comes to threading, and with the added real-time constraints of an audio engine, it became clear that a solution that reliably worked across all three platforms was required.

Rather than attempting to force all of these into a single threading model, the design evolved toward letting each native layer manage its own threads in a way that made sense for that platform. In some cases, this decision was initially driven by technical limitations, such as the lack of thread creation support in Rust for WASM targets at the time.

After spending more time with the problem however, it also became clear that this approach allowed for more precise control over resource usage, which is especially important on mobile devices. Swapping out the threading model on a specific platform, or adding a platform that wouldn't be supported by certain unified threading models also became relatively low-cost investments.

The tradeoff was that the native layers ended up looking slightly different internally, even though they exposed the same behavior to the rest of the system. That difference was ultimately preferable to a more uniform design, which might have obscured platform-specific concerns and made debugging more difficult.
