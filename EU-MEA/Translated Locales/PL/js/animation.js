// Animation desktop
$(document).ready(function() {
    $('.box-hover-1').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Strategia i zarządzanie ryzykiem");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Rozwijaj swoją strategię cyberbezpieczeństwa i zarządzaj ryzykiem z pomocą partnera, który rozumie potrzeby Twojego przedsiębiorstwa");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Rozwiązania w dziedzinie bezpieczeństwa");
            $('.ls-subhead').text("Poznaj rozwiązania, które zapewniają spójną ochronę i sprzyjają innowacjom. Jesteśmy partnerem, który rozumie potrzeby Twojego przedsiębiorstwa");
        })

    $('.box-hover-2').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Zarządzanie zagrożeniami");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Integracja zabezpieczeń ułatwia i usprawnia wykrywanie, analizowanie i niwelowanie zagrożeń");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Rozwiązania w dziedzinie bezpieczeństwa");
            $('.ls-subhead').text("Poznaj rozwiązania, które zapewniają spójną ochronę i sprzyjają innowacjom. Jesteśmy partnerem, który rozumie potrzeby Twojego przedsiębiorstwa");
        })

    $('.box-hover-3').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Cyfrowa wiarygodność");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Sprzyjaj innowacjom, budując bezpieczne relacje z użytkownikami i chroniąc dane wykorzystywane w działalności biznesowej");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Rozwiązania w dziedzinie bezpieczeństwa");
            $('.ls-subhead').text("Poznaj rozwiązania, które zapewniają spójną ochronę i sprzyjają innowacjom. Jesteśmy partnerem, który rozumie potrzeby Twojego przedsiębiorstwa");
        })

    $('.box-hover-4').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Bezpieczeństwo w chmurze");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Przenieś się bezpiecznie do chmury, integrując zabezpieczenia na każdym etapie migracji");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Rozwiązania w dziedzinie bezpieczeństwa");
            $('.ls-subhead').text("Poznaj rozwiązania, które zapewniają spójną ochronę i sprzyjają innowacjom. Jesteśmy partnerem, który rozumie potrzeby Twojego przedsiębiorstwa");
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
