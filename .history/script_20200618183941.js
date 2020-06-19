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
            if(timer) clearInterval(timer)
        })
        //当鼠标移出图片时，图片继续轮播
        $("#imgBox").mouseout(function(){
            console.log("345");
            
        });
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