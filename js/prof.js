"use strict"


// ↓↓ プロフ画面の✖ボタン他の表示切り替え ↓↓ ---------------

  const prof_top = document.getElementById("prof_top");
  const prof_header = document.getElementById("prof_header");

  // 位置を確認してクラスを制御
  function top_button(){
    if(prof_top.getBoundingClientRect().y < -100){
      prof_header.classList.add("gray");
    } else {
      prof_header.classList.remove("gray");
    };
  };

  // スクロールするたびに判定
  window.addEventListener("scroll",top_button);

// ↑↑ プロフ画面の✖ボタン他の表示切り替え ↑↑ ---------------


// ↓↓ ハートアニメーション ↓↓ ------------------

  const favorite = document.getElementById("favorite");
  const love = document.getElementById("love");
  // const prof_img = document.getElementsByClassName("prof_mainimag");

  let love_current = false;

  function heartfull(){
    if(!love_current){
      love_current = true;
      favorite.classList.add("love");
      love.classList.add("love");
    } else {
      love_current = false;
      favorite.classList.remove("love");
      love.classList.remove("love");
    };
  };
  favorite.addEventListener('click',heartfull);
  love.addEventListener('click',heartfull);

// ↑↑ ハートアニメーション ↑↑ ------------------


// ↓↓ 有料コンテンツ用アナウンス ↓↓ ---------------------- 

  const attention = document.getElementById("attention");
  const paid_contents = document.getElementsByClassName("paid_content");

  function taboo(e){
    e.preventDefault();
  };


  for(let i = 0;i < paid_contents.length;i++){
    paid_contents[i].addEventListener('click',()=>{
      attention.classList.remove("hidden");
      document.addEventListener('mousewheel', taboo, { passive: false });
      document.addEventListener('touchmove', taboo, { passive: false });
    });
  };

  attention.addEventListener('click',()=>{
    attention.classList.add("hidden");
    document.removeEventListener('mousewheel', taboo, { passive: false });
    document.removeEventListener('touchmove', taboo, { passive: false });
  });

// ↑↑ 有料コンテンツ用アナウンス ↑↑ ---------------------- 


// ↓↓ プロフ入力 ↓↓ ------------------


  top_name.innerHTML = persons[getParam("p")].name;
  prof_name.innerHTML = persons[getParam("p")].name;
  mainimg.style.backgroundImage = `url(${persons[getParam("p")].img})`;
  hour.innerHTML = persons[getParam("p")].login;
  oneword.innerHTML = persons[getParam("p")].oneword;
  age_place.innerHTML = `${persons[getParam("p")].age}歳/${persons[getParam("p")].place}`;
  prof_name.innerHTML = persons[getParam("p")].name;
  introduction.innerHTML = persons[getParam("p")].introduction;
  height.innerHTML = `${persons[getParam("p")].height}cm`;
  hobby.innerHTML = persons[getParam("p")].hobby;
  favorite_type.innerHTML = persons[getParam("p")].favorite_type;
  favorite_sweets.innerHTML = persons[getParam("p")].favorite_sweets;
  favorite_animal.innerHTML = persons[getParam("p")].favorite_animal;
  favorite_chara.innerHTML = persons[getParam("p")].favorite_chara;
  

// ↑↑ プロフ入力 ↑↑ ------------------


// ↓↓ 矢印で遷移 ↓↓ ------------------

  const arrow_back = document.getElementById("arrow_back");
  const arrow_forward = document.getElementById("arrow_forward");

  let person_current = Number(getParam("p"));

  let person_back = person_current - 1;
  let person_forward = person_current + 1;

  if(person_back < 0){
    person_back = persons.length - 1;
  };
  if(person_forward > (persons.length - 1) ){
    person_forward = 0;
  };

  arrow_back.href = `profile.html?p=${person_back}`;
  arrow_forward.href = `profile.html?p=${person_forward}`;

// ↑↑ 矢印で遷移 ↑↑ ------------------


// ↓↓ 状態に応じて表示変更 ↓↓ ------------------

  if(persons[getParam("p")].login == last_login[0]){
    hour.classList.add("online");
  };
  if(persons[getParam("p")].proof){
    proof.classList.add("on");
  };

// ↑↑ 状態に応じて表示変更 ↑↑ ------------------


// ↓↓ form用ラジオボタン自動選択 ↓↓ ------------------

  const selects = document.getElementsByClassName("list-check");
  selects[getParam("p")].checked = true;

  const check_final = document.getElementById("check-final");
  check_final.innerHTML = `${persons[getParam("p")].name}さんを<br>選びますか？`;

// ↑↑ form用ラジオボタン自動選択 ↑↑ ------------------


// ↓↓ 最終確認画面 ↓↓ ---------------------- 

  const check = document.getElementById("check-back");
  const check_no = document.getElementById("check-no");

  function taboo(e){
    e.preventDefault();
  };

  favorite.addEventListener('click',()=>{
    check.classList.remove("hidden");
    document.addEventListener('mousewheel', taboo, { passive: false });
    document.addEventListener('touchmove', taboo, { passive: false });
  });
  love.addEventListener('click',()=>{
    check.classList.remove("hidden");
    document.addEventListener('mousewheel', taboo, { passive: false });
    document.addEventListener('touchmove', taboo, { passive: false });
  });

  check_no.addEventListener('click',()=>{
    check.classList.add("hidden");
    document.removeEventListener('mousewheel', taboo, { passive: false });
    document.removeEventListener('touchmove', taboo, { passive: false });
    heartfull();
  });

// ↑↑ 最終確認画面 ↑↑ ---------------------- 


// 多重送信防止

  const check_text = document.getElementById("check-text");
  check_text.onclick = function(event){
    check_text.classList.add("ban");
  };

// 多重送信防止


// ブラウザバックでも発火するpageshowをつかう(iOS対策)
window.onpageshow = function(event) {
  // ブラウザバックとかでキャッシュが残る恐れがあるので一旦リセット
  check_text.classList.remove("ban");
  check.classList.add("hidden");
  if (event.persisted) {
    window.location.reload();
  };
};