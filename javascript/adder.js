window.view = {
	
	displayAnswer: function(answer){
	    $('#adderModal').modal('show');
	    $('#adderDiv').html('<div class="alert alert-danger">' + answer + '</div>');		
	}
	
}

window.controller = {

    initPage: function() {
        $('#addButton').click(controller.addButton);
	},
		

	addButton: function(){
	  var input = $('#addInput');
	  var number = input.val();
	  if(number < 1){
	     input.parent('div').addClass('has-error');
	  }else{
        input.parent('div').removeClass('has-error');	  
		view.displayAnswer(model.add(number));
	  }
    }		

}

window.model = {

    add: function(number){
	    var answer = 0;
	    for(i=1; i<=number; i++){
		    answer += i;
		}
		return answer;
	}
}
