// Animation desktop
$(document).ready(function() {
    $('.box-hover-1').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            var1 = "ادارة الاستراتيجية والمخاطر";
            $('.ls-head').text(var1);
            $('.ls-head').fadeIn(1000);
            var2 = "تطوير استراتيجية الأمن الالكتروني وادارة المخاطر مع شريك يفهم عملك";
            $('.ls-subhead').text(var2);
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            var3 = "الحلول الأمنية";
            $('.ls-head').text(va3);
            var4 = "اكتشف الحلول التي تجمع بين وسائل الدفاع وتطلق عنان الابتكار مع شريك يفهم عملك";
            $('.ls-subhead').text(var4);
        })

    $('.box-hover-2').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            var5 = "ادارة التهديدات";
            $('.ls-head').text(var5);
            $('.ls-head').fadeIn(1000);
            var6 = "توحيد دفاعاتك لتبسيط وتعزيز الكشف عن التهديدات وتحليلها والاستجابة لها";
            $('.ls-subhead').text(var6);
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            var7 = "الحلول الأمنية";
            $('.ls-head').text(var7);
            var8 = "اكتشف الحلول التي تجمع بين وسائل الدفاع وتطلق عنان الابتكار مع شريك يفهم عملك";
            $('.ls-subhead').text(var8);
        })

    $('.box-hover-3').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            var9 = "الثقة الرقمية";
            $('.ls-head').text(var9);
            $('.ls-head').fadeIn(1000);
            var10 = "أطلق العنان للابتكار من خلال تطوير علاقات مستخدم موثوق بها وحماية البيانات التي تقوي عملك";
            $('.ls-subhead').text(var10);
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            var11 = "الحلول الأمنية";
            $('.ls-head').text(var11);
            var12 = "اكتشف الحلول التي تجمع بين وسائل الدفاع وتطلق عنان الابتكار مع شريك يفهم عملك";
            $('.ls-subhead').text(var12);
        })

    $('.box-hover-4').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            var13 = "أمان بيئة التشغيل السحابية";
            $('.ls-head').text(var13);
            $('.ls-head').fadeIn(1000);
            var14 = "انتقل بثقة الى بيئة التشغيل السحابية من خلال دمج الأمان في كل مرحلة من مراحل رحلتك";
            $('.ls-subhead').text(var14);
            $('.ls-subhead').fadeIn(1300);

        },
        var15 = "الحلول الأمنية";

        function() {
            $('.ls-head').text(var15);
            var16 = "اكتشف الحلول التي تجمع بين وسائل الدفاع وتطلق عنان الابتكار مع شريك يفهم عملك";
            $('.ls-subhead').text(var16);
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
