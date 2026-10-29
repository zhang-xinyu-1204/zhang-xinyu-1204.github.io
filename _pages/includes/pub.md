<section id="publications" class="content-section" aria-labelledby="publications-heading">
  <div class="section-heading-row">
    <h2 class="section-title" id="publications-heading"><span class="lang-zh">论文发表</span><span class="lang-en">Publications</span> <a class="section-more" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">[<span class="lang-zh">完整列表</span><span class="lang-en">Full List</span>]</a></h2>
  </div>
  <p class="section-note"><span class="lang-zh">† 通讯作者</span><span class="lang-en">† Corresponding author</span></p>
  <div class="publications-list">
    {% for paper in site.data.publications %}
      {% include publication.html paper=paper %}
    {% endfor %}
  </div>
</section>
