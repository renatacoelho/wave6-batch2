// Animation desktop
$(document).ready(function() {
    $('.box-hover-1').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Stratégie et gestion des risques");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Développez votre stratégie et gérez les risques avec un partenaire qui comprend votre activité");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Solutions de sécurité");
            $('.ls-subhead').text("Découvrez des solutions de sécurité qui regroupent les moyens de défense et libèrent le potentiel d'innovation avec un partenaire qui comprend votre activité");
        })

    $('.box-hover-2').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Gestion des menaces");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Regroupez vos moyens de défense pour simplifier et renforcer la détection, l'analyse et la réponse aux menaces");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Solutions de sécurité");
            $('.ls-subhead').text("Découvrez des solutions de sécurité qui regroupent les moyens de défense et libèrent le potentiel d'innovation avec un partenaire qui comprend votre activité");
        })

    $('.box-hover-3').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Confiance numérique");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Libérez votre potentiel d'innovation en tissant des liens de confiance avec les utilisateurs et en protégeant les données essentielles à votre activité");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Solutions de sécurité");
            $('.ls-subhead').text("Découvrez des solutions de sécurité qui regroupent les moyens de défense et libèrent le potentiel d'innovation avec un partenaire qui comprend votre activité");
        })

    $('.box-hover-4').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Sécurité sur le Cloud");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Passez sur le cloud en toute confiance en intégrant la sécurité à chaque étape de votre parcours");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Solutions de sécurité");
            $('.ls-subhead').text("Découvrez des solutions de sécurité qui regroupent les moyens de défense et libèrent le potentiel d'innovation avec un partenaire qui comprend votre activité");
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
