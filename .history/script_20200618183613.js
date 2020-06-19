$(document).ready(function(){
    var index = 0,
        timer = null,
        imgs = $("#imgBox").children("div"),
        circles = $("#imgCircle").children("span")
        console.log(circles);
        
    function imgslider () { 
        // 图片自动轮播
        timer = setInterval(function(){
            index++;
            if(index>=imgs.length){
                index = 0
            }
            changeImg()
        },2000)
        //当鼠标在图片上时，停止轮播
        $("#imgBox").mouseover(function(){
            console.log("123");
            
        })
    }    





    function changeImg() {
       // 当前图片的display属性为block，其他为none；
       for(let i = 0;i<imgs.length;i++){
           imgs[i].style.display = "none"
           circles[i].className = " "
       }
       imgs[index].style.display = "block"
       circles[index].className = "active "
    }
    imgslider()
})