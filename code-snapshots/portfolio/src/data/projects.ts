export type Section = {
  title: string;
  body: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ProjectFull = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  gradient: string;
  year: string;
  role: string;
  timeline: string;
  stack: string[];
  overview: string;
  sections: Section[];
  metrics: Metric[];
};

export const projects: ProjectFull[] = [
  {
    slug: "aurora",
    title: "Aurora",
    tag: "Generative Art",
    description:
      "WebGL-driven generative visualizer that turns audio into living color fields. 60fps on a phone.",
    gradient: "from-violet-500 via-fuchsia-500 to-rose-400",
    year: "2025",
    role: "Solo Developer",
    timeline: "6 weeks",
    stack: ["WebGL", "GLSL", "Web Audio API", "React", "TypeScript"],
    overview:
      "Audio visualizers are usually either boring frequency bars or laggy WebGL experiments that melt a phone. Aurora started with a single constraint: what if every musical frequency had a physical intuition — color, velocity, mass — and we let those intuitions collide on screen in real time?",
    sections: [
      {
        title: "Mapping Sound to Physics",
        body: "The core insight was treating frequency bands as particle systems rather than simple amplitude graphs. Bass frequencies spawn dense, slow-moving blobs with high mass; mids drive turbulence in a fluid simulation; highs scatter tiny high-velocity particles at the periphery. This hierarchy mirrors how humans perceive music — the bass is felt, the mids are heard, the highs are sensed — and the visual output reflects that layering intuitively without any legend or UI.",
      },
      {
        title: "Staying at 60fps on Mobile",
        body: "The first prototype ran at 18fps on an iPhone 12. The fix wasn't fewer particles — it was smarter GPU work. By encoding particle state (position, velocity, mass) into floating-point textures and running every simulation step entirely on the GPU via feedback loops, the CPU only ever touches the audio data. The final build sustains 60fps at full resolution with 40,000 active particles because nothing crosses the CPU–GPU bridge per frame except a single uniform with the audio FFT.",
      },
      {
        title: "Generative Color Theory",
        body: "Color is derived from the same physics as the motion: hue maps to frequency, saturation to amplitude, lightness to particle age. The palette shifts continuously through a perceptually uniform color space (Oklab) so transitions never produce muddy midpoints. An optional 'mood' slider biases the whole palette toward cool or warm without breaking the physics — it just rotates the hue origin.",
      },
    ],
    metrics: [
      { value: "60fps", label: "on iPhone 12 at full resolution" },
      { value: "40K", label: "active particles per frame" },
      { value: "< 4ms", label: "audio-to-visual latency" },
      { value: "0 KB", label: "per-frame CPU–GPU transfer" },
    ],
  },
  {
    slug: "halcyon",
    title: "Halcyon",
    tag: "SaaS · Design System",
    description:
      "End-to-end design system for a fintech client. 200+ components, full a11y, dark mode out of the box.",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    year: "2024",
    role: "Lead Frontend Engineer",
    timeline: "4 months",
    stack: ["React", "TypeScript", "Radix UI", "Storybook", "CSS Modules", "Chromatic"],
    overview:
      "Three product teams, four designers, two codebases, and zero shared components. Halcyon was born from a simple observation: the fintech client was rebuilding the same modal from scratch every quarter. The goal wasn't just a component library — it was a shared language that made divergence feel more expensive than convergence.",
    sections: [
      {
        title: "The Token Foundation",
        body: "Before writing a single component, I spent three weeks on design tokens — not just colors and spacing, but semantic decisions. A color named `surface-elevated` is more durable than `gray-100` because it carries intent: the component library survives a rebrand without touching component code. We audited every live product screen and extracted 74 semantic tokens that covered every case without redundancy. Figma variables, CSS custom properties, and TypeScript constants are all generated from a single source-of-truth JSON file.",
      },
      {
        title: "Accessibility First, Not Last",
        body: "Every component started from a Radix UI primitive — battle-tested keyboard navigation and ARIA patterns included by default. The work was in the theming layer and in establishing rules the whole team would follow: no interactive element under 44×44px, no color-only information encoding, focus rings that are always visible. Automated checks via axe-core run in Storybook on every story, and manual testing with VoiceOver and NVDA happened at every sprint review, not just at launch.",
      },
      {
        title: "Making Adoption Frictionless",
        body: "A design system that teams don't use is a documentation project. To drive adoption, I embedded with each product team for one week and migrated their highest-traffic screen to Halcyon with them. This surfaced integration pain points early and created internal champions who knew the system from the inside. Chromatic visual regression testing meant engineers could update a token or component variant without fear of unexpected visual changes across the 200+ stories.",
      },
    ],
    metrics: [
      { value: "200+", label: "production-ready components" },
      { value: "98%", label: "Lighthouse accessibility score" },
      { value: "30%", label: "reduction in new-feature dev time" },
      { value: "3", label: "product teams onboarded in month 1" },
    ],
  },
  {
    slug: "threadboard",
    title: "Threadboard",
    tag: "Real-time · CRDT",
    description:
      "Collaborative whiteboard with multi-cursor presence and conflict-free merging. Yjs under the hood.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    year: "2024",
    role: "Full-stack Engineer",
    timeline: "3 months",
    stack: ["React", "Yjs", "WebSockets", "Node.js", "Canvas API", "PostgreSQL"],
    overview:
      "Collaborative tools look simple until two people drag the same sticky note at the same time. Threadboard was a deep dive into conflict-free data structures — not because they're fashionable, but because the alternative (last-write-wins) destroys trust in the tool the first time it silently discards someone's work.",
    sections: [
      {
        title: "CRDT Data Modeling",
        body: "Every canvas object — sticky notes, shapes, connectors, text — lives in a Yjs shared document. Yjs's Y.Map type handles the object graph; Y.Array handles z-order (draw order). The key insight was that 'move' is not an atomic operation: it's a delete-then-insert on the position value. By modeling position as a Y.Map entry rather than a simple coordinate pair, concurrent moves on the same object converge to the last-writer's position without losing either writer's intent on *other* properties (color, size, content) they may have changed simultaneously.",
      },
      {
        title: "Presence Without a Database",
        body: "Cursor positions and user avatars are ephemeral — they don't need to survive a page refresh, so storing them in Postgres would be wasteful. Yjs Awareness handles this: each client broadcasts its own presence state (cursor XY, user info, current selection) over WebSockets, and the server fans it out to all other clients in the same room. On disconnect, the server cleans up that client's awareness state immediately. The result is sub-50ms cursor lag with zero database involvement.",
      },
      {
        title: "Canvas Performance at Scale",
        body: "Rendering 500+ objects on a single Canvas2D surface naively redraws everything on every frame. Threadboard uses a dirty-region system: only objects whose state changed since the last render are redrawn. A spatial index (a simple quadtree) ensures that viewport culling is O(log n) rather than O(n), so performance degrades gracefully as the board grows. For text-heavy boards, text rendering is offloaded to a separate OffscreenCanvas on a worker thread.",
      },
    ],
    metrics: [
      { value: "< 80ms", label: "end-to-end sync latency" },
      { value: "50+", label: "concurrent users per board" },
      { value: "0", label: "data conflicts in 3 months of testing" },
      { value: "500+", label: "objects before frame-rate drop" },
    ],
  },
  {
    slug: "stellar-atlas",
    title: "Stellar Atlas",
    tag: "Three.js · Data Viz",
    description:
      "Interactive 3D star atlas of the night sky from any place on Earth. Built with Three.js + GLSL.",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    year: "2023",
    role: "Solo Developer",
    timeline: "8 weeks",
    stack: ["Three.js", "GLSL", "React", "TypeScript", "Astronomy Algorithms"],
    overview:
      "Most star maps are flat projections that flatten the sky into a 2D lie. Stellar Atlas is the opposite: the user is at the center of a 3D celestial sphere, looking out. The challenge wasn't just rendering 100,000+ stars — it was making them feel like the real sky rather than a screensaver.",
    sections: [
      {
        title: "Astronomically Accurate Coordinates",
        body: "Star data comes from the Yale Bright Star Catalogue, converted from equatorial coordinates (RA/Dec) to Cartesian XYZ on a unit sphere. Getting the sky to look *right* from any latitude and longitude required implementing full sidereal time calculations — the sky rotates as time passes, and the horizon depends on the observer's location. The math involves Julian Day Numbers, Local Sidereal Time, and altitude-azimuth transforms, all running in a GLSL vertex shader so the GPU moves 117,000 vertices per frame without CPU involvement.",
      },
      {
        title: "Rendering Stars as Stars",
        body: "A naive approach renders each star as a small circle. Real stars have two visual properties that circles can't capture: diffraction spikes on bright stars, and atmospheric scintillation (twinkle). Both are pure shader effects. Spikes are four attenuated line segments drawn in the fragment shader based on apparent magnitude. Scintillation is a time-varying noise function applied to opacity and size for stars below 15 degrees altitude — because that's where atmospheric distortion actually happens.",
      },
      {
        title: "Interaction Design",
        body: "Identifying a star you're pointing at in a 3D sphere is a raycasting problem. Three.js handles it, but with 100K+ points the default approach is too slow for smooth hover. The solution is a two-phase hit test: first bin stars into a spatial grid projected onto screen space, then raycast only against stars in the cursor's grid cell. Hover latency is imperceptible even on a trackpad. Clicking a star opens a sidebar with its catalog data — name, constellation, spectral class, distance in light-years.",
      },
    ],
    metrics: [
      { value: "117K", label: "stars rendered in real time" },
      { value: "60fps", label: "on mid-range hardware" },
      { value: "< 1ms", label: "star hit-test latency" },
      { value: "0.001°", label: "positional accuracy vs. real sky" },
    ],
  },
  {
    slug: "verse",
    title: "Verse",
    tag: "AI · Tooling",
    description:
      "A writing companion that streams structured edits from an LLM with a custom diff renderer.",
    gradient: "from-pink-400 via-purple-500 to-indigo-500",
    year: "2023",
    role: "Solo Developer",
    timeline: "5 weeks",
    stack: ["React", "TypeScript", "Vercel AI SDK", "Claude API", "Custom Diff Engine"],
    overview:
      "AI writing tools fall into two traps: they either replace your words wholesale (destroying your voice) or suggest tiny autocomplete snippets (missing the forest for the trees). Verse is built on a different premise — the LLM should annotate your text like a thoughtful editor, not rewrite it like a ghostwriter.",
    sections: [
      {
        title: "Streaming Structured Edits",
        body: "The LLM doesn't return a revised draft — it returns a structured diff: a JSON array of operations (keep, delete, insert) that maps the original text to the suggested revision. Getting this to stream reliably was the hardest part. Raw streaming of partial JSON is invalid JSON mid-stream, so I built a custom streaming parser that identifies completed array items as they arrive and renders them incrementally. The result feels instantaneous even for long documents because the first suggestions appear within 200ms of the user hitting 'review'.",
      },
      {
        title: "The Diff Renderer",
        body: "Standard libraries like `diff` produce character-level diffs that are too noisy for prose. Verse uses a sentence-tokenized diff that operates at the sentence level first, then falls back to word-level within changed sentences. Deletions appear as red strikethroughs with a slight background; insertions are green with an underline. The UI also groups contiguous changes into 'hunks' with Accept/Reject buttons — the same mental model as a code review, applied to writing. Accepting a hunk splices the suggestion back into the original document tree without re-triggering a full re-render.",
      },
      {
        title: "Voice Preservation",
        body: "The prompt engineering behind Verse is as important as the UI. The system prompt explicitly instructs the model to preserve the author's sentence rhythm, vocabulary level, and intentional stylistic choices (sentence fragments, unconventional punctuation). Before each review session the user can optionally paste a 'writing sample' — a piece they're proud of — which gets embedded in the prompt as a style reference. In user testing, this single feature was responsible for most of the 'it actually sounds like me' feedback.",
      },
    ],
    metrics: [
      { value: "< 200ms", label: "to first suggestion" },
      { value: "10K+", label: "beta users in first month" },
      { value: "4.8★", label: "average rating from beta cohort" },
      { value: "87%", label: "of users accepted at least one suggestion" },
    ],
  },
];