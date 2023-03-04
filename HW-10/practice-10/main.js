const app = document.querySelector("#app");

function creatTag (tagN, classN, children ){
  const element = document.createElement(tagN);
  element.className = classN;
  if(!children) return element;

    element.innerHTML += children;

  return element;
};

function toHTML(dist,arr){
  dist.append(...arr);
}

const nav = creatTag("nav", "nav","<h1>HELLO WORLD</h1>");
const header =creatTag("header","header", nav);

toHTML(app,[header, nav]);
app.append(header);
header.append(nav);

app.append(header);