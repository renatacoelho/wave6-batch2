// Animation desktop
$(document).ready(function() {
    $('.box-hover-1').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Стратегия и управление рисками");
            $('.ls-head').fadeIn(1000);

            $('.ls-subhead').text("Усовершенствуйте стратегию кибербезопасности и минимизируйте риски благодаря сотрудничеству с партнером, который учитывает особенности вашего бизнеса");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {

            $('.ls-head').text("Решения в области безопасности");
            $('.ls-subhead').text("Узнайте о решениях, включающих все необходимые средства защиты, и создайте условия для внедрения инноваций благодаря сотрудничеству с партнером, который учитывает особенности вашего бизнеса");
        })

    $('.box-hover-2').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Управление угрозами");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Сведите воедино все средства защиты, чтобы сделать процессы обнаружения, анализа и реагирования на угрозы проще и эффективнее");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Решения в области безопасности");
            $('.ls-subhead').text("Узнайте о решениях, включающих все необходимые средства защиты, и создайте условия для внедрения инноваций благодаря сотрудничеству с партнером, который учитывает особенности вашего бизнеса");
        })

    $('.box-hover-3').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Доверие в цифровой среде");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Создайте условия для внедрения инноваций, выстроив доверительные отношения с пользователями и обеспечив защиту ключевых данных");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Решения в области безопасности");
            $('.ls-subhead').text("Узнайте о решениях, включающих все необходимые средства защиты, и создайте условия для внедрения инноваций благодаря сотрудничеству с партнером, который учитывает особенности вашего бизнеса");
        })

    $('.box-hover-4').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Безопасность облака");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Интегрируйте средства обеспечения безопасности на каждом шаге перехода к облаку, чтобы отбросить все сомнения в его надежности");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Решения в области безопасности");
            $('.ls-subhead').text("Узнайте о решениях, включающих все необходимые средства защиты, и создайте условия для внедрения инноваций благодаря сотрудничеству с партнером, который учитывает особенности вашего бизнеса");
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
