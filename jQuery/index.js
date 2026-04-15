$("h1").before("<button>New</button>")
$("h1").after("<button>New</button>")
$("h1").prepend("<button>New</button>")
$("h1").append("<button>New</button>")
$("h1").on("mouseover", function () {
    $("h1").css("color", "blue");
});
$("button ").html("<en>Key</en>")
$("a").attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ") 

const headerHide= $("button").click(function () {
    $("h1").fadeToggle();
    
});
$(document).keydown(function (e) {
    console.log(e.key);
    $("h1").text(e.key);
});
