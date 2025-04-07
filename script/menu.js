
buildmenu()

function buildmenu() {
    let links = [
        ["Hello World", "01HelloWorld.html"],
        ["Input-demo", "02Input.html"],
        ["Loopar", "03Loop.html"],
        ["Nyheter", "https://www.svd.se"]
    ]

    for(let i = 0; i < links.length; i++) {

       // <li><a href="01HelloWorld.html">Hello Word</a></li>


        let listItem = document.createElement("li")
        let link = document.createElement("a")
        link.href = links[i][1]
        let text = document.createTextNode(links[i][0])
        link.appendChild(text)
        listItem.appendChild(link)
        document.getElementById("menu").appendChild(listItem)

    }
}