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
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
