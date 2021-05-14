<%@page import="com.Project"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>

<html>
<head>
<meta charset="ISO-8859-1">
<title>PAF Project</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/main.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6">
<h1>Project Management</h1>
<form id="formProject" name="formProject">

<br> Project Name:
<input id="Project_Name" name="Project_Name" type="text"
 class="form-control form-control-sm">
<br> Project About:
<input id="Project_About" name="Project_About" type="text"
 class="form-control form-control-sm">
<br>Project Context:
<input id="Project_Context" name="Project_Context" type="text"
 class="form-control form-control-sm">
<br>Project Goals:
<input id="Project_Goals" name="Project_Goals" type="text"
 class="form-control form-control-sm">
<br>Project Budget:
<input id="Project_Budget" name="Project_Budget" type="text"
 class="form-control form-control-sm">
<br>Project Timeline:
<input id="Project_Timeline" name="Project_Timeline" type="text"
 class="form-control form-control-sm">
<br>1st Team Member Name:
<input id="Team_Name1" name="Team_Name1" type="text"
 class="form-control form-control-sm">
<br>1st Team Member Discription:
<input id="Team_Dis1" name="Team_Dis1" type="text"
 class="form-control form-control-sm">
<br>2nd Team Member Name:
<input id="Team_Name2" name="Team_Name2" type="text"
 class="form-control form-control-sm">
<br>2nd Team Member Discription:
<input id="Team_Dis2" name="Team_Dis2" type="text"
 class="form-control form-control-sm">
<br>
<input id="btnSave" name="btnSave" type="button" value="Save"
 class="btn btn-primary">
<input type="hidden" id="hidProject_IDSave" name="hidProject_IDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 	<%
 	 	Project projectObj = new Project();
		 out.print(projectObj.readProjects());
 	%>
</div>

</body>
</html>