AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound", () => {
      console.log("marker is found");
      
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost");
     
    });
  },
  handleMarkerFound: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButtton = document.getElementById("order-button");
    var orderSummaryButtton = document.getElementById("order-summary-button");

    // Handling Click Events
    orderButtton.addEventListener("click", () => {
      
    });

    orderSummaryButtton.addEventListener("click", () => {
      
    });
  },

  handleMarkerLost: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});
