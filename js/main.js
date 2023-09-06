"use strict"

// ↓↓ ハンバーガーメニュー ↓↓ ---------------------- 

  const hamburger = document.getElementById("hamburger");
  const hamburger_back = document.getElementById("hamburger_back");
  let hamburger_current = false;

  hamburger.addEventListener('click',()=>{

    if(!hamburger_current){
      hamburger_current = true;
      hamburger.classList.add("apear");
      hamburger_back.classList.add("apear");
      document.addEventListener('mousewheel', taboo, { passive: false });
      document.addEventListener('touchmove', taboo, { passive: false });
    }else{
      hamburger_current = false;
      hamburger.classList.remove("apear");
      hamburger_back.classList.remove("apear");
      document.removeEventListener('mousewheel', taboo, { passive: false });
      document.removeEventListener('touchmove', taboo, { passive: false });
    };

  });

// ↓↓ ハンバーガーメニュー ↓↓ ---------------------- 


// ↓↓ 訪問者カウンター ↓↓ ---------------------- 

  const visit = document.getElementById("visit");
  const v_counter = document.getElementById("v_counter");

  let visit_count = 0;

  visit.addEventListener('click',()=>{

    visit_count++;
    
    if(visit_count == 1){
      v_counter.classList.add("apear");
    }else if(visit_count == 10){
      visit_count = 0;
      v_counter.classList.remove("apear");
      v_counter.innerHTML = 1;
    }else{
      v_counter.innerHTML = visit_count;
    };
    
  });

// ↑↑ 訪問者カウンター ↑↑ ---------------------- 


// ↓↓ メッセージカウンター ↓↓ ---------------------- 

  const messe = document.getElementById("messe");
  const m_counter = document.getElementById("m_counter");

  let messe_count = 0;

  messe.addEventListener('click',()=>{

    messe_count++;
    
    if(messe_count == 1){
      m_counter.classList.add("apear");
    }else if(messe_count == 10){
      messe_count = 0;
      m_counter.classList.remove("apear");
      m_counter.innerHTML = 1;
    }else{
      m_counter.innerHTML = messe_count;
    };
    
  });

// ↑↑ メッセージカウンター ↑↑ ---------------------- 


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


// ↓↓ サムネイル複製 ↓↓ ---------------------- 

  const personlist = document.getElementById("personlist");

  function thumb_clone(){
    
    for(let i = 0;i < (persons.length - 1);i++){
      let clone = personlist.firstElementChild.cloneNode(true);
      personlist.appendChild(clone);
    };

  };

// ↑↑ サムネイル複製 ↑↑ ---------------------- 


// ↓↓ サムネイル表示 ↓↓ ---------------------- 

  const thumbnail_img = document.getElementsByClassName("thumbnail_img");
  const thumbnail_info = document.getElementsByClassName("thumbnail_info");
  const thumbnail_oneword = document.getElementsByClassName("thumbnail_oneword");
  const prof_link = document.getElementsByClassName("prof_link");

  function thumb_apear(){

    for(let i = 0;i < thumbnail_img.length;i++){
      thumbnail_img[i].style.backgroundImage = `url(${persons[i].img})`;
      // thumbnail_info[i].innerHTML = `${persons[i].age}歳/${persons[i].place}/${persons[i].name}`;
      thumbnail_info[i].innerHTML = `${persons[i].name}/${persons[i].place}/${persons[i].age}歳`;
      thumbnail_oneword[i].innerHTML = persons[i].oneword;
      prof_link[i].href = `profile.html?p=${i}`;
    };

  };
  
  // ↑↑ サムネイル表示 ↑↑ ---------------------- 

  new Promise((resolve)=>{

    thumb_clone();
    resolve();

  }).then(()=>{

    thumb_apear()
    
  });
