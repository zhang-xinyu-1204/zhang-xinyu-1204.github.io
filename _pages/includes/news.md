<section id="news" class="content-section" aria-labelledby="news-heading">
  <h2 class="section-title" id="news-heading"><span class="lang-zh">最新动态</span><span class="lang-en">News</span></h2>
  <div class="news-scroll" tabindex="0" aria-label="全部动态 / All news">
  <ul class="news-list">
    {% for item in site.data.news %}
    <li><time datetime="{{ item.date | replace: '.', '-' }}">[{{ item.date }}]</time> <span class="lang-zh">{{ item.text_zh | markdownify | remove: '<p>' | remove: '</p>' }}</span><span class="lang-en">{{ item.text_en | markdownify | remove: '<p>' | remove: '</p>' }}</span></li>
    {% endfor %}
  </ul>
  </div>
</section>
