<section id="news" class="content-section" aria-labelledby="news-heading">
  <h2 class="section-title" id="news-heading"><span class="lang-zh">最新动态</span><span class="lang-en">News</span></h2>
  <ul class="news-list">
    {% for item in site.data.news limit:5 %}
    <li><time datetime="{{ item.date | replace: '.', '-' }}">{{ item.date }}</time><div><div class="lang-zh">{{ item.text_zh | markdownify }}</div><div class="lang-en">{{ item.text_en | markdownify }}</div></div></li>
    {% endfor %}
  </ul>
  <details class="news-archive">
    <summary><span class="lang-zh"><span class="when-closed">更早动态</span><span class="when-open">收起动态</span></span><span class="lang-en"><span class="when-closed">Earlier news</span><span class="when-open">Show less</span></span></summary>
    <ul class="news-list">
      {% for item in site.data.news offset:5 %}
      <li><time datetime="{{ item.date | replace: '.', '-' }}">{{ item.date }}</time><div><div class="lang-zh">{{ item.text_zh | markdownify }}</div><div class="lang-en">{{ item.text_en | markdownify }}</div></div></li>
      {% endfor %}
    </ul>
  </details>
</section>
