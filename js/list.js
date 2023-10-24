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
};


// list

const top_name = document.getElementById("top_name");
const prof_name = document.getElementById("prof_name");
const mainimg = document.getElementById("mainimg");
const oneword = document.getElementById("oneword");
const age_place = document.getElementById("age-place");
const hour = document.getElementById("hour");
const introduction = document.getElementById("self-introduction");
const height = document.getElementById("height");
const hobby = document.getElementById("hobby");
const favorite_type = document.getElementById("favorite_type");
const favorite_sweets = document.getElementById("favorite_sweets");
const favorite_animal = document.getElementById("favorite_animal");
const favorite_chara = document.getElementById("favorite_chara");

const last_login = ["オンライン","30分以内","1時間以内","3時間以内","6時間以内","1日以内","3日以内","3日以上"]; 
const hobby_selects = ["ピクミン","ウインドウショッピング","アニメ・漫画","お菓子作り","ギター・映画・<br>マリンスポーツ・<br>バイク・ディズニー"]; 
const favorite_type_selects = ["年上","優しい人","ヒゲがない人","動物好きな人","年下"]; 
const favorite_sweets_selects = ["アイス","ドーナツ","シュークリーム","クッキー","パフェ"]; 
const favorite_animal_selects = ["犬","アザラシ","モルモット","ペンギン","ウルトラザウルス"]; 
const favorite_chara_selects = ["ちいかわ","ピクミン","ダッフィー","チップとデール","矢吹丈"]; 


let persons = [
  {name : "いずみ",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i06.jpg",
  proof : false,
  login : last_login[3],
  introduction : "初めまして。プロフィールを見てくださりありがとうございます🥰<br><br>現在、19歳の短大生です。将来はパティシエを目指しています。<br>また、暖かい家庭を築くことが夢なので、子供も早めに授かれたらなあと考えています💭<br>よろしくお願い致します。",
  height : "150.5",
  hobby : hobby_selects[3],
  favorite_type : favorite_type_selects[3],
  favorite_sweets : favorite_sweets_selects[0],
  favorite_animal : favorite_animal_selects[3],
  favorite_chara : favorite_chara_selects[3]
  },
  {name : "谷本",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i05.jpg",
  proof : false,
  login : last_login[2],
  introduction : "結婚を最近意識し始めたので登録してみました🌸。<br><br>動物が好きなので、将来犬や猫、うさぎなどを一緒に飼いたいです🐶。<br>動物好きの方とお会いしたいと考えています。<br>よろしくお願いします。",
  height : "149",
  hobby : hobby_selects[2],
  favorite_type : favorite_type_selects[0],
  favorite_sweets : favorite_sweets_selects[2],
  favorite_animal : favorite_animal_selects[1],
  favorite_chara : favorite_chara_selects[1]
  },
  {name : "いずぽん",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i07.jpg",
  proof : false,
  login : last_login[0],
  introduction : "こちらのアプリだと年上の男性と出会えそうだったので登録しました😳。<br><br>私自身かなり奥手なので、リードして下さるような方とお会いできたら良いなと思っています。",
  height : "151",
  hobby : hobby_selects[1],
  favorite_type : favorite_type_selects[2],
  favorite_sweets : favorite_sweets_selects[3],
  favorite_animal : favorite_animal_selects[2],
  favorite_chara : favorite_chara_selects[0]
  },
  {name : "雪見",
  age : "19",
  place : "岐阜県",
  oneword : "",
  img : "img/i03.jpg",
  proof : false,
  login : last_login[3],
  introduction : "カフェ巡りが趣味の19歳学生です。<br><br>休日は色々なお店でケーキを食べ歩いたりしています🍰。<br>食べることが好きなので、美味しいそうに何でも食べるような方とお会いしたいです。",
  height : "150",
  hobby : hobby_selects[0],
  favorite_type : favorite_type_selects[1],
  favorite_sweets : favorite_sweets_selects[1],
  favorite_animal : favorite_animal_selects[0],
  favorite_chara : favorite_chara_selects[2]
  },
  // {name : "JOE",
  // age : "43",
  // place : "愛知",
  // oneword : "",
  // img : "img/i00.jpg",
  // proof : false,
  // login : last_login[0],
  // introduction : "会社経営をしています。<br><br>ギター、カメラ、映画、マリンスポーツ<br>登山、ディズニーなど多趣味な方なので<br>一緒に楽しめたら嬉しいです。<br><br>よろしくお願いします。",
  // height : "170",
  // hobby : hobby_selects[4],
  // favorite_type : favorite_type_selects[4],
  // favorite_sweets : favorite_sweets_selects[4],
  // favorite_animal : favorite_animal_selects[4],
  // favorite_chara : favorite_chara_selects[4]
  // },
];
