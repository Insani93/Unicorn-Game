# Unicorn Magic World — v6.1 · Smooth Tap, Pop & Speak

## What changed
- Tap a letter to hear **the letter name**, wait **two seconds after the speech ends**, hear the same letter again, wait another **two seconds**, then hear **its English object word**. Example: **G → 2 seconds → G → 2 seconds → Grape**.
- The letter grows, changes color and glows. The object appears with a soft bounce when its name is spoken.
- Tap a number: **three → pause → three → pause → three stars**. Zero ends with **Empty basket**.
- No “Letter” or “Number” prefix is spoken by the touch-to-learn interaction.
- All A–Z / 0–20 Free Play items and Story Adventure introduction stages use the new sequence. Quiz feedback remains brief.
- A new hand-drawn grapes illustration (`grape.svg`) appears for G.
- **Voice Studio**, English First + Indonesian Support, six original world music tracks, the approved Lulu art and all 47 Story Adventure missions are retained.
- A second tap restarts the teaching sequence; navigating away cancels old speech/timers so lines don't overlap.

## Important audio note
- The game still uses **Samsung/Chrome Text-to-Speech**, not recorded human speech. Pacing and animation are improved, but how natural a voice sounds still depends on voices installed on the Samsung.
- During the 2-second pauses, the app should not play another word. Wait through the sequence to hear the object's name.
- Choose a voice under Parent Corner > Voice Studio; test the English voices. If very unnatural, a later revision could replace TTS with *licensed / self-recorded* speech audio clips.
- On Android, TTS completion callbacks can vary by device; there is a conservative fallback if they aren't delivered.

## How to update on Samsung
1. Download this ZIP and extract it using My Files > Downloads.
2. Open your existing GitHub repository in Samsung Chrome. Use Desktop site if GitHub's upload controls aren't visible.
3. From the repository root: **Add file → Upload files**. Select **all 21 files inside the ZIP**, not the ZIP file itself.
4. Keep `index.html`, `sw.js`, `grape.svg`, MP3s, icons and Lulu images in the **same root directory**. File names must not be changed.
5. Commit directly to `main` (or the branch configured for GitHub Pages) to overwrite the existing files.
6. Open the GitHub Pages URL online in Chrome and reload. Then relaunch the home-screen game; PWA cache has a new version.
7. Test **Free Play → Magic Alphabet → G**. You should hear **G, G, Grape** separated by 2-second pauses, with letter and grape animations.
8. Test **Free Play → Magic Numbers → 3**. You should hear **three, three, three stars**.

Do not clear site data: this can delete locally stored learning progress.

## Limitations
Animations have a reduced-motion accessibility fallback. Actual TTS behavior and audio smoothness must be tested on a physical Samsung phone. Six world music themes are included for offline caching after a successful initial load. No ads, account, analytics or subscription.
