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
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
