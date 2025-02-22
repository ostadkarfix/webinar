document.getElementById("signupForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    
    if (name.trim() === "" || phone.trim() === "") {
        alert("لطفاً تمامی فیلدها را پر کنید.");
        event.preventDefault();
    } else {
        alert("اطلاعات با موفقیت ارسال شد!");
    }
});