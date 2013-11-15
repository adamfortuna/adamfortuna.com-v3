var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  rootElement: '#app'
});

App.Router.map(function() {
  this.resource('genre', { path: '/genres/:genre_id' })
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    this.controllerFor('genres').set('model', this.store.find('genre'));
    this.controllerFor('books').set('model', this.store.find('book'));
  }
});

// Sidebar for genres
App.GenresController = Ember.ArrayController.extend({
  sortProperties: ['name']
});

App.IndexRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('books', {
      outlet: 'books',
      into: 'application',
      controller: 'books'
    });
    this.render('index');
  },
  setupController:function (controller, model) {
    this.controllerFor('books').set('filterProperty', null);
  }
});

// All books for a genre
App.GenreRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('books', {
      outlet: 'books',
      into: 'application',
      controller: 'books'
    });
    this.render('genre');
  },
  model: function(params) {
    return this.store.find('genre', params.genre_id);
  },
  setupController:function (controller, model) {
    controller.set('model', model);
    this.controllerFor('books').set('genre', model);
    this.controllerFor('books').set('filterProperty', 'genre');
  }
});
App.GenreController = Ember.ObjectController.extend({});


// Used by:
//   / - Lists all books
//   /genres/fantasy - All fantasy books
App.BooksController = Ember.ArrayController.extend({
  sortProperties: ['finished_at'],
  sortAscending: false,
  needs: ['genre'],

  filteredContent: function() {
    var filter = this.get('filterProperty');
    if(filter == 'genre') {
      var genreFilter = this.get('genre.slug');
      return this.filter(function(item) {
        var genres = item.get('genres').filterProperty('slug', genreFilter)
        return genres.get('length') > 0 ? true : false;
      });
    } else {
      return this;
    }
  }.property('@each', 'filterProperty', 'genre.slug')
});


App.BookItemComponent = Ember.Component.extend({
  classNameBindings: ['ratingClass'],
  ratingClass: function() {
    return "rating-" + this.get('controller.book.rating');
  }.property('rating')
});

Ember.Handlebars.registerBoundHelper('formatDate', function(date, format) {
  return moment(date).format('l');
});

Ember.Handlebars.registerBoundHelper('markdown', function(text) {
  return new Handlebars.SafeString(markdown.toHTML(text));
});

App.Book = DS.Model.extend({
  title: DS.attr(),
  rating: DS.attr('number'),
  review: DS.attr(),
  author: DS.attr(),
  started_at: DS.attr('date'),
  finished_at: DS.attr('date'),
  amazon_id: DS.attr(),
  buy_url: DS.attr(),
  isAudiobook: DS.attr('boolean'),
  absolute_image_url: DS.attr(), 
  genres: DS.hasMany('genre', {async: true}),

  url: function() {
    if(this.get('buy_url')) {
      return this.get('buy_url');
    } else {
      return "http://www.amazon.com/gp/product/" + this.get('amazon_id') + "/adamfortuna-20"
    }
  }.property('amazon_id', 'buy_url'),

  image_url: function() {
    if(this.get('absolute_image_url')) {
      return this.get('absolute_image_url');
    } else if(this.get('amazon_id')) {
      return "http://images.amazon.com/images/P/" + this.get('amazon_id') + ".01.ZTZZZZZZ.jpg";
    }
  }.property('amazon_id', 'absolute_image_url')
});

App.Genre = DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  book: DS.belongsTo('book')
});