const bloat_ids = [
    "main-header",
    "sidebar",
    "videos_videos-popular-right-now",
    "main-footer",
    "videos_videos-most-popular-nitro",
    "featured_content",
    "extras",
    "video_player_pip_wrapper",
    "headline_text_nitro",
    "taboola-module",
];

let main_content = document.getElementById("main_content");
main_content.style.margin = "100px";

bloat_ids.forEach(function (item, index) {
    let element = document.getElementById(item);
    if (element)
    {
       element.outerHTML = "";
    }
});

const bloat_classes = ["news-slider", ];

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

bloat_classes.forEach(function (item, index) {
    removeElementsByClass(item);
});
