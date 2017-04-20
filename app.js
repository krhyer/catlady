
var cats = [{
    id: 1,
    name: "Mr. Pickles",
    imgUrl: "https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg",
    happyStatus: "meow?",
    grumpyStatus: "grrrrr",
    feralStatus: "bark",
    goneStatus: "Whiskers is in prison for murder. I hope you are happy.",
    petCount: 0
},{
    id: 247,
    name: "Mr. Fluffy",
    imgUrl: "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg",
    happyStatus: "purrrrr",
    grumpyStatus: "rrrawrrrrr",
    feralStatus: "hhissss!",
    goneStatus: "Dat cat gone foo. You done pissed him off!!!!",
    petCount: 0
},{
    id: 543,
    name: "Tard",
    imgUrl: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17437858_405009783200902_4095355276419399680_n.jpg",
    happyStatus: "rrrawrrrrr",
    grumpyStatus: "rrrawrrrrr",
    feralStatus: "rrrawrrrrr",
    goneStatus: "You're retarded...I'm out!",
    petCount: 0
},{
    id: 3215,
    name: "Whiskers",
    imgUrl: "https://novacatclinic.com/wp-content/uploads/2014/10/Crazy_Whiskers_Cat.jpg",
    happyStatus: "purrrrr",
    grumpyStatus: "rrrawrrrrr",
    feralStatus: "hhissss!",
    goneStatus: "I've left to get my whiskers done",
    petCount: 0
},{
    id: 21354,
    name: "paws",
    imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/46/ae/98/46ae98a3f63b6b2561345454f46bd1c8.jpg",
    happyStatus: "purrrrr",
    grumpyStatus: "rrrawrrrrr",
    feralStatus: "hhissss!",
    goneStatus: "I'll be back when you've lost interest in me",
    petCount: 0
},{
    id: 9673,
    name: "Tiger",
    imgUrl: "https://nationalzoo.si.edu/sites/default/files/animals/sumatrantiger-002.jpg",
    happyStatus: "purrrrr",
    grumpyStatus: "rrrawrrrrr",
    feralStatus: "RRRRRRAAAWWWWWWRRRRRRRRRRR!",
    goneStatus: "I'm now in prison with Mr. Pickles....Thanks!",
    petCount: 0
},{
    id: 045,
    name: "Buff",
    imgUrl: "http://www.addictionfoods.com/blog/wp-content/uploads/2014/02/tumblr_mvec94bak91srbytro1_500.jpg",
    happyStatus: "purrrrr",
    grumpyStatus: "rrrawrrrrr",
    feralStatus: "hhissss!",
    goneStatus: "You've gotten under my skin. I'm out!",
    petCount: 0
}
]











function petCat(catId) {
    var petCount = document.getElementById("petCount"+catId)
    var catStatus = document.getElementById("catStatus"+catId)
    var catButton = document.getElementById("catButton"+catId)
    var catPic = document.getElementById("catPic"+catId)
    var targetCat = getCatById(catId)

    targetCat.petCount++
    petCount.innerText = targetCat.petCount
    if (targetCat.petCount > 5) {
        catStatus.innerText = targetCat.grumpyStatus
    }
    if (targetCat.petCountr > 8) {
        catStatus.innerText = targetCat.feralStatus
    }
    if (targetCat.petCount > 9) {
        catStatus.innerText = targetCat.goneStatus
        catButton.disabled = true
        catPic.src = ""

    }
}
function getCatById(catId){
    for(var i = 0; i < cats.length; i++){
        var cat = cats[i];

        if(cat.id==catId){
            return cat
        }
    }

}
function reset(catId) {
    var petCount = document.getElementById("petCount"+catId)
    var catStatus = document.getElementById("catStatus"+catId)
    var catButton = document.getElementById("catButton"+catId)
    var catPic = document.getElementById("catPic"+catId)
    var targetCat = getCatById(catId)
    targetCat.petCount = 0
    petCount.innerText = targetCat.petCount
    catStatus.innerText = targetCat.happyStatus
    catButton.disabled = false
    catPic.src = targetCat.imgUrl
}


function drawCats(listOfCats) {
    var template = ""
    for (var i = 0; i < listOfCats.length; i++) {
        var cat = listOfCats[i]
        template += `
        <div>
            <img id="catPic${cat.id}"src="${cat.imgUrl}" alt="cat" height="350">
            <button id="catButton${cat.id}" type="button" onclick="petCat(${cat.id})">PET ME</button>
            <button id="kittyButton${cat.id}" type="button" onclick="reset(${cat.id})">Kitty, come back!!!</button>
            <h2>
                <div id="petCount${cat.id}">${cat.petCount}</div>
            </h2>
            <h2>
                <div id="catStatus${cat.id}">${cat.happyStatus}</div>
            </h2>
        </div>
        `
    }
    document.getElementById("cat-list").innerHTML = template
}

drawCats(cats)