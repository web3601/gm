$(function () {

    /*
     * TODO 临时在index.php页面设置的跳转交付之前会删掉,只是方便开发时的页面切换
     *
     * */

    //var s = document.body.clientWidth;
    var LOC = location.href;
    if (LOC.indexOf('buy') > 0) {
        var createA = $('<a class ="button button-primary button-rounded" style="z-index:99999!important;" href="index.php">首页</a>');
        createA.css({'position': 'fixed', 'bottom': '0', "left": "35vw",'margin':'0 auto'});
        $('body').append(createA);
    } else {
        //var createB = $('<a class ="button button-primary button-rounded" style="z-index:99999!important;" href="buy.php">购物车页面</a>');
        //createB.css({'position': 'fixed', 'bottom': '0', "left": "5%"});
        //$('body').append(createB);
    }


    /*
     * TODO buy.php选择省份和城市
     * */
    $('.ipcChoose').click(function (e) {
        var e = e.target;
        $('.posVessel').slideUp(300);
        $(this).parent().find('.posVessel').toggle();
    })
    $('.posVessel').delegate('li','click',function(e){
        var e= e.target;
        var eHtml=$(e).html();
        $(e).parents('.com').find('.ipcInput').html(eHtml);
        $(e).parent().slideUp(300);
        console.log();
    })

    /**
     * TODO buy.php 选择门店
     * */
    $('.storeBody').delegate('li','click',function(e){

        var e= e.target;
        /**
         * 如果设置成
         * $(this).parents('.storeBody).find('i').removeClass('icon-circle cf62368').addClass('icon-circle-blank');
         * 就会出现如果当前li为选中状态,再点击就会出现取消的情况
         * */
        $('.storeBody').find('i').removeClass('icon-circle cf62368').addClass('icon-circle-blank');
        var isHasIconCircle=$(this).find('i').hasClass('icon-circle');
        //console.log(isHasIconCircle);
        //console.log($(this));
        if(isHasIconCircle){
            //$(this).find('i').removeClass('icon-circle-blank').addClass('icon-circle cf62368')
        }else{
            $(this).find('i').removeClass('icon-circle-blank').addClass('icon-circle cf62368')

        }
    })
})