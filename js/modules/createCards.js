const createCards = (news) => {
  const section = document.querySelector(".news-list");

  news.map((item) => {
    const container = document.createElement("div");
    const containerHeader = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
    const title = document.createElement("h2");
    const paragraph = document.createElement("p");

    img.setAttribute("src", "../../img/like.svg");
    img.classList.add("like");

    containerHeader.classList.add("news-header");
    containerHeader.appendChild(span);
    containerHeader.appendChild(img);

    span.classList.add("date");
    span.innerText = item.date;

    title.classList.add("title");
    title.innerText = item.title;

    paragraph.classList.add("paragraph");
    paragraph.innerText = item.content;

    container.classList.add("card");
    container.appendChild(title);
    container.appendChild(paragraph);
    container.insertBefore(containerHeader, title);

    section.appendChild(container);
  });
};

export default createCards;
