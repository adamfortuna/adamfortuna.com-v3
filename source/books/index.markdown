---
layout: app
title: "Reading List"
date: 2013-09-14 21:55
comments: false
sharing: true
footer: true
---

{% raw %}
<div id='app'></div>

<script type='text/x-handlebars' data-template-name='application'>
<div class='row'>
  <div class='col-md-10'>
    <h2>Books</h2>
    {{outlet 'books'}}
  </div>

  <div class='col-md-2'>
    <div class="list-group">
      {{ outlet 'sidebar'}}
    </div>
  </div>
</div>
</script>

<script type='text/x-handlebars' data-template-name='books'>
<ul class="list-unstyled books">
{{#each book in filteredBooks}}
  {{book-item book=book tagName='li' class='row book'}}
{{/each}}
</ul>
</script>

<script type='text/x-handlebars' data-template-name='sidebar'>
<h2>Filters</h2>
<ul class='list-unstyled'>
  <li>{{#link-to 'index' classNames="label label-default"}}All Books{{/link-to}}</li>
  <li>{{#link-to 'index' classNames="label label-default"}}Read in 2013{{/link-to}}</li>
</ul>

<h2>Genres</h2>
<ul class='list-unstyled'>
  {{#each}}
    <li>
      {{#link-to 'genre' slug classNames="label label-primary"}}
        {{name}}
      {{/link-to}}
    </li>
  {{/each}}
</div>
</script>

<script type='text/x-handlebars' data-template-name='components/book-item'>
<div class='col-xs-2'>
  <a {{bind-attr href='book.url'}} target='_blank'>
    <img {{bind-attr src='book.image_url'}} class="img-rounded"/>
  </a>
  <p class='rating'><span class='rate'>{{book.rating}}</span> / <span class='rate-outof'>5</span></p>
</div>

<div class='col-xs-10'>
  <h3>{{book.title}}</h3>
  {{#if book.review }}<p>{{book.review}}</p>{{/if}}

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
{{#link-to 'genre' genre.slug class='label label-primary'}}{{genre.name}}{{/link-to}}
</script>

<script src='/javascripts/handlebars-1.0.0.js'></script>
<script src='/javascripts/ember-1.1.1.js'></script>
<script src='/javascripts/ember-data.dev.js'></script>
<script src='/javascripts/moment.js'></script>
<script src='/javascripts/books.js'></script>
{% endraw %}