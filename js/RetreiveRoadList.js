// JavaScript Document
function retreiveRoadList(){
		$.ajax({url:"http://10.11.96.251:3001/list/road",success:function(result){
		for(index in result){
			$("#road-table-row").append("<tr><td>"+result[index].emailid+"<tr><td>");
		}	
	  }});
	
	}
	