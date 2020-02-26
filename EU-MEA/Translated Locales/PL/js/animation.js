// Animation desktop
$(document).ready(function() {
    $('.box-hover-1').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            var1 = "Strategia i zarządzanie ryzykiem";
            $('.ls-head').text(var1);
            $('.ls-head').fadeIn(1000);
            var2 = "Rozwijaj swoją strategię cyberbezpieczeństwa i zarządzaj ryzykiem z pomocą partnera, który rozumie potrzeby Twojego przedsiębiorstwa";
            $('.ls-subhead').text(var2);
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            var3 = "Rozwiązania w dziedzinie bezpieczeństwa";
            $('.ls-head').text(va3);
            var4 = "Poznaj rozwiązania, które zapewniają spójną ochronę i sprzyjają innowacjom. Jesteśmy partnerem, który rozumie potrzeby Twojego przedsiębiorstwa";
            $('.ls-subhead').text(var4);
        })

    $('.box-hover-2').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            var5 = "Zarządzanie zagrożeniami";
            $('.ls-head').text(var5);
            $('.ls-head').fadeIn(1000);
            var6 = "Integracja zabezpieczeń ułatwia i usprawnia wykrywanie, analizowanie i niwelowanie zagrożeń";
            $('.ls-subhead').text(var6);
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            var7 = "Rozwiązania w dziedzinie bezpieczeństwa";
            $('.ls-head').text(var7);
            var8 = "Poznaj rozwiązania, które zapewniają spójną ochronę i sprzyjają innowacjom. Jesteśmy partnerem, który rozumie potrzeby Twojego przedsiębiorstwa";
            $('.ls-subhead').text(var8);
        })

    $('.box-hover-3').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            var9 = "Cyfrowa wiarygodność";
            $('.ls-head').text(var9);
            $('.ls-head').fadeIn(1000);
            var10 = "Sprzyjaj innowacjom, budując bezpieczne relacje z użytkownikami i chroniąc dane wykorzystywane w działalności biznesowej";
            $('.ls-subhead').text(var10);
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            var11 = "Rozwiązania w dziedzinie bezpieczeństwa";
            $('.ls-head').text(var11);
            var12 = "Poznaj rozwiązania, które zapewniają spójną ochronę i sprzyjają innowacjom. Jesteśmy partnerem, który rozumie potrzeby Twojego przedsiębiorstwa";
            $('.ls-subhead').text(var12);
        })

    $('.box-hover-4').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            var13 = "Bezpieczeństwo w chmurze";
            $('.ls-head').text(var13);
            $('.ls-head').fadeIn(1000);
            var14 = "Przenieś się bezpiecznie do chmury, integrując zabezpieczenia na każdym etapie migracji";
            $('.ls-subhead').text(var14);
            $('.ls-subhead').fadeIn(1300);

        },
        var15 = "Rozwiązania w dziedzinie bezpieczeństwa";

        function() {
            $('.ls-head').text(var15);
            var16 = "Poznaj rozwiązania, które zapewniają spójną ochronę i sprzyjają innowacjom. Jesteśmy partnerem, który rozumie potrzeby Twojego przedsiębiorstwa";
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
