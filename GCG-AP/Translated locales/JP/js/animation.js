// Animation desktop
$(document).ready(function() {
    $('.box-hover-1').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("戦略とリスク管理");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("お客様のビジネスを知るパートナーと協力して、サイバーセキュリティー戦略を改良し、リスクを管理できます。");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("セキュリティー・ソリューション");
            $('.ls-subhead').text("お客様のビジネスを知るパートナーと協力して、防御策を統合し、イノベーションを解放するセキュリティー・ソリューションをご覧ください。");
        })

    $('.box-hover-2').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("脅威マネジメント");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("シンプルで強力な脅威の検出、分析、対応のために、防御策を統合します。");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("セキュリティー・ソリューション");
            $('.ls-subhead').text("お客様のビジネスを知るパートナーと協力して、防御策を統合し、イノベーションを解放するセキュリティー・ソリューションをご覧ください。");
        })

    $('.box-hover-3').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("デジタル・トラスト");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("信頼できるユーザー・リレーションシップを構築し、ビジネスに力を与えるデータを保護することで、イノベーションを解放できます。");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("セキュリティー・ソリューション");
            $('.ls-subhead').text("お客様のビジネスを知るパートナーと協力して、防御策を統合し、イノベーションを解放するセキュリティー・ソリューションをご覧ください。");
        })

    $('.box-hover-4').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("クラウド・セキュリティー");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("すべての移行段階にセキュリティー機能を組み込むことで、自信を持ってクラウドに移行できます。");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("セキュリティー・ソリューション");
            $('.ls-subhead').text("お客様のビジネスを知るパートナーと協力して、防御策を統合し、イノベーションを解放するセキュリティー・ソリューションをご覧ください。");
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
