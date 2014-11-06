---
layout: app
title: "Reading List"
date: 2013-09-14 21:55
comments: false
sharing: true
footer: true
runAfter: >
  <script src="/javascripts/scribe.min.js"></script>
  <script>
    angular.module('Scribe').config(['settingsProvider', function config(settingsProvider) {
      settingsProvider.setId(2419634);
      settingsProvider.setApiUrl('http://goodcache.herokuapp.com');
    }]);
  </script>
---

I listen to a lot of audiobooks. Whenever I'm driving, walking my dog or doing things around the house I'm probably listening to something. This usually means periods of lots of books with the occasional day off between series to catch up on a few podcasts. Starting in 2013, I began keeping track of what I listened to.

The [Ember.js code for this page](https://github.com/codeschool/EmberReadinglist), was used to make a number of Code School screencasts including one where I build it from scratch: [Soup to Bits: Warming Up With Ember.js](https://www.codeschool.com/code_tv/soup-to-bits-warming-up-with-ember). The Ember.js application was expanded on to add a Rails backend in the [Soup to Bits: Surviving APIs with Rails](https://www.codeschool.com/code_tv/soup-to-bits-surviving-apis-with-rails) video. The same concept was also used to build an Angular.js version in [Soup to Bits: Shaping Up With Angular.js](https://www.codeschool.com/code_tv/soup-to-bits-shaping-up-with-angular-js).

The code was recently rewritten to use AngularJS with [Scribe](https://github.com/adamfortuna/scribe). This hits a Rails API at api.adamfortuna.com and caches results from GoodReads.

{% raw %}

<div ng-app='Scribe'>
  <script type='text/ng-template' id='index.html'>
    <div>
      <h2>Books</h2>

      <ol class='breadcrumb'>
        <li>Books</li>
      </ol>
    </div>

    <div class='row'>
      <div class='col-md-8 col-sm-8'>
        <ul class='list-unstyled books'>
          <sb-review ng-repeat='review in ctrl.reviews | filter: ctrl.filter' review='review'></sb-book>
        </ul>
      </div>

      <div class='col-md-3 col-md-offset-1 col-sm-4'>
        <h3>Filter Books</h3>
        <sb-filters filter='ctrl.filter'></sb-filters>
        <sb-rating-select></sb-rating-select>
        <sb-currently-reading></sb-currently-reading>
      </div>
    </div>
  </script>

  <script type='text/ng-template' id='show.html'>
    <div>
      <h2>Books</h2>

      <ol class='breadcrumb'>
        <li><a href='#/'>Books</a></li>
        <li class='active'>{{ctrl.review.book.title}}</li>
      </ol>
    </div>

    <div class='row'>
      <div class='col-md-12'>
        <ul class='books list-unstyled'>
          <sb-review review='ctrl.review'></sb-review>

          <li class='row book'>
            <div class='col-xs-9 col-xs-offset-3 col-md-8 col-md-offset-3 col-lg-offset-2'>
              <h3>More From <a href='{{ctrl.review.link}}' target='_blank'>Goodreads</a></h3>
              <div class='description' sb-safe-html='{{ctrl.review.book.description}}'></div>

              <div>
                <h3>Genres</h3>
                <ul class='list-unstyled list-inline'>
                  <li ng-repeat='genre in ctrl.review.book.genres'>
                    <a class='label label-primary' href='' ng-click='ctrl.addFilter("genre",genre)'>{{genre}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </script>

  <div ng-view></div>
</div>

{% endraw %}
