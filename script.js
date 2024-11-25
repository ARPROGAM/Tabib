// JSON Data for Episodes
const episodes = [
  {"title":"1 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/1qism.mp4"},
  {"title":"2 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/2qism.mp4"},
  {"title":"3 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/3qism.mp4"},
  {"title":"4 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/4qism.mp4"},
  {"title":"5 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/5qism.mp4"},
  {"title":"6 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/6qism.mp4"},
  {"title":"7 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/7qism.mp4"},
  {"title":"8 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/8qism.mp4"},
  {"title":"9 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/9qism.mp4"},
  {"title":"10 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/10qism.mp4"},
  {"title":"11 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/11qism.mp4"},
  {"title":"12 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/12qism.mp4"},
  {"title":"13 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/13ism.mp4"},
  {"title":"14 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/14ism.mp4"},
  {"title":"15 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/15ism.mp4"},
  {"title":"16 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/16ism.mp4"},
  {"title":"17 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/17ism.mp4"},
  {"title":"18 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/18ism.mp4"},
  {"title":"19 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/19ism.mp4"},
  {"title":"20 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/20qism.mp4"},
  {"title":"21 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/21qism.mp4"},
  {"title":"22 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/22qism.mp4"},
  {"title":"23 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/23qism.mp4"},
  {"title":"24 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/24qism.mp4"},
  {"title":"25 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/25qism.mp4"},
  {"title":"26 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/26qism.mp4"},
  {"title":"27 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/27qism.mp4"},
  {"title":"28 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/28qism.mp4"},
  {"title":"29 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/29qism.mp4"},
  {"title":"30 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/30qism.mp4"},
  {"title":"31 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/31qism.mp4"},
  {"title":"32 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/32qism.mp4"},
  {"title":"33 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/33qism.mp4"},
  {"title":"34 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/34qism.mp4"},
  {"title":"35 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/35qism.mp4"},
  {"title":"36 qism","file":"https://v.uzbeklar.biz/film44/tabib-korea/36qism.mp4"}
];

// Generate playlist
const episodeList = document.getElementById('episodeList');
episodes.forEach((episode, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = episode.title;
  listItem.dataset.file = episode.file;

  listItem.addEventListener('click', () => {
    playVideo(index);
  });

  episodeList.appendChild(listItem);
});

function playVideo(index) {
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSource = document.getElementById('videoSource');
  videoSource.src = episodes[index].file;

  document.querySelectorAll('#episodeList li').forEach(li => li.classList.remove('active'));
  document.querySelector(`#episodeList li:nth-child(${index + 1})`).classList.add('active');

  videoPlayer.load();
  videoPlayer.play();
}
