"use strict"

//URL変数を変換する為の関数(例：「?p=4」を「4」にする)
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


// list

const top_name = document.getElementById("top_name");
const prof_name = document.getElementById("prof_name");
const mainimg = document.getElementById("mainimg");
const oneword = document.getElementById("oneword");
const age_place = document.getElementById("age-place");
const hour = document.getElementById("hour");
const introduction = document.getElementById("self-introduction");
const height = document.getElementById("height");
const figure = document.getElementById("figure");
const alcohol = document.getElementById("alcohol");
const smoking = document.getElementById("smoking");
const work = document.getElementById("work");
const wish = document.getElementById("wish");

const last_login = ["オンライン","30分以内","1時間以内","3時間以内","6時間以内","1日以内","3日以内","3日以上"]; 
const figure_selects = ["細め","やや細め","普通","やや太め","太め"]; 
const alcohol_selects = ["飲む","ときどき飲む","飲まない"]; 
const smoking_selects = ["吸う","吸わない"]; 
const work_selects = ["学生","アルバイト","会社員","フリーランス","その他"]; 
const wish_selects = ["食事を楽しみたい","相手に合わせる","積極的"]; 


let persons = [
  {name : "いずみ",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i06.jpg",
  proof : false,
  login : last_login[3],
  introduction : "人とお話するのが好きです😊<br>なんでも話してくれて、どんなお話も楽しく聞いてくれる方が理想です(  ˙꒳​˙  )♡<br>年上のリードしてくれる男性とお会いしたいな〜🐶💓<br>ぜひ沢山の方と関わりたいです🌼",
  height : "150.5",
  figure : figure_selects[1],
  alcohol : alcohol_selects[2],
  smoking : smoking_selects[1],
  work : work_selects[0],
  wish : wish_selects[1]
  },
  {name : "谷元",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i05.jpg",
  proof : true,
  login : last_login[2],
  introduction : "基本インドア派なので、お家でアニメを見たり、漫画を読んだりすることが好きです🌸<br>頼れる年上の方に憧れます🥺💘<br>仲良くなれたら、一緒に漫画喫茶デートなどしたいです🥰<br>よろしくお願いします😊",
  height : "149",
  figure : figure_selects[0],
  alcohol : alcohol_selects[1],
  smoking : smoking_selects[1],
  work : work_selects[1],
  wish : wish_selects[0]
  },
  {name : "いずぽん",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i07.jpg",
  proof : false,
  login : last_login[0],
  introduction : "はじめまして！<br>数多くいらっしゃる女性の中からプロフィールをご覧いただきありがとうございます。<br><br>お菓子やアイス、ドーナツ等の甘いものが好きなので、休日は友達とカフェ巡りをしていることが多いです🥤🍩！<br>包容力のある男性に甘えたいです🥺笑<br>食べることが大好きなので、デートでも一緒にいっぱい食べてくれる方希望です🧸🎀",
  height : "151",
  figure : figure_selects[1],
  alcohol : alcohol_selects[2],
  smoking : smoking_selects[1],
  work : work_selects[4],
  wish : wish_selects[2]
  },
  {name : "雪見",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i03.jpg",
  proof : true,
  login : last_login[3],
  introduction : "海を眺めたり、ギターを弾くことが趣味です🐳！<br>少し人見知りなので、沢山話しかけて頂けると嬉しいです😂<br>どちらかといえば、年上の方が好きです🌻💗",
  height : "150",
  figure : figure_selects[1],
  alcohol : alcohol_selects[1],
  smoking : smoking_selects[1],
  work : work_selects[4],
  wish : wish_selects[1]
  },
];
