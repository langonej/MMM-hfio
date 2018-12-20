Module.register("MMM-hfio",{

  // Initialize var for storing data
  oh2data: [],
	
  // Default module configuration variables
	defaults: {
		airports: "KSFO,PAO,HAF,JFK", // continental U.S. airports only
    updateInterval: 10, // in minutes
	},

  getScripts: function() {
    return ["moment.js"];
  },

  getStyles: function() {
    return ["MMM-hfio.css"];
	},

  // Entry point for module
  start: function() { 
    this.getOH2();
    
  },

	// Override dom generator
	getDom: function() {
        
var wrapper = document.createElement("div");

  
//wrapper.innerHTML = "<div class=" + "region top center" + "><div class=" + "container></div>";
         // wrapper.innerHTML = wrapper.innerHTML + "<table height=180 style="+"width: 100%; border-collapse: separate; border-spacing: 12px;>";
        
     //   wrapper.innerHTML = "<table cellspacing=" + "30" + "style="+"border-collapse: separate; border-spacing: 12px;>";
        // ffaa00
        wrapper.innerHTML = wrapper.innerHTML + "<font color="+"CCCCCC"+"><table class=hfiobox><tr><td>Tilghman Garage</td><td align=left><label class="+"switch"+"><input type="+"checkbox"+"><span class="+"slider"+"></span></label></td></tr>";
  
    //    wrapper.innerHTML = wrapper.innerHTML + "<tr><td style="+"padding: 0; color: #ffaa00; line-height: .1em;"+">We're Awake</td><td style="+"padding: 0; color: #ffaa00; line-height: .1em;>Evening </td></tr>";
    
   //    wrapper.innerHTML = wrapper.innerHTML + "<tr><td style="+"padding: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; padding-bottom: 0px; border-radius: 10px;>";
     
    //    wrapper.innerHTML = wrapper.innerHTML + "<tr><td>";
        
        
   //   wrapper.innerHTML = wrapper.innerHTML + "<label class="+"switch"+"><input id="+"toggle-one"+"type="+"checkbox"+">";
        
      //  wrapper.innerHTML = wrapper.innerHTML + "<span class="+"slider"+"></span></label></td>";
        
    //    wrapper.innerHTML = wrapper.innerHTML + "<td border: border-radius: 10px;>";
        
       
   //     wrapper.innerHTML = wrapper.innerHTML + "<tr><td><label class="+"switch"+"><input type="+"checkbox"+"><span class="+"slider"+"></span></label></td>";
        
        wrapper.innerHTML = wrapper.innerHTML + "</tr></table>";
  
  
  
        
        
    return wrapper;
	},

 


  // Data Handling Functions
  getOH2: function () {
   console.log("inside MMM oh2 function");
      
      
      var payload = "http://192.168.1.19:8080/rest/items/sim_JLOfficeSwitch";
      
      
    this.sendSocketNotification("FLIP_SWITCH", payload);
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "WX_RESULT") {
      this.oh2data= payload;
      this.updateDom(self.config.fadeSpeed);
    }    
  },
});
