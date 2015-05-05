window.view = {
	
  displayAnswer: function(answer){
    $('#adderModal').modal('show');
    $('#adderDiv').html('<div class="alert alert-danger">' + answer + '</div>');		
  },
	
  addErrorStyle: function(input){
    input.parent('div').addClass('has-error');
  },
  
  removeErrorStyle: function(input){
    input.parent('div').removeClass('has-error');
  }
	
}

window.controller = {

  initPage: function() {
    $('#addButton').click(controller.addButton);
  },		

  addButton: function(){
    var input = $('#addInput');
    var number = parseInt(input.val());
    if(isNaN(number) || number < 1){
      view.addErrorStyle(input);
    }else{
      view.removeErrorStyle(input);	  
      view.displayAnswer(model.add(number));
    }
  }		

}

window.model = {

  add: function(number){
    return number > 0 ? number * (number + 1) / 2 : 0;
  }
}

