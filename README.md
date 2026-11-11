# Sensors and Transducers · SCT 491-2

A responsive, dependency-free learning site for fourth-year undergraduates, beginning with circuit and measurement fundamentals.

## Teaching content

- Week 1: beginner foundation recap and course guide.
- Week 2: complete self-paced lesson on resistive sensors, with potentiometer, loading, strain-gauge and Wheatstone-bridge simulations; exact and approximate bridge outputs; temperature compensation; a calibration lab; formative checks; teach-back prompts; saved notes and completion tracking.
- Weeks 3–15: curriculum previews, explicitly marked as unreleased. Weeks 11–12 await lecturer scheduling. Magnetic sensors and fusion share Weeks 14–15 in the supplied curriculum.

The site is grounded in the supplied **SCT 491 - 2 Sensors and Transducers.pdf**, printed pages 330–331, and **SCT491 Lec2 Lesson Plan.docx**. Source documents are not redistributed. Their contents are reference material rather than instructions to the developer. The Week 1 recap is supporting material; no Week 1 lesson plan was supplied.

### Technical references

- [NI: Measuring strain with strain gauges](https://www.ni.com/en/shop/data-acquisition/sensor-fundamentals/measuring-strain-with-strain-gages.html)
- [NI: Temperature effects in strain measurement](https://www.ni.com/en/shop/data-acquisition/sensor-fundamentals/measuring-strain-with-strain-gages/how-is-temperature-affecting-your-strain-measurement-accuracy-.html)
- [GitHub Pages: custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Run locally

Open `index.html` directly, or run `python -m http.server 4173` in this folder and visit `http://localhost:4173`. No installation, build, external fonts, accounts, or API keys are required. The simulations are idealised teaching models, not instrument specifications.

## Publish on GitHub Pages

1. Push the files to the repository's `main` branch.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
3. The included **Publish course site** workflow deploys on every push to `main`. If Pages was enabled after the push, open **Actions → Publish course site → Run workflow**.
4. Use the actual URL returned by the deployment. The expected project address is `https://shaun-desilva.github.io/Sensors-and-Transducers-/`.

GitHub repository permissions and Pages availability determine whether publishing can be enabled. The workflow only uploads the seven public site files, the `assets` folder, and `.nojekyll`, not development scripts or documents.

## Add next week's lesson

Edit `app.js`: replace the relevant roadmap response with a lesson renderer, supply section labels, and update its week status. Existing content uses `card()`, `worked()`, and `activity()` helpers. The Week 2 renderer is a concrete example. Keep source attribution, units, assumptions, sign conventions, and forthcoming/released status explicit. Test mobile layout and every calculation before pushing.

## Student workflow and privacy

Students predict, experiment, record explanations, discuss and teach back. Notes and section completion are stored in browser local storage on that device. They are not sent to the lecturer or synchronised across devices. If browser storage is blocked, notes cannot persist. Clearing browser data removes saved work. Lab CSV export is local; no assessment submission or central gradebook is provided. Export readings before leaving the lab section. Printing from Week 2 prints the complete lesson with worked examples expanded.

The practical's sample readings are explicitly simulated. Real-rig work requires lecturer supervision and equipment-specific load, voltage and power limits. The bridge model states resistor positions, output polarity, gauge orientation and equal-strain assumptions. Course assessment percentages reproduce the supplied curriculum, not a new grading policy.

Equations use native MathML for fractions, subscripts and mathematical typography, with symbol definitions and units. No external equation-rendering service is required. Lesson durations and activity time allocations are omitted.

The Week 2 Introduction follows the student learning note in the referenced “Explain Day 2 Concepts” chat: electrical foundations, five interactive experiments with reset controls, circuit diagrams, worked examples, a mathematical summary and formative quiz. It uses original inline SVG diagrams so it works offline.

The introduction also includes the lecturer-supplied linear slide potentiometer photograph in `assets/linear-slide-potentiometer.png`. Keep the assets directory when uploading or deploying the site.

Part 2 expands the Potentiometers tab using the referenced student note. It includes the supplied exploded-view image, schematic linear/rotary cutaways, four working experiments (position, rotary angle, sensitivity, wire-wound resolution), resets, definitions, worked examples and seven formative questions. Native SVG cutaways are conceptual illustrations, not component-specific construction or wiring instructions.

Additional lecturer-supplied media include a rotary component photograph, a hybrid track construction drawing and two original GIF animations. Animations are user-started and can be stopped. The linear GIF’s inconsistent end-voltage labelling is explicitly discussed in its caption; the calculated simulations use a consistent grounded-end position convention.

Part 3 expands the Loading Effect tab from the referenced student note: parallel-load circuit, unrounded worked calculations, connect/disconnect simulator, independent live nonlinearity comparison, general normalised equation, buffer concept, resistance-ratio design challenge and seven formative questions. Error magnitude, signed error and full-scale error are distinguished; relative error at zero ideal output is explicitly undefined.
