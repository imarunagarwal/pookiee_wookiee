document.addEventListener("DOMContentLoaded", function() {
    function addHoverEffect(boxId, flavourId) {
        var box = document.getElementById(boxId);
        var flavour = document.getElementById(flavourId);
        
        if (box && flavour) {
            box.addEventListener("mouseenter", function() {
                flavour.style.display = "block";
            });
            box.addEventListener("mouseleave", function() {
                flavour.style.display = "none";
            });
        }
    }

    addHoverEffect("top-right", "white");
    addHoverEffect("bottom-left", "milk");
    addHoverEffect("bottom-right", "truffle");
    addHoverEffect("top-left", "truffle2");
});
