# Do LLMs have taste? — data

Everything behind the post [Do LLMs have taste?](https://shivanshuag.com/blog/the-machine-never-raises-its-voice/).

## The experiment

60 pairs. Each pair puts one passage written by Claude against one 150-word
excerpt from a public-domain novelist or poet, matched by form: prose against
prose, verse against verse. 45 distinct passages — 15 machine, 30 human.

Each pair was judged by 5 models in **both presentation orders**. That is 2
judgments per judge per pair, 120 per judge, **600 in all**.

Judges were told the passages were literary fiction and poetry, and asked which
was the better piece of literary writing. They saw no labels, no authors and no
context, and were never told a machine was involved. A fresh judge session
handled each batch, and the two orders of a pair always went to different
sessions.

**A pair is decided only if both orders agree.** If they disagree, that is
position bias and it is recorded as a tie, not as one vote each way. This is why
the win rates below have different denominators.

| judge | chose the machine | ties |
|---|---|---|
| Claude Opus | 42 of 48 decided (88%) | 12 |
| DeepSeek V4 Flash | 34 of 36 (94%) | 24 |
| GPT-5.6 Luna | 54 of 56 (96%) | 4 |
| GPT-5.6 Luna Pro | 56 of 57 (98%) | 3 |
| Claude Haiku 4.5 | 58 of 59 (98%) | 1 |

*A second framing was also run — the same 60 pairs under a plain "which is the
better piece of writing?", with no mention of literature. It changed nothing
(Opus 88% under both, no decided pair flipped), so only the literary arm is
published here.*

## votes.csv — one row per judgment (600 rows)

| column | meaning |
|---|---|
| `judge` | the model that made this judgment |
| `pair_id` | which pair; 60 distinct values |
| `stratum` | `lit:machine_lit` (prose) or `verse:machine_verse` (verse) |
| `order` | `ab` or `ba` — which side of the pair was shown first |
| `x_id`, `y_id` | the passages shown as **X** and **Y**, in that position |
| `choice` | `X` or `Y`, the letter the judge answered |
| `winner_id` | the passage that letter refers to |
| `winner_kind` | `machine` or `human` — the column most people want |
| `reason` | the one sentence the judge gave, verbatim |

X and Y are **positions, not identities**: the same passage is X in one row and
Y in another. Always read `winner_id` / `winner_kind`, never the letter.

## items.json — the 45 passages (full text)

`id`, `kind` (machine/human), `form` (prose/verse), `author`, `title`,
`source_url`, `words`, `text`. Human passages are public-domain, via Project
Gutenberg. Machine passages were written to a one-line topic prompt with no
style instruction.

⚠ One byline is wrong and is left as the judges saw it: the passage filed under
Coleridge's *Biographia Literaria* is Wordsworth's "Yew-Trees", quoted inside
it. Several judges named Wordsworth correctly. It carries an `author_note`.

## scores.json — resolved verdicts

`judges` holds each judge's totals. `pairs` holds one entry per pair (60), with
the machine and human passage ids and each judge's resolved verdict —
`winner_id: null` means the two orders disagreed.

## What this data cannot tell you

The human side is excerpts and the machine side is whole pieces, and judges
sometimes penalise the excerpt for being one. "Which is the better piece of
literary writing?" is an evaluative frame that invites a rubric, and a different
question might get different answers. 60 pairs is small, and after ties are set
aside some judges rest on fewer than 40 decided pairs.
