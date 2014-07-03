---
layout: app
title: "Reading List"
date: 2013-09-14 21:55
comments: false
sharing: true
footer: true
runAfter: >
  <script src="/javascripts/books-min.js"></script>
---

I listen to a lot of audiobooks. Whenever I'm driving, walking my dog or doing things around the house I'm probably listening to something. This usually means periods of lots of books with the occasional day off between series to catch up on a few podcasts. Starting in 2013, I began keeping track of what I listened to.

The [Ember.js code for this page](https://github.com/codeschool/EmberReadinglist), was used to make a number of Code School screencasts including one where I build it from scratch: [Soup to Bits: Warming Up With Ember.js](https://www.codeschool.com/code_tv/soup-to-bits-warming-up-with-ember). The Ember.js application was expanded on to add a Rails backend in the [Soup to Bits: Surviving APIs with Rails](https://www.codeschool.com/code_tv/soup-to-bits-surviving-apis-with-rails) video. The same concept was also used to build an Angular.js version in [Soup to Bits: Shaping Up With Angular.js](https://www.codeschool.com/code_tv/soup-to-bits-shaping-up-with-angular-js).

{% raw %}
<div id='app'></div>

<script type='text/x-handlebars' data-template-name='application'>
<div class='row'>
  <div class='col-md-10'>
    {{outlet}}
    {{outlet 'books'}}
  </div>

  <div class='col-md-2'>
    <div class="list-group">
      {{render 'genres'}}
    </div>
  </div>
</div>
</script>

<script type='text/x-handlebars' data-template-name='books'>
<ul class="list-unstyled books">
{{#each filteredContent}}
  {{book-item book=this tagName='li' class='row book'}}
{{/each}}
</ul>
</script>

<script type='text/x-handlebars' data-template-name='index'>
  <ol class="breadcrumb">
    <li>Books</li>
  </ol>
</script>

<script type='text/x-handlebars' data-template-name='genre'>
  <ol class="breadcrumb">
    <li>{{#link-to 'index'}}Books{{/link-to}}</li>
    <li>{{name}}</li>
  </ol>
</script>

<script type='text/x-handlebars' data-template-name='genres'>
<h2>Filters</h2>
<ul class='list-unstyled'>
  <li id='filter-all'>{{#link-to 'index' classNames="label label-default"}}All Books{{/link-to}}</li>
  <li id='filter-read-in-2013'>{{#link-to 'index' classNames="label label-default"}}Read in 2013{{/link-to}}</li>
</ul>

<div id='filter-genres'>
  <h2>Genres</h2>
  <ul class='list-unstyled'>
    {{#each}}
      <li>
        {{#link-to 'genre' this classNames="label label-primary"}}
          {{name}}
        {{/link-to}}
      </li>
    {{/each}}
  </div>
</div>

<div id='filter-ratings'>
  <h2>Rating</h2>
  <ul class='list-unstyled'>
    <li>{{#link-to 'index' classNames="label label-success"}}5{{/link-to}}</li>
    <li>{{#link-to 'index' classNames="label label-success"}}4+{{/link-to}}</li>
    <li>{{#link-to 'index' classNames="label label-success"}}3+{{/link-to}}</li>
    <li>{{#link-to 'index' classNames="label label-success"}}2+{{/link-to}}</li>
    <li>{{#link-to 'index' classNames="label label-success"}}1+{{/link-to}}</li>
  </ul>
</div>

<div id='filter-format'>
  <h2>Format</h2>
  <ul class='list-unstyled'>
    <li>{{#link-to 'index' classNames="label label-info"}}Audiobook{{/link-to}}</li>
    <li>{{#link-to 'index' classNames="label label-info"}}Book{{/link-to}}</li>
  </ul>
</div>
</script>

<script type='text/x-handlebars' data-template-name='components/book-item'>
<div class='col-xs-2'>
  <a {{bind-attr href='book.url'}} target='_blank'>
    <img {{bind-attr src='book.image_url'}} />
  </a>
  <p class='rating'><span class='rate'>{{book.rating}}</span> / <span class='rate-outof'>5</span></p>
</div>

<div class='col-xs-10'>
  <h3>{{book.title}}</h3>
  {{#if book.review }}{{markdown book.review}}{{/if}}

  <p class='meta'>
    <ul class='list-inline genres'>
      {{#each genre in book.genres}}
        {{book-genre genre=genre tagName='li'}}
      {{/each}}
    </ul>
    <span class='date-read'>
      {{#if book.finished_at }}
        Read from {{formatDate book.started_at}} - {{formatDate book.finished_at}}.
      {{else}}
        Started on {{formatDate book.started_at}}, reading now.
      {{/if}}
    </span>
  </p>
</div>
</script>

<script type='text/x-handlebars' data-template-name='components/book-genre'>
{{#link-to 'genre' genre class='label label-primary'}}{{genre.name}}{{/link-to}}
</script>
{% endraw %}
