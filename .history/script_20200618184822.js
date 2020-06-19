$(document).ready(function(){
    var index = 0,
        timer = null,
        imgs = $("#imgBox").children("div"),
        circles = $("#imgCircle").children("span")
        console.log(circles);
        
    function imgslider () {  
        //当鼠标在图片上时，停止轮播
        $("#imgBox").mouseover(function(){
            if(timer) clearInterval(timer)
        })
        //当鼠标移出图片时，图片继续轮播
        $("#imgBox").mouseout(function(){
            // 图片自动轮播
        timer = setInterval(function(){
            index++;
            if(index>=imgs.length){
                index = 0
            }
            changeImg()
        },2000)
        });
        //一开始就执行mouseout，图片轮播
        $("#imgBox").mouseout()

        // 点击圆点切换图片
        // 1、找到所有圆点  并为每个圆点绑定click事件
        for(let i = 0;i<circles.length;i++){
            circles[i].id = i;
            circles[i].onclick = function(){
                index = i;
                changeImg()
                if(timer) clearInterval(timer)
            }
        }

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