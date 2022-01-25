$(".glb").hover(
    function() {
        $( this ).css('display','none');
        $(".glb2").css('display','block');
        $(".sign-up-glb").css('display','block');
        $(".quick-choose-glb").css('display','block');
    },
    function() {
        $( this ).css('display','block');
        $(".glb2").css('display','none');
        $(".sign-up-glb").css('display','none');
        $(".quick-choose-glb").css('display','none');
    }
);