$(document).ready(function(){
    var index = 0,
        timer = null,
        imgs = $("#imgBox").children("div"),
        circles = $("#imgCircle").children("span")
        console.log(circles);
        
    function imgslider () {
        $("#imgBox").mouseover(function(){

        })  
        $("#imgBox").mouseout(function(){
            timer = setInterval(function(){
                index++;
                if(index>=imgs.length){
                    index = 0
                }
                changeImg()
            },3000)
        })  
    }    





    function changeImg() {
       // 当前图片的display属性为block，其他为none；
       for(let i = 0;i<imgs.length;i++){
           imgs[i].css("display","none")
           circles[i].removeClass()
       }
       imgs[index].css("display","block")
       circles[i].addClass("active")
    }
    imgslider()
})