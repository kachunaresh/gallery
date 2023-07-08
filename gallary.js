var allImgTags=document.images
console.log(allImgTags)

for(i=0;i<=9;i++)
{
    allImgTags[i].src=`./photos/${i}.jpg`
    allImgTags[i].addEventListener("click",function()
    {
        document.getElementById("bigImageContainer").style.display="flex"
        document.getElementById("bigImage").style.backgroundImage=`url(${this.src})`
        console.log(this.src)
    });
}
function closeWindow(){
    document.getElementById("bigImageContainer").style.display="none"
}
