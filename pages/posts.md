---
layout: default
permalink: /posts/
---

# All Posts

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a>
    </li>
  {% endfor %}
</ul>
