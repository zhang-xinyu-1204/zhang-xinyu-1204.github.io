<section id="publications" class="content-section" aria-labelledby="publications-heading">
  <div class="section-heading-row">
    <h2 class="section-title" id="publications-heading"><span class="lang-zh">代表论文</span><span class="lang-en">Selected Publications</span></h2>
    <a class="section-more" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
  </div>
  <p class="section-note"><span class="lang-zh">† 通讯作者</span><span class="lang-en">† Corresponding author</span></p>
  <div class="selected-publications">
    {% assign selected_papers = site.data.publications | where: 'selected', true | sort: 'selected_order' %}
    {% for paper in selected_papers %}
      {% include publication.html paper=paper %}
    {% endfor %}
  </div>
  <details class="publication-archive" id="full-publications">
    <summary><span class="lang-zh"><span class="when-closed">全部论文</span><span class="when-open">收起完整列表</span></span><span class="lang-en"><span class="when-closed">All publications</span><span class="when-open">Collapse full list</span></span><span class="archive-count">{{ site.data.publications | size }}</span></summary>
    <div class="publication-years">
      {% assign publication_years = site.data.publications | group_by: 'year' %}
      {% for year in publication_years %}
      <div class="publication-year">
        <h3 class="year-heading">{{ year.name }}<span>{{ year.items | size }} <span class="lang-zh">篇</span><span class="lang-en">papers</span></span></h3>
        {% for paper in year.items %}
          {% include publication.html paper=paper archive=true %}
        {% endfor %}
      </div>
      {% endfor %}
    </div>
  </details>
</section>
