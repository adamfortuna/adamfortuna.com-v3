$(function() {
  var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: '#app'
  });


  App.Router.map(function() {
    this.resource('genre', { path: '/genres/:genre_id' })
  });
  App.Router.reopen({
    rootURL: '/books'
  });



  App.ApplicationRoute = Ember.Route.extend({
    // renderTemplate: function() {
    //   this.render('sidebar', {
    //     into: 'application',
    //     outlet: 'sidebar'
    //   });
    // },
    model: function() {
      return this.store.find('genre');
    }
  });
  App.ApplicationController = Ember.ArrayController.extend({
    sortProperties: ['name']
  });


  App.IndexRoute = Ember.Route.extend({
    renderTemplate: function() {
      this.render('books', {
        outlet: 'books',
        into: 'application'
      });
    },
    model: function() {
      return this.store.find('book');
    },
    setupController:function (controller, model) {
      this.controllerFor('books').set('model', model);
      this.controllerFor('books').set('genreFilter', null);
    }
  });



  // Used for the list of genres on the side
  App.GenreRoute = Ember.Route.extend({
    renderTemplate: function() {
      this.render('books', {
        outlet: 'books',
        into: 'application'
      });
    },
    model: function(params) {
      return params.genre_id;
    },
    setupController:function (controller, model) {
      // Todo: fix books to depend on something else?
      //this.controllerFor('books').set('model', this.store.find('book'));
      this.controllerFor('books').set('genreFilter', model);
    }
  })


  // Used by:
  //   / - Lists all books
  //   /genres/fantasy - All fantasy books
  App.BooksController = Ember.ArrayController.extend({
    sortProperties: ['finished_at'],
    sortAscending: false,

    filteredBooks: function() {
      debugger
      if(this.get('genreFilter')) {
        return this.filterProperty('slug', this.get('genreFilter'));
      } else {
        return this;
      }
    }.property('genreFilter')
  });




  // A single genre, listing all books for the genre
  App.GenresRoute = Ember.Route.extend({
    model: function(params) {
      return params.genre_id;
    },
    renderTemplate: function(controller, model) {
      // Todo
    }
  });
  App.GenresController = Ember.ArrayController.extend({
    needs: 'index',
    filteredBooks: function() {
      return this.get('index').get('model').filterProperty('title');
    }.property()
  });



  Ember.Handlebars.registerBoundHelper('formatDate', function(date, format) {
    return moment(date).format('l');
  });

  App.ApplicationAdapter = DS.FixtureAdapter.extend({});
  App.Book = DS.Model.extend({
    title: DS.attr(),
    rating: DS.attr('number'),
    review: DS.attr(),
    author: DS.attr(),
    started_at: DS.attr('date'),
    finished_at: DS.attr('date'),
    amazon_id: DS.attr(),
    image_url: DS.attr(),
    genres: DS.hasMany('genre', {async: true}),

    url: function() {
      return "http://www.amazon.com/gp/product/" + this.get('amazon_id') + "/adamfortuna-20"
    }.property('amazon_id')
  });

  App.Book.FIXTURES = [
    {
      id: 1,
      title: 'A Song of Ice and Fire: A Clash of Kings',
      author: 'George R. R. Martin',
      started_at: new Date('1/1/2013'),
      finished_at: new Date('1/9/2013'),
      rating: 4,
      review: 'If you don’t want to be spoiled on Game of Thrones on HBO, you probably need to read the books. Book 3 is still my favorite, 4 least favorite. #5 is somewhere in the middle. Don’t want to spoil anything, but to say it follows a lot of my favorite characters.',
      genres: [104, 101]
    },
    {
      id: 2,
      title: 'His Dark Materials Book 1 - The Golden Compass',
      author: 'Philip Pullman',
      started_at: new Date('1/17/2013'),
      finished_at: new Date('1/18/2013'),
      rating: 4,
      amazon_id: '0375838309',
      image_url: 'http://ecx.images-amazon.com/images/I/511RE7EZ55L._SY344_PJlook-inside-v2,TopRight,1,0_SH20_BO1,204,203,200_.jpg',
      review: 'After hearing about the religious controversy surrounding this series, I was interested. After the Catholic League described it as “Atheism for kids”, I added it to my list. The movie (which is OK, aside from rewriting the ending, and removing all mentions of religion) didn’t do it justice though. If the thought of children going off to kill god in parallel universes sounds interesting, check these out.',
      genres: [104, 101]
    },
    {
      id: 3,
      title: 'His Dark Materials Book 2 - The Subtle Knife',
      author: 'Philip Pullman',
      started_at: new Date('1/18/2013'),
      finished_at: new Date('1/23/2013'),
      rating: 5,
      genres: [104, 101]
    },
    {
      id: 4,
      title: 'His Dark Materials Book 3 - The Amber Spyglass',
      author: 'Philip Pullman',
      started_at: new Date('1/23/2013'),
      finished_at: new Date('1/27/2013'),
      rating: 4,
      genres: [104, 101]
    },
    {
      id: 5,
      title: 'Zen Mind, Beginners Mind',
      author: 'Philip Pullman',
      started_at: new Date('1/16/2013'),
      finished_at: new Date('1/17/2013'),
      rating: 3,
      genres: [105]
    }
  ]

  App.Genre = DS.Model.extend({
    name: DS.attr(),
    slug: DS.attr(),
    book: DS.belongsTo('book')
  });

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
    }
  ]
});