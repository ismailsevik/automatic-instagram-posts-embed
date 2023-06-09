<div class="instagram"></div>

<script>
  function embedInstagram(url, container) {
var matches = url.match(/^(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/([^\/\?]+)/i);
    if (matches) {
      var postId = matches[1];
      var embedCode = '<iframe src="https://www.instagram.com/p/' + postId + '/embed/" frameborder="0" scrolling="no" allowtransparency="true"></iframe>';
      container.innerHTML = embedCode;
    } else {
container.textContent = "Instagram içeriği bulunamadı.";
    }
  }
  // Sayfa yüklendiğinde tüm instagram URL'lerini embed et
 document.addEventListener("DOMContentLoaded", function() {
    var instagramContainers = document.getElementsByClassName("instagram");
    for (var i = 0; i < instagramContainers.length; i++) {
      var container = instagramContainers[i];
      var url = container.dataset.url;
      embedInstagram(url, container);
    }
  });
</script>
<script async src="//www.instagram.com/embed.js"></script>

