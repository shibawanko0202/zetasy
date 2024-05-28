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


let persons = [
  {name : "A子",
  age : "27",
  place : "京都府",
  oneword : "",
  img : "img/p01.jpg",
  proof : false,
  login : last_login[3],
  introduction : "初めまして。プロフィールを見てくださりありがとうございます🥰<br><br>暖かい家庭を築くことが夢なので、子供も早めに授かれたらなあと考えています💭<br>よろしくお願い致します。",
  height : "157",
  hobby : "カフェ",
  favorite_type : "ヒゲがない人",
  favorite_sweets : "パフェ",
  favorite_animal : "犬",
  favorite_chara : "ちいかわ"
  },
  {name : "B美",
  age : "25",
  place : "愛知県",
  oneword : "",
  img : "img/p02.jpg",
  proof : false,
  login : last_login[2],
  introduction : "結婚を最近意識し始めたので登録してみました🌸。<br><br>動物が好きなので、将来犬や猫、うさぎなどを一緒に飼いたいです🐶。<br>動物好きの方とお会いしたいと考えています。<br>よろしくお願いします。",
  height : "149",
  hobby : "ウインドウショッピング",
  favorite_type : "動物好きな人",
  favorite_sweets : "ドーナツ",
  favorite_animal : "アザラシ",
  favorite_chara : "ピクミン"
  },
  {name : "C奈",
  age : "29",
  place : "東京都",
  oneword : "よろしくお願いします",
  img : "img/p03.jpg",
  proof : false,
  login : last_login[1],
  introduction : "こちらのアプリだと年上の男性と出会えそうだったので登録しました😳。<br><br>私自身かなり奥手なので、リードして下さるような方とお会いできたら良いなと思っています。",
  height : "167",
  hobby : "アニメ・漫画",
  favorite_type : "年上",
  favorite_sweets : "シュークリーム",
  favorite_animal : "ハムスター",
  favorite_chara : "ダッフィー"
  },
  {name : "D葉",
  age : "31",
  place : "福岡県",
  oneword : "",
  img : "img/p04.jpg",
  proof : false,
  login : last_login[0],
  introduction : "カフェ巡りが趣味のＯＬです。<br><br>休日は色々なお店でケーキを食べ歩いたりしています🍰。<br>食べることが好きなので、美味しそうに何でも食べるような方とお会いしたいです。",
  height : "162",
  hobby : "カフェ巡り",
  favorite_type : "優しい人",
  favorite_sweets : "クッキー",
  favorite_animal : "ペンギン",
  favorite_chara : "ピングー"
  },
];
