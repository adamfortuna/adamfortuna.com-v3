App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.Book.FIXTURES = [
  {
    id: 1,
    title: 'A Dance with Dragons: A Song of Ice and Fire',
    author: 'George R. R. Martin',
    started_at: new Date('12/28/2012'),
    finished_at: new Date('1/9/2013'),
    rating: 4,
    review: 'If you don’t want to be spoiled on Game of Thrones on HBO, you probably need to read the books. Book 3 is still my favorite, 4 least favorite. #5 is somewhere in the middle. Don’t want to spoil anything, but to say it follows a lot of my favorite characters.',
    genres: [101],
    amazon_id: '0553582011',
    isAudiobook: true
  },
  {
    id: 2,
    title: 'The Golden Compass: His Dark Materials',
    author: 'Philip Pullman',
    started_at: new Date('1/17/2013'),
    finished_at: new Date('1/18/2013'),
    rating: 4,
    review: 'After hearing about the religious controversy surrounding this series, I was interested. After the Catholic League described it as “Atheism for kids”, I added it to my list. The movie (which is OK, aside from rewriting the ending, and removing all mentions of religion) didn’t do it justice though. If the thought of children going off to kill god in parallel universes sounds interesting, check these out.',
    genres: [101],
    amazon_id: '0440238137',
    isAudiobook: true
  },
  {
    id: 3,
    title: 'The Subtle Knife: His Dark Materials',
    author: 'Philip Pullman',
    started_at: new Date('1/18/2013'),
    finished_at: new Date('1/23/2013'),
    rating: 5,
    genres: [101],
    amazon_id: '044041833X',
    isAudiobook: true,
    review: "My favorite book of the series, but I was reluctant to like it at first. It does a great job of introducing new characters and expanding the world without losing the momentum from the first book."
  },
  {
    id: 4,
    title: 'The Amber Spyglass: His Dark Materials',
    author: 'Philip Pullman',
    started_at: new Date('1/23/2013'),
    finished_at: new Date('1/27/2013'),
    rating: 3,
    genres: [101],
    amazon_id: '0440418569',
    isAudiobook: true,
    review: "Not as amazing as the first two, but does a good job wrapping up the series."
  },
  {
    id: 5,
    title: 'Zen Mind, Beginners Mind',
    author: 'Philip Pullman',
    author: 'Shunryu Suzuki',
    started_at: new Date('1/16/2013'),
    finished_at: new Date('1/17/2013'),
    rating: 3,
    genres: [105],
    amazon_id: '1590308492',
    isAudiobook: true,
    review: "At only 3 hours, this is a short introduction to Zen in the form of a collection of talks."
  },
  {
    id: 6,
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    started_at: new Date('1/09/2013'),
    finished_at: new Date('1/16/2013'),
    rating: 4,
    genres: [102],
    review: 'As biographies go, this one was a lot of fun. Unfortunately, nearly every anecdote was something I’d read before, but there was still much in Jobs Next and Pixar years that was great to learn about.',
    amazon_id: '1442369051',
    isAudiobook: true
  },
  {
    id: 7,
    title: 'iWoz - How I Invented the Personal Computer and Had Fun Along the Way',
    author: 'Steve Wozniak',
    started_at: new Date('1/28/2013'),
    finished_at: new Date('1/29/2013'),
    rating: 3,
    genres: [102],
    amazon_id: '140015328X',
    isAudiobook: true
  },
  {
    id: 8,
    title: 'Autobiography of a Yogi',
    author: 'Paramahansa Yogananda',
    started_at: new Date('7/01/2013'),
    finished_at: new Date('7/11/2013'),
    rating: 2,
    genres: [10],
    amazon_id: '0876120796',
    isAudiobook: true,
    review: "When I learned that Steve Jobs re-read this book each year and the autiobook is read by Ben Kingsley, I knew I had to check it out. It proved to be more religious than I expected, relying on faith to explain much. Reading this helps to understand how Jobs could persue alternative medicine when diagnosed with cancer."
  },
  {
    id: 9,
    title: 'An Appetite for Wonder: The Making of a Scientist',
    author: 'Richard Dawkins',
    started_at: new Date('10/27/2013'),
    finished_at: new Date('11/03/2013'),
    rating: 1,
    genres: [102],
    amazon_id: '0062225790',
    isAudiobook: true,
    review: "Being an amazing writer on religion led me to reading everything Dawkins has written. This biography details his life ansd inspiration that drove him towards a life in science. Interesting subject, but reading about years in boarding school and all about academia wasn't that interesting to me. His background in coding was the most interesting part, but covered quickly."
  },
  {
    id: 10,
    title: 'The Speaker for the Dead',
    author: 'Orson Scott Card',
    started_at: new Date('1/29/2013'),
    finished_at: new Date('1/31/2013'),
    rating: 5,
    genres: [100],
    amazon_id: '0812550757',
    isAudiobook: true
  },
  {
    id: 11,
    title: 'Xenocide',
    author: 'Orson Scott Card',
    started_at: new Date('1/31/2013'),
    finished_at: new Date('2/06/2013'),
    rating: 4,
    genres: [100],
    amazon_id: '0812509250',
    isAudiobook: true
  },
  {
    id: 12,
    title: 'Children of the Mind',
    author: 'Orson Scott Card',
    started_at: new Date('2/06/2013'),
    finished_at: new Date('2/11/2013'),
    rating: 2,
    genres: [100],
    review: "Never has a book been so good and so bad all at once. After finishing the first two in the Speaker series, I couldn't wait to read the conclusion. Although I did thoroughly enjoy the overall story, the pacing and focus was too spread out for me to enjoy this one in the same way.",
    amazon_id: '0812522397',
    isAudiobook: true
  },
  {
    id: 13,
    title: 'Anathem',
    author: 'Neal Stephenson',
    started_at: new Date('2/12/2013'),
    finished_at: new Date('2/21/2013'),
    rating: 5,
    genres: [100],
    review: "On an episode ( Think Relevance Podcast ) of the Think Relevance Podcast, they mentioned a book where monk chants were used to convey and solve mathematical problems. That was the first I’d heard of Neal Stephenson, and knew I had to check it out. The Anathem world is different from our own. It’s a world where scientists and mathematicians live in the equivalent of buddhist monasteries with limited access to the outside world — some only interacting with it every 100 years. The abundance of made up terminology takes some getting used to in this book, but it’s worth the ride.",
    amazon_id: '006147410X',
    isAudiobook: true
  },
  {
    id: 14,
    title: 'Snow Crash',
    author: 'Neal Stephenson',
    started_at: new Date('2/22/2013'),
    finished_at: new Date('2/28/2013'),
    rating: 2,
    genres: [100],
    review: "Pizza delivery by the mob, a character named Hiro Protagonist, Motorcycle riding, samurai sword wielding characters - I’m not sure this story ages that well. Reading it as a teenager would’ve been better, but for now it was tough to make it through without rolling my eyes repeatedly.",
    amazon_id: '0553380958',
    isAudiobook: true
  },
  {
    id: 15,
    title: 'Cryptonomicon',
    author: 'Neal Stephenson',
    started_at: new Date('5/27/2013'),
    finished_at: new Date('6/26/2013'),
    rating: 4,
    genres: [100],
    review: "Another Neal Stephenson story following 2 story lines: one following code breakers in World War II, another a group of dot com entrepreneurs. Featuring fictionalized versions of names from the time including Alan Turing made it easier to  identify with the characters. The first half of this very long book was tough to get through, with most of the payoff towards the end. The detailed descriptions of cryptography and theories about a digital currency were the most interesting part.",
    amazon_id: '0060512806',
    isAudiobook: true
  },
  {
    id: 16,
    title: 'Foundation',
    author: 'Isaac Asimov',
    started_at: new Date('5/21/2013'),
    finished_at: new Date('5/21/2013'),
    rating: 4,
    genres: [100],
    review: "When looking into Sci-Fi books that I should have already read, this trilogy kept coming up. It won the Hugo award for \"Best Trilogy\" - an award created just to give it to this series. It was short, but lived up to the hype. The premise relies on “psychohistory”, a way of mathematically predicting the future. The first book was actually based on a number of short stories and parallels the fall of Rome. I enjoyed the series, but not enough to read the other 11 books in the series.",
    amazon_id: '0553293354',
    isAudiobook: true
  },
  {
    id: 17,
    title: 'Second Foundation',
    author: 'Isaac Asimov',
    started_at: new Date('5/22/2013'),
    finished_at: new Date('5/23/2013'),
    rating: 4,
    genres: [100],
    amazon_id: '0553293362',
    isAudiobook: true
  },
  {
    id: 18,
    title: 'Foundation and Empire',
    author: 'Isaac Asimov',
    started_at: new Date('5/23/2013'),
    finished_at: new Date('5/27/2013'),
    rating: 3,
    genres: [100],
    amazon_id: '0553293370',
    isAudiobook: true
  },
  {
    id: 19,
    title: 'Ringworld',
    author: 'Larry Niven',
    started_at: new Date('6/26/2013'),
    finished_at: new Date('7/01/2013'),
    rating: 2,
    genres: [100],
    review: "I’d heard the Sci-Fi channel was in the process of making this book into a mini-series and decided to give it a shot. Being an inspiration for Halo also tipped my interest. This one follows the idea of a Dyson Ring, which has always been an intriguing topic to me. The idea that one Dyson Ring could have the habitable area of 3 million earth-size planets is mind-blowing. The world was more interesting than the characters, unfortunately. There is some controversy about the minimized role of women in this book, which I’d also agree with.",
    amazon_id: '0345333926',
    isAudiobook: true
  },
  {
    id: 20,
    title: 'Hyperion',
    author: 'Dan Simmons',
    started_at: new Date('7/12/2013'),
    finished_at: new Date('7/23/2013'),
    rating: 5,
    genres: [100],
    amazon_id: '0553283685',
    isAudiobook: true,
    review: "Probably my favorite science fiction book (and series) I've ever read. Hyperion is written in a style similar to The Canterbury Tales, in which a series of stories are told by the main characters. Each story is a gem in itself, but alude to the larger storyline. The scope of the story is ambitious - spanning time, planets religion and love."
  },
  {
    id: 21,
    title: 'Fall of Hyperion',
    author: 'Dan Simmons',
    started_at: new Date('7/23/2013'),
    finished_at: new Date('8/09/2013'),
    rating: 4,
    genres: [100],
    amazon_id: '0553288202',
    isAudiobook: true,
    review: "Not a sequel, but the second half of the first book. More conventional storytelling than Hyperion, but in the same tone."
  },
  {
    id: 22,
    title: 'Endymion',
    author: 'Dan Simmons',
    started_at: new Date('8/12/2013'),
    finished_at: new Date('8/20/2013'),
    rating: 4,
    genres: [100],
    amazon_id: '0553572946',
    isAudiobook: true,
    review: "Expanding on the Hyperion universe while introducing new realistic and thoughtful characters."
  },
  {
    id: 23,
    title: 'Rise of Endymion',
    author: 'Dan Simmons',
    started_at: new Date('8/21/2013'),
    finished_at: new Date('8/29/2013'),
    rating: 5,
    genres: [100],
    amazon_id: '0553572989',
    isAudiobook: true,
    review: "As last books in a series go, this was the most rewarding ending I've ever read. Topics introduced at the beginning of book 4 are handled. Topics that other authors might spend entire chapters on are only touched on briefly, and left for the reader to expand on."
  },
  {
    id: 24,
    title: 'Super Freakonomics',
    author: 'Stephen Dubner',
    started_at: new Date('2/21/2013'),
    finished_at: new Date('2/21/2013'),
    rating: 3,
    genres: [103],
    amazon_id: 'B008SLBARA',
    isAudiobook: true,
    review: "Not as amazing as the first one, but tackling more interesting problems. If you listen to the Freakanomics podcast, most of this will be familiar."
  },
  {
    id: 25,
    title: 'Maphead',
    author: 'Ken Jennings',
    started_at: new Date('5/11/2013'),
    finished_at: new Date('5/16/2013'),
    rating: 5,
    genres: [103],
    review: "Ken Jennings is hilarious. Back when he was on Jeopardy I would watch everyday (and still do occasionally). If you want to get a dose is his humor, check out his Reddit Ask Me Anything. I’ve always loved maps, so this book hit a sweet spot for me. I remember being the navigator on road trips as a kid, winning the “Pride” award for geography in elementary school (whatever that is) and hacking on Google Maps before they put out an official API. Somehow this book tied into everything I love about maps and exploration. Highly recommend it.",
    amazon_id: 'B00740G620',
    isAudiobook: true
  },
  {
    id: 26,
    title: 'The Signal and the Noise',
    author: 'Nate Silver',
    started_at: new Date('5/16/2013'),
    finished_at: new Date('5/20/2013'),
    rating: 3,
    genres: [103],
    review: "The first 3 chapters of this one were my favorites.",
    amazon_id: '159420411X',
    isAudiobook: true
  },
  {
    id: 27,
    title: 'The One World Schoolhouse: Education Reimagined',
    author: 'Salman Khan',
    started_at: new Date('10/22/2013'),
    finished_at: new Date('10/25/2013'),
    rating: 4,
    genres: [103],
    review: "Both  biography of Salman Khan, and the start of Khan Academy, and a look at Khan’s ideal world for education. If you’re curious about changing education, with the help of technology, this is a definite must read. Even though the education target is different from something like Code School, many of the ideas work in both settings.",
    amazon_id: '1455508381',
    isAudiobook: true
  },
  {
    id: 28,
    title: 'Fight Club',
    author: 'Chuck Palahniuk',
    started_at: new Date('5/27/2013'),
    finished_at: new Date('5/28/2013'),
    rating: 2,
    genres: [104],
    review: "Fight Club is my favorite movie. The book was all over the place — like the movie. Somehow the format fit the screen better for me.",
    amazon_id: '0393327345',
    isAudiobook: true
  },
  {
    id: 29,
    title: 'I, Robot',
    author: 'Isaac Asimov',
    started_at: new Date('11/03/2013'),
    finished_at: new Date('11/08/2013'),
    rating: 5,
    genres: [100],
    review: "Reading this reminded me of [The Daily WTF](http://thedailywtf.com/) where a weird problem is presented, and eventually solved. That's much of the format of this series of short stories. The book is a combination of various parts of these 9 stores, which are considered the beginning of Asimovs Robot/Empire/Foundation series.",
    amazon_id: '0553294385',
    isAudiobook: true
  },
  {
    id: 30,
    title: 'Caves of Steel',
    author: 'Isaac Asimov',
    started_at: new Date('11/08/2013'),
    finished_at: new Date('11/11/2013'),
    rating: 4,
    genres: [100],
    review: "This first book in Asimovs robot is more a detective novel than a serious sci-fi story, but it does set the stage for the world.",
    amazon_id: '0553293400',
    isAudiobook: true
  },
  {
    id: 31,
    title: 'Teaching Minds: How Cognitive Science Can Save Our Schools',
    author: 'Roger Schank',
    started_at: new Date('11/11/2013'),
    finished_at: new Date('11/14/2013'),
    rating: 2,
    genres: [103],
    review: "Most useful takeaways? Give people problems to solve. Show what they'll be building. When students are wrong, ask them questions rather than telling them the answer.",
    amazon_id: '0807752665',
    isAudiobook: true
  },
  {
    id: 32,
    title: 'Becoming a Supple Leopard',
    author: 'Kelly Starrett',
    started_at: new Date('09/22/2013'),
    finished_at: new Date('10/10/2013'),
    rating: 5,
    genres: [103],
    review: "The best fitness book I've ever read by far. Also extremely useful as someone who does CrossFit, as it goes into depth on most of the common movements.",
    amazon_id: '1936608588',
    isAudiobook: false
  },
  {
    id: 33,
    title: 'Heretical Guide To Ember JS',
    author: 'Giles Bowkett',
    started_at: new Date('10/16/2013'),
    finished_at: new Date('10/20/2013'),
    rating: 4,
    genres: [106],
    review: "One of the two books currently out about Ember.js. Better of the two for sure, and analyzes the different parts of Ember comparing them to Ruby on Rails. If you're a Rails dev looking to get into Ember, this is a good start.",
    isAudiobook: false,
    buy_url: "http://gilesbowkett.blogspot.com/2013/06/heretical-guide-to-ember-js.html"
  },
  {
    id: 34,
    title: 'Ember.js In Action',
    author: 'Joachim Haagen Skeie',
    started_at: new Date('10/15/2013'),
    finished_at: new Date('10/22/2013'),
    rating: 0,
    genres: [106],
    review: "This book is unreleased, so I'll wait to give a rating on it yet.",
    isAudiobook: false,
    buy_url: "http://www.manning.com/skeie/",
    absolute_image_url: "/images/books/ember_in_action.jpg"

  },
  {
    id: 35,
    title: 'Jony Ive',
    author: 'Joachim Haagen Skeie',
    started_at: new Date('11/14/2013'),
    finished_at: new Date('11/18/2013'),
    rating: 2,
    genres: [102],
    amazon_id: '159184617X',
    isAudiobook: true
  },
  {
    id: 36,
    title: 'The Naked Sun',
    author: 'Joachim Haagen Skeie',
    started_at: new Date('11/18/2013'),
    finished_at: new Date('11/21/2013'),
    rating: 4,
    genres: [100],
    amazon_id: '0553293397',
    isAudiobook: true
  },
  {
    id: 37,
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    started_at: new Date('11/21/2013'),
    finished_at: new Date('11/30/2013'),
    rating: 3,
    genres: [100],
    amazon_id: '038549081X',
    isAudiobook: true
  },
  {
    id: 38,
    title: 'The Art of Travel',
    author: 'Alain Du Botton',
    started_at: new Date('11/30/2013'),
    finished_at: new Date('12/04/2013'),
    rating: 2,
    genres: [103],
    amazon_id: '0375725342',
    isAudiobook: true
  },
  {
    id: 39,
    title: 'The Robots of Dawn',
    author: 'Isaac Asimov',
    started_at: new Date('12/04/2013'),
    finished_at: new Date('12/08/2013'),
    rating: 4,
    genres: [100],
    amazon_id: '0553299492',
    isAudiobook: true
  },
  {
    id: 40,
    title: 'The Currents of Space',
    author: 'Isaac Asimov',
    started_at: new Date('12/09/2013'),
    finished_at: new Date('12/11/2013'),
    rating: 3,
    genres: [100],
    amazon_id: '0765319179',
    isAudiobook: true
  },
  {
    id: 41,
    title: 'The Stars, Like Dust',
    author: 'Isaac Asimov',
    started_at: new Date('12/12/2013'),
    finished_at: new Date('12/17/2013'),
    rating: 1,
    genres: [100],
    amazon_id: '0765319152',
    isAudiobook: true
  },
  {
    id: 42,
    title: 'Predictably Irrational',
    author: 'Dan Ariely',
    started_at: new Date('12/17/2013'),
    finished_at: new Date('12/19/2013'),
    rating: 3,
    genres: [103],
    amazon_id: '0061353248',
    isAudiobook: true
  },
  {
    id: 43,
    title: 'Bossypants',
    author: 'Tina Fey',
    started_at: new Date('12/19/2013'),
    finished_at: new Date('12/23/2013'),
    rating: 5,
    genres: [103],
    amazon_id: '0316056898',
    isAudiobook: true
  }
];

App.Genre.FIXTURES = [
  {
    id: 100,
    name: 'Science Fiction',
    slug: 'sci-fi'
  },
  {
    id: 101,
    name: 'Fantasy',
    slug: 'fantasy'
  },
  {
    id: 102,
    name: 'Biography',
    slug: 'biography'
  },
  {
    id: 103,
    name: 'Non-Fiction',
    slug: 'non-fiction'
  },
  {
    id: 104,
    name: 'Fiction',
    slug: 'fiction'
  },
  {
    id: 105,
    name: 'Spiritual',
    slug: 'spiritual'
  },
  {
    id: 106,
    name: 'Technical',
    slug: 'technical'
  }
];