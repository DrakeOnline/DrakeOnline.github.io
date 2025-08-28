---
layout: default
---

# Welcome to Drake Makes

This is my personal place on the web where I write about life, projects, and anything else I can think of.

## Recent Posts

<ul class="post-list">
  {% for post in site.posts limit:5 %}
    <li>
      <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a>
    </li>
  {% endfor %}
</ul>
