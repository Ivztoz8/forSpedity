var app = new Vue({ 
    el: '#app',
   
    data: {
        object: {
            data: '14/10/2022',
            sType: 'standard',
            sFrom: '03039 - Sora (FR)',
            sTo: '00030 - Vivaro Romano (RM)',
            pallet: '100Kg 100x100x100 cm',
            qta: '1',
            offer: 'Nessuna offerta ricevuta',
            deadline: 'Scade il 24/10/2022 alle 0:00',
            ids: 'ffc78c0b',
            messageForT: 'Nessun messaggio',
            content: 'Merce generica',
            value: '€',
            equipmentTr: 'Sponda idraulica Alza/Abbassa',
            additionalServ: 'Nessuno',
          },
    },
      methods: {
        showDisplay() {
            var element = document.getElementById("showDisp");
            element.classList.toggle("d-none");
        },
        minuteCounter: function(){
          var count = 60;
          setInterval(function(){
            count--;
            var element = document.getElementById("minCount").innerHTML = count;
            if( count == 0){
              count = 60;
            }
          }, 60000)
        },
        secondCounter: function(){
          var count = 60;
          setInterval(function(){
            count--;
            var element = document.getElementById("secCount").innerHTML = count;
            if( count == 0){
              count = 60;
            }
          }, 1000)
        }
        
      },
      mounted: function() {
        this.minuteCounter(),
        this.secondCounter()
      },
});