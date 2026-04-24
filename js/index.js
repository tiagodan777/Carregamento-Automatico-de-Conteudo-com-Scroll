$(function() {
    var $window = $(window);
    var $main = $('#corpo');
    var $subset = $('#subset');
    var $footer = $('#rodape');
    var offset = 0;
    var endZone = 0;
    var loading = false;

    function calculateEndZone() {
        endZone = $footer.offset().top - $window.height() + 100;
        console.log(endZone);
    }

    $window.on('load', function(data) {
        $.get('subset.php', function(data) {
            $subset.html(data)
            calculateEndZone();
        });
    });

    $window.on('scroll', function() {
        if (!loading && endZone < $window.scrollTop()) {
            loading = true
            offset += 3;
            var timeout = setTimeout(function() {
                $.get('subset.php', {offset: offset}, function(data) {
                    $subset.append(data);
                    //alert('Old endZone: ' + endZone);
                    calculateEndZone()
                    //alert('New endZone: ' + endZone)
                    loading = false;
                    console.log(endZone);
                });
            }, 500)
        }
    });
});