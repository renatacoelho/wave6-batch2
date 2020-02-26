// Animation desktop
$(document).ready(function() {
    $('.box-hover-1').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("전략 및 리스크 관리");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("귀사의 비즈니스를 이해하는 파트너와 함께 사이버 보안 전략 강화 및 리스크 관리");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("보안 솔루션");
            $('.ls-subhead').text("귀사의 비즈니스를 이해하는 파트너와 함께 방어 기능을 통합하고 혁신을 실현하는 보안 솔루션에 대해 알아보세요.");
        })

    $('.box-hover-2').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("위협 관리");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("위협 탐지, 분석 및 대응을 단순화하고 강화하기 위한 방어 기능 통합");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("보안 솔루션");
            $('.ls-subhead').text("귀사의 비즈니스를 이해하는 파트너와 함께 방어 기능을 통합하고 혁신을 실현하는 보안 솔루션에 대해 알아보세요.");
        })

    $('.box-hover-3').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("디지털 신뢰");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("신뢰할 수 있는 사용자 관계를 개발하고 비즈니스를 강화하는 데이터를 보호하여 혁신 실현");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("보안 솔루션");
            $('.ls-subhead').text("귀사의 비즈니스를 이해하는 파트너와 함께 방어 기능을 통합하고 혁신을 실현하는 보안 솔루션에 대해 알아보세요.");
        })

    $('.box-hover-4').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("클라우드 보안");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("진행 시 모든 단계에 보안을 통합하여 클라우드로 안전하게 전환");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("보안 솔루션");
            $('.ls-subhead').text("귀사의 비즈니스를 이해하는 파트너와 함께 방어 기능을 통합하고 혁신을 실현하는 보안 솔루션에 대해 알아보세요.");
        })
})



$(document).ready(function() {

    //Animation Mobile

    $(".box-sm-1").click(function() {
        // console.warn('fui clicado')
        $(".box-sm-1").addClass("box-expand");
        $(".box-item-default").hide();
        $('.close-btn').fadeIn(1500);
        $('.box-item-expand-1').fadeIn(2000);
        $(".box-sm-2").hide();
        $(".box-sm-3").hide();
        $(".box-sm-4").hide();
    });

    $(".box-sm-2").click(function() {
        $(".box-sm-2").addClass("box-expand");
        $(".box-item-default").hide();
        $('.close-btn').fadeIn(1500);
        $('.box-item-expand-2').fadeIn(2000);
        $(".box-sm-1").hide();
        $(".box-sm-3").hide();
        $(".box-sm-4").hide();
    });

    $(".box-sm-3").click(function() {
        $(".box-sm-3").addClass("box-expand");
        $(".box-item-default").hide();
        $('.close-btn').fadeIn(1500);
        $('.box-item-expand-3').fadeIn(2000);
        $(".box-sm-2").hide();
        $(".box-sm-1").hide();
        $(".box-sm-4").hide();
    });

    $(".box-sm-4").click(function() {
        $(".box-sm-4").addClass("box-expand");
        $(".box-item-default").hide();
        $('.close-btn').fadeIn(1500);
        $('.box-item-expand-4').fadeIn(2000);
        $(".box-sm-2").hide();
        $(".box-sm-3").hide();
        $(".box-sm-1").hide();
    });

    $(".close-btn").click(function() {
        if ($(".box-sm-1").hasClass("box-expand")) {
            $(".box-sm-1").removeClass("box-expand");
            $(".close-btn").hide();
            $('.box-item-expand-1').hide();
            $(".box-sm-2").show();
            $(".box-sm-3").show();
            $(".box-sm-4").show();
            $(".box-item-default").show();
        }

        if ($(".box-sm-2").hasClass("box-expand")) {
            $(".box-sm-2").removeClass("box-expand");
            $(".close-btn").hide();
            $('.box-item-expand-2').hide();
            $(".box-sm-1").show();
            $(".box-sm-3").show();
            $(".box-sm-4").show();
            $(".box-item-default").show();
        }

        if ($(".box-sm-3").hasClass("box-expand")) {
            $(".box-sm-3").removeClass("box-expand");
            $(".close-btn").hide();
            $('.box-item-expand-3').hide();
            $(".box-sm-1").show();
            $(".box-sm-2").show();
            $(".box-sm-4").show();
            $(".box-item-default").show();
        }

        if ($(".box-sm-4").hasClass("box-expand")) {
            $(".box-sm-4").removeClass("box-expand");
            $(".close-btn").hide();
            $('.box-item-expand-4').hide();
            $(".box-sm-1").show();
            $(".box-sm-2").show();
            $(".box-sm-3").show();
            $(".box-item-default").show();
        }



        // $( ".box-sm-1" ).removeClass( "box-expand" );
        // $('.close-btn').fadeIn(1500);
        // $( ".close-btn" ).hide();
        // $( ".box-sm-2" ).show();
        // $( ".box-sm-3" ).show();
        // $( ".box-sm-4" ).show();
        // console.warn("rodou btn click", $( ".box-sm-1" ));
    });



});
