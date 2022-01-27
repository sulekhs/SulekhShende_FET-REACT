$(document).ready(
    () => {
        var users = {};
        $("input[type='button']").click(() =>  {
             users.first_name = $("input[name='firstname']").val();
             users.last_name = $("input[name='lastname']").val();
             users.address = $("input[name='address']").val();
             users.city = $("input[name='city']").val();
             users.pincode = $("input[name='pin']").val();
             var userObj = JSON.stringify(users);
            $.ajax({
                url: "https://reqres.in/api/users",
                method: "POST",
                data: userObj,
                contentType: 'application/json; charset=utf-8',
                success: function() {
                    alert("Saved Succesfully");
                    console.log(userObj);
                },
                error: function() {
                    alert("Error Registering");
                }
            });
        });
    }
)
