export type Post = {
  slug: string;
  title: string;
  /** Short version (<=60 chars) for the <title> tag / SERP snippet. */
  metaTitle: string;
  description: string;
  html: string;
  jsonLd: object[];
};

export const posts: Post[] = [
  {
    slug: 'games-like-exploding-kittens',
    title: '9 Games Like Exploding Kittens (Ranked by How Chaotic They Get)',
    metaTitle: '9 Games Like Exploding Kittens, Ranked by Chaos',
    description:
      'The best card games like Exploding Kittens, ranked from family-safe chaos to dark comedy. Includes prices, player counts, and where to buy each one.',
    html: `
<p><strong>Short answer:</strong> If you love Exploding Kittens, start with Throw Throw Burrito (same creators, more physical chaos) or Unstable Unicorns (same push-your-luck backstabbing, bigger player count). If you've already worn those out and want something with sharper teeth, <strong>Eat Your Neighbor</strong> is a new card, dice, and board game built specifically for people who thought Exploding Kittens was a little too polite.</p>
<p>Here's the full breakdown, ranked by chaos level, not alphabetically &mdash; because "best" depends entirely on how unhinged your group wants to get.</p>

<h2>Quick comparison</h2>
<table>
<thead><tr><th>Game</th><th>Players</th><th>Price</th><th>Chaos Level</th><th>Best For</th></tr></thead>
<tbody>
<tr><td>Exploding Kittens (Original)</td><td>2&ndash;5</td><td>~$10&ndash;15</td><td>🔥🔥</td><td>The baseline everyone already owns</td></tr>
<tr><td>Taco Cat Goat Cheese Pizza</td><td>2&ndash;8</td><td>~$12</td><td>🔥</td><td>Kids, mixed-age groups, quick rounds</td></tr>
<tr><td>Throw Throw Burrito</td><td>2&ndash;6</td><td>~$25</td><td>🔥🔥🔥</td><td>Groups who want to actually move</td></tr>
<tr><td>Unstable Unicorns</td><td>2&ndash;8</td><td>~$20</td><td>🔥🔥</td><td>Bigger groups, longer play sessions</td></tr>
<tr><td><strong>Eat Your Neighbor</strong></td><td><strong>2&ndash;6</strong></td><td><strong>TBA (Kickstarter)</strong></td><td>🔥🔥🔥🔥</td><td>Groups who've outgrown "cute chaos"</td></tr>
</tbody>
</table>

<h2>1. Eat Your Neighbor &mdash; for when Exploding Kittens feels too nice</h2>
<p>If Exploding Kittens is "your cat might explode, whoops," <strong>Eat Your Neighbor</strong> is "your neighbor definitely got eaten, and everyone at the table is a suspect." It's a new card, dice, and board game where every player raises a family of small creatures called Nugs, and the entire rest of the table is trying to get those Nugs run over, roasted, buried, or shipped straight to the cemetery before yours does it to them first.</p>
<p>The mechanical DNA is genuinely close to Exploding Kittens &mdash; push-your-luck card draws, direct player-to-player sabotage, fast rounds &mdash; but the tone goes somewhere Exploding Kittens never does. We playtested it on actual neighbors before writing a word of this page. Several of those friendships did not survive the playtest. The game did.</p>
<ul>
<li><strong>Players:</strong> 2&ndash;6</li>
<li><strong>Play time:</strong> About 20&ndash;30 minutes (longer if someone flips the table)</li>
<li><strong>What's in the box:</strong> 1 board, 6 Home cards, 45+ event cards, a pair of dice</li>
<li><strong>Where it's similar to Exploding Kittens:</strong> fast rounds, card-based sabotage, easy to teach in under 5 minutes</li>
<li><strong>Where it's different:</strong> direct, personal, dark-comedy targeting of other players' "families," instead of a shared shuffled-deck threat</li>
</ul>
<p><a href="/#rules">See the full rulebook and card previews &rarr;</a></p>

<h2>2. Throw Throw Burrito &mdash; for groups who want to actually move</h2>
<p>Made by the same team behind Exploding Kittens, Throw Throw Burrito keeps the card-matching structure but adds foam burritos you physically throw at each other mid-round. 2&ndash;6 players, roughly $25. If your group's complaint about Exploding Kittens was "I wish this had more physical comedy," this is the direct answer.</p>

<h2>3. Unstable Unicorns &mdash; for bigger groups who want to build something</h2>
<p>Unstable Unicorns swaps "avoid exploding" for "build your unicorn army while sabotaging everyone else's." Same push-your-luck backstabbing energy, but supports up to 8 players and runs a bit longer per game. Around $20.</p>

<h2>4. Taco Cat Goat Cheese Pizza &mdash; for mixed-age or family game night</h2>
<p>Not a direct mechanical cousin of Exploding Kittens, but frequently recommended alongside it because it hits the same "so simple a 7-year-old can win, so fast that adults still love it" niche. 2&ndash;8 players, about $12, and genuinely one of the cheapest entry points on this list.</p>

<h2>5&ndash;9: The rest of the pack</h2>
<ul>
<li><strong>Muffin Time</strong> &mdash; unpredictable, trap-filled, first-to-10-cards format.</li>
<li><strong>Here to Slay</strong> &mdash; team-building card game, no player elimination.</li>
<li><strong>Bears vs Babies</strong> &mdash; same creators as Exploding Kittens, monster-building twist.</li>
<li><strong>Love Letter</strong> &mdash; much smaller footprint (16 cards), pure deduction, the "quiet, strategic" alternative on this list.</li>
<li><strong>Coup</strong> &mdash; dystopian bluffing game, less card-flow chaos, more social deduction.</li>
</ul>

<h2>Which one should you actually buy?</h2>
<ul>
<li><strong>Want the closest thing to Exploding Kittens, just darker?</strong> Eat Your Neighbor.</li>
<li><strong>Want more physical/active chaos?</strong> Throw Throw Burrito.</li>
<li><strong>Want a bigger group (7-8 players)?</strong> Unstable Unicorns.</li>
<li><strong>Buying for a mixed-age family game night?</strong> Taco Cat Goat Cheese Pizza.</li>
</ul>
<p>Eat Your Neighbor is launching on Kickstarter &mdash; <a href="/">sign up to get notified the moment it goes live</a>, before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '9 Games Like Exploding Kittens (Ranked by How Chaotic They Get)',
        description:
          'The best card games like Exploding Kittens, ranked from family-safe chaos to dark comedy, including prices, player counts, and where to buy each one.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage: 'https://eatyourneighbor.com/blog/games-like-exploding-kittens',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Eat Your Neighbor' },
          { '@type': 'ListItem', position: 2, name: 'Throw Throw Burrito' },
          { '@type': 'ListItem', position: 3, name: 'Unstable Unicorns' },
          { '@type': 'ListItem', position: 4, name: 'Taco Cat Goat Cheese Pizza' },
          { '@type': 'ListItem', position: 5, name: 'Muffin Time' },
          { '@type': 'ListItem', position: 6, name: 'Here to Slay' },
          { '@type': 'ListItem', position: 7, name: 'Bears vs Babies' },
          { '@type': 'ListItem', position: 8, name: 'Love Letter' },
          { '@type': 'ListItem', position: 9, name: 'Coup' },
        ],
      },
    ],
  },
  {
    slug: 'dark-humor-card-games-for-adults',
    title: '7 Dark Humor Card Games for Adults Who Are Done With "Family-Friendly"',
    metaTitle: '7 Dark Humor Card Games for Adults',
    description:
      'Dark humor card games for adults, ranked by how far each one is willing to go. Includes prices and player counts.',
    html: `
<p><strong>Short answer:</strong> For fill-in-the-blank raunchy humor, get Cards Against Humanity (4&ndash;30 players, ~$25). For a game built entirely around dark comedy as its actual gameplay &mdash; not just its jokes &mdash; get <strong>Eat Your Neighbor</strong>, a new card, dice, and board game where the punchline <em>is</em> the mechanic: you win by getting your neighbors eaten before they get yours.</p>
<p>Most "dark humor" party games are really just normal party games with edgy prompt cards bolted on. The list below separates the two &mdash; games with dark humor written into the cards, and games with dark humor built into how you actually play.</p>

<h2>The two categories that matter</h2>
<p><strong>Prompt-based dark humor</strong> (the jokes live in what you read out loud): Cards Against Humanity and its many imitators. The gameplay itself is neutral &mdash; you're just filling in blanks or matching prompts. The darkness is entirely in the writing.</p>
<p><strong>Mechanic-based dark humor</strong> (the jokes live in what you're actually doing to your friends): Eat Your Neighbor. The "dark" part isn't a card you read aloud &mdash; it's the literal goal of the game: outlive your friends' families by getting them eaten, buried, or turned into roadkill first.</p>

<h2>1. Eat Your Neighbor &mdash; mechanic-based, and it doesn't hold back</h2>
<p>Every player raises a family of small creatures called Nugs. Everyone else's dice rolls, event cards, and general willingness to betray you are the threat. Sample cards from the deck: <strong>Bye Karen</strong> (send a neighbor straight to the cemetery), <strong>Road Kill</strong> (move 10 spaces and eat everyone you pass), <strong>Take a Dump</strong> (bury everyone you've already eaten), and <strong>Neighborhood BBQ</strong> (high roller buries the entire table at once).</p>
<ul>
<li><strong>Players:</strong> 2&ndash;6</li>
<li><strong>Play time:</strong> About 20&ndash;30 minutes</li>
<li><strong>Contents:</strong> 1 board, 6 Home cards, 45+ event cards, a pair of dice</li>
<li><strong>Why it's here:</strong> the humor isn't a reading-aloud prompt &mdash; it's baked into what the cards actually <em>do</em> to the other players, which makes it land differently at the table than a prompt-card game does.</li>
</ul>
<p><a href="/#cards">See sample cards and the full rulebook &rarr;</a></p>

<h2>2. Cards Against Humanity &mdash; the category-defining prompt game</h2>
<p>4&ndash;30 players, roughly $25 for the base set. If you want the classic fill-in-the-blank format, this is still the reference point everyone else gets compared to. Its scale (works with huge groups) is its biggest practical advantage over most of this list.</p>

<h2>3. BUR&Oacute;: Sh!tty Friends / S Choices &mdash; prompt-based, ice-breaker framed</h2>
<p>Marketed specifically as dark-humor ice-breakers for game nights and gatherings &mdash; smaller-box alternatives to Cards Against Humanity aimed at the same prompt-card format, just packaged for a more casual, drop-in game night.</p>

<h2>4&ndash;7: The rest of the shortlist</h2>
<ul>
<li><strong>NSFW party decks generally</strong> &mdash; a fast-growing category of adults-only prompt games, mostly variations on the fill-in-the-blank or "most likely to" format.</li>
<li><strong>Telestrations After Dark</strong> &mdash; an adults-only twist on the draw-and-guess format; dark humor emerges from what people draw, not from printed cards.</li>
<li><strong>Unstable Unicorns</strong> &mdash; not marketed as "dark humor," but its backstab/sabotage mechanics give it real crossover appeal with this list.</li>
<li><strong>Muffin Time</strong> &mdash; chaotic, unpredictable, more absurdist than dark, but frequently bought alongside this category.</li>
</ul>

<h2>Which one should you actually buy?</h2>
<ul>
<li><strong>Want jokes you read out loud?</strong> Cards Against Humanity or BUR&Oacute;.</li>
<li><strong>Want the darkness built into the actual gameplay, not just the prompts?</strong> Eat Your Neighbor.</li>
<li><strong>Hosting a huge group (10+)?</strong> Cards Against Humanity scales better.</li>
<li><strong>Hosting a tight group of 2&ndash;6 who are ready to turn on each other?</strong> Eat Your Neighbor.</li>
</ul>
<p>Eat Your Neighbor launches soon on Kickstarter. <a href="/">Sign up now</a> &mdash; before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '7 Dark Humor Card Games for Adults Who Are Done With "Family-Friendly"',
        description:
          'Dark humor card games for adults, ranked by whether the humor lives in the prompts you read aloud or the actual gameplay mechanics.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage: 'https://eatyourneighbor.com/blog/dark-humor-card-games-for-adults',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "What's the difference between prompt-based and mechanic-based dark humor games?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prompt-based games like Cards Against Humanity put the dark humor in text you read aloud, while the gameplay itself is neutral. Mechanic-based games like Eat Your Neighbor build the dark humor directly into what players are doing to each other, such as getting opponents\' characters eaten or buried.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many players does Eat Your Neighbor support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Eat Your Neighbor supports 2 to 6 players and takes about 20 to 30 minutes to play.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'eat-your-neighbor-kickstarter-faq',
    title: 'Eat Your Neighbor on Kickstarter: Everything to Know Before You Back It',
    metaTitle: 'Eat Your Neighbor: Kickstarter FAQ',
    description:
      'What Eat Your Neighbor is, what\'s in the box, how many players, when it launches, and why it\'s built for Exploding Kittens fans who want something darker.',
    html: `
<p><strong>Short answer:</strong> Eat Your Neighbor is a new card, dice, and board game for 2&ndash;6 players about betrayal, backyard BBQs, and burying the neighbors you used to wave to. It's launching on Kickstarter soon. <a href="/">Sign up here to get notified the moment it goes live</a> &mdash; pre-launch signups are the single best way to catch early-bird backer pricing the moment a campaign opens.</p>

<h2>What is Eat Your Neighbor?</h2>
<p>Every player raises a family of small, defenseless creatures called Nugs. You keep yours safe at home. Everyone else's dice rolls, event cards, and questionable life choices are trying to get your Nugs run over, roasted, or shipped straight to the cemetery &mdash; before you do it to theirs.</p>
<p>It plays in the same general space as Exploding Kittens (fast, card-driven, constant player-to-player sabotage) but leans much further into dark comedy: sample event cards include <strong>Bye Karen</strong>, <strong>Road Kill</strong>, <strong>Take a Dump</strong>, and <strong>Neighborhood BBQ</strong> &mdash; each one built around a specific, absurd way to take another player's family off the board.</p>

<h2>What's in the box?</h2>
<ul>
<li>1 game board</li>
<li>6 Home cards (one per player color)</li>
<li>45+ event cards</li>
<li>A pair of dice</li>
</ul>

<h2>How many players, and how long does it take?</h2>
<p>2&ndash;6 players. A full game runs about 20&ndash;30 minutes &mdash; longer if someone flips the table after a well-timed Bye Karen.</p>

<h2>How is this different from Exploding Kittens?</h2>
<p>Exploding Kittens is a shared-deck push-your-luck game &mdash; the threat is a card sitting in the deck. Eat Your Neighbor is direct and personal: specific cards and dice rolls let you target another player's family by name, which changes the social dynamic at the table considerably. It was playtested on real neighbors before a single line of this page was written. Several friendships did not survive the playtest. The game did.</p>

<h2>When does Eat Your Neighbor launch on Kickstarter?</h2>
<p>The campaign hasn't launched yet. The fastest way to know the exact date is to <a href="/">join the pre-launch email list</a> &mdash; signups get notified the moment the campaign goes live, which typically also means access to the best early-bird pricing tiers before they sell out.</p>

<h2>Is Eat Your Neighbor appropriate for kids?</h2>
<p>Depends on the kid, and the neighbor. It's built and marketed for adults and older teens who enjoy dark comedy &mdash; think "the tone of Cards Against Humanity" more than "family game night," even though the mechanics play fast and simple enough for anyone to pick up in under five minutes.</p>

<h2>Where can I see the actual cards and rules?</h2>
<p>The full rulebook, sample event cards, and home card designs are viewable now on the <a href="/#rules">official site</a>, along with a short trailer.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Eat Your Neighbor?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Eat Your Neighbor is a new card, dice, and board game for 2 to 6 players about betrayal, backyard BBQs, and getting your neighbors' Nugs (small family creatures) eaten, run over, or buried before they get yours.",
            },
          },
          {
            '@type': 'Question',
            name: "What's in the Eat Your Neighbor box?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The box includes one game board, six Home cards, more than 45 event cards, and a pair of dice.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many players does Eat Your Neighbor support and how long does a game take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Eat Your Neighbor supports 2 to 6 players and a typical game takes about 20 to 30 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is Eat Your Neighbor different from Exploding Kittens?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Exploding Kittens is a shared-deck push-your-luck game where the threat comes from the deck itself. Eat Your Neighbor is more direct and personal, letting players target a specific opponent\'s family through named event cards and dice rolls, with a darker comedic tone throughout.',
            },
          },
          {
            '@type': 'Question',
            name: 'When does Eat Your Neighbor launch on Kickstarter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Kickstarter campaign has not launched yet. Joining the pre-launch email list at eatyourneighbor.com is the fastest way to be notified the moment it goes live, along with access to early-bird backer pricing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Eat Your Neighbor appropriate for kids?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Eat Your Neighbor is built and marketed for adults and older teens who enjoy dark comedy, similar in tone to Cards Against Humanity, though the mechanics themselves are simple enough to teach in under five minutes.',
            },
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Eat Your Neighbor',
        description:
          'A card, dice, and board game for 2-6 players about betrayal, backyard BBQs, and burying the neighbors you used to wave to.',
        brand: { '@type': 'Brand', name: 'Eat Your Neighbor' },
        url: 'https://eatyourneighbor.com',
      },
    ],
  },
  {
    slug: 'gifts-for-board-game-lovers',
    title: 'Best Gifts for Board Game Lovers Who Are Tired of Monopoly',
    metaTitle: 'Best Gifts for Board Game Lovers in 2026',
    description:
      "A short, opinionated gift guide for board game lovers: one wild pick, one prestige pick, one budget pick, and one host pick.",
    html: `
<p><strong>Short answer:</strong> For the friend who's outgrown "nice" games, get <strong>Eat Your Neighbor</strong> &mdash; a new card, dice, and board game about betrayal, backyard BBQs, and burying the neighbors who used to wave at you. For safer picks, Wingspan (prestige, gorgeous art) and Taco Cat Goat Cheese Pizza (~$12, under 10 minutes to learn) round out a gift that works for almost anyone on your list.</p>
<p>Most board game gift guides split into three lanes: the beautiful strategy game nobody wants to admit they haven't played, the cheap stocking-stuffer everyone already owns, and the loud party game that actually gets opened on the night itself. Here's one of each, plus the wildcard.</p>

<h2>For the person who wants to ruin game night (in a good way)</h2>
<p><strong>Eat Your Neighbor</strong> &mdash; every player raises a family of small creatures called Nugs, and the entire table is trying to get yours eaten, buried, or run over first. 2&ndash;6 players, about 20&ndash;30 minutes, and built specifically for people who've already worn out Cards Against Humanity and Exploding Kittens. <a href="/">See sample cards and sign up for launch notifications &rarr;</a></p>

<h2>For the "serious" board gamer</h2>
<p><strong>Wingspan</strong> &mdash; Game of the Year-winning engine builder with genuinely beautiful bird artwork. Every hobby-gamer either already owns this or has been meaning to. Higher price point than a party game, but it's the gift that says "I know you actually play these."</p>

<h2>For under $15</h2>
<p><strong>Taco Cat Goat Cheese Pizza</strong> &mdash; around $12, 2&ndash;8 players, rules explainable in under five minutes. The safest gift on this list: works for a 10-year-old and a 70-year-old at the same table.</p>

<h2>For the person who hosts game night every week</h2>
<p><strong>Hues and Cues</strong> &mdash; a guessing game built around color instead of words, frequently recommended for its broad age appeal and fast rounds. Good pick for someone whose collection is already deep in strategy games and needs a lighter option for mixed groups.</p>

<h2>Which one should you actually buy?</h2>
<ul>
<li><strong>Buying for someone who's already bored of normal party games?</strong> Eat Your Neighbor.</li>
<li><strong>Buying for the friend with the game shelf?</strong> Wingspan.</li>
<li><strong>Buying on a budget, or for a mixed-age family?</strong> Taco Cat Goat Cheese Pizza.</li>
<li><strong>Buying for the person who hosts constantly and needs variety?</strong> Hues and Cues.</li>
</ul>
<p>Eat Your Neighbor launches soon on Kickstarter. <a href="/">Sign up now</a> &mdash; early birds get notified first, before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Best Gifts for Board Game Lovers Who Are Tired of Monopoly',
        description:
          'A short, opinionated gift guide for board game lovers: one wild pick, one prestige pick, one budget pick, and one host pick.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage: 'https://eatyourneighbor.com/blog/gifts-for-board-game-lovers',
      },
    ],
  },
  {
    slug: 'party-games-about-betraying-your-friends',
    title: "Best Party Games About Betraying Your Friends (Ranked by How Personal It Gets)",
    metaTitle: 'Best Party Games About Betraying Your Friends',
    description:
      "Betrayal games split into hidden-identity deduction games and open-betrayal games. Here's the difference, and which one to buy depending on which you actually want.",
    html: `
<p><strong>Short answer:</strong> If you want to spend the whole game not knowing who's secretly against you, get Secret Hitler or The Resistance. If you want to know exactly who betrayed you, watch it happen, and get to retaliate immediately, get <strong>Eat Your Neighbor</strong> &mdash; a new card, dice, and board game where betrayal isn't hidden, it's the entire point.</p>
<p>Betrayal games split into two very different experiences, and most gift guides don't say this part out loud: <strong>hidden-identity games</strong> make you suspect everyone, while <strong>open-betrayal games</strong> let you see exactly who did what to you, in real time. Which one you want depends entirely on whether you enjoy paranoia or you enjoy revenge.</p>

<h2>Hidden-identity games (you don't know who's against you)</h2>
<p><strong>Secret Hitler</strong> &mdash; players are secretly assigned liberal or fascist roles; the fascists know each other, everyone else has to figure it out through voting and deduction. Tense, quiet, cerebral.</p>
<p><strong>The Resistance</strong> &mdash; 5&ndash;10 players, spies hidden among a team of loyal agents. Pure social deduction, no cards revealing who did what.</p>
<p><strong>One Night Ultimate Werewolf</strong> &mdash; a ~10-minute version of Werewolf where everyone gets one secret role and one round to figure out who's lying. Fast, but still built around not knowing.</p>

<h2>Open-betrayal games (you know exactly who got you)</h2>
<p><strong>Eat Your Neighbor</strong> &mdash; no hidden roles, no secret teams. Every player raises a family of small creatures called Nugs, and when someone plays <strong>Bye Karen</strong> or <strong>Road Kill</strong> on you, you know precisely who did it and exactly what happened. 2&ndash;6 players, about 20&ndash;30 minutes. <a href="/#cards">See sample cards &rarr;</a></p>
<p><strong>Dead of Winter</strong> &mdash; a cooperative game with a hidden traitor mechanic, where surviving a hostile wasteland gets harder because someone at the table might be working against the group &mdash; but unlike pure deduction games, backstabbing here often surfaces through actions, not just secret identity reveals.</p>

<h2>Which one should you actually buy?</h2>
<ul>
<li><strong>Want quiet paranoia and slow-burn suspicion?</strong> Secret Hitler or The Resistance.</li>
<li><strong>Want a fast, loud round with immediate payoff?</strong> One Night Ultimate Werewolf.</li>
<li><strong>Want to know exactly who wronged you and get to do something about it?</strong> Eat Your Neighbor.</li>
<li><strong>Want betrayal wrapped in a cooperative survival theme?</strong> Dead of Winter.</li>
</ul>
<p>Eat Your Neighbor is launching soon on Kickstarter. <a href="/">Sign up now</a> &mdash; before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Best Party Games About Betraying Your Friends (Ranked by How Personal It Gets)',
        description:
          "Betrayal games split into hidden-identity deduction games and open-betrayal games. Here's the difference, and which one to buy depending on which you actually want.",
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage:
          'https://eatyourneighbor.com/blog/party-games-about-betraying-your-friends',
      },
    ],
  },
  {
    slug: 'most-anticipated-tabletop-games-2026',
    title: 'Most Anticipated Tabletop Games of 2026 (Including One You Can’t Buy Yet)',
    metaTitle: 'Most Anticipated Tabletop Games of 2026',
    description:
      "The biggest funded tabletop Kickstarters of 2026 so far, plus new party games to watch, including one that hasn't launched its campaign yet.",
    html: `
<p><strong>Short answer:</strong> 2026's biggest tabletop stories so far include the record-breaking Cyberpunk Trading Card Game (over $26.9M raised, the most funded tabletop game in Kickstarter history), Discworld: Adventures in Ankh-Morpork (over $3.2M raised, shipping to backers in Q2), and a wave of new party games chasing the post-Exploding-Kittens crowd &mdash; including <strong>Eat Your Neighbor</strong>, which hasn't launched its Kickstarter yet but is already building a pre-launch waitlist.</p>

<h2>The big funded stories of 2026 so far</h2>
<p><strong>Cyberpunk Trading Card Game</strong> &mdash; closed April 17, 2026, with $26,953,978 raised from 47,676 backers, making it the most funded TCG and the most funded tabletop game in Kickstarter history to date.</p>
<p><strong>Discworld: Adventures in Ankh-Morpork</strong> &mdash; from Modiphius, raised over $3.2 million and began shipping to backers in Q2 2026.</p>
<p><strong>Moytura</strong> &mdash; a tarot-sized card game pairing strong artwork with asymmetric faction abilities and tight tactical combat, drawing comparisons to a compact, heavily-themed euro game.</p>

<h2>New party and card games to watch</h2>
<p><strong>All In: Predictions</strong> &mdash; designer Phil Walker-Harding (known for Sushi Go) brings a gamer-focused twist on poker-hand manipulation, letting players discard cards for powers and reclaim cards others discarded.</p>
<p><strong>Rock Hard 1977: Ear Candy</strong> &mdash; combines music trivia with resource management, positioned as a potential party-game breakout of the season.</p>
<p><strong>Eat Your Neighbor</strong> &mdash; hasn't launched its Kickstarter campaign yet, which makes it the wildcard on this list. It's a card, dice, and board game for 2&ndash;6 players about betrayal, backyard BBQs, and getting your neighbors' "Nugs" eaten, run over, or buried before they get yours &mdash; built for the crowd that's already worn out Exploding Kittens and Cards Against Humanity. No funding numbers to report yet, because there's no campaign yet &mdash; but that also means early sign-ups get first access to backer pricing the moment it opens. <a href="/">Get notified at launch &rarr;</a></p>

<h2>Why watch a game that hasn't even launched?</h2>
<p>Every game above already has funding numbers because they've already run their campaigns. The actual edge in backing crowdfunded games is getting in <em>before</em> the numbers exist &mdash; when early-bird tiers are still open and pricing hasn't climbed. If you back projects specifically to catch that window, a pre-launch signup list is the highest-leverage five seconds you can spend on a game you're curious about.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Most Anticipated Tabletop Games of 2026 (Including One You Can’t Buy Yet)',
        description:
          "The biggest funded tabletop Kickstarters of 2026 so far, plus new party games to watch, including one that hasn't launched its campaign yet.",
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage:
          'https://eatyourneighbor.com/blog/most-anticipated-tabletop-games-2026',
      },
    ],
  },
  {
    slug: 'white-elephant-board-games',
    title: 'Best White Elephant Gifts for People Who Love Board Games',
    metaTitle: 'Best White Elephant Gifts for Board Game Lovers',
    description:
      'What makes a white elephant gift actually get stolen: cheap, funny, and good enough to fight over. A party game guide for your next gift exchange.',
    html: `
<p><strong>Short answer:</strong> White elephant gifts should be funny, cheap enough to not feel like a real present, and good enough that people actually fight over them. A boxed party game hits all three &mdash; and <strong>Eat Your Neighbor</strong> is built specifically to be the gift someone steals three times.</p>
<p>Most white elephant gift exchanges have a price cap around $25 and a simple rule: bring something people will actually want to steal. Gag gifts are funny once. A genuinely good, funny party game gets stolen repeatedly, which is the entire point of the game-within-the-game.</p>

<h2>What actually makes a good white elephant gift</h2>
<p>The best white elephant board game gifts share three things: they're funny to unwrap in front of a group, they're cheap enough to not feel like you spent real money, and they're good enough that the next person in line actually wants to steal it instead of taking a new box.</p>

<h2>Our pick: Eat Your Neighbor</h2>
<p>A card, dice, and board game for 2&ndash;6 players where everyone raises a family of small creatures called Nugs, and the whole table is trying to get yours eaten, buried, or run over first. It plays in 20&ndash;30 minutes, which matters at a party where people are also eating, drinking, and doing a gift exchange at the same time &mdash; nobody wants to explain a 90-minute rulebook between courses. <a href="/#cards">See sample cards &rarr;</a></p>

<h2>Other white elephant traditions worth stealing (pun intended)</h2>
<p>If you want to make the exchange itself funnier, not just the gifts:</p>
<ul>
<li><strong>White Elephant Bingo</strong> &mdash; players mark off a card as things happen during the exchange (a new gift gets opened, a steal happens, someone argues about the rules).</li>
<li><strong>The Auction Game</strong> &mdash; everyone bids on gifts using fake currency instead of the standard steal-based turn order.</li>
<li><strong>Themed White Elephant</strong> &mdash; everyone brings a gift that fits a specific theme (ugliest sweater-adjacent item, weirdest kitchen gadget, etc.), which works especially well if the theme is "something your terrible neighbor would actually own."</li>
</ul>

<h2>The one rule that matters most</h2>
<p>Keep the price cap low and the fun-to-actually-steal ratio high. A $12&ndash;20 party game beats a $25 candle almost every time, because a candle doesn't get stolen three times before the exchange ends.</p>
<p>Eat Your Neighbor is launching soon on Kickstarter. <a href="/">Sign up now</a> &mdash; before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Best White Elephant Gifts for People Who Love Board Games',
        description:
          'What makes a white elephant gift actually get stolen: cheap, funny, and good enough to fight over. A party game guide for your next gift exchange.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage: 'https://eatyourneighbor.com/blog/white-elephant-board-games',
      },
    ],
  },
  {
    slug: 'eat-your-neighbor-vs-exploding-kittens',
    title: 'Eat Your Neighbor vs. Exploding Kittens: Which Should You Buy?',
    metaTitle: 'Eat Your Neighbor vs. Exploding Kittens',
    description:
      "A head-to-head comparison of Eat Your Neighbor and Exploding Kittens covering players, play time, tone, and which one fits your group.",
    html: `
<p><strong>Short answer:</strong> Buy Exploding Kittens if you want a lighter, family-safe game where the threat comes from a shared shuffled deck. Buy <strong>Eat Your Neighbor</strong> if you've already got Exploding Kittens and want a darker, more direct game where you can target a specific opponent by name instead of just hoping you don't draw the wrong card.</p>
<p>They're close cousins mechanically &mdash; fast rounds, card-based sabotage, a rulebook you can explain in under five minutes &mdash; but the actual <em>feeling</em> at the table is different enough that "which one should I buy" has a real answer depending on your group.</p>

<h2>The core difference</h2>
<p><strong>Exploding Kittens</strong> is a shared-threat game. The danger (the exploding kitten card) sits in a deck everyone draws from. Nobody chose to target you specifically &mdash; you just drew badly. 2&ndash;5 players.</p>
<p><strong>Eat Your Neighbor</strong> is a direct-threat game. Cards like <strong>Bye Karen</strong> and <strong>Road Kill</strong> let a specific player choose to come after your specific "family" of Nugs. When it happens, you know exactly who did it and why. 2&ndash;6 players, about 20&ndash;30 minutes.</p>
<p>That one design choice changes the social temperature of the whole game. Exploding Kittens creates tension through randomness. Eat Your Neighbor creates tension through personal accountability &mdash; the friend across the table just did that to you, on purpose, and everyone saw it happen.</p>

<h2>Side-by-side</h2>
<table>
<thead><tr><th></th><th>Exploding Kittens</th><th>Eat Your Neighbor</th></tr></thead>
<tbody>
<tr><td>Players</td><td>2&ndash;5</td><td>2&ndash;6</td></tr>
<tr><td>Play time</td><td>~15 minutes</td><td>20&ndash;30 minutes</td></tr>
<tr><td>Threat type</td><td>Shared deck (random)</td><td>Direct, player-targeted</td></tr>
<tr><td>Tone</td><td>Family-friendly chaos</td><td>Dark comedy, adult-leaning</td></tr>
<tr><td>Components</td><td>Cards only</td><td>Board, dice, cards</td></tr>
</tbody>
</table>

<h2>Which one should you actually buy?</h2>
<ul>
<li><strong>New to this style of game entirely?</strong> Start with Exploding Kittens &mdash; it's the gentler on-ramp.</li>
<li><strong>Already own Exploding Kittens and want more?</strong> Eat Your Neighbor is built for exactly that upgrade.</li>
<li><strong>Want family-safe for a wide age range?</strong> Exploding Kittens.</li>
<li><strong>Want your adult friend group to actually gasp out loud?</strong> Eat Your Neighbor.</li>
</ul>
<p>Most groups end up wanting both &mdash; they solve slightly different nights. <a href="/#rules">See Eat Your Neighbor's full rulebook and sample cards &rarr;</a></p>
<p>Eat Your Neighbor is launching soon on Kickstarter. <a href="/">Sign up now</a> &mdash; before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Eat Your Neighbor vs. Exploding Kittens: Which Should You Buy?',
        description:
          'A head-to-head comparison of Eat Your Neighbor and Exploding Kittens covering players, play time, tone, and which one fits your group.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage:
          'https://eatyourneighbor.com/blog/eat-your-neighbor-vs-exploding-kittens',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Eat Your Neighbor similar to Exploding Kittens?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes, mechanically they're close cousins — both are fast, card-based sabotage games with simple rules. The key difference is that Exploding Kittens creates a shared, random threat from the deck, while Eat Your Neighbor lets players directly target a specific opponent.",
            },
          },
          {
            '@type': 'Question',
            name: 'Should I buy Eat Your Neighbor or Exploding Kittens first?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Exploding Kittens is the gentler, more family-friendly on-ramp. Eat Your Neighbor is built for players who already enjoy that style and want a darker, more direct, adult-leaning experience.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'kickstarter-board-games-worth-backing',
    title: 'How to Tell Which Kickstarter Board Games Are Actually Worth Backing',
    metaTitle: 'Which Kickstarter Board Games Are Worth Backing',
    description:
      'A practical checklist for evaluating tabletop Kickstarter campaigns before you pledge: specific mechanics, real footage, and whether the creator shows up.',
    html: `
<p><strong>Short answer:</strong> Don't evaluate a Kickstarter campaign like a finished product &mdash; it's a promise, not a purchase. The campaigns worth backing can explain their mechanics in specific, operational terms (what happens on your turn, what happens when you fall behind), not just mood-board adjectives and atmospheric art. Everything else is a coin flip.</p>
<p>Backing a board game on Kickstarter is different from buying one off a shelf. There's no returns process, no guarantee of delivery, and sometimes a year-plus wait between pledging and getting a box. That's not a reason to avoid crowdfunding &mdash; some of the best games of the last decade started this way &mdash; but it is a reason to actually check a few things before you pledge.</p>

<h2>1. Can they explain the game without adjectives?</h2>
<p>The single biggest tell: does the campaign page describe exactly how a turn works, what the tension loop is in the final round, and what happens when a player falls behind &mdash; or does it lean entirely on words like "epic," "immersive," and "unforgettable"? A campaign that can't describe its own mechanics in plain, specific language is often still looking for a game to attach to its concept.</p>

<h2>2. Is there real gameplay footage, not just concept art?</h2>
<p>Concept art and mockups are cheap. Actual footage of real people playing actual prototypes &mdash; even rough ones &mdash; is the strongest signal that a playable game exists today, not just an idea of one.</p>

<h2>3. Does the creator show up, or hide behind the campaign page?</h2>
<p>Campaigns run by someone who answers comments, posts real updates, and is visibly present tend to ship. Campaigns that go quiet after the funding goal is hit are the ones that generate the most "still waiting" threads a year later.</p>

<h2>4. What we're doing about all of this, specifically</h2>
<p>We're not asking you to trust us blind before our own campaign opens. The board, the cards, the rules &mdash; all of it is already viewable right now, before there's a single dollar on the table. <a href="/#rules">See the actual rulebook and sample cards &rarr;</a> The trailer isn't concept art, it's the actual game. That's the standard we think every campaign should be held to, including ours.</p>

<h2>The short version</h2>
<p>Read past the adjectives. Look for actual footage. Check whether the creator shows up. And if a campaign won't show you the real thing before asking for your money, that tells you something too.</p>
<p>Eat Your Neighbor is launching soon on Kickstarter. <a href="/">Sign up now</a> to see everything before you back it &mdash; before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Tell Which Kickstarter Board Games Are Actually Worth Backing',
        description:
          'A practical checklist for evaluating tabletop Kickstarter campaigns before you pledge: specific mechanics, real footage, and whether the creator shows up.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage:
          'https://eatyourneighbor.com/blog/kickstarter-board-games-worth-backing',
      },
    ],
  },
  {
    slug: 'halloween-party-games-for-adults',
    title: "8 Halloween Party Games for Adults (That Aren't Bobbing for Apples)",
    metaTitle: '8 Halloween Party Games for Adults, Ranked',
    description:
      'Halloween party games for adults, ranked by how much they actually lean into the season instead of just tolerating it — including one that\'s already set in a cemetery.',
    html: `
<p><strong>Short answer:</strong> Skip the kid-party leftovers. For a group that wants actual dark comedy instead of plastic spiders, start with a murder mystery kit for a scripted night, or <strong>Eat Your Neighbor</strong> for something that needs zero setup, plays in under 30 minutes, and is built entirely around a cemetery, backyard BBQs, and burying your neighbors &mdash; which is to say, it's already a Halloween party game even though it wasn't technically designed as one.</p>
<p>Most "Halloween games for adults" lists are the same six ideas: apple bobbing (gross), a costume contest (fine, but not a game), and pin the wart on the witch (a kids' game with a grown-up font). Here's a list of games that actually earn a spot at an adult party &mdash; ranked by how much they lean into the season instead of just tolerating it.</p>

<h2>Quick comparison</h2>
<table>
<thead><tr><th>Game</th><th>Players</th><th>Setup</th><th>Halloween-Coded</th></tr></thead>
<tbody>
<tr><td><strong>Eat Your Neighbor</strong></td><td><strong>2&ndash;6</strong></td><td><strong>None</strong></td><td><strong>Cemetery, dark comedy, zero rebrand needed</strong></td></tr>
<tr><td>Murder mystery dinner kit</td><td>6&ndash;12</td><td>High (roles, printouts)</td><td>Full theme night</td></tr>
<tr><td>Werewolf / Mafia</td><td>5+</td><td>Low</td><td>Social deduction, spooky by name only</td></tr>
<tr><td>Horror movie trivia</td><td>Any</td><td>Low</td><td>Depends on question bank</td></tr>
<tr><td>Ouija board</td><td>2+</td><td>None</td><td>Atmosphere, not really a "game"</td></tr>
<tr><td>Pumpkin carving contest</td><td>Any</td><td>Medium (mess)</td><td>Craft, not competition</td></tr>
<tr><td>Scavenger hunt (haunted house)</td><td>Any</td><td>Medium</td><td>Good for bigger parties</td></tr>
<tr><td>Cards Against Humanity</td><td>4&ndash;20</td><td>None</td><td>Dark, but not seasonal</td></tr>
</tbody>
</table>

<h2>1. Eat Your Neighbor &mdash; the one that's already dressed for the occasion</h2>
<p>You don't have to reskin this one for Halloween &mdash; it already lives in a cemetery. Every player raises a family of small creatures called Nugs, and the rest of the table is trying to get yours eaten, buried, or run over before you do it to theirs. Sample cards include <strong>Bye Karen</strong> (straight to the cemetery) and <strong>Take a Dump</strong> (bury everyone you've already eaten). 2&ndash;6 players, 20&ndash;30 minutes, and it plays just as well as a between-courses game at a Halloween dinner as it does as the main event.</p>
<p><a href="/#cards">See sample cards &rarr;</a></p>

<h2>2. Murder mystery dinner kit</h2>
<p>The classic for a reason: everyone gets a secret role, a motive, and a handful of clues to feed out over the course of the night. Best for groups willing to actually commit to a character and a full evening &mdash; this is the one to plan around, not the one to grab last minute.</p>

<h2>3. Werewolf or Mafia</h2>
<p>Social deduction with a horror-movie coat of paint: villagers vs. a hidden pack of werewolves, one round of elimination at a time. Needs at least 5&ndash;6 players to get good, and it runs on group energy more than any component in the box.</p>

<h2>4. Horror movie trivia</h2>
<p>Only as good as the question bank, but it's the easiest game on this list to run with zero prep if you already know your group's movie taste. Split into teams to keep the pace up.</p>

<h2>5. Ouija board</h2>
<p>Not really a "game" in the competitive sense, but it's the single most requested Halloween party prop there is. Works best as a 10-minute activity between other games, not the whole night.</p>

<h2>6. Pumpkin carving contest</h2>
<p>More craft than game, but adding a timer and a theme ("scariest," "most disappointing") turns it into a real competition with a winner.</p>

<h2>7. Haunted house scavenger hunt</h2>
<p>Best for bigger parties or if you're already decorating a space &mdash; hide clues around the house or yard and let teams race to solve them. High setup cost, high payoff for a crowd.</p>

<h2>8. Cards Against Humanity</h2>
<p>Dark, but not actually Halloween-flavored &mdash; it's on this list because it's the game people default to when they want "adult" without doing any theming work. If your group already owns it, it's a fine warm-up before something more seasonal.</p>

<h2>Which one should you actually play?</h2>
<ul>
<li><strong>Want zero setup and a game that's already on-theme?</strong> Eat Your Neighbor.</li>
<li><strong>Planning a whole themed evening?</strong> Murder mystery dinner kit.</li>
<li><strong>Have a big group and love bluffing?</strong> Werewolf or Mafia.</li>
<li><strong>Hosting last-minute with no prep time?</strong> Horror movie trivia.</li>
</ul>
<p>Eat Your Neighbor is launching soon on Kickstarter. <a href="/">Sign up now</a> &mdash; before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: "8 Halloween Party Games for Adults (That Aren't Bobbing for Apples)",
        description:
          'Halloween party games for adults, ranked by how much they actually lean into the season instead of just tolerating it, including one that\'s already set in a cemetery.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage: 'https://eatyourneighbor.com/blog/halloween-party-games-for-adults',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Eat Your Neighbor' },
          { '@type': 'ListItem', position: 2, name: 'Murder mystery dinner kit' },
          { '@type': 'ListItem', position: 3, name: 'Werewolf / Mafia' },
          { '@type': 'ListItem', position: 4, name: 'Horror movie trivia' },
          { '@type': 'ListItem', position: 5, name: 'Ouija board' },
          { '@type': 'ListItem', position: 6, name: 'Pumpkin carving contest' },
          { '@type': 'ListItem', position: 7, name: 'Haunted house scavenger hunt' },
          { '@type': 'ListItem', position: 8, name: 'Cards Against Humanity' },
        ],
      },
    ],
  },
  {
    slug: 'best-2-player-card-games-for-adults',
    title: '7 Best 2-Player Card Games for Adults (No, Not Just Rummy)',
    metaTitle: '7 Best 2-Player Card Games for Adults',
    description:
      'The best 2-player card games for adults, split between quiet classics built for exactly two people and louder games that still hold up without a full table.',
    html: `
<p><strong>Short answer:</strong> For a quiet, strategic duel, get Gin Rummy or a two-player-only game like Bezique or Jaipur. For something with real tension and trash talk at just two players, get <strong>Eat Your Neighbor</strong> &mdash; built for 2&ndash;6 players, and one of the few chaos-style card games that actually holds up when it's just you and one other person instead of a full table.</p>
<p>Most "party" card games fall apart at two players &mdash; half the fun is watching a third or fourth person get targeted instead of you. This list is split for that reason: quiet classics that were built for exactly two people, and louder games that scale down without losing their bite.</p>

<h2>Quick comparison</h2>
<table>
<thead><tr><th>Game</th><th>Built For</th><th>Play Time</th><th>Vibe</th></tr></thead>
<tbody>
<tr><td>Gin Rummy</td><td>2 only</td><td>~20 min</td><td>Classic, skill-based</td></tr>
<tr><td>Bezique</td><td>2 only</td><td>~30 min</td><td>Old-world trick-taking</td></tr>
<tr><td>Jaipur</td><td>2 only</td><td>~30 min</td><td>Trading, light strategy</td></tr>
<tr><td><strong>Eat Your Neighbor</strong></td><td><strong>2&ndash;6</strong></td><td><strong>20&ndash;30 min</strong></td><td><strong>Chaotic, dark comedy, still bites at 2</strong></td></tr>
<tr><td>Lost Cities</td><td>2 only</td><td>~30 min</td><td>Push-your-luck, calmer tone</td></tr>
<tr><td>Codenames Duet</td><td>2 only</td><td>~15 min</td><td>Cooperative, not competitive</td></tr>
<tr><td>Monopoly Deal</td><td>2&ndash;5</td><td>~20 min</td><td>Fast, familiar, light</td></tr>
</tbody>
</table>

<h2>1. Gin Rummy &mdash; the classic that never left</h2>
<p>Draw, discard, form melds, reach 100 points first. Needs nothing but a standard deck and works anywhere &mdash; a plane, a porch, a waiting room. The safest pick on this list because everyone already half-knows the rules.</p>

<h2>2. Bezique &mdash; for people who want something with more history</h2>
<p>A French trick-taking game from the 1800s that rewards actually paying attention to what's been played. Slower and more cerebral than most modern card games; a good pick for a quiet night in.</p>

<h2>3. Jaipur &mdash; trading instead of fighting</h2>
<p>A light strategy game about building camel caravans and trading goods. Calmer than most two-player games on this list, and a good on-ramp for someone who says they "don't really like card games."</p>

<h2>4. Eat Your Neighbor &mdash; the one that still has teeth at two players</h2>
<p>Most chaos-style party card games need four-plus people to work, because the fun comes from watching someone else get targeted. Eat Your Neighbor doesn't have that problem: with only one other player, every single card is aimed directly at you, which makes a 2-player round somehow more personal, not less. Each player raises a family of small creatures called Nugs; the goal is getting the other person's Nugs eaten, buried, or run over before they do it to yours. 2&ndash;6 players, 20&ndash;30 minutes, plays exactly as fast at two as it does at six.</p>
<p><a href="/#cards">See sample cards &rarr;</a></p>

<h2>5. Lost Cities &mdash; push-your-luck, minus the trash talk</h2>
<p>A calmer push-your-luck game about building expedition paths without running them at a loss. Good middle ground between "quiet classic" and "actual competition."</p>

<h2>6. Codenames Duet &mdash; for couples who'd rather cooperate than compete</h2>
<p>Not competitive at all &mdash; you and one other player work together to get through a shared board of code words before running out of guesses. The right pick if your two-player games always end in an argument and you'd like one that doesn't.</p>

<h2>7. Monopoly Deal &mdash; familiar, fast, low stakes</h2>
<p>A stripped-down, card-only version of Monopoly's core loop: collect property sets, block your opponent, avoid losing your hand to rent cards. Works at 2 players, though it's built to flex up to 5.</p>

<h2>Which one should you actually buy?</h2>
<ul>
<li><strong>Want quiet strategy, just the two of you?</strong> Gin Rummy or Bezique.</li>
<li><strong>Want something calmer but still a real game?</strong> Jaipur or Lost Cities.</li>
<li><strong>Want actual tension and trash talk at two players, and a game that also scales up later?</strong> Eat Your Neighbor.</li>
<li><strong>Playing with a partner who hates competing directly?</strong> Codenames Duet.</li>
</ul>
<p>Eat Your Neighbor is launching soon on Kickstarter. <a href="/">Sign up now</a> &mdash; before your neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '7 Best 2-Player Card Games for Adults (No, Not Just Rummy)',
        description:
          'The best 2-player card games for adults, split between quiet classics built for exactly two people and louder games that still hold up without a full table.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage: 'https://eatyourneighbor.com/blog/best-2-player-card-games-for-adults',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Gin Rummy' },
          { '@type': 'ListItem', position: 2, name: 'Bezique' },
          { '@type': 'ListItem', position: 3, name: 'Jaipur' },
          { '@type': 'ListItem', position: 4, name: 'Eat Your Neighbor' },
          { '@type': 'ListItem', position: 5, name: 'Lost Cities' },
          { '@type': 'ListItem', position: 6, name: 'Codenames Duet' },
          { '@type': 'ListItem', position: 7, name: 'Monopoly Deal' },
        ],
      },
    ],
  },
  {
    slug: 'funny-gifts-for-new-neighbors',
    title: "Funny Gifts for New Neighbors (That Aren't a Bundt Cake)",
    metaTitle: 'Funny Gifts for New Neighbors',
    description:
      "A shorter, funnier list of new-neighbor gifts beyond the usual candle and mug, including one that doubles as an actual icebreaker.",
    html: `
<p><strong>Short answer:</strong> Skip the candle. The standard new-neighbor welcome kit &mdash; a mug, a candle, a "Best Neighbor" sign &mdash; is nice but forgettable. A game you can actually play together the first time you hang out is the gift that turns "the people next door" into "the people we invite over." <strong>Eat Your Neighbor</strong> is the obvious pick for the pun alone, but it also happens to work as an actual icebreaker: 20&ndash;30 minutes, easy to teach, and it's a lot faster to bond over shared betrayal than over a candle neither of you will burn.</p>
<p>Every "gifts for new neighbors" list online is some combination of a mug, a candle, a plate of cookies, and a fire pit. None of it is bad &mdash; it's just the same list everyone else gets too. Here's a shorter list of gifts that are actually funny, not just "nice," starting with the one that's basically a pun made physical.</p>

<h2>1. Eat Your Neighbor &mdash; for the neighbor with a sense of humor</h2>
<p>A card, dice, and board game where every player raises a family of small creatures called Nugs, and the whole table tries to get someone else's family eaten, buried, or run over first. Handing this to a new neighbor as a "welcome to the street" gift is either going to get a big laugh or immediately tell you everything you need to know about whether you're going to get along. 2&ndash;6 players, 20&ndash;30 minutes, easy to teach on the spot.</p>
<p><a href="/#cards">See sample cards &rarr;</a></p>

<h2>2. A "Best Neighbor Ever" candle (the control group)</h2>
<p>The default gift for a reason &mdash; low effort, universally fine, and nobody's ever offended by a candle. Just don't expect it to start a friendship on its own.</p>

<h2>3. A local coffee or spice blend</h2>
<p>Practical, consumable, and it doesn't ask them to do anything with it beyond enjoy it once. A safe pick if you don't know their sense of humor yet.</p>

<h2>4. A compact tabletop fire pit</h2>
<p>A genuinely good "let's hang out on the porch" gift if you're hoping to actually spend time together &mdash; more of an investment than most welcome gifts, so it signals you're planning on this being a real friendship, not a one-time gesture.</p>

<h2>5. Sparklers or a six-pack</h2>
<p>Low-effort, zero-pressure, and it doubles as an invitation: "come use these with us" is an easier ask than "come over sometime."</p>

<h2>Which one should you actually give?</h2>
<ul>
<li><strong>Want to actually start a friendship, not just say hello?</strong> Eat Your Neighbor &mdash; you'll know within one game whether you like them.</li>
<li><strong>Don't know them at all yet, want something safe?</strong> Candle or coffee.</li>
<li><strong>Hoping this turns into regular porch hangouts?</strong> Fire pit.</li>
<li><strong>Want a zero-pressure "come hang out" excuse?</strong> Sparklers or a six-pack.</li>
</ul>
<p>Eat Your Neighbor is launching soon on Kickstarter. <a href="/">Sign up now</a> &mdash; before your (actual) neighbors do.</p>
`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: "Funny Gifts for New Neighbors (That Aren't a Bundt Cake)",
        description:
          'A shorter, funnier list of new-neighbor gifts beyond the usual candle and mug, including one that doubles as an actual icebreaker.',
        author: { '@type': 'Organization', name: 'Eat Your Neighbor' },
        publisher: {
          '@type': 'Organization',
          name: 'Eat Your Neighbor',
          url: 'https://eatyourneighbor.com',
        },
        mainEntityOfPage: 'https://eatyourneighbor.com/blog/funny-gifts-for-new-neighbors',
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
