$(document).ready(
    () => {
        $("input[type='button']").click(() =>  {
            var username = $("input[name='username']").val();
            var password = $("input[name='password']").val();
            if(username != '' && password != ''){
                $.ajax({
                url: "https://mocki.io/v1/8a258aa0-ac44-4439-a413-74f60e29996d",    
                method: "GET",
                data:{
                    "username":username,
                    "password":password,
                },
                success:(x) => {
                    alert(x.username+ " Login Done");
                    window.location="./registration.html";
                },
                error:(e) => {
                    alert("Error Login");
                }
            });
            }else{
                alert("Enter details")
            }
        });
    }
)
 