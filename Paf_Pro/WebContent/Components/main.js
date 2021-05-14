/**
 * 
 */
$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
 	$("#alertError").hide();
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
 	$("#alertSuccess").text("");
 	$("#alertSuccess").hide();
 	$("#alertError").text("");
 	$("#alertError").hide();
	// Form validation-------------------
		var status = validateProjectForm();
	if (status != true)
 	{
 		$("#alertError").text(status);
 		$("#alertError").show();
 		return;
 	}
	// If valid------------------------
 	var type = ($("#hidProject_IDSave").val() == "") ? "POST" : "PUT";
	 $.ajax(
 		{
 			url : "ProjectAPI",
 			type : type,
 			data : $("#formProject").serialize(),
 			dataType : "text",
 			complete : function(response, status)
 		{
 			onProjectSaveComplete(response.responseText, status);
 		}
 		}); 
});
function onProjectSaveComplete(response, status)
{
if (status == "success")
 {
 	var resultSet = JSON.parse(response);
 	if (resultSet.status.trim() == "success")
 	{
 		$("#alertSuccess").text("Successfully saved.");
 		$("#alertSuccess").show();
 		$("#divProjectsGrid").html(resultSet.data);
 	} else if (resultSet.status.trim() == "error")
 	{
 	$("#alertError").text(resultSet.data);
 	$("#alertError").show();
 	}
 	} else if (status == "error")
 	{
 		$("#alertError").text("Error while saving.");
 		$("#alertError").show();
 	} else
 	{
 	$("#alertError").text("Unknown error while saving..");
 	$("#alertError").show();
 	} 

	 $("#hidProject_IDSave").val("");
 	$("#formProject")[0].reset();
}

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	  $("#hidProject_IDSave").val($(this).closest("tr").find('#hidProject_IDUpdate').val());
	 $("#Project_Name").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#Project_About").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#Project_Context").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#Project_Goals").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#Project_Budget").val($(this).closest("tr").find('td:eq(5)').text());
	 $("#Project_Timeline").val($(this).closest("tr").find('td:eq(6)').text());
	 $("#Team_Name1").val($(this).closest("tr").find('td:eq(7)').text());
	 $("#Team_Dis1").val($(this).closest("tr").find('td:eq(8)').text());
	 $("#Team_Name2").val($(this).closest("tr").find('td:eq(9)').text());
	 $("#Team_Dis2").val($(this).closest("tr").find('td:eq(10)').text());
});
// CLIENT-MODEL================================================================
function validateProjectForm()
{
	
	
	if ($("#Project_Name").val().trim() == "")
 	{
 		return "Insert Project Name.";
 	} 
 	if ($("#Project_About").val().trim() == "")
 	{
 		return "Insert Project About.";
 	} 
 	if ($("#Project_Context").val().trim() == "")
 	{
 		return "Insert Project Context.";
 	} 
 	if ($("#Project_Goals").val().trim() == "")
 	{
 		return "Insert Project Goals.";
 	} 
	if ($("#Project_Budget").val().trim() == "")
	 {
 		return "Insert Project Budget.";
 	}
	var tmpBudget = $("#Project_Budget").val().trim();
	if (!$.isNumeric(tmpBudget))
 	{
 		return "Insert a numerical value for Project Budget.";
 	}
	 $("#Project_Budget").val(parseFloat(tmpBudget).toFixed(2));
	if ($("#Project_Timeline").val().trim() == "")
	 {
 		return "Insert Project Timeline.";
 	}
 	if ($("#Team_Name1").val().trim() == "")
	 {
 		return "Insert 1st Team Member Name.";
 	}
 	if ($("#Team_Dis1").val().trim() == "")
	 {
 		return "Insert 1st Team Member Description.";
 	}
 	if ($("#Team_Name2").val().trim() == "")
	 {
 		return "Insert 2nd Team Member Name.";
 	}
 	if ($("#Team_Dis2").val().trim() == "")
	 {
 		return "Insert 2nd Team Member Description.";
 	}
	return true;
}

///REMOVE============================================
$(document).on("click", ".btnRemove", function(event) {
	$.ajax(
		{
			url: "ProjectAPI",
			type: "DELETE",
			data: "Project_ID=" + $(this).data("projectid"),
			dataType: "text",
			complete: function(response, status) {
				onProjectDeleteComplete(response.responseText, status);
			}


		});

});


function onProjectDeleteComplete(response, status) {

	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		}

		else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	}

	else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	}
	
	else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();

	}

}
	