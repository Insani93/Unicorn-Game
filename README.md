# Unicorn Magic World v6.2 — iPad + Samsung edition

This is the **same full game as v6.2**, adjusted for iPad Safari and PWA Home Screen use. It retains six Adventure worlds, 47 missions, numbers 0–20, letters A–Z (capital followed by lowercase, shown one at a time), 1.5-second lesson pauses, six original musical themes, Lulu characters, supportive feedback, English First + Indonesian help and local progress.

## What changed for iPad
- Responsive **tablet layout** for portrait and landscape, using the full available iPad screen. Phone layout remains compact.
- Larger touch targets, 2–3-column navigation grids and 6–7-column alphabet/number grids on tablets.
- Home and Rainbow Meadow use side-by-side panels in iPad landscape; stacked layouts in portrait.
- iPad Home Screen icon, standalone Apple web-app metadata, safe-area spacing and both orientations supported.
- Apple touch devices start their first letter/number speech request from a **direct tap**, not after an artificial delay.
- Service worker cache bumped so a previous install can update without wiping learning progress.

## Install / update with the same GitHub Pages repository
1. On Samsung (or a computer), extract **Unicorn_Magic_World_iPad_Android_v6_2.zip**.
2. Open your existing GitHub repository, choose **Add file → Upload files**, and select **all the extracted files**, not the ZIP. Keep them in the same folder as the previous `index.html` (usually repository root), with exact names. This **replaces matching files** and adds the new `apple-touch-icon.png`.
3. Commit directly to the same publishing branch (usually `main`). GitHub Pages will deploy the update; no new repository or fee is needed.
4. On **iPad**, open your **existing GitHub Pages web address** in **Safari**. Once the new version appears, tap Safari's Share control → **Add to Home Screen**, switch on **Open as Web App** if offered, and tap **Add**.
5. Open the new home-screen icon, tap **Play Adventure** or **Free Play** to start the music and voice. If an old copy was already installed on the iPad, reopen the site in Safari and refresh first. Don't clear website data just to refresh a build.
6. On Samsung, update is the same as before: reopen your installed game after GitHub Pages deploys.

## Test on iPad
- Turn iPad to **portrait** and **landscape**. Home, World Map and Rainbow Meadow should adapt to the wider display and remain usable without horizontal scrolling.
- Free Play → Alphabet → G → tap to hear **G → g → Grapes**, with the two letter forms displayed **one after the other**.
- Free Play → Numbers → 3 → tap stars to count, and try a correct/incorrect quiz to hear supportive feedback.
- Try world music and Parent Corner → Voice Studio. Safari can offer different system voices from Samsung; some may not be available offline. If Safari refuses to begin speech until a touch, tap the large letter/number or the 🔊 button again.
- If music is silent, check the iPad volume and use the 🎵 control after opening the game; iPad Safari generally requires a user gesture before playing audio.

## Important limitations
- This is a **free web app (PWA)**, not an App Store `.ipa` file. It works through Safari's Add to Home Screen feature.
- **Samsung and iPad do not share local progress automatically**; each device stores its own data unless sync is added later.
- Audio uses built-in browser/device speech synthesis, not a human voice recording. Exact TTS timing, voices and simultaneous background music can vary by iPadOS version, especially if Safari interrupts background music during speech.
- Source lives on GitHub Pages. A public GitHub Pages repository is not private; do not upload personal information about children.
- All music and image assets are local and can be cached for offline play after opening successfully online.
