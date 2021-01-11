$(document).ready(function () {
    // Menu
    function menu() {
        var type = $('.type');
        type.on('click', 'button', function () {
            //Đánh dấu button được click
            $(this).addClass('active').siblings().removeClass('active');
            var filter = $(this).attr("data-type");//Lấy loại sản phẩm
            var all = $(".menu .category .type button:first").attr("data-type");//Lấy giá trị trong thuộc tính
            if (filter + "" != all + "") {
                // In ra sản phẩm theo từng loại
                $(".list [data-type=" + filter + "]").slideDown("slow").siblings().hide();
                $(".list [data-type=" + filter + "]").slideDown("slow").show();
            }
            else {
                // In ra tất cả các sản phẩm
                $(".menu .list .row-fix").slideDown("slow").show();
            }
        });
    }
    menu();

    // Gallery
    function gallery() {
        var close = $(".gallery .review .close");
        $(".gallery .grid a").click(function (event) {
            event.preventDefault();
        });

        $(".gallery .grid .show").on("click", function () {
            var review = $(".gallery .review");
            review.slideDown().css("display", "block");

            var imgOpen = $(this).attr("href");
            $(".gallery .review img").attr("src", imgOpen);

            close.on("click", function () {
                review.css("display", "none");
            });
            review.on("click", function () {
                review.css("display", "none");
            })
        });
    }
    gallery();

    // Slider
    function slider() {
        var index = 0;
        var size = $(".customer .slide").length;
        var left = $(".customer .control .left");
        var right = $(".customer .control .right");
        left.on("click", function () {
            index -= 1;
            if (index < 0) {
                index = size - 1;
            }
            $(".customer .slide:eq(" + index + ")").fadeIn("slow").css("display", "block").siblings().css("display", "none");
        });

        right.on("click", function () {
            index += 1;
            if (index > size - 1) {
                index = 0;
            }
            $(".customer .slide:eq(" + index + ")").fadeIn("slow").css("display", "block").siblings().css("display", "none");
        });

        setInterval(function () {
            index++;
            if (index > size - 1) {
                index = 0;
            }
            $(".customer .slide:eq(" + index + ")").fadeIn("slow").css("display", "block").siblings().css("display", "none");
        }, 10000);
    }
    slider();

    // stuff mouseover
    function stuff(){
        $(".box").on("mouseenter",function(){
            $(this).children(".team-content").slideDown().show();
        });
        $(".box").on("mouseleave",function(){
            $(this).children(".team-content").slideUp();
        });
    }
    stuff();
})