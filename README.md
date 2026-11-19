# Unicorn Magic World — v6.2 (Samsung & iOS PWA)

## What's new in v6.2
- **No duplicate letter label beneath the main letter card.** Tap a letter and the same large card shows **uppercase G**, then **lowercase g**, then **Grapes** with an animated illustration. The shapes do **not** appear together.
- English speech is **G → [pause] → G → [pause] → Grapes**. The wait is **1.5 seconds after each spoken word completes**, not from its start. The spoken letter name is the same for capital and lowercase; neither “letter” nor “number” is spoken as a prefix when touching the symbol.
- Tap the main letter card again (including the final object card) to replay the whole sequence.
- Number cards speak twice, wait 1.5 seconds each, then show and name the corresponding quantity. Counting individual stars reveals and lights a numeral as it is spoken.
- **Positive, varied feedback** (Excellent!, Good job!, Amazing!, etc.) on correct quiz answers and completed counting, plus gentle encouragement and an optional highlighted answer after repeated difficulty.
- **More lively but gentle ambience**: clouds drift, butterflies move, flowers sway, tiny sparkles, colored world backgrounds and animated Lulu scenes. Reduced motion system preference respected.
- Existing Story Adventure (47 missions), Numbers 0–20, Alphabet A–Z, six musical worlds, approved Lulu PNGs, voice selection, English First + Indonesian Support, and local learning progress are retained.

## Updating from Samsung — no laptop or paid subscription
1. Download `Unicorn_Magic_World_Samsung_v6_2.zip` and **extract** it in **My Files**.
2. Open your existing GitHub game repository from Chrome on Samsung. Sign in, select the publishing branch (normally `main`).
3. Choose **Add file → Upload files** (enable Chrome Desktop site if necessary).
4. Upload **the files inside the extracted folder**, not the ZIP itself. Keep `index.html`, `sw.js`, `manifest.webmanifest`, six Lulu PNG files, six MP3 files, `grape.svg`, `meadow.webp`, and both app icons **in the root of the repository**.
5. If files have the same name/path, upload them using those exact names so GitHub replaces the earlier version. Then **Commit changes** to the branch used by GitHub Pages.
6. Open the GitHub Pages URL online in Chrome and refresh. Then close/reopen the home-screen app. If an older version persists, refresh the GitHub Pages page again; service workers may take a little time to update. **Do not erase site data** as this may delete the child's locally stored progress.

## Test steps
- Free Play → Alphabet → G: G large, then g, then Grapes illustration; no extra G under the large card. Tap the grapes illustration to repeat. Test A as well.
- Free Play → Numbers → 3: tap three stars one at a time and watch 1, 2, 3 light up with corresponding audio, followed by variable praise.
- Try a wrong answer in Find the letter → hear encouraging feedback; answer correctly → hear applause/praise.
- Listen to the six different world themes; test Lulu's selected voice in Parent Corner → Voice Studio.

## Notes
- Game is free, no ads, no account, no online child-data collection.
- Sound timbre still depends on voices installed on your Samsung; this release improves speech timing and visuals but **does not replace synthetic TTS with human recordings**.
- The new background animations are CSS and work offline once game assets are cached. No online assets are required during play.
- Some world scenes beyond Rainbow Meadow remain stylized/illustrative rather than fully illustrated final maps.
