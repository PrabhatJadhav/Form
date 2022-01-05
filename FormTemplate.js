function GetData()
{
    let name = document.getElementById("nm").value;
    let mail = document.getElementById("em").value;
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let country = document.getElementById("country").value;

    if (name == "")
    {
        document.getElementById("lbl").innerHTML = "*Full Name is required";
    }
    else if (mail == "")
    {
        document.getElementById("lbl").innerHTML = "*Email is required";
    }
    else if (p1 == "" && p2 == "")
    {
        document.getElementById("lbl").innerHTML = "*Enter Password";
    }
    else if (p2 == "")
    {
        document.getElementById("lbl").innerHTML = "*Confirm Password";
    }
    else if (p1 != p2)
    {
        document.getElementById("lbl").innerHTML = "*Passwords Do Not Match";
    }
    else {
        document.write("Name: ",name,"</br>Email: ",mail,"</br>Country: ",country);
    }
}

