
        window.addEventListener("load",function(){
           let inputFile = document.getElementById("inputFile")
           inputFile.addEventListener("change",function(){
               if(this.files && this.files[0]){
                var img =document.getElementById("displayImg");
                img.src=URL.createObjectURL(this.files[0]);
                img.onload = imgIsLoaded;
               }
           })
        })
        function imgIsLoaded(e){
            alert(e);
        }