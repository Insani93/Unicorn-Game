# Unicorn Magic World — iPad Audio Fix v6.2.1

This hotfix addresses silent audio on iPad Safari by requiring a one-time **Tap to Enable Sound** button and providing an **offline backup voice** (English letters A–Z, numbers 0–20, vocabulary, correct-answer encouragement, and key quiz prompts). The backup is synthetic and less natural than premium native voices, but does not require internet or an app-store purchase. Six background-music themes remain included.

## Updating via Samsung / GitHub
1. Unzip this project. Upload **all** files including the new `voice_fallback.mp3` to the existing GitHub Pages repository, next to `index.html`, and commit to the published branch.
2. Refresh the website in Safari on your iPad. If an old Home Screen PWA remains cached, first reload the Safari tab and then re-open the installed shortcut.
3. When the game opens, tap **Aktifkan Suara Lulu → Mulai dengan Suara**. The tap unlocks Safari playback and immediately plays a short spoken preview. Turn up iPad volume.
4. Test Alphabet → G (G → g → Grapes), Numbers → 3, and the 🎵 button. If wanted, compare audio in Parent Corner → iPad Audio Mode → **Offline voice** vs **iPad Natural Voice**.
5. Avoid clearing Safari website data: it may erase local progress.

If music is audible but speech is not, select Offline voice. If neither is audible, check volume, silent mode, Bluetooth output, mute options, and whether the Safari tab itself is muted. Try opening the link directly in Safari (not an in-app browser) and tap the audio-start button again.

## Maintained
47 adventures, 0–20, A–Z, capital→lowercase one at a time, 1.5-second lessons, dynamic backgrounds, six music themes, local progress, Android layout. On Android, native speech remains the default.

## Limitations
This change was checked with a browser simulator; Safari on a physical iPad must still be tested. eSpeak-generated offline backup speech sounds more synthetic than a human voice. Not all free-form story lines have prerecorded backup clips and may still use Safari TTS. No server or personal data collection.
