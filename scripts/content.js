const article = document.querySelector("article");

// returns null if selector matches nothing...
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);

    const wordCount = [...words].length
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");

    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    const heading = article.querySelector("h1");
    // ? is used to error proof. E.g. if time doesn't exist, then .parentNode will not return an error
    const date = article.querySelector("time")?.parentNode;
    // Here, ?? is like.. if date doesn't exist, then use heading
    (date ?? heading).insertAdjacentElement("afterend", badge);    
}