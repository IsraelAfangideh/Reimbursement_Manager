



// Manager Login Stuff



// const url2 = "E:\Revature\Carthage\Iso_Carthage\Employees\addEmployee.html"


const url = "http://localhost:7171"

document.getElementById("submitLogin").onclick = login



async function login() {

  

    let username = document.getElementById("username").value
    let password  = document.getElementById("password").value
   

    let employeejson = {
        username: username,
        password: password,
      

    }//remember variables must match Java Object

    console.log(employeejson)

    let response = await fetch(url + "/login",{

        method: "POST",
        body: JSON.stringify(employeejson),
        credentials: "include"
    })

    console.log(response.status)

    if (response.status === 202){
        let data = await response.json()

        document.getElementById("header").innerHTML = "Welcome " + data.first_name + "!!!" + "<br></br>" + "Trust Score:" + data.trust_score + "<br></br>" + "Role:" + data.employee_role
        
        window.setTimeout(function() {
            window.location.href = "\ManagerFuncsList.html"
        },2500);

       
        
    }else{
        document.getElementById("header").innerHTML = "Failed to login, try again"
        document.getElementById("header").style.color = "red"
    }

    document.getElementById("submitLoginE").onclick = login
async function login() {

  

    let username = document.getElementById("username").value
    let password  = document.getElementById("password").value
   

    let employeejson = {
        username: username,
        password: password,
      

    }//remember variables must match Java Object

    console.log(employeejson)

    let response = await fetch(url + "/login",{

        method: "POST",
        body: JSON.stringify(employeejson),
        credentials: "include"
    })

    console.log(response.status)

    if (response.status === 202){
        let data = await response.json()

        document.getElementById("header").innerHTML = "Welcome " + data.first_name + "!!!" + "<br></br>" + "Trust Score:" + data.trust_score + "<br></br>" + "Role:" + data.employee_role
        
        window.setTimeout(function() {
            window.location.href = "\ManagerFuncsList.html"
        },2500);

       
        
    }else{
        document.getElementById("header").innerHTML = "Failed to login, try again"
        document.getElementById("header").style.color = "red"
    }
}


}
