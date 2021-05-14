package com;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Project;

/**
 * Servlet implementation class ProjectAPI
 */
@WebServlet("/ProjectAPI")
public class ProjectAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Project projectObj = new Project();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProjectAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		String output = projectObj.addProject(request.getParameter("Project_Name"),
				request.getParameter("Project_About"),
				request.getParameter("Project_Context"),
				request.getParameter("Project_Goals"),
				request.getParameter("Project_Budget"),
				request.getParameter("Project_Timeline"),
				request.getParameter("Team_Name1"),
				request.getParameter("Team_Dis1"),
				request.getParameter("Team_Name2"),
				request.getParameter("Team_Dis2"));
				response.getWriter().write(output);
	}
	// Convert request parameters to a Map
		@SuppressWarnings("rawtypes")
		private static Map getParasMap(HttpServletRequest request)
		{
			Map<String, String> map = new HashMap<String, String>();
		try
		 {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?
					scanner.useDelimiter("\\A").next() : "";
					scanner.close();
					String[] params = queryString.split("&");
		 for (String param : params)
		 { 
		
		String[] p = param.split("=");
		 map.put(p[0], p[1]);
		 }
		 }
		catch (Exception e)
		 {
		 }
		return map;
		}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		@SuppressWarnings("rawtypes")
		Map paras = getParasMap(request);
		 String output = projectObj.updateProject(paras.get("hidProject_IDSave").toString(),
		 paras.get("Project_Name").toString(),
		paras.get("Project_About").toString(),
		paras.get("Project_Context").toString(),
		paras.get("Project_Goals").toString(),
		paras.get("Project_Budget").toString(),
		paras.get("Project_Timeline").toString(),
		paras.get("Team_Name1").toString(),
		paras.get("Team_Dis1").toString(),
		paras.get("Team_Name2").toString(),
		paras.get("Team_Dis2").toString());
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		@SuppressWarnings("rawtypes")
		Map paras = getParasMap(request);
		 String output = projectObj.deleteProject(paras.get("Project_ID").toString());
		response.getWriter().write(output);
		// TODO Auto-generated method stub
	}

}
