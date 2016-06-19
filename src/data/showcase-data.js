import React from 'react';

export default [
  {
    description: 'The Grid is a fully functional multi-level 2D Dungeon Crawler with randomly generated maps and entities created using the React.js view library.  As well as creating the dungeon creation algorithms, the main challenge of this exercise was to effectively manage the state of the app.  To solve this challenge I chose to use Redux, an implementation of the Flux pattern, and redux-thunk middleware (to handle async actions).  The UI features a responsive viewport that tracks the player position and is aware of the edges of the game world.  Writing this app taught me lots about functional programming and creating organised code.  Give it a go - the game is challenging but winnable!',
    hash: 'aNrdzP',
    height: 620,
    title: 'Dungeon Crawler',
    fullWidth: true
  },
  {
    description: 'If you&#8217;re not familiar with the Game of Life, it&#8217;s a cellular automation devised by British mathematician John Conway (you can read more about it on <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Wikipedia</a>).  This is an interactive version built with React.js and Redux with a simple UI that allows the user to add, remove or randomise the cells and see the effects on the evolution of the cells over time.  This was my first (and only!) demo to get picked on <a href="http://codepen.io">Codepen</a>.  I liked the color scheme and UI elements I created so much that I decided to use them on this website!',
    hash: 'bpovxz',
    height: 620,
    title: 'Game of Life',
    fullWidth: true
  },
  {
    description: 'Play the ultimate game of champions - Noughts & Crosses, against a computer oponent.  What could be more fun?!  Certainly, I can confirm that writing the AI was a great deal more fun than playing the game.  Noughts & Crosses is a <a href="https://en.wikipedia.org/wiki/Zero-sum_game">zero sum game</a> and the <a href="https://en.wikipedia.org/wiki/Minimax">Minimax</a> algorithm seemed like a good choice for determining the AI gameplay rules.  It&#8217;s a recursive algorithm and so provided a good test of my understanding of recursion and my ability to translate an outline description of an algorithm in to JavaScript.  If you do manage to win a game, please contact me to claim a special prize.',
    hash: 'qOJVyK',
    height: 435,
    title: 'Noughts & Crosses',
    fullWidth: false
  },
  {
    description: 'I&#8217;m a big fan of creating data visualisations using D3.js and SVG and this is one of my favourites (you can see more of them <a href="http://codepen.io/collection/XjzkRb/">here</a>). This demo shows discovered meteorite strikes over time - the larger the circle, the greater the mass of the discovered object.  The map includes tooltips for each data point, so I took care to make sure the overlapping circles are arranged with the smallest masses on top.',
    hash: 'YqmbZw',
    height: 400,
    title: 'Meteorite Strikes',
    fullWidth: false
  },
  {
    description: 'I love writing HTML and CSS to recreate some of the amazing UI designs created by members at <a href="https://dribbble.com/">dribbble.com</a>. I couldn&#8217;t resist bringing this <a href="https://dribbble.com/shots/1009776-Calculator-for-Smartisan-OS"> gorgeous calculator design</a> to life using JavaScript and JQuery.  It functions the same as your trusy pocket calculator, complete with memory functions, although sadly it is not solar powered (yet).',
    hash: 'avLwNw',
    height: 480,
    title: 'Pocket Calculator',
    fullWidth: false
  },
  {
    description: 'A fully functional implementaion of the venerable Simon game created using JQuery.  The user is challenged to recall and input a random sequence, increasing in length and speed up to 20 levels.  Also features a permadeath mode! I enjoyed the challenge of writing the CSS to build an attractive UI.  Trivia: This app prompted me to learn React.js so that I could manage application state more effectively and intuitively than using JQuery in my future projects.',
    hash: 'ojVYoO',
    height: 550,
    title: 'Simon Game',
    fullWidth: false
  },
  {
    description: 'My old portfolio showing my progress through the original <a href="http://freecodecamp.com">FreeCodeCamp</a> curriculum. I think Bootstrap is a fantastic framework for quickly making robust, mobile first interfaces (I should probably have used it to build my new portfolio!).  I  <a href="http://codepen.io/thepeted/pen/ojvjbL">customised</a> the Bootstrap Thumbnail component and implemented a random pastel color placeholder using <a href="http://holderjs.com">Holder.js</a> to brighten up those pesky "coming soon" items.',
    hash: 'LpPWWQ',
    height: 470,
    title: 'Bootstrap Portfolio',
    fullWidth: false
  },
  {
    description: 'I&#8217;m working through the list of <a href="http://www.dailyui.co/">Daily UIs</a> to improve my Front End skills and raise my awareness of the techniques and issues faced when creating common UI elements.  First up is a Sign Up Modal with a Material Design flavour.',
    hash: 'pbgreO',
    height: 490,
    title: 'Sign Up Modal',
    fullWidth: false
  },
  {
    description: 'Built using JQuery, this widget makes AJAX requests using the Wikipedia opensearch and query APIs to display user search results.  The user search function is enhanced with the JQuery autocomplete plugin. The returned results are re-ordered according to search ranking before they are displayed to the user.',
    hash: 'pjqYYv',
    height: 400,
    title: 'Wikipedia Viewer',
    fullWidth: false
  },
  {
    description: 'Another JQuery powered widget, the Twitch Status Viewer fetches and displays the current status of Twitch.tv streamers (twitchers?).  I took a mobile first approach for the design and users can filter the results based on who is online.',
    hash: 'BoWLJG',
    height: 400,
    title: 'Twitch Status Viewer',
    fullWidth: false
  },
]
