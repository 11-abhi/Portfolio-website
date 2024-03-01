  const darkmode = () =>{
            const   themetoggleBtns = document.querySelectorAll('#Themes-toggle');
            const theme = localStorage.getItem('theme');

             theme && document.body.classList.add('theme')
             

            themetoggleBtns.forEach((btn) =>{
                        btn.addEventListener('click',() =>{
                            document.body.classList.toggle('light-mode')
                           if(document.body.classList.contains('light-mode')){
                                localStorage.setItem('theme','light-mode')
                           }
                           else{
                               localStorage.removeItem('theme')
                           }
                        })
            })
  }

  export default darkmode