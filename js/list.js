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
  introduction : "初めまして。プロフィールを見てくださりありがとうございます🥰<br>現在、19歳の短大生です。将来はパティシエを目指しています。<br>また、暖かい家庭を築くことが夢なので、子供も早めに授かれたらなあと考えています💭<br>よろしくお願い致します。",
  height : "150.5",
  figure : figure_selects[1],
  alcohol : alcohol_selects[2],
  smoking : smoking_selects[1],
  work : work_selects[0],
  wish : wish_selects[1]
  },
  {name : "谷本",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i05.jpg",
  proof : true,
  login : last_login[2],
  introduction : "結婚を最近意識し始めたので登録してみました🌸。<br>動物が好きなので、将来犬や猫、うさぎなどを一緒に飼いたいです🐶。<br>動物好きの方とお会いしたいと考えています。<br>よろしくお願いします。",
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
  introduction : "こちらのアプリだと年上の男性と出会えそうだったので登録しました😳。<br>私自身かなり奥手なので、リードして下さるような方とお会いできたら良いなと思っています。",
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
  introduction : "カフェ巡りが趣味の19歳学生です。<br>休日は色々なお店でケーキを食べ歩いたりしています🍰。<br>食べることが好きなので、美味しいそうに何でも食べるような方とお会いしたいです。",
  height : "150",
  figure : figure_selects[1],
  alcohol : alcohol_selects[1],
  smoking : smoking_selects[1],
  work : work_selects[4],
  wish : wish_selects[1]
  },
];
