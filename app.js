const PC=window.matchMedia('(min-width:1025px)')
const TAB=window.matchMedia('(max-width:1025px)')
const PHONE=window.matchMedia('(max-width:501px)')    
    

    
var mainPage = document.querySelector('.Main_Page')
var d_height = document.documentElement.clientHeight
var Button_Mob = document.querySelector('.Main_Page .Button_Mobile')
var Buttons = document.querySelector('.Main_Page .Button')
var icon = document.getElementById('LD_Mode') 
var i = 0
var j = 0

//Page 1//

var Page1 = document.querySelector('.Page1')
var laptop = document.getElementById('laptop')
var tab = document.getElementById('tab')
var phone = document.getElementById('phone')
var P1_Mob_background = document.getElementById('EmpireState_building')
var name_svg_text = document.querySelector('.My_Text .Text')
var name_svg_mob = document.querySelectorAll('.Page1_Mob .SVG_n svg text')
var name_svg = document.querySelectorAll('.My_Text .Text svg text')
var text_mob = document.querySelector('.Page1_Tab .Tab_Text h1')
var text = document.querySelector('.My_Text .Info h1')
var icons_p1_sub = document.querySelector('.My_Text .Icons .Icons_sub')
var icons_p1 = document.querySelectorAll('.My_Text .Icons .Icons_sub svg')

//Tab Stuff//

var SVG_tab =  document.querySelector('.Page1_Mob .SVG_n svg')


//Tab Stuff//

//Tab stuff//

var Page1_tab = document.querySelector('.Page1_Tab')
var empirestate_building = document.querySelector('.Page1_Tab .Tab_IMG img')
var Page2_tab_text = document.querySelector('.Page1_Tab .Tab_Text h1')

//Tab Stuff
// var github = document.querySelector('.My_Text .Icons .Github')
// var linkedin = document.querySelector('.My_Text .Icons .Linkedin')

//Page 2//

var Page2 = document.querySelector('.Page2')
var about_heading = document.querySelector('.About_texts .Sub1 h1')
var about_para = document.querySelector('.About_texts .Sub1 p')
var p2_man_Img = document.querySelector('.About_Images .Man');
var p2_phone_img = document.querySelector('.About_Images .Iphone');
var about_images = document.querySelector('.Page2 .Mobile_2 .About_Images')

//Page 3//

var Page3 = document.querySelector('.Page3')
var skill_heading = document.querySelector('.Page3 .Skills .Sub2 h1') 
var all_Skills_svg = document.querySelectorAll('.Page3 .Mobile_3 .Skills .Sub2 .all_skills div svg') 
var all_Skills_h = document.querySelectorAll('.Page3 .Mobile_3 .Skills .Sub2 .all_skills div h2') 
var p3_ipad = document.querySelector('.Images_2 .Ipad');
var p3_lady = document.querySelector('.Images_2 .Woman');
var Page3_Images = document.querySelector('.Page3 .Mobile_3 .Images_2')
// for(var i=0; i<all_Skills_h.length;i++){
//     all_Skills_h[i].style.background='pink'

// }
// var g = all_Skills_svg.length[2]


//Page 4//


var Page4 = document.querySelector('.Page4')
var P4_heading = document.querySelector('.Page4 .Mobile_4 .P_heading h1')
var Project_h1 = document.querySelector('.Projects .Pr_heading h1')
var Internship_h1 = document.querySelector('.Internships .In_headings h1')
var Pc_sub = document.querySelector('.P_contents .P_cSub')
var PR_Card1 = document.querySelector('.Pr_cards .PR_card1');
var PR_Card2 = document.querySelector('.Pr_cards .PR_card2');
var IN_Card1 = document.querySelector('.In_cards .IN_card1');
var IN_Card2 = document.querySelector('.In_cards .IN_card2');

//Page 5//


var Page5 = document.querySelector('.Page5')
var thanks = document.querySelector('.Page5 .Mobile_5 svg')
var copyright = document.querySelector('.Page5 .Mobile_5 .Copy h1')
var Bottoms_icons = document.querySelectorAll('.Page5 .Mobile_5 .Copy .Bottom_icons .Bottom_icon_sub svg');
var Bottoms_icons_sub = document.querySelector('.Page5 .Mobile_5 .Copy .Bottom_icons .Bottom_icon_sub');

//Project popups//

//Project 1//

var Project_main = document.querySelector('.Project_Main');
var tab_phone_close = document.querySelector('.Project_Main .Project_Link .Tab_Phone_Close');
var Close_button = document.querySelector('.Project_Main .Close_button');


//Project 2//

var Project_main_2 = document.querySelector('.Project_Main_2');
var tab_phone_close_2 = document.querySelector('.Project_Main_2 .Project_Link_2 .Tab_Phone_Close_2');
var Close_button_2 = document.querySelector('.Project_Main_2 .Close_button_2');


//Internship popups//

//Internship 1//

var Internship_main = document.querySelector('.Internship_Main');
var IT_tab_phone_close = document.querySelector('.Internship_Main .Internship_Link .IT_Tab_Phone_Close');
var IT_Close_button = document.querySelector('.Internship_Main .IT_Close_button');


//Internship 2//

var Internship_main_2 = document.querySelector('.Internship_Main_2');
var IT_tab_phone_close_2 = document.querySelector('.Internship_Main_2 .Internship_Link_2 .IT_Tab_Phone_Close_2');
var IT_Close_button_2 = document.querySelector('.Internship_Main_2 .IT_Close_button_2');


//Popup Orientation 

//Popup 1//

var popup = document.querySelector('.Popup_Pc')
var popup_svg = document.querySelector('.Popup_Pc .Popup_sub .Top_part svg')
var popup_sub_text1 = document.querySelector('.Popup_Pc .Popup_sub .Top_part .Top_subPart h1')
var popup_bottom_text1 = document.querySelector('.Popup_Pc .Popup_sub .Bottom_part .Pc h1')

//Popup 1 end

//Popup 2

var popup_mob_tab = document.querySelector('.Popup_Pc_2')
var popup_mob_svg = document.querySelector('.Popup_Pc_2 .Popup_sub_2 .Top_part_2 svg')
var popup_mob_text2 = document.querySelector('.Popup_Pc_2 .Popup_sub_2 .Top_part_2 .Top_subPart_2 h1')
var popup_bottom_text2 = document.querySelector('.Popup_Pc_2 .Popup_sub_2 .Bottom_part_2 .Pc_2 h1')


//Popup 2 end

//Cursor

var Cursor = document.querySelector('.Cursor')

//Niche Items//
// var scrollBar = document.querySelector('::-webkit-scrollbar')

// scrollBar.style.background='pink'

//Dark Mode and Light Mode//




const maxTiltEffectSetting ={
    max:25,
    perspective:1000,
    scale:1.2,
    speed:500,
    easing:'cubic-bezier(0.03, 0.98, 0.52,0.99)'

}

Buttons.onclick=()=>{
    if(i%2==0){
        mainPage.style.background="black"
        
        icon.src='Sun3.svg'

        Page1_Dark()
        Page2_Dark()
        Page3_Dark()
        Page4_Dark()
        Page5_Dark()
        
        Popup_1_Dark()
        Popup_2_Dark()

        i++

    }
    else{
        mainPage.style.background="white"
        
        icon.src='Moon.svg'

        Page1_Light()
        Page2_Light()
        Page3_Light()
        Page4_Light()
        Page5_Light()

        Popup_1_light()
        Popup_2_light()

        i++

    }

}

Button_Mob.onclick = ()=>{

    if(i%2==0){
        mainPage.style.background="black"

        Button_Mob.innerHTML = 'Light Mode'
        Button_Mob.style.background='black'
        Button_Mob.style.color='white'
        // Button_Mob.style.boxShadow = '5px 5px 5px 2px rgba(0, 0, 0, 0.5)'
        Button_Mob.style.boxShadow = '5px 5px 5px 2px rgba(255, 255, 255, 0.5)'
        
        // icon.src='Sun3.svg'

        Page1_Dark_Mob()
        Page2_Dark()
        Page3_Dark()
        Page4_Dark()
        Page5_Dark()
        
        Popup_1_Dark()
        Popup_2_Dark()

        i++

    }
    else{
        mainPage.style.background="white"
        Button_Mob.innerHTML = 'Dark Mode'
        Button_Mob.style.background='white'
        Button_Mob.style.color='black'
        Button_Mob.style.boxShadow = '5px 5px 5px 2px rgba(0, 0, 0, 0.5)'
        
        // Button_Mob.style.boxShadow = '5px 5px 5px 2px rgba(255, 255, 255, 0.5)'
        // icon.src='Moon.svg'
        
        Page1_Light_Mob()
        Page2_Light()
        Page3_Light()
        Page4_Light()
        Page5_Light()

        Popup_1_light()
        Popup_2_light()

        i++

    }
}


    // Light and Dark Mode//


    //Page 1 and Page 1.5 Mobile//


    function Page1_Light_Mob(){
        text_mob.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        text_mob.style.color="black"
        for(var i=0;i<name_svg_mob.length;i++){
            name_svg_mob[i].style.stroke="black"
        }
        P1_Mob_background.src = '/Images/2 (1).png'
        

    }
    
    function Page1_Dark_Mob(){
        text_mob.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        text_mob.style.color="white"
        for(var j=0;j<name_svg_mob.length;j++){
            name_svg_mob[j].style.stroke="white"
        }

        P1_Mob_background.src = '/Images/1(1).png'
        
    }


    //Page 1 and Page 1.5 Mobile End//

    //Page1//

    function Page1_Light(){
        laptop.src='/Images/macbook_L (10).png'
        tab.src='/Images/Tablet_L(1).png'
        phone.src='/Images/s10_L.png'
        text.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        text.style.color="black"
        for(var i=0;i<name_svg.length;i++){
            name_svg[i].style.stroke="black"
        }
        for(var i=0;i<icons_p1.length;i++){
            icons_p1[i].style.fill="black"
        }

    }
    
    function Page1_Dark(){
        laptop.src='/Images/macbook_D(1).png'
        tab.src='/Images/Tablet_D.png'
        phone.src='/Images/s10_D1.png'
        text.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        text.style.color="white"
        for(var j=0;j<name_svg.length;j++){
            name_svg[j].style.stroke="white"
        }
        for(var j=0;j<icons_p1.length;j++){
            icons_p1[j].style.fill="white"
        }
    }

    //Page 2//
    
    
    function Page2_Light()
    {
        about_heading.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        about_heading.style.color="black"
        about_para.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        about_para.style.color="black"
    }
    
    function Page2_Dark()
    {
        about_heading.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        about_heading.style.color="white"
        about_para.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        about_para.style.color="white"
    }


    //Page 3//


    function Page3_Light(){
        skill_heading.style.color="black"
        skill_heading.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        for(var i = 0;i<all_Skills_svg.length;i++){
            all_Skills_svg[i].style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
            all_Skills_svg[i].style.fill='black'
        }
        for(var i=0; i<all_Skills_h.length;i++){
            all_Skills_h[i].style.color='black'
        
        }
        // for(var j = 0;i<all_Skills_h2.length;j++){
        //     all_Skills_h2[j].style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        //     all_Skills_h2[j].style.color='white'
        // }
    }
    
    function Page3_Dark(){
        skill_heading.style.color="white"
        skill_heading.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        for(var i = 0;i<all_Skills_svg.length;i++){
            all_Skills_svg[i].style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
            all_Skills_svg[i].style.fill='white'
        }
        for(var i=0; i<all_Skills_h.length;i++){
            all_Skills_h[i].style.color='white'
        
        }
        // for(var j = 0;i<all_Skills_h2.length;j++){
        //     all_Skills_h2[j].style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        //     all_Skills_h2[j].style.color='white'
        // }
    }


    //Page 4//


    function Page4_Light(){
        P4_heading.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        P4_heading.style.color="black"
        Project_h1.style.color="black"
        Internship_h1.style.color="black"
    }
    
    function Page4_Dark(){
        P4_heading.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        P4_heading.style.color="white"
        Project_h1.style.color="white"
        Internship_h1.style.color="white"
    }

    //Page 5//


    function Page5_Light(){
        thanks.style.fill="black"
        thanks.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        copyright.style.color="black"
        for(var k=0; k<Bottoms_icons.length;++k){
            Bottoms_icons[k].style.fill='black'
        }
    }
    
    function Page5_Dark(){
        thanks.style.fill="white"
        thanks.style.transition = `transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
        copyright.style.color="white"
        for(var j=0; j<Bottoms_icons.length;++j){
            Bottoms_icons[j].style.fill='white'
            // console.log('kk')
        }
    }


    //Popup 1//

    function Popup_1_light(){
        popup.style.background='white'
        popup_svg.style.fill='black'
        popup_sub_text1.style.color='black'
        popup_bottom_text1.style.color='black'

    }

    function Popup_1_Dark(){
        popup.style.background='black'
        popup_svg.style.fill='white'
        popup_sub_text1.style.color='white'
        popup_bottom_text1.style.color='white'
    }

    //Popup 1 end//

    //Popup 2//

    function Popup_2_light(){
        popup_mob_tab.style.background='white'
        popup_mob_svg.style.fill='black'
        popup_mob_text2.style.color='black'
        popup_bottom_text2.style.color='black'
    }

    function Popup_2_Dark(){
        popup_mob_tab.style.background='black'
        popup_mob_svg.style.fill='white'
        popup_mob_text2.style.color='white'
        popup_bottom_text2.style.color='white'
    }

    //Popup 2 end//

document.addEventListener('scroll',(e)=>{
    if(scrollY>10){
        Buttons.style.opacity=1
    }
    else{
        Buttons.style.opacity=0
    }
})





// Light and Dark Mode  Finish //


function openingAnimations(){
    setTimeout(Page1Load,4700)
    
    // window.addEventListener('scroll',Page1Load)
    window.addEventListener('scroll',Page1Scroll)
    window.addEventListener('scroll',Page2Scroll)
    window.addEventListener('scroll',Page3Scroll)
    window.addEventListener('scroll',page4Scroll_tab)
    window.addEventListener('scroll',Page5Scroll_tab)

    // Page1Load()
    // Page2Scroll()
    // Page3Scroll()
    // page4Scroll_tab()
    // Page5Scroll_tab()
}
// openingAnimations()
// setTimeout(openingAnimations,4700)

// /?not sure here do not delete/ ?


    // if(screen.width>1025){
    //     window.addEventListener('load',openingAnimations)
    // }
    // else if(screen.width>501 && screen.width<1025){
    //     window.removeEventListener('load',openingAnimations)
    //     document.addEventListener('load',Page2Scroll_tab)
    //     // document.querySelector('body').style.background='blue'
    //     console.log('working i guess')
    // }


    function call(){
        if(screen.width>1025){
        
            // PC
            setTimeout(Page1Load,4700)

            window.addEventListener('scroll',Page1Scroll)
            window.addEventListener('scroll',Page2Scroll)
            window.addEventListener('scroll',Page3Scroll)
            window.addEventListener('scroll',Page4Scroll)
            window.addEventListener('scroll',Page5Scroll)

            about_images.addEventListener('mouseout',Page2Hover_enter)
            about_images.addEventListener('mouseover',Page2Hover_leave)

            Page3_Images.addEventListener('mouseover',Page3_Hover_Enter)
            Page3_Images.addEventListener('mouseout',Page3_Hover_Leave)

            PR_Card1.addEventListener('mouseover',PR_card1_hover)
            PR_Card1.addEventListener('mouseout',PR_card2_hover_exit)
            IN_Card1.addEventListener('mouseover',IN_card1_hover)
            IN_Card1.addEventListener('mouseout',IN_card2_hover_exit)

            //PC

            //Tab//

            // Page1_tab_load()
            // window.addEventListener('scroll',Page1Scroll_tab)
            window.removeEventListener('scroll',Page2Scroll_tab)
            window.removeEventListener('scroll',Page2Scroll_tab)
            window.removeEventListener('scroll',Page3Scroll_tab)
            window.removeEventListener('scroll',Page4Scroll_tab)
            window.removeEventListener('scroll',Page5Scroll_tab)
            //Tab//

            //Mobile//

            window.removeEventListener('scroll',Page_1_5_Scroll_Mob)
            window.removeEventListener('scroll',Page2Scroll_Mob)
            window.removeEventListener('scroll',Page3Scroll_Mob)
            window.removeEventListener('scroll',Page4Scroll_Mob)
            window.removeEventListener('scroll',Page5Scroll_Mob)

            //Mobile//
    
        }
    
        else if(screen.width>500 && screen.width<1025){
            //PC

            window.removeEventListener('scroll',Page1Scroll)
            window.removeEventListener('scroll',Page2Scroll)
            window.removeEventListener('scroll',Page3Scroll)
            window.removeEventListener('scroll',page4Scroll_tab)
            window.removeEventListener('scroll',Page5Scroll_tab)
            
            about_images.removeEventListener('mouseout',Page2Hover_enter)
            about_images.removeEventListener('mouseover',Page2Hover_leave)

            Page3_Images.removeEventListener('mouseover',Page3_Hover_Enter)
            Page3_Images.removeEventListener('mouseout',Page3_Hover_Leave)

            PR_Card1.removeEventListener('mouseover',PR_card1_hover)
            PR_Card1.removeEventListener('mouseout',PR_card2_hover_exit)
            IN_Card1.removeEventListener('mouseover',IN_card1_hover)
            IN_Card1.removeEventListener('mouseout',IN_card2_hover_exit)


            //PC

            //Tab//

            // Page1_tab_load()
            // window.addEventListener('scroll',Page1Scroll_tab)
            window.addEventListener('scroll',Page1_5_Scroll_tab)
            window.addEventListener('scroll',Page2Scroll_tab)
            window.addEventListener('scroll',Page3Scroll_tab)
            window.addEventListener('scroll',Page4Scroll_tab)
            window.addEventListener('scroll',Page5Scroll_tab)

            //Tab//

            //Mobile//

            window.removeEventListener('scroll',Page_1_5_Scroll_Mob)
            window.removeEventListener('scroll',Page2Scroll_Mob)
            window.removeEventListener('scroll',Page3Scroll_Mob)
            window.removeEventListener('scroll',Page4Scroll_Mob)
            window.removeEventListener('scroll',Page5Scroll_Mob)

            //Mobile//

        }
        else if(screen.width<500){

            //PC

            window.removeEventListener('scroll',Page1Scroll)
            window.removeEventListener('scroll',Page2Scroll)
            window.removeEventListener('scroll',Page3Scroll)
            window.removeEventListener('scroll',page4Scroll_tab)
            window.removeEventListener('scroll',Page5Scroll_tab)
            
            about_images.removeEventListener('mouseout',Page2Hover_enter)
            about_images.removeEventListener('mouseover',Page2Hover_leave)

            Page3_Images.removeEventListener('mouseover',Page3_Hover_Enter)
            Page3_Images.removeEventListener('mouseout',Page3_Hover_Leave)
            

            PR_Card1.removeEventListener('mouseover',PR_card1_hover)
            PR_Card1.removeEventListener('mouseout',PR_card2_hover_exit)
            IN_Card1.removeEventListener('mouseover',IN_card1_hover)
            IN_Card1.removeEventListener('mouseout',IN_card2_hover_exit)

            //PC

            //Tab//

            // Page1_tab_load()
            // window.addEventListener('scroll',Page1Scroll_tab)
            window.removeEventListener('scroll',Page2Scroll_tab)
            window.removeEventListener('scroll',Page2Scroll_tab)
            window.removeEventListener('scroll',Page3Scroll_tab)
            window.removeEventListener('scroll',Page4Scroll_tab)
            window.removeEventListener('scroll',Page5Scroll_tab)
            //Tab//

            //Mobile//
            
            setTimeout(Page1_Mob_Load,3200)
            window.addEventListener('scroll',Page_1_5_Scroll_Mob)
            window.addEventListener('scroll',Page2Scroll_Mob)
            window.addEventListener('scroll',Page3Scroll_Mob)
            window.addEventListener('scroll',Page4Scroll_Mob)
            window.addEventListener('scroll',Page5Scroll_Mob)
            //Mobile//


            
        }
    }
    // call()
    window.requestAnimationFrame(call)    


    


    

//PC PC PC PC//


//Page 1//
function Page1Load(){
    laptop.style.transform='scale(1)'
    laptop.style.transition=`transform ${maxTiltEffectSetting.speed}ms ${maxTiltEffectSetting.easing}`
    laptop.style.width='50vw'
    tab.style.marginLeft='-50vw'
    tab.style.transform='rotate(360deg)'
    phone.style.marginLeft='50vw'
    phone.style.transform='rotate(90deg)'



}

function Page1ScrollP1(){
    name_svg_text.style.transition='0.5s ease'
    name_svg_text.style.position='absolute'
    name_svg_text.style.top='0'
    name_svg_text.style.width='15vw'
    name_svg_text.style.height='15vh'
    name_svg_text.style.position='fixed'
    for(var i=0;i<name_svg.length;i++){
        if(i%2==0){
            name_svg[i].style.fill="white"
            
        }
        else{
            name_svg[i].style.fill="black"
        }
    }
    text.style.opacity='1'
    icons_p1_sub.style.position='fixed'
    icons_p1_sub.style.transition='2s ease'
    laptop.style.transition='0.8s ease'
}

function Page1ScrollP2(){
    laptop.style.marginTop='-10vh'
    phone.style.transition='0.8s ease'
    phone.style.marginTop='-10vh'
    tab.style.transition='0.8s ease'
    tab.style.marginTop='-15vh'
    text.style.marginTop='-5vh'
}

function Page1ScrollP1else(){
    name_svg_text.style.transition='0.5s ease'
    text.style.opacity='0'
    name_svg_text.style.width='100vw'
    name_svg_text.style.height='100vh'
    name_svg_text.style.position='absolute'
    for(var i=0;i<name_svg.length;i++){
        
        name_svg[i].style.fill="none"
    }
    icons_p1_sub.style.position='absolute'
    icons_p1_sub.style.transition='2s ease'
    laptop.style.transition='0.8s ease'
    laptop.style.transition='0.8s ease'
}

function Page1Scrol2P1else(){
    laptop.style.marginTop='0vh'
    phone.style.transition='0.8s ease'
    phone.style.marginTop='10vh'
    tab.style.transition='0.8s ease'
    tab.style.marginTop='0vh'
    text.style.marginTop='0vh'
}

function Page1Scroll(){
        if(window.scrollY>10){
            // name_svg_text.style.background='pink'
            Page1ScrollP1()
            Page1ScrollP2()



            // for(var i=0;i<name_svg.length;i++){
            //     name_svg[i].style.position='absolute'
            //     // name_svg[i].style.top='0'
            //     // name_svg[i].style.left='0'

            // }
        }
        else{
            Page1ScrollP1else()
            Page1Scrol2P1else()


        }
}


//Page 1 - end//


//Page 2//

function Page2Hover_enter(){
    // p2_man_Img.style.transform='scale(0.9)'
    p2_man_Img.style.marginLeft='-8vw'
    // p2_phone_img.style.transform='scale(0.9)'

}
function Page2Hover_leave(){
    // p2_man_Img.style.transform='scale(1)'
    p2_man_Img.style.marginLeft='-1vw'
    // p2_phone_img.style.transform='scale(1)'
}

//Check it

function Page2ScrollText(){
    if(i%2==0){ 
        about_heading.style.marginLeft='0vw'
        about_heading.style.opacity='1'
        about_para.style.marginLeft='0vw'
        about_para.style.opacity='1'
        p2_phone_img.style.marginLeft='10vw'
        p2_phone_img.style.transform='rotate(0deg)'
        p2_phone_img.style.opacity='1'
        p2_man_Img.style.marginLeft='-8vw'
        // p2_man_Img.style.transform='rotate(0deg)'
        p2_man_Img.style.opacity='1'
    }
    else{
        about_heading.style.marginLeft='0vw'
        about_heading.style.opacity='1'
        about_para.style.marginLeft='0vw'
        about_para.style.opacity='1'
        p2_phone_img.style.marginLeft='10vw'
        p2_phone_img.style.transform='rotate(0deg)'
        p2_phone_img.style.opacity='1'
        p2_man_Img.style.marginLeft='-8vw'
        // p2_man_Img.style.transform='rotate(0deg)'
        p2_man_Img.style.opacity='1'
    }



}

function Page2ScrollTextelse(){
    if(i%2==0){
        about_heading.style.marginLeft='-20vw'
        about_heading.style.opacity='0'
        about_para.style.marginLeft='-20vw'
        about_para.style.opacity='0'
        p2_phone_img.style.marginLeft='20vw'
        p2_phone_img.style.transform='rotate(90deg)'
        p2_phone_img.style.opacity='0'
        p2_man_Img.style.marginLeft='20vw'
        // p2_man_Img.style.transform='rotate(90deg)'
        p2_man_Img.style.opacity='0'
    }
    else{
        about_heading.style.marginLeft='-20vw'
        about_heading.style.opacity='0'
        about_para.style.marginLeft='-20vw'
        about_para.style.opacity='0'
        p2_phone_img.style.marginLeft='20vw'
        p2_phone_img.style.transform='rotate(90deg)'
        p2_phone_img.style.opacity='0'
        p2_man_Img.style.marginLeft='20vw'
        // p2_man_Img.style.transform='rotate(90deg)'
        p2_man_Img.style.opacity='0'
    }
    



}

// function Page2Hoveranimation(){
//         p2_man_Img.style.marginLeft='0vw'
//         // p2_man_Img.style.width='20vw'
//         // p2_phone_img.style.width='10vw'
// }
// function Page2HoveranimationLeave(){
//     p2_man_Img.style.marginLeft='-5vw'
//     // p2_man_Img.style.width='20vw'
//     // p2_phone_img.style.width='10vw'
// }



function Page2Scroll(){
    

        let page2Bounding = Page2.getBoundingClientRect()
        let p1_y = page2Bounding.y
        let p1_h = page2Bounding.height
        // console.log('page2B = '+page2Bounding)
        // console.log('p1_y = '+p1_y)
        // console.log('p1_h = '+p1_h)
        
        if(d_height>p1_y+p1_h*2/3){
            Page2ScrollText()

        }
        else{
            Page2ScrollTextelse()
        }
       
}


//Page 2 - end//

//Page 3//

function Page3_Hover_Enter(){
    p3_ipad.style.transform='scale(0.85)'
    p3_lady.style.transform='scale(1.1)'

}
function Page3_Hover_Leave(){
    p3_ipad.style.transform='scale(1)'
    p3_lady.style.transform='scale(1)'
}

function Page3ScrollText(){
    skill_heading.style.marginLeft='0vw'
    skill_heading.style.opacity='1'
    for(var i = 0;i<all_Skills_svg.length;i++){
        all_Skills_svg[i].style.marginLeft = '0vw'
        all_Skills_svg[i].style.opacity = '1'
    }
    p3_ipad.style.marginLeft='-20vw'
    setTimeout(()=>{
        p3_lady.style.marginLeft='-10vw'
    },200)
    
    // for(var i = 0;i<all_Skills_h.length;i++){
    //     all_Skills_h[i].style.marginLeft = '0vw'
    //     all_Skills_h[i].style.opacity = '1'
    // }
}

function Page3ScrollTextelse(){
    skill_heading.style.marginLeft='30vw'
    skill_heading.style.opacity='0'
    for(var i = 0;i<all_Skills_svg.length;i++){
        all_Skills_svg[i].style.marginLeft = '30vw'
        all_Skills_svg[i].style.opacity = '0'
    }
    p3_ipad.style.marginLeft='-100vw'
    setTimeout(()=>{
        p3_lady.style.marginLeft='-100vw'
    },200)
    // for(var i = 0;i<all_Skills_h.length;i++){
    //     all_Skills_h[i].style.marginLeft = '25vw'
    //     all_Skills_h[i].style.opacity = '0'
    // }
}

function Page3Scroll(){
        let page3Bounding = Page3.getBoundingClientRect()
        let p3_y = page3Bounding.y
        let p3_h = page3Bounding.height

        if(d_height>p3_y+p3_h*2/3){
            // console.log('jj')
            Page3ScrollText()
        }
        else{
            // console.log('not sjj') 
            Page3ScrollTextelse()
            
        }
}


//Page 3 - end//

//Page 4//

function PR_card1_hover(){
    PR_Card2.style.marginTop='5vh'
}
function PR_card2_hover_exit(){
    PR_Card2.style.marginTop='-5vh'
    
}

function IN_card1_hover(){
    IN_Card2.style.marginTop='5vh'
}
function IN_card2_hover_exit(){
    IN_Card2.style.marginTop='-5vh'
    
}

function page4Scroll(){
    P4_heading.style.opacity='1'
    P4_heading.style.marginLeft='0vw'
    Pc_sub.style.opacity='1'
    Pc_sub.style.marginLeft='0vw'
}

function page4Scrollelse(){
    P4_heading.style.opacity='0'
    P4_heading.style.marginLeft='-50vw'
    Pc_sub.style.opacity='0'
    Pc_sub.style.marginLeft='50vw'
}

function Page4Scroll(){
        let page4Bounding = Page4.getBoundingClientRect()
        let p4_y = page4Bounding.y
        let p4_h = page4Bounding.height

        if(d_height>p4_y+p4_h*2/3){
            page4Scroll()
            // console.log('working')
        }
        else{
            page4Scrollelse()
            // console.log('not working')

        }
        
}


//Page 4 - end//


//Page 5//


function Page5Scroll(){
        let page5Bounding = Page5.getBoundingClientRect()
        let p5_y = page5Bounding.y
        let p5_h = page5Bounding.height

        if(d_height>p5_y+p5_h*2/3){
            copyright.style.marginTop='-15vh'
            icons_p1_sub.style.paddingRight='32vw'
            icons_p1_sub.style.paddingLeft='38vw'

        }
        else{
            copyright.style.marginTop='40vh'
            icons_p1_sub.style.paddingRight='75vw'
            icons_p1_sub.style.paddingLeft='0vw'


        }
}



//Page 5 - end//





//TAB Start//


//Page 1 - tab//

function Page1_tab_load(){
    SVG_tab.style.opacity='1'
    // SVG_tab.style.transition='cubic-bezier(0.075, 0.82, 0.165, 1)'
    SVG_tab.style.transform='scale(1)'
    // SVG_tab.style.fill='#000'
    // for(var i=0;i<SVG_tab.length;i++){
    //     SVG_tab[i].style.fill='#000'
    // }
}

function Page1ScrollP1_tab(){
    // SVG_tab.style.marginTop='-20vh'
    SVG_tab.style.transform='scale(0.8)'
    // SVG_tab.style.background='pink'

    
}

function Page1ScrollP1_tab_else(){
    // SVG_tab.style.marginTop='0vh'
    SVG_tab.style.transform='scale(1)'

    // SVG_tab.style.background='white'

    
}



function Page1Scroll_tab(){
        if(window.scrollY>10){
            // name_svg_text.style.background='pink'
            Page1ScrollP1_tab()



            // for(var i=0;i<name_svg.length;i++){
            //     name_svg[i].style.position='absolute'
            //     // name_svg[i].style.top='0'
            //     // name_svg[i].style.left='0'

            // }
        }
        else{
            Page1ScrollP1_tab_else()

        }
}


//Page 1 - end//


//Page 1.5//


function Page1_5_ScrollText_tab(){
    empirestate_building.style.opacity=1
    empirestate_building.style.marginTop='0vh'
    Page2_tab_text.style.opacity='1'
    Page2_tab_text.style.marginTop='0vh'


}

function Page1_5_ScrollText_tabelse(){
    
  
    empirestate_building.style.opacity=0
    empirestate_building.style.marginTop='50vh'
    Page2_tab_text.style.opacity=1
    Page2_tab_text.style.marginTop='0vh'

}

// function Page2Hoveranimation(){
//         p2_man_Img.style.marginLeft='0vw'
//         // p2_man_Img.style.width='20vw'
//         // p2_phone_img.style.width='10vw'
// }
// function Page2HoveranimationLeave(){
//     p2_man_Img.style.marginLeft='-5vw'
//     // p2_man_Img.style.width='20vw'
//     // p2_phone_img.style.width='10vw'
// }



function Page1_5_Scroll_tab(){
    

        let page2Bounding = Page1_tab.getBoundingClientRect()
        let p1_y = page2Bounding.y
        let p1_h = page2Bounding.height
        // console.log('page2B = '+page2Bounding)
        // console.log('p1_y = '+p1_y)
        // console.log('p1_h = '+p1_h)
        
        if(d_height>p1_y+p1_h*2/3){
            Page1_5_ScrollText_tab()

        }
        else{
            Page1_5_ScrollText_tabelse()
        }
       
}


//Page 1.5 - end//


//Page 1.5//


function Page2ScrollText_tab(){

    // p2_man_Img.style.display='block'

    about_heading.style.marginLeft='0vw'
    about_heading.style.opacity='1'
    about_para.style.marginLeft='0vw'
    about_para.style.opacity='1'
    p2_phone_img.style.marginLeft='10vw'
    // p2_phone_img.style.transform='rotate(0deg)'
    p2_phone_img.style.opacity='1'
    p2_man_Img.style.right='20vw'
       
    // p2_man_Img.style.marginLeft='-8vw'
    // p2_man_Img.style.transform='rotate(0deg)'
    p2_man_Img.style.opacity='1'


}

function Page2ScrollText_tabelse(){
    
    // p2_man_Img.style.display='none'
    about_heading.style.marginLeft='-20vw'
    about_heading.style.opacity='0'
    about_para.style.marginLeft='-20vw'
    about_para.style.opacity='0'
    p2_phone_img.style.marginLeft='20vw'
    // p2_phone_img.style.transform='rotate(90deg)'
    p2_phone_img.style.opacity='0'
    p2_man_Img.style.right='0vw'
    // p2_man_Img.style.transform='rotate(90deg)'
    p2_man_Img.style.opacity='0'

}



function Page2Scroll_tab(){
    

        let page2Bounding = Page2.getBoundingClientRect()
        let p1_y = page2Bounding.y
        let p1_h = page2Bounding.height
        // console.log('page2B = '+page2Bounding)
        // console.log('p1_y = '+p1_y)
        // console.log('p1_h = '+p1_h)
        
        if(d_height>p1_y+p1_h*2/3){
            Page2ScrollText_tab()

        }
        else{
            Page2ScrollText_tabelse()
        }
       
}


//Page 3//


function Page3ScrollText_tab(){
    skill_heading.style.marginLeft='0vw'
    for(var i = 0;i<all_Skills_svg.length;i++){
        // all_Skills_svg[i].style.marginLeft = '20vw'
        all_Skills_svg[i].style.opacity = '1'
    }
    p3_ipad.style.marginLeft='-20vw'
    setTimeout(()=>{
        p3_lady.style.marginLeft='5vw'
    },200)


    
    for(var i = 0;i<all_Skills_h.length;i++){
        // all_Skills_h[i].style.marginLeft = '20vw'
        all_Skills_h[i].style.opacity = '1'
    }
}

function Page3ScrollText_tabelse(){
    skill_heading.style.marginLeft='-120vw'
    for(var i = 0;i<all_Skills_svg.length;i++){
        // all_Skills_svg[i].style.marginLeft = '200vw'
        all_Skills_svg[i].style.opacity = '0'
    }
    p3_ipad.style.marginLeft='-100vw'
    setTimeout(()=>{
        p3_lady.style.marginLeft='-100vw'
    },200)


    for(var i = 0;i<all_Skills_h.length;i++){
        // all_Skills_h[i].style.marginLeft = '200vw'
        all_Skills_h[i].style.opacity = '0'
    }
}

function Page3Scroll_tab(){
        let page3Bounding = Page3.getBoundingClientRect()
        let p3_y = page3Bounding.y
        let p3_h = page3Bounding.height

        if(d_height>p3_y+p3_h*2/3){
            // console.log('jj')
            Page3ScrollText_tab()
        }
        else{
            // console.log('not sjj') 
            Page3ScrollText_tabelse()
            
        }
}


//Page 3 - end//

//Page 4//

function page4Scroll_tab(){
    P4_heading.style.opacity='1'
    P4_heading.style.marginLeft='0vw'
    Pc_sub.style.opacity='1'
    Pc_sub.style.marginLeft='0vw'
}

function page4Scroll_tabelse(){
    P4_heading.style.opacity='0'
    P4_heading.style.marginLeft='-50vw'
    Pc_sub.style.opacity='0'
    Pc_sub.style.marginLeft='50vw'
}

function Page4Scroll_tab(){
        let page4Bounding = Page4.getBoundingClientRect()
        let p4_y = page4Bounding.y
        let p4_h = page4Bounding.height

        if(d_height>p4_y+p4_h*2/3){
            page4Scroll_tab()
            // console.log('working')
        }
        else{
            page4Scroll_tabelse()
            // console.log('not working')

        }
        
}


//Page 4 - end//


//Page 5//


function Page5Scroll_tab(){
        let page5Bounding = Page5.getBoundingClientRect()
        let p5_y = page5Bounding.y
        let p5_h = page5Bounding.height

        if(d_height>p5_y+p5_h*2/3){
            copyright.style.marginTop='0vh'
            Bottoms_icons_sub.style.marginTop='0vh'
            // icons_p1_sub.style.paddingRight='30vw'
            // icons_p1_sub.style.paddingLeft='40vw'


        }
        else{
            copyright.style.marginTop='40vh'
            Bottoms_icons_sub.style.marginTop='50vh'
            // icons_p1_sub.style.paddingRight='75vw'
            // icons_p1_sub.style.paddingLeft='0vw'


        }
}



//Page 5 - end//



//TAB Over//

// Mobile Begin //

function Page1_Mob_Load(){
    Button_Mob.style.marginTop='0vh'
}

// Page1 end //

//Page 1.5//


function Page_1_5_ScrollText_Mob(){
    empirestate_building.style.opacity=1
    empirestate_building.style.marginTop='0vh'


}

function Page_1_5_ScrollText_Mobelse(){
    
    empirestate_building.style.opacity=0
    empirestate_building.style.marginTop='50vh'
    
}



function Page_1_5_Scroll_Mob(){
    

        let page1Bounding = Page1_tab.getBoundingClientRect()
        let p1_y = page1Bounding.y
        let p1_h = page1Bounding.height
        // console.log('page2B = '+page2Bounding)
        // console.log('p1_y = '+p1_y)
        // console.log('p1_h = '+p1_h)
        
        if(d_height>p1_y+p1_h*1/3){
            Page_1_5_ScrollText_Mob()

        }
        else{
            Page_1_5_ScrollText_Mobelse()
        }
       
}

//Page 1.5 end//

//Page 2 end//


function Page2ScrollText_Mob(){
    about_heading.style.marginLeft='0vw'
    about_heading.style.opacity='1'
    setTimeout( ()=>{
        about_para.style.marginLeft='0vw'
    },400)
    about_para.style.opacity='1'
    p2_phone_img.style.marginLeft='10vw'
    // p2_phone_img.style.transform='rotate(0deg)'
    p2_phone_img.style.opacity='1'
    // p2_man_Img.style.right='30vw'
       
    
    p2_man_Img.style.opacity='1'


}

function Page2ScrollText_Mobelse(){
    
  
    about_heading.style.marginLeft='-20vw'
    about_heading.style.opacity='0'
    about_para.style.marginLeft='-100vw'
    about_para.style.opacity='0'
    p2_phone_img.style.marginLeft='70vw'

    // p2_phone_img.style.transform='rotate(90deg)'
    // p2_phone_img.style.opacity='0'
    // p2_man_Img.style.right='-30vw'

    p2_man_Img.style.opacity='0'

}



function Page2Scroll_Mob(){
    

        let page2Bounding = Page2.getBoundingClientRect()
        let p1_y = page2Bounding.y
        let p1_h = page2Bounding.height
        // console.log('page2B = '+page2Bounding)
        // console.log('p1_y = '+p1_y)
        // console.log('p1_h = '+p1_h)
        
        if(d_height>p1_y+p1_h*1/3){
            Page2ScrollText_Mob()

        }
        else{
            Page2ScrollText_Mobelse()
        }
       
}


//Page 2 end//

//Page 3//


function Page3ScrollText_Mob(){
    skill_heading.style.marginLeft='0vw'
    for(var i = 0;i<all_Skills_svg.length;i++){
        // all_Skills_svg[i].style.marginLeft = '20vw'
        all_Skills_svg[i].style.opacity = '1'
    }
    p3_ipad.style.marginLeft='-20vw'
    setTimeout(()=>{
        p3_lady.style.marginLeft='5vw'
    },200)


    
    for(var i = 0;i<all_Skills_h.length;i++){
        // all_Skills_h[i].style.marginLeft = '20vw'
        all_Skills_h[i].style.opacity = '1'
    }
}

function Page3ScrollText_Mobelse(){
    skill_heading.style.marginLeft='-100vw'
    for(var i = 0;i<all_Skills_svg.length;i++){
        // all_Skills_svg[i].style.marginLeft = '200vw'
        all_Skills_svg[i].style.opacity = '0'
    }
    p3_ipad.style.marginLeft='-100vw'
    setTimeout(()=>{
        p3_lady.style.marginLeft='-100vw'
    },200)


    for(var i = 0;i<all_Skills_h.length;i++){
        // all_Skills_h[i].style.marginLeft = '200vw'
        all_Skills_h[i].style.opacity = '0'
    }
}

function Page3Scroll_Mob(){
        let page3Bounding = Page3.getBoundingClientRect()
        let p3_y = page3Bounding.y
        let p3_h = page3Bounding.height

        if(d_height>p3_y+p3_h*1/3){
            // console.log('jj')
            Page3ScrollText_Mob()
        }
        else{
            // console.log('not sjj') 
            Page3ScrollText_Mobelse()
            
        }
}


//Page 3 - end//

//Page 4//

function page4Scroll_Mob(){
    P4_heading.style.opacity='1'
    P4_heading.style.marginLeft='0vw'
    Pc_sub.style.opacity='1'
    // Pc_sub.style.marginLeft='0vw'
}

function page4Scroll_Mobelse(){
    P4_heading.style.opacity='0'
    P4_heading.style.marginLeft='-100vw'
    Pc_sub.style.opacity='0'
    // Pc_sub.style.marginLeft='50vw'
}

function Page4Scroll_Mob(){
        let page4Bounding = Page4.getBoundingClientRect()
        let p4_y = page4Bounding.y
        let p4_h = page4Bounding.height

        if(d_height>p4_y+p4_h*1/3){
            page4Scroll_Mob()
            // console.log('working')
        }
        else{
            page4Scroll_Mobelse()
            // console.log('not working')

        }
        
}


//Page 4 - end//


//Page 5//


function Page5Scroll_Mob(){
        let page5Bounding = Page5.getBoundingClientRect()
        let p5_y = page5Bounding.y
        let p5_h = page5Bounding.height

        if(d_height>p5_y+p5_h*2/3){
            copyright.style.marginTop='0vh'
            Bottoms_icons_sub.style.marginTop='0vh'
            // for(var i=0;i<icons_p1.length;i++){
            //     icons_p1[i].style.opacity="1"
                 
            // }
            // icons_p1_sub.style.paddingRight='30vw'
            // icons_p1_sub.style.paddingLeft='40vw'


        }
        else{
            copyright.style.marginTop='40vh'
            Bottoms_icons_sub.style.marginTop='50vh'
            // for(var i=0;i<icons_p1.length;i++){
            //     icons_p1[i].style.opacity="0"
                
            // }
            // icons_p1_sub.style.paddingRight='75vw'
            // icons_p1_sub.style.paddingLeft='0vw'


        }
}



//Mobile Over//

//Window Orientation//

// function orientationFunc(){
//     if(screen.width>1025){
//         if(screen.orientation==90){
//             popup.style.display='flex'
//         }
//         else{
//             popup.style.display='none'
//         }
//     }
// }

// window.addEventListener('orientationchange',orientationFunc)

// Window Orientation End//

//Window Scroll Top//


// Page1 //





//Window Scroll Top - End//


name_svg_text.addEventListener('click',()=>{
    window.scrollTo(
      { top:0,
        left:0,
        behavior:'smooth'
    
        }
    )
})


//Project popups//


//Project 1 popup//

PR_Card1.onclick = ()=>{
    Project_main.style.display='grid'
} ;

Close_button.onclick = ()=>{
    Project_main.style.display='none'
}

tab_phone_close.onclick = ()=>{
    Project_main.style.display='none'
}

//Project 1 popup end//

//Project 2 popup//

PR_Card2.onclick = ()=>{
    Project_main_2.style.display='grid'
} ;

Close_button_2.onclick = ()=>{
    Project_main_2.style.display='none'
}

tab_phone_close_2.onclick = ()=>{
    Project_main_2.style.display='none'
}

//Project 2 popup end//


//Project end//


//Internship popups//


//Internship 1 popup//

IN_Card1.onclick = ()=>{
    Internship_main.style.display='grid'
} ;

IT_Close_button.onclick = ()=>{
    Internship_main.style.display='none'
}

IT_tab_phone_close.onclick = ()=>{
    Internship_main.style.display='none'
}

//Internship 1 popup end//

//Internship 2 popup//

IN_Card2.onclick = ()=>{
    Internship_main_2.style.display='grid'
} ;

IT_Close_button_2.onclick = ()=>{
    Internship_main_2.style.display='none'
}

IT_tab_phone_close_2.onclick = ()=>{
    Internship_main_2.style.display='none'
}

//Internship 2 popup end//


//Internship end//


// Cursor Start //

// window.addEventListener('mousemove',cursor_Change)


// function cursor_Change(e){
//     Cursor.style.top = e.pageY + 'px'
//     Cursor.style.left = e.pageX + 'px'

// }
// Cursor end //



//Orientation Change Popup//

function orientationChangePopup(){
    console.log(screen.orientation)
    if(PC.matches){
        window.onorientationchange = () =>{
            if(j%2==0){
                console.log('kinda')
                popup.style.display='flex'
              
                j++
            }
            else{
                console.log('not kinda')
                popup.style.display='none'
                j++
            }
        }
    }
    else if(TAB.matches){
        console.log(screen.orientation)
        window.onorientationchange = () =>{
            if(j%2==0){
                console.log('kinda')
                popup_mob_tab.style.display='flex'
                p2_man_Img.style.display='none'
                j++
            }
            else{
                console.log('not kinda')
                popup_mob_tab.style.display='none'
                p2_man_Img.style.display='block'
               
                j++
            }
        }
    }
}
orientationChangePopup()




//Orientation Change Popup End//
