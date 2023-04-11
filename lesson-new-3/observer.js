"use strict";

const news = [
    'Под мостом поймали гитлера с хвостом',
    'Путин сдох',
    'Днепр - Чемпион',
];

const radio = {
    callbacks:[], // массив подписчиков

    subscribe(callback){ // метод подписаться
        this.callbacks.push(callback);
    },
    broadcact(news){ // метод оповещения 
        this.callbacks.forEach((callback)=>{ // берем все коллбеки
            callback(news);
        })
    },
    getNews(){
        const newNews =  news[Math.floor(Math.random() * news.length)];
        this.broadcact(newNews);
    }
};

const city1 = {
    newNews(news){
        console.log('city1 news: ' + news);
    }
};

const city2 = {
    newNews(news){
        console.log('city2 news: ' + news.slice(0, 8));
    }
};

// подписаться:

radio.subscribe(city1.newNews);
radio.subscribe(city2.newNews);

function declared(a,b){
    // arguments
}

const expression = function(){
    // 
}

localStorage
  .setItem('bah', '123') //
  .removeItem('bah') //
  .getItem () //
  .clear() // удалить

  