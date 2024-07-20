//load the contentArray
var contentArray = JSON.parse(localStorage.getItem("contentArray"))
//put all the posts into blogContainer
var blogContainer = document.getElementById('blogContainer')
for (var i = 0; contentArray.length > i; i++) {
    //create element
    var postChild = document.createElement("div")
    postChild.className = 'post'
    postChild.innerHTML = `<p>${contentArray[i].title}</p><br><p>${contentArray[i].content}</p><p>Posted by ${contentArray[i].username}</p>`
    //append to parent
    blogContainer.appendChild(postChild)

}

document.getElementById("back").addEventListener('click', function () {
    window.location.href = "./index.html"

})

var body = document.body
document.getElementById("shade").addEventListener('click', function () {
    
    //toggle the className of blogContainer thereby flipping the theme
    body.classList.toggle("darkmode")

})