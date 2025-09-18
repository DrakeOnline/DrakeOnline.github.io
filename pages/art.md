---
layout: default
title: Art
permalink: /art/
---

{% for piece in site.data.art %}
<div class="art-piece">
  <div class="art-piece-info">
    <h2>{{ piece.title }}</h2>
    <p class="art-piece-date">{{ piece.date }}</p>
    <p>{{ piece.description }}</p>
    <p class="art-piece-details">
      {{ piece.medium }}<br>
      {{ piece.material }}<br>
      {{ piece.size }}
    </p>
  </div>
  <div class="art-piece-images">
    {% for image in piece.images %}
    <div class="art-piece-image">
      <a href="{{ piece.image_path }}{{ image }}" data-fancybox="gallery-{{ forloop.parentloop.index }}" data-caption="{{ piece.title }}" class="no-transition">
        <img src="{{ piece.image_path }}{{ image }}" alt="{{ piece.title }}">
      </a>
    </div>
    {% endfor %}
  </div>
</div>
{% endfor %}