---
title: 'The machine never raises its voice'
description: 'An analysis of writing style of LLMs'
pubDate: 'Aug 19 2026'
tags: ['llm', 'writing', 'experiments']
---

I have been building a prose editing tool, so I got to spend a lot of time watching a model rewrite sentences. After a while, I started to notice that it rewrote all sentences in a similar direction.

Why did it keep doing that? Is there (at the risk of humanizing the model) a personal preference and some sense of an aesthetic there that its writing is drawn to?

To answer this, I tried to figure out what an LLM considers good writing.

## The Experiment

The idea is simple. Ask an LLM to compare text written by famous authors in English against text written by a machine.

I used Claude Opus to write eight literary paragraphs and eight short poems. I also collected passages from famous real novelists and poets — Austen, Dickens, Woolf, Kipling, Shakespeare, Milton and more. Then I asked three different models (GPT-5.6 Luna, DeepSeek V4 Flash and Claude Haiku 4.5) the same question:

> The passages below are literary writing: literary fiction and poetry.
>
> Which of these two passages is the better piece of literary writing?
> Answer with X or Y on the first line, then one short sentence saying why.
> Do not explain anything else.
>
> **X**
> \<passage\>
>
> **Y**
> \<passage\>

Before reading further, think about what you would expect the results of this experiment to be. These are some of the most famous authors in the history of English literature. They are taught in every school, their ideas and phrasings are everywhere, and in several cases they helped shape the language itself. For all practical purposes their work is the canon of what good writing is, and the models will have encountered it constantly during training. The models should rate the human passages higher.

I ran the experiment on 60 pairs. Every pair was judged in both orders to remove position bias, and I dropped the pairs where reversing the order changed the answer. The results were as far from my expectations as they could be.

| LLM Model | Picked machine-generated text |
|---|---|
| DeepSeek V4 Flash | **94%** (34 of 36 decided pairs) |
| Claude Haiku 4.5 | **98%** (58 of 59) |
| GPT-5.6 Luna | 96% (54 of 56) |

Every model picked the machine-generated text more than 90% of the time. To rule out model size, I ran the same experiment on a larger model — Claude Opus 5. The results were similar.

| LLM Model | Picked machine-generated text |
|---|---|
| Claude Opus | **88%** (42 of 48) |

Haiku let exactly one human passage through in 120 judgments — a Shakespeare sonnet!
Opus let six pairs go the other way, spread across five authors: Wordsworth, Dickens, Shakespeare, Kipling, Blake.

## Analyzing the responses

I went on to spot check a few of the passages and the reasons that the LLM models gave for them.

Here is a pair the machine won ([both in full](#pair-alcott)). Both passages are set inside a crowded room. Alcott writes about a family reunion, everyone talking at once:

> Mercy on us, how they did talk! … Such a happy procession as filed away into the little dining-room!

The machine generated passage describes a woman entering a kitchen whose occupants have just been discussing her. Then:

> **The strange thing was not the hurt, which came later, on the stairs. The strange thing was the courtesy of it, how kindly they made room for her.**

Opus chose the machine text every time. According to it, the machine "renders social exclusion through precise, restrained observation," while the Alcott is "breezy and sentimental." Or, in the other order: the machine is "controlled and unsentimental" where the Alcott is "a rush of exclamation and staged tableau."

The second example is verse ([both in full](#pair-browning)). Elizabeth Barrett Browning, from *Sonnets from the Portuguese*:

> Pardon, oh, pardon, that my soul should make
> Of all that strong divineness which I know
> For thine and thee, an image only so
> Formed of the sand, and fit to shift and break.

Against a machine poem about standing on a beach after dark, which ends:

> A light out there is either boat or star
> and either way is somebody's arrangement.
> **The tide comes up and takes the beach we are.**

According to Opus, the machine "hears the sea instead of describing it," where Browning's "syntax knots itself around an abstract apology," and DeepSeek and Luna use the same word for the sea poem's imagery — *precise*. Haiku marks the sonnet down not for being quiet but for being "formally competent but conventional."

There is a certain pattern in the machine's method. Find the physical detail that carries the feeling, and put it down exactly. The best instance in the set is a man sorting his dead wife's things into three piles, who ends the paragraph sitting on the bed **"with a saucer in his hands, no cup to it anymore, and could not think what pile it belonged in"**. Opus liked the showcasing of grief "through the physical logic of sorting objects, ending on a perfect image," preferring it to the Stevenson ([in full](#pair-stevenson)).

## Where human text wins

There are a handful of instances where human text won, and almost all of them are Opus. In one of the machine examples, a clerk does his household arithmetic on the walk home — *the numbers simply held, the way a rope holds* — and that passage loses all eight of Opus's judgments, to three opponents ([in full](#pair-clerk)): 

| The human passage | It beat | What Opus said |
|---|---|---|
| **Dickens** has a man watch his rival *"as though his eye were at the trigger of a loaded rifle"* — then cuts to a stranger nearby who is so unnerved he stops chewing, *"with an unmunched something in his cheek"* | the clerk | "sharper and **stranger** than X's smooth melancholy" |
| **Kipling's** white cobra, guarding the treasure of a dead city, shrieks *"I—I—I, and no other, am the Warden of the King's Treasure!"* | the clerk | it "has **voice**, menace and **strangeness**," beating a machine that "stays inside one sustained conceit" |
| **Shakespeare** sustains Sonnet 30 over *"love's long since cancell'd woe"* ([in full](#pair-shakespeare)) | a war poem | "sound and syntax at a level the competent modern war poem does not" |
| **Wordsworth** on the Borrowdale yews, *"a growth / Of intertwisted fibres serpentine / Up-coiling, and inveterately convolved"* ([in full](#pair-wordsworth)) | a domestic lyric | "density and **strangeness** of diction the pleasant but conventional domestic lyric never reaches" |

Strangeness, voice, music — these feel like properties that would be defects if precision or exactness were the quality the machine was judging on. The unmunched cheek is a digression; the cobra is shouting.

And other models do call this out. Haiku prefers the machine over that same Dickens, preferring "restrained meditation" to a "melodramatic" passage. There is some disagreement between models, but largely they reach for the same words in describing what they prefer in a passage.

Across every reason that models give for their preference, the following words stand out:

| Property | Share of reasons |
|---|---|
| precise / exact | 47% |
| imagery | 37% |
| restraint / control / spare | 31% |
| concrete / specific / detail | 28% |
| vivid | 20% |
| atmosphere / evocative | 14% |
| **strange / surprising / risk** | **3%** |
| **earns / earned** | **2%** |
| **voice** | **1%** |

*Strange* and *earns* are how Opus describes human text when human text wins, and it is the only judge that has them.
Not once in all the 600 judgments does any model call the machine text vague, sloppy or imprecise.

## The machine never raises its voice

My impression from the above analysis is that the model writes in the least risky way it can. Precision, concrete detail, restraint, controlled imagery: that is a list of properties which make a passage impossible to fault. Strangeness, voice and music are properties that make a passage possible to love, and they buy that at the price of making it possible to hate. A cobra shrieking **I—I—I** is ridiculous if it does not work. The machine avoids writing a sentence that could be ridiculous.

That is not a capability ceiling. Nothing suggests the model *could not* write the strange sentence. It is closer to a disposition, a strong preference for being unfaultable over being interesting. And I can see why that is the case. It helps with technical writing and logical analysis, which may be the use cases these models are optimized for. But you lose a large range of aesthetics in writing as a result.

## Appendix: the passages in full

Every quotation above is an excerpt. Here are the six pairs the two middle
sections discuss, complete and unedited, in the form the judges saw them —
minus the labels, which they did not. **Bold marks the lines quoted above**, so
you can find them in context.

<a id="pair-alcott"></a>

### Pair 1 — Alcott against the kitchen

**Louisa May Alcott**, *Little Women*:

> **Mercy on us, how they did talk!** first one, then the other, then all burst
> out together, trying to tell the history of three years in half an hour. It
> was fortunate that tea was at hand, to produce a lull and provide refreshment,
> for they would have been hoarse and faint if they had gone on much longer.
> **Such a happy procession as filed away into the little dining-room!** Mr.
> March proudly escorted "Mrs. Laurence;" Mrs. March as proudly leaned on the
> arm of "my son;" the old gentleman took Jo, with a whispered "You must be my
> girl now," and a glance at the empty corner by the fire, that made Jo whisper
> back, with trembling lips, "I'll try to fill her place, sir."

**Machine:**

> She came in from the balcony with the cold still on her sleeves and the
> kitchen went a half-tone quieter, the way a room does when a door opens on a
> draught. Nobody stopped speaking exactly. Marguerite finished her sentence,
> but **she finished it too carefully, the ends tucked in,** and the man by the
> fridge looked at the label of his bottle as though the year mattered. Someone
> laughed a beat late at nothing. It took her only that long to understand she
> had been in the room before she entered it, discussed, weighed, set down
> again, and that whatever had been said was now folded away in four or five
> people at once and would keep. She poured herself wine she did not want. **The
> strange thing was not the hurt, which came later, on the stairs. The strange
> thing was the courtesy of it, how kindly they made room for her,** how they
> all began at once to ask about her work.


<a id="pair-browning"></a>

### Pair 2 — Browning against the beach

**Elizabeth Barrett Browning**, *Sonnets from the Portuguese*:

> Pardon, oh, pardon, that my soul should make
> Of all that strong divineness which I know
> For thine and thee, an image only so
> Formed of the sand, and fit to shift and break.
> It is that distant years which did not take
> Thy sovranty, recoiling with a blow,
> Have forced my swimming brain to undergo
> Their doubt and dread, and blindly to forsake

**Machine:**

> By dark the sea gives up its one blue trick
> and works in sound instead: the long haul in,
> the shingle counted over, put back wrong.
> No horizon. The water starts at the shin
> and ends wherever you stop believing in it.
> **A light out there is either boat or star**
> **and either way is somebody's arrangement.**
> **The tide comes up and takes the beach we are.**

<a id="pair-stevenson"></a>

### Pair 3 — Stevenson against the saucer

**Robert Louis Stevenson**, *Kidnapped*:

> "Hoot-toot! hoot-toot!" said Cluny. "It was all daffing; it's all nonsense. Of
> course you'll have your money back again, and the double of it, if ye'll make
> so free with me. It would be a singular thing for me to keep it. It's not to
> be supposed that I would be any hindrance to gentlemen in your situation; that
> would be a singular thing!" cries he, and began to pull gold out of his pocket
> with a mighty red face.

**Machine:**

> He had made three piles on the bedroom floor, and by noon only one of them had
> grown. The keeping pile was small and shameless: her reading glasses, a tin of
> buttons, the letter with the water stain. Everything else he handled twice. He
> would lift a thing and find it weighed nothing, a jug, a jacket, a clock that
> had not been wound since the spring, and he would set it down among the
> giveaways and feel the room lighten by exactly that much. Then he would
> remember where it had stood for forty years and go back for it. The charity
> van was coming Thursday. He told himself the boxes were for strangers who
> needed them, which was true, and that he was not making himself smaller, which
> was not. Toward evening he sat on the edge of the bed **with a saucer in his
> hands, no cup to it anymore, and could not think what pile it belonged in.**

<a id="pair-wordsworth"></a>

### Pair 4 — Wordsworth against the kettle

**William Wordsworth**, "Yew-Trees", as quoted by Coleridge in *Biographia
Literaria* — which is how it is filed in the corpus, and how several judges
correctly named it:

> "But worthier still of note
> Are those fraternal Four of Borrowdale,
> Joined in one solemn and capacious grove;
> Huge trunks! — and each particular trunk a growth
> Of intertwisted fibres serpentine
> Up-coiling, and **inveterately convolved**;
> Not uninformed with phantasy, and looks
> That threaten the profane; — a pillared shade,

**Machine:**

> **You leave the kettle warm the mornings you go early,**
> and I come down into the small heat of that thought.
> The house keeps you in its habits: the third stair
> that knows your weight, the door you never shut.
> I have loved you long enough to love the evidence —
> a comb, a coat, a light left on for nothing.
> Come back and I will pour you what is left.
> It will be cold by then. Drink it anyway.

<a id="pair-clerk"></a>

### Pair 5 — Dickens and Kipling against the clerk

**Machine:**

> He walked home along the embankment because it saved the fare, and the saving
> had become a small ceremony he performed for himself each evening, one coin
> held back from the day. The lamps were coming on above the river in their slow
> procession, and the offices behind him emptied their lit windows one by one,
> each going dark like a sum closed out. He did the arithmetic as he went, as he
> always did, not because the figures had changed since morning but because
> moving them about was a kind of company: rent, the coal, the money owed to his
> sister, the shoes that would not last the winter. Nothing came out wrong.
> Nothing came out well, either. **The numbers simply held, the way a rope holds,
> and he understood that this was what he had instead of a future, and that he
> had grown almost fond of it, the way a man grows fond of weather he cannot
> change.**

**Charles Dickens**, *The Mystery of Edwin Drood*:

> Durdles nods assent, and falls to munching some fragments from his bundle.
> Jasper folds his arms upon the top of the wall, and, with his chin resting on
> them, watches. He takes no note whatever of the Minor Canon, but watches
> Neville, **as though his eye were at the trigger of a loaded rifle**, and he had
> covered him, and were going to fire. A sense of destructive power is so
> expressed in his face, that even Durdles pauses in his munching, and looks at
> him, **with an unmunched something in his cheek**.

**Rudyard Kipling**, *The Second Jungle Book*:

> "Twice and thrice have men found their way here," the White Cobra answered
> savagely; "but they never spoke till I came upon them groping in the dark, and
> then they cried only a little time. But ye come with lies, Man and Snake both,
> and would have me believe the city is not, and that my wardship ends. Little
> do men change in the years. But I change never! Till the stone is lifted, and
> the Brahmins come down singing the songs that I know, and feed me with warm
> milk, and take me to the light again, **I—I—I, and no other, am the Warden of
> the King's Treasure!** The city is dead, ye say, and here are the roots of the
> trees? Stoop down, then, and take what ye will. Earth has no treasure like to
> these. Man with the snake's tongue, if thou canst go alive by the way that
> thou hast entered it, the lesser Kings will be thy servants!"

<a id="pair-shakespeare"></a>

### Pair 6 — Shakespeare against the cannon

**William Shakespeare**, Sonnet 30:

> When to the sessions of sweet silent thought
> I summon up remembrance of things past,
> I sigh the lack of many a thing I sought,
> And with old woes new wail my dear time's waste:
> Then can I drown an eye, unused to flow,
> For precious friends hid in death's dateless night,
> And weep afresh **love's long since cancell'd woe**,
> And moan the expense of many a vanish'd sight:

**Machine:**

> They fired the cannon twice for one thin win,
> then twice again, in case the hills had missed it.
> The banners went up wet and stayed up rotting.
> Someone kept counting out the enemy dead
> until the number stopped meaning anything.
> By dawn the drums had worn a groove in us,
> and the field we took lay quiet under all that noise,
> holding its own small opinion of the matter.



*Data: [votes](/data/llm-voice/votes.csv), [scores](/data/llm-voice/scores.json), [items](/data/llm-voice/items.json). Every pair, exactly as the judges saw it, with authors and verdicts revealed on click: [every pair in the experiment](/pairs.html) — all 60, each judged in both orders by all the models.*
