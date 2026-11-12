# Sensors and Transducers · SCT 491-2

Student-centred, responsive learning notes for resistive sensors. Static HTML, CSS, JavaScript, native MathML equations and SVG diagrams; no build step or API keys.

## Current lessons

1. Introduction and basic electrical concepts
2. Potentiometric displacement sensors
3. Loading effect
4. Strain gauges
5. Wheatstone bridge, recreated from the latest reference-chat reply

The Practical Lab and Check & Reflect tabs follow these five parts. Parts 6 (Temperature Compensation) and 7 (Cantilever Load Cells) have been removed from navigation, runtime loading, printing and this deployment package at the lecturer's request. Remaining course topics are previews.

The supplied curriculum PDF and Lecture 2 lesson plan, plus the referenced “Explain Day 2 Concepts” student notes, guide the content. Course documents are not redistributed.

## Circuit diagrams and images

Grey components are fixed resistors. Blue identifies tensile/increasing-resistance gauges, loads and output-voltage elements. Orange identifies compressive/decreasing-resistance gauges. Wires are black on white. Labels remain explicit so colour alone is not required.

Original lecturer-supplied photos and GIFs are in assets. Added images show a load-cell cutaway, a four-gauge load-cell arrangement, and bending-beam tension/compression. Supplied image labels and colour conventions are explained in their captions where they differ from the teaching schematics.

Part 5 uses A at the left midpoint, B at the right, and Vout = VB − VA. Its active quarter gauge is R4, half gauges are R3/R4, and full-bridge tension gauges are R1/R4. Other circuits retain their explicitly marked measurement-lead conventions.

## Run and publish

Open index.html or serve this directory with `python -m http.server 4173`.

Extract the complete website ZIP. Upload all extracted files and the assets folder beside index.html in the repository root. Select Settings → Pages → GitHub Actions; the included .github/workflows/pages.yml deploys the complete package.

Do not upload only the HTML/JS files or flatten the assets directory. The workflow names every runtime module and copies assets recursively. Parts 6/7 are not included in its copy list.

Notes and completion status are stored only in this browser. They are not submitted to the lecturer. Existing lab/review completion is preserved when removing the two lesson tabs. The practical provides local CSV export and explicitly simulated sample data.

Technical reading: https://www.ni.com/en/shop/data-acquisition/sensor-fundamentals/measuring-strain-with-strain-gages.html
GitHub Pages workflow documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Optional video references and strain-gauge photographs

Three additional lecturer-supplied strain-gauge images appear beside the construction notes. The existing lesson text is retained. Every current lesson part, the practical and final review now has a separate optional YouTube-reference panel, with creator attribution and source links. Videos use a click-to-load youtube-nocookie.com player plus a direct YouTube fallback; playback depends on internet access and creator availability. No videos are downloaded or redistributed. Future unreleased topics are unchanged.

Include video-references.js and all assets when uploading the package.
