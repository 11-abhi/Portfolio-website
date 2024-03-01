

const mobileNav = () =>{
    const headerbtn = document.querySelector('.Header-menubar');
    let mobileNavigation = document.querySelector('.mobile-nav');
    let body = document.querySelector('body');
    const Links = document.querySelectorAll('.mobile-link');


    


    let openNav = false;
    
    headerbtn.addEventListener('click',() =>{
            openNav = !openNav
            if(openNav === true){
                mobileNavigation.style.display = 'flex'
                body.style.overflow = 'hidden'
            }
            else{
                mobileNavigation.style.display = 'none'
                body.style.overflow = 'auto'
            }
           
    })


    Links.forEach((dets)=>{
        dets.addEventListener('click',()=>{
            openNav = false; 
            mobileNavigation.style.display = 'none'  ;
            body.style.overflowY = 'auto';       
        })
})
}


export default mobileNav();