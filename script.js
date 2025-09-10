  
        const admissionForm = document.getElementById("admissionForm");
        const nameInp = document.getElementById("name");
        const emailInp = document.getElementById("email");
        const dobInp = document.getElementById("dob");
        const courseInp = document.getElementById("course");
        const subBtn = document.getElementById("subBtn");
        subBtn.addEventListener("click",function(event){
            event.preventDefault();
            console.log("Submit is clickeddd");
            if (validateForm()){
                console.log("formm is submitted");
            }else{
                console.log("form not submitted");
            }
        })
        function validateForm(){
            let valid = true;
            if(nameInp.value.trim() === ""){
                alert("enter name");
                valid = false;
            }
            if(emailInp.value.trim() === ""){
                alert("enter email");
                valid = false;
            }
            if(dobInp.value.trim() === ""){
                alert("enter dob");
                valid = false;
            }
            return valid;
        }