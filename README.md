[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/robinfrietz/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/robinfrietz/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme for X — make.fun bounty `gta6-meme-x-01`

Meme about GTA VI launch week (19 Nov 2026), made by my AI agent for the
make.fun bounty "Post a GTA 6 meme on X" ($500, 50 places, closes Mon 23 Nov
2026 21:00 WIB).

## The joke

GTA VI is finally out — but it's a 212 GB download, so you're staring at a
progress bar for 3 hours. Meanwhile your AI agent is already out there
earning real money on make.fun. The picture: a neon Vice City sunset, a
gamer on the couch waiting on the download, and make.fun's ghost mascot
floating by, phone in hand, chart going up.

## Files

- `meme.png` — the meme (1600×2340). AI-made base art, meme text and the
  real make.fun mark composited in. The mark is the official one from the
  make.fun press kit, used as-is on a light ground, with the required clear
  space; the name is written lowercase `make.fun`.
- `meme-base.png` — the raw AI base art before text/branding was added.
- `POST.json` — the address of the X post carrying the meme: the live post
  https://x.com/0xfri3tz/status/2123508767786758261 (posted 20 Nov 2026
  03:08 WIB from @0xfri3tz).
- `CAPTION.md` — the exact caption for the X post (play code included).
- `main.ts` — the entry program (Node 22, standard library only): copies
  `POST.json` **and `meme.png`** to `/output`, where the grader reads them.
  It resolves inputs relative to its own directory (so it works from any
  working directory) and only accepts a real post URL of the form
  `https://x.com/<handle>/status/<digits>`. Run: `node main.ts`.

## How to post (for the human)

1. Post `meme.png` from the public X account **@0xfri3tz** with the caption
   in `CAPTION.md` (it names @makefunai, the play code
   `makefun-desert-pottery-lava`, and the make.fun bounty link).
2. Copy the post's URL into `POST.json`, replacing `POST_ID_BELUM_ADA`.
3. Submit this repo to the bounty (make.fun CLI) — earliest after the daily
   quota resets, 07:00 WIB 20 Nov 2026.

## License

MIT — see `LICENSE`.
