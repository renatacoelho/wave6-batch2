// Animation desktop
$(document).ready(function() {
    $('.box-hover-1').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Strategie und Risikomanagement");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Entwickeln Sie Ihre Strategie für die Cybersicherheit weiter und halten Sie die Risiken unter Kontrolle – mit einem Partner, der Ihr Business versteht. ");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Sicherheitslösungen");
            $('.ls-subhead').text("Lernen Sie Lösungen kennen, die Abwehrmaßnahmen verknüpfen und Innovationen erschließen – mit einem Partner, der Ihr Business versteht.");
        })

    $('.box-hover-2').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Management von Sicherheitsbedrohungen");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Verknüpfen Sie Ihre Sicherheitsmaßnahmen, um die Erkennung und Analyse von Sicherheitsbedrohungen sowie die Reaktion darauf zu vereinfachen und effektiver zu machen.");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Sicherheitslösungen");
            $('.ls-subhead').text("Lernen Sie Lösungen kennen, die Abwehrmaßnahmen verknüpfen und Innovationen erschließen – mit einem Partner, der Ihr Business versteht.");
        })

    $('.box-hover-3').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Vertrauen in der digitalen Welt");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Erschließen Sie Innovationen, indem Sie vertrauensvolle Beziehungen mit Benutzern aufbauen und die Daten schützen, die das Fundament Ihres Unternehmens bilden.");
            $('.ls-subhead').fadeIn(1300);

        },
        function() {
            $('.ls-head').text("Sicherheitslösungen");
            $('.ls-subhead').text("Lernen Sie Lösungen kennen, die Abwehrmaßnahmen verknüpfen und Innovationen erschließen – mit einem Partner, der Ihr Business versteht.");
        })

    $('.box-hover-4').hover(function() {

            $('.ls-head').hide();
            $('.ls-subhead').hide();
            $('.cards-intro').hide();
            $('.links-bottom').hide();

            $('.cards-intro').fadeIn(1000);
            $('.links-bottom').fadeIn(1300);

            $('.ls-head').text("Cloud-Sicherheit");
            $('.ls-head').fadeIn(1000);
            $('.ls-subhead').text("Steigen Sie ohne Bedenken auf die Cloud um, indem Sie Sicherheit in jede Phase der Umstellung integrieren.");
            $('.ls-subhead').fadeIn(1300);

        },

        function() {
            $('.ls-head').text("Sicherheitslösungen");
            $('.ls-subhead').text("Lernen Sie Lösungen kennen, die Abwehrmaßnahmen verknüpfen und Innovationen erschließen – mit einem Partner, der Ihr Business versteht.");
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