(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var i=t(2),r=t(1),o=t.n(r),a=t(22),c=t.n(a),s=t(5),l=t(6),d=t(10),b=t(9),h=t(25),x=t(26),j=t(29),p=t(27),f=t(70),u=t(66),g=t(71),m=t(0),O=t(14);function v(){var n=Object(s.a)(['\n\n    .navbar * {\n        transition: ease-in-out 0.3s;\n        \n    }\n\n    .navbar {\n        transition: ease-in-out 0.3s;\n        position: relative;\n        display: flex;\n        z-index: 997;\n        overflow-y: hidden;\n    }\n\n    .navbar-brand a {\n        color: #fff;\n    }\n\n    .navbar-nav .nav-item + .nav-item {\n        margin-left: 30px;\n    }\n\n    .nav-item a{\n        display: block;\n        position: relative;\n        color: rgba(255, 255, 255, 0.7);\n        font-size: 16px;\n        font-family: "Poppins", sans-serif;\n        font-weight: 400;\n    }\n\n    .nav-link{\n        padding: 0 !important;\n    }\n\n    .nav-item a:hover, .nav-item > .active, .nav-item:hover > a {\n        color: #fff !important;\n        text-decoration: none;\n    }\n\n    .nav-item a:before {\n        content: "";\n        position: absolute;\n        width: 0;\n        height: 2px;\n        bottom: -4px;\n        left: 0;\n        background-color: #18d26e;\n        visibility: hidden;\n        width: 0px;\n        transition: all 0.3s ease-in-out 0s;\n    }\n\n    .nav-item a:hover:before, .nav-item:hover > a:before, .nav-item > .active:before {\n        visibility: visible;\n        width: 25px;\n    }\n\n    .social-links {\n        margin-top: 40px;\n        display: flex;\n    }\n\n    .social-links a {\n        font-size: 16px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(255, 255, 255, 0.1);\n        color: #fff;\n        line-height: 1;\n        margin-right: 8px;\n        border-radius: 50%;\n        width: 40px;\n        height: 40px;\n    }\n\n    .social-links a:hover {\n        background: #18d26e;\n    }\n\n    @media (max-width: 992px) {\n        .navbar-collapse{\n            margin: 0px !important;\n            position: fixed;\n            top: 55px;\n            right: 15px;\n            bottom: 15px;\n            left: 15px;\n            z-index: 9999;\n            overflow-y: auto;\n            background: rgba(0, 0, 0, 0.7);\n            transition: ease-in-out 0.2s;\n            border-radius: 10px;\n            padding: 10px 0;\n            border: 2px solid rgba(255, 255, 255, 0.12);\n        }\n\n        .navbar-toggler {\n            position: fixed;\n            padding: 0;\n            right: 22px;\n            top: 22px;\n            z-index: 9998;\n            border: 0;\n            background: none;\n            font-size: 24px;\n            transition: all 0.4s;\n            outline: none !important;\n            line-height: 1;\n            cursor: pointer;\n            text-align: right;\n        }\n        .navbar-toggler:hover, .navbar-toggler:hover svg{\n            color: #fff;\n            transition: none !important;\n        }\n        .nav-item a{\n            display: block;\n            position: relative;\n            margin: 10px 20px;\n            font-weight: 500;\n            outline: none;\n        }\n        .navbar-nav .nav-item + .nav-item {\n            margin-left: 0px;\n        }\n    }\n\n    ',"\n"]);return v=function(){return n},n}var k=function(n){Object(j.a)(t,n);var e=Object(p.a)(t);function t(){return Object(h.a)(this,t),e.apply(this,arguments)}return Object(x.a)(t,[{key:"render",value:function(){return Object(i.jsx)(y,{pathname:this.props.location.pathname,children:Object(i.jsx)(f.a,{fixed:"top",variant:"dark",expand:"lg",children:Object(i.jsxs)(u.a,{children:[Object(i.jsx)(f.a.Brand,{children:Object(i.jsx)(d.c,{to:"/",children:"CTF4Hire"})}),Object(i.jsxs)("h2",{className:"home-text",children:["Custom cybersecurity training. Personalized learning.",Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:"Capture the Flag for you and your team."})]}),Object(i.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav",children:Object(i.jsx)(m.b.Provider,{value:{size:"32px"},children:Object(i.jsx)(O.a,{})})}),Object(i.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(i.jsxs)(g.a,{className:"ml-auto",children:[Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(d.c,{exact:!0,activeClassName:"active",to:"/",children:"Home"})}),Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(d.c,{activeClassName:"active",to:"/info",children:"Information"})}),Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(d.c,{activeClassName:"active",to:"/events",children:"Past Events"})}),Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(d.c,{activeClassName:"active",to:"/services",children:"Services"})}),Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(d.c,{activeClassName:"active",to:"/requestCTF",children:"Request a CTF"})})]})}),Object(i.jsxs)("div",{className:"social-links",children:[Object(i.jsxs)("a",{href:"https://twitter.com/ctf4hire",target:"_blank",rel:"noreferrer",children:[" ",Object(i.jsx)(O.i,{})]}),Object(i.jsxs)("a",{href:"https://www.facebook.com/ctf4hire",target:"_blank",rel:"noreferrer",children:[" ",Object(i.jsx)(O.b,{})]}),Object(i.jsxs)("a",{href:"https://www.instagram.com/ctf4hire/",target:"_blank",rel:"noreferrer",children:[" ",Object(i.jsx)(O.d,{})]}),Object(i.jsxs)("a",{href:"https://linkedin.com/company/ctf4hire/",target:"_blank",rel:"noreferrer",children:[" ",Object(i.jsx)(O.f,{})]})]})]})})})}}]),t}(r.Component),y=l.a.div(v(),(function(n){return"/"===n.pathname?'\n    /*******************************************************/\n    /********************* HOME ROUTE **********************/\n        .navbar {\n            transition: ease-in-out 0.3s;\n            position: relative;\n            height: 100vh;\n            display: flex;\n            align-items: center;\n            z-index: 997;\n            overflow-y: hidden;\n        }\n\n        .navbar .container {\n            flex-direction: column;\n            align-items: start;\n        }\n\n        .navbar-brand {\n            font-size: 48px;\n            margin: 0;\n            padding: 0;\n            line-height: 1;\n            font-weight: 700;\n            font-family: "Poppins", sans-serif;\n        }\n\n        .home-text {\n            font-size: 24px;\n            margin-top: 20px;\n            color: rgba(255, 255, 255, 0.8);\n            font-family: "Raleway", sans-serif;\n        }\n\n        .home-text span {\n            color: #fff;\n            border-bottom: 2px solid #18d26e;\n            padding-bottom: 6px;\n        }\n\n        .navbar-collapse {\n            margin-top: 35px;\n        }\n        \n        @media (max-width: 992px) {\n            .navbar-brand {\n                font-size: 36px !important;\n            }\n            \n            .navbar .container {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n            }\n            \n            .home-text {\n                font-size: 20px;\n                line-height: 30px;\n            }\n            .social-links {\n                margin-top: 15px;\n            }\n            \n        }\n\n    /*******************************************************/\n    /******************* END HOME ROUTE ********************/\n    ':'\n    /*******************************************************/\n    /******************* NOT HOME ROUTE ********************/\n\n        .navbar {\n            height: 80px;\n            background: rgba(0, 0, 0, 0.9);\n            padding: 0;\n        }\n\n        .navbar-brand{\n            font-size: 36px;\n            font-weight: 700;\n            font-family: "Poppins", sans-serif;\n        }\n\n        .home-text{\n            display: none;\n        }\n\n        .social-links {\n            display: none;\n        }\n        \n        @media (max-width: 992px) {\n            .navbar-brand {\n                padding: 0px 15px;\n                font-size: 26px !important;\n            }\n        }\n\n    /*******************************************************/\n    /***************** END NOT HOME ROUTE ******************/    \n    '})),w=Object(b.f)(k),C=function(){return Object(i.jsx)("div",{})},T=t(68),z=t(67),N=t(69),F=function(n){return Object(i.jsx)("section",{className:"mt-4 pb-5",children:n.children})};function P(){var n=Object(s.a)(["\n    .container{\n        background: rgba(0, 0, 0, 0.9);\n        padding: 30px;    \n    }\n"]);return P=function(){return n},n}var S=l.a.div(P()),I=function(n){return Object(i.jsx)(S,{children:Object(i.jsx)(u.a,{children:n.children})})};function q(){var n=Object(s.a)(['\n    font-size: 14px;\n    font-weight: 500;\n    padding: 0;\n    line-height: 1px;\n    margin: 0 0 20px 0;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    color: #aaaaaa;\n    font-family: "Poppins", sans-serif;\n\n    &::after {\n        content: "";\n        width: 120px;\n        height: 1px;\n        display: inline-block;\n        background: #4ceb95;\n        margin: 4px 10px;\n    }\n']);return q=function(){return n},n}var H=l.a.h2(q()),_=function(n){return Object(i.jsx)(H,{children:n.children})};function E(){var n=Object(s.a)(['\n    margin: 0;\n    margin: -15px 0 15px 0;\n    font-size: 36px;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-family: "Poppins", sans-serif;\n    color: #fff;\n\n']);return E=function(){return n},n}var D=l.a.p(E()),R=function(n){return Object(i.jsx)(D,{children:n.children})},B=t(44),M=t.n(B);function J(){var n=Object(s.a)(['\n    a {\n        color: inherit;\n    }\n\n    .count-box {\n        padding: 30px 30px 25px 30px;\n        width: 100%;\n        position: relative;\n        text-align: center;\n        background: rgba(255, 255, 255, 0.08);\n    }\n\n    .count-box i {\n        position: absolute;\n        top: -25px;\n        left: 50%;\n        transform: translateX(-50%);\n        font-size: 12px;\n        background: rgba(255, 255, 255, 0.1);\n        padding: 12px;\n        color: #18d26e;\n        border-radius: 50px;\n    }\n\n    .count-box span {\n        font-size: 36px;\n        display: block;\n        font-weight: 600;\n        color: #fff;\n    }\n\n    .count-box p {\n        padding: 0;\n        margin: 0;\n        font-family: "Raleway", sans-serif;\n        font-size: 14px;\n    }\n']);return J=function(){return n},n}var L=Object(l.a)(z.a)(J()),A=function(n){var e=n.icon;return Object(i.jsx)(L,{lg:3,md:6,className:"mt-5 mt-lg-0",children:Object(i.jsx)(d.b,{to:n.link,children:Object(i.jsxs)("div",{className:"count-box",children:[Object(i.jsx)(m.b.Provider,{value:{size:"24px"},children:Object(i.jsx)("i",{children:Object(i.jsx)(e,{height:"24px",width:"24px"})})}),Object(i.jsx)("small",{children:n.small}),Object(i.jsx)("span",{datatoggle:"counter-up",children:Object(i.jsx)(M.a,{end:n.number})}),Object(i.jsx)("p",{children:n.text})]})})})};function U(){var n=Object(s.a)(["\n    a {\n        color: inherit;\n    }\n\n    .icon-box {\n        display: flex;\n        align-items: center;\n        padding: 20px;\n        background: rgba(255, 255, 255, 0.08);\n        transition: ease-in-out 0.3s;\n    }\n\n    .icon-box:hover {\n        background: rgba(255, 255, 255, 0.12);\n    }\n\n    .icon-box i {\n        font-size: 32px;\n        padding-right: 10px;\n        line-height: 1;\n    }\n\n    .icon-box h3 {\n        font-weight: 700;\n        margin: 0;\n        padding: 0;\n        line-height: 1;\n        font-size: 16px;\n        color: #fff;\n    }\n"]);return U=function(){return n},n}var K=Object(l.a)(z.a)(U()),V=function(n){var e=n.icon;return Object(i.jsx)(K,{lg:3,md:4,className:"mt-4",children:Object(i.jsx)(d.b,{to:n.link,children:Object(i.jsxs)("div",{className:"icon-box",children:[Object(i.jsx)(m.b.Provider,{value:{color:n.color,size:"32px"},children:Object(i.jsx)("i",{children:Object(i.jsx)(e,{height:"24px",width:"24px"})})}),Object(i.jsx)("h3",{children:n.text})]})})})},W=t(45),G=t.n(W),Q=(t(61),t(62),t(36));function X(){var n=Object(s.a)(["\n    .testimonial-item {\n        box-sizing: content-box;\n        min-height: 320px;\n    }\n\n    .testimonial-item p {\n        font-style: italic;\n        margin: 0 15px 0 15px;\n        padding: 30px 20px 60px 20px;\n        background: rgba(255, 255, 255, 0.1);\n        position: relative;\n        border-radius: 6px;\n        z-index: 1;\n    }\n\n    .quote-icon {\n        color: rgba(255, 255, 255, 0.25);\n        font-size: 26px;\n    }\n\n    .quote-icon-left {\n        display: inline-block;\n        margin-right: 10px;\n        position: relative;\n        top: -10px;\n    }\n\n    .quote-icon-right {\n        display: inline-block;\n        margin-left: 10px;\n        position: relative;\n        top: 5px;\n    }\n\n    .testimonial-img {\n        width: 90px !important;\n        /* border-radius: 50%; */\n        margin: -40px 0 0 40px;\n        position: relative;\n        z-index: 2;\n        /* border: 6px solid rgba(255, 255, 255, 0.12); */\n    }\n"]);return X=function(){return n},n}var Y=l.a.div(X()),Z=function(n){return Object(i.jsx)(Y,{children:Object(i.jsxs)("div",{className:"testimonial-item",children:[Object(i.jsx)("p",{children:Object(i.jsxs)(m.b.Provider,{value:{size:"22px"},children:[Object(i.jsx)(Q.a,{className:"quote-icon quote-icon-left"}),n.text,Object(i.jsx)(Q.b,{className:"quote-icon quote-icon-right"})]})}),Object(i.jsx)("img",{src:n.image,className:"testimonial-img",alt:""})]})})},$=t.p+"static/media/hacktivitycon.60022e30.png",nn=t.p+"static/media/virseccon.4c2fab7c.png",en=t.p+"static/media/bsidesbos.9e06bf63.png",tn=t.p+"static/media/nahamcon.583ab327.png";function rn(){var n=Object(s.a)(["\n\n    .owl-dots {\n        margin-top: 5px;\n        text-align: center;\n    }\n    \n    .owl-dot {\n        display: inline-block;\n        margin: 0 5px;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background-color: rgba(255, 255, 255, 0.3) !important;\n    }\n    \n    .owl-dot.active {\n        background-color: #18d26e !important;\n    }\n"]);return rn=function(){return n},n}var on={0:{items:1},768:{items:2},900:{items:3}},an=[{image:$,text:"Huge thanks to all involved for creating this amazing CTF. Stuff like this makes me love cybersecurity even more!"},{image:nn,text:"I enjoyed this CTF a lot. I don't normally interact with communities on Discord, but I did enjoy interacting with people and working through some of the challenges together over DM. Thanks all involved with providing us another awesome CTF!"},{image:en,text:"Thank you for putting this CTF together. Although it was extremely challenging I had fun with the community. Thank you for your hard work. I think it safe to say that everyone was pushed beyond their limits today. You all rock!!"},{image:$,text:"It was a ton of fun and seriously thanks for doing it, our team had a total blast!"},{image:tn,text:"I've never done a CTF quite like this one, but I will definitely be participating in more in the future. Keep up the great work!"}],cn=function(n){Object(j.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(h.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))).Testimonials=an.map((function(n,e){return Object(i.jsx)(Z,{image:n.image,text:n.text},e)})),n}return Object(x.a)(t,[{key:"render",value:function(){return Object(i.jsx)(sn,{children:Object(i.jsx)(G.a,{items:3,margin:8,autoplay:!0,dots:!0,loop:!0,responsive:on,children:this.Testimonials})})}}]),t}(r.Component),sn=l.a.div(rn()),ln=cn,dn=t(16),bn=t.p+"static/media/info_intro.566df13e.jpg";function hn(){var n=Object(s.a)(["\n\n"]);return hn=function(){return n},n}function xn(){var n=Object(s.a)(["\n\n"]);return xn=function(){return n},n}function jn(){var n=Object(s.a)(["\n\n"]);return jn=function(){return n},n}function pn(){var n=Object(s.a)(["\n    h3 {\n        font-weight: 700;\n        font-size: 26px;\n        color: #18d26e;\n    }\n"]);return pn=function(){return n},n}var fn=function(){return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsxs)(F,{children:[Object(i.jsx)(I,{children:Object(i.jsxs)(un,{children:[Object(i.jsx)(_,{children:"Information"}),Object(i.jsx)(R,{children:"Learn more"}),Object(i.jsxs)(T.a,{children:[Object(i.jsx)(z.a,{lg:4,children:Object(i.jsx)(N.a,{src:bn,alt:"Intro",fluid:!0})}),Object(i.jsxs)(z.a,{lg:8,className:"pt-4 pt-lg-0",children:[Object(i.jsx)("h3",{children:"Capture The Flag"}),Object(i.jsx)("p",{children:"Learn practical, hands-on skills with engaging exercises and cybersecurity training as part of a capture the flag competition. Collaborate with your team members, solve new problems, and grow your personnel!"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"CTF4Hire"})," offers custom Capture the Flag events for any company, conference, or event. Running some internal training for your team? We can provide the infrastructure, challenges, support and maintenance for an enterprise-wide activity. Hosting a virtual conference, open to the whole world? Our platform scales to handle the traffic."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:Object(i.jsx)(d.b,{to:"/requestCTF",children:"Request a CTF"})})," to see what we can build for you!"]})]})]})]})}),Object(i.jsx)(I,{children:Object(i.jsx)(gn,{children:Object(i.jsxs)(T.a,{children:[Object(i.jsx)(A,{icon:O.c,small:"about",link:"#team",number:10,text:"Supporting Personnel"}),Object(i.jsx)(A,{icon:O.h,small:"over",link:"#challenges",number:250,text:"Developed Training Sets"}),Object(i.jsx)(A,{icon:O.j,small:"more than",link:"/events",number:15e3,text:"Previous Players"}),Object(i.jsx)(A,{icon:O.e,small:"created over",link:"#infrastructure",number:5e4,text:"Challenge Deployments"})]})})}),Object(i.jsx)(I,{children:Object(i.jsxs)(mn,{children:[Object(i.jsx)(_,{children:"Jeopardy categories"}),Object(i.jsxs)(T.a,{children:[Object(i.jsx)(V,{icon:dn.h,color:"#ffbb2c",link:"#test",text:"Cryptography"}),Object(i.jsx)(V,{icon:dn.f,color:"#5578ff",link:"#test",text:"Web Security"}),Object(i.jsx)(V,{icon:dn.c,color:"#e80368",link:"#test",text:"Binary Exploitation"}),Object(i.jsx)(V,{icon:dn.d,color:"#e361ff",link:"#test",text:"Steganography"}),Object(i.jsx)(V,{icon:dn.a,color:"#47aeff",link:"#test",text:"Miscellaneous"}),Object(i.jsx)(V,{icon:dn.e,color:"#ffa76e",link:"#test",text:"Fundamental"}),Object(i.jsx)(V,{icon:dn.i,color:"#11dbcf",link:"#test",text:"Open Source Intelligence"}),Object(i.jsx)(V,{icon:dn.j,color:"#4233ff",link:"#test",text:"Mobile Applications"}),Object(i.jsx)(V,{icon:dn.b,color:"#29cc61",link:"#test",text:"Reverse Engineering"}),Object(i.jsx)(V,{icon:dn.g,color:"#b20969",link:"#test",text:"Host Forensics"}),Object(i.jsx)(V,{icon:O.g,color:"#ff5828",link:"#test",text:"Networking"}),Object(i.jsx)(V,{icon:dn.k,color:"#dc3545",link:"#test",text:"Read Team Operations"})]})]})}),Object(i.jsx)(I,{children:Object(i.jsxs)(On,{children:[Object(i.jsx)(_,{children:"Testimonials"}),Object(i.jsx)(ln,{})]})})]})})},un=l.a.div(pn()),gn=l.a.div(jn()),mn=l.a.div(xn()),On=l.a.div(hn());function vn(){var n=Object(s.a)(['\n    padding: 0 0 20px 20px;\n    margin-top: -2px;\n    border-left: 2px solid rgba(255, 255, 255, 0.2);\n    position: relative;\n\n    &::before{\n        content: "";\n        position: absolute;\n        width: 16px;\n        height: 16px;\n        border-radius: 50px;\n        left: -9px;\n        top: 0;\n        background: #18d26e;\n        border: 2px solid #18d26e;\n    }\n\n    h4 {\n        line-height: 18px;\n        font-size: 18px;\n        font-weight: 600;\n        text-transform: uppercase;\n        font-family: "Poppins", sans-serif;\n        color: #18d26e;\n        margin-bottom: 10px;\n    }\n\n     h5 {\n        font-size: 16px;\n        background: rgba(255, 255, 255, 0.15);\n        padding: 5px 15px;\n        display: inline-block;\n        font-weight: 600;\n        margin-bottom: 10px;\n    }\n']);return vn=function(){return n},n}var kn=l.a.div(vn()),yn=function(n){return Object(i.jsxs)(kn,{children:[Object(i.jsx)("h4",{children:n.name}),Object(i.jsx)("h5",{children:n.date}),n.children]})};function wn(){var n=Object(s.a)(["\n    .resume-title {\n        font-size: 26px;\n        font-weight: 700;\n        margin-top: 20px;\n        margin-bottom: 20px;\n        color: #fff;\n    }\n    ul {\n        padding-left: 20px;\n    }\n    ul li {\n        padding-bottom: 10px;\n    }\n    img {\n        width: 90px;\n        margin: -100px 0 0 40px;\n        position: relative;\n        bottom: 0px;\n        z-index: 2;\n        padding-top: 20px;\n        float: right;\n    }\n"]);return wn=function(){return n},n}var Cn=function(){return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(Tn,{children:Object(i.jsx)(F,{children:Object(i.jsxs)(I,{children:[Object(i.jsx)(_,{children:"Past events"}),Object(i.jsx)(R,{children:"Previous CTF competitions"}),Object(i.jsxs)(T.a,{children:[Object(i.jsxs)(z.a,{lg:6,children:[Object(i.jsx)("h3",{className:"resume-title",children:"Jeopardy CTFs"}),Object(i.jsxs)(yn,{name:"VirSecCon CTF",date:"April 3-4, 2020",children:[Object(i.jsxs)("p",{children:["Delivered alongside the ",Object(i.jsx)("a",{href:"https://virseccon.com",target:"_blank",rel:"noreferrer",children:"VirSecCon"})," conference hosted by The Cyber Mentor and NahamSec."]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"60+ Challenges"}),Object(i.jsx)("li",{children:"3,500+ Players"})]}),Object(i.jsx)("a",{href:"https://virseccon.com",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:nn,alt:"VirSecCon Logo"})})]}),Object(i.jsxs)(yn,{name:"NahamCon CTF",date:"June 12-13, 2020",children:[Object(i.jsxs)("p",{children:["Delivered alongside the ",Object(i.jsx)("a",{href:"https://nahamcon.splashthat.com/",target:"_blank",rel:"noreferrer",children:"NahamCon"})," conference hosted by NahamSec, The Cyber Mentor, STOK and John Hammond."]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"75+ Challenges"}),Object(i.jsx)("li",{children:"5,000+ Players"})]}),Object(i.jsx)("a",{href:"https://nahamcon.splashthat.com/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:tn,alt:"NahamCon Logo"})})]})]}),Object(i.jsxs)(z.a,{lg:6,children:[Object(i.jsx)("h3",{className:"resume-title d-none d-lg-block",children:"\xa0"}),Object(i.jsxs)(yn,{name:"HacktivityCon CTF",date:"July 29-31, 2020",children:[Object(i.jsxs)("p",{children:["Delivered alongside the ",Object(i.jsx)("a",{href:"https://www.hackerone.com/hacktivitycon",target:"_blank",rel:"noreferrer",children:"HacktivityCon"})," conference hosted by NahamSec and HackerOne."]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"90+ Challenges"}),Object(i.jsx)("li",{children:"5,000+ Players"})]}),Object(i.jsx)("a",{href:"https://www.hackerone.com/hacktivitycon",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:$,alt:"HacktivityCon Logo"})})]}),Object(i.jsxs)(yn,{name:"BsidesBOS CTF",date:"September 26th, 2020",children:[Object(i.jsxs)("p",{children:["Delivered alongside the Security ",Object(i.jsx)("a",{href:"https://www.bsidesbos.org/",target:"_blank",rel:"noreferrer",children:"BsidesBOS"})," conference."]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"50+ Challenges"}),Object(i.jsx)("li",{children:"2,000+ Players"})]}),Object(i.jsx)("a",{href:"https://www.bsidesbos.org/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:en,alt:"BsidesBOS Logo"})})]})]})]})]})})})})},Tn=l.a.div(wn());function zn(){var n=Object(s.a)(["\na {\n    color: inherit;\n}\n.icon-box {\n    text-align: center;\n    background: rgba(204, 204, 204, 0.1);\n    padding: 80px 20px;\n    transition: all ease-in-out 0.3s;\n}\n.icon-box:hover {\n    background: ",";\n}\n.icon {\n    background: "," !important;\n    margin: 0 auto;\n    width: 64px;\n    height: 64px;\n    border-radius: 5px;\n    transition: all .3s ease-out 0s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 20px;\n    transform-style: preserve-3d;\n}\n.icon-box:hover .icon {\n    background: white !important;\n}\n.icon::before {\n    position: absolute;\n    content: '';\n    left: -8px;\n    top: -8px;\n    height: 100%;\n    width: 100%;\n    background: rgba(255, 255, 255, 0.15);\n    border-radius: 5px;\n    transition: all .3s ease-out 0s;\n    transform: translateZ(-1px);\n}\n.icon-box:hover .icon::before {\n    background: "," !important;\n}\n.icon-box:hover .icon svg {\n    color: "," !important;\n}\nh4 {\n    font-weight: 700;\n    margin-bottom: 15px;\n    font-size: 24px;\n}\np {\n    line-height: 24px;\n    font-size: 14px;\n    margin-bottom: 0;\n}\n"]);return zn=function(){return n},n}var Nn=Object(l.a)(z.a)(zn(),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.hovercolor}),(function(n){return n.color})),Fn=function(n){var e=n.icon;return Object(i.jsx)(Nn,{lg:4,md:6,className:"mt-4",color:n.color,hovercolor:n.hovercolor,children:Object(i.jsx)(d.b,{to:n.link,children:Object(i.jsxs)("div",{className:"icon-box",children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)(m.b.Provider,{value:{color:"#fff",size:"28px"},children:Object(i.jsx)(e,{})})}),Object(i.jsx)("h4",{children:n.title}),Object(i.jsx)("p",{children:n.children})]})})})},Pn=t(21),Sn=function(){return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(F,{children:Object(i.jsxs)(I,{children:[Object(i.jsx)(_,{children:"Services"}),Object(i.jsx)(R,{children:"Get the right CTF for you and your team"}),Object(i.jsxs)(T.a,{className:"mt-n4",children:[Object(i.jsx)(Fn,{title:"Attach & Defense",icon:Pn.c,color:"#ffbe0b",hovercolor:"#ffdd80",link:"#attackanddefense",children:"Want a red vs. blue competition? Attack and Defense is the way to go!"}),Object(i.jsx)(Fn,{title:"Jeopardy",icon:Pn.f,color:"#18d26e",hovercolor:"#35e888",link:"#jeopardy",children:"Looking for a classic Jeopardy-style CTF? It's our bread and butter."}),Object(i.jsx)(Fn,{title:"Boot 2 Root",icon:Pn.d,color:"#fb5607",hovercolor:"#fba780",link:"#boot2root",children:"Need a boot2root box to pwn? Look no further."}),Object(i.jsx)(Fn,{title:"King Of The Hill",icon:Pn.a,color:"#ff006e",hovercolor:"#ff80b7",link:"#kingofthehill",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"}),Object(i.jsx)(Fn,{title:"Live Training",icon:Pn.e,color:"#8338ec",hovercolor:"#b792ec",link:"#livetraining",children:"Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"}),Object(i.jsx)(Fn,{title:"Challenge Development",icon:Pn.b,color:"#3a86ff",hovercolor:"#9bc1ff",link:"#challengedev",children:"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"})]})]})})})},In=function(){return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(F,{children:Object(i.jsx)(I,{children:Object(i.jsx)(_,{children:"Request a CTF"})})})})},qn=t(46),Hn=t.n(qn);function _n(){var n=Object(s.a)(["\n    font-family: monospace;\n    font-size: 35px;\n    color: #18d26e;\n\n    .box{\n        padding: 50px 30px;\n        background: rgba(0, 0, 0, 0.9);\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%,-50%);\n        width: 80%;\n    }\n    \n    .Typewriter{\n        width:100%;\n    }\n\n    .Typewriter__cursor{\n        font-size: 32px;\n        vertical-align: top;\n    }\n"]);return _n=function(){return n},n}var En=l.a.div(_n()),Dn=function(){return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(En,{children:Object(i.jsx)("div",{className:"box",children:Object(i.jsx)(Hn.a,{options:{delay:200,cursor:"&#9610;"},onInit:function(n){n.pauseFor(1500).typeString("<strong>404</strong>, page not found.").start()}})})})})};t(63);function Rn(){var n=Object(s.a)(["\n    .page-container{\n        position: relative;\n        min-height: 100vh;\n    }\n    footer{\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        text-align: right;\n        padding: 15px;\n        font-size: 13px;\n    }   \n\n"]);return Rn=function(){return n},n}var Bn=l.a.div(Rn()),Mn=function(){return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsxs)(Bn,{children:[Object(i.jsx)("div",{className:"page-container",children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(w,{}),Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{exact:!0,path:"/",component:C}),Object(i.jsx)(b.a,{exact:!0,path:"/info",component:fn}),Object(i.jsx)(b.a,{exact:!0,path:"/events",component:Cn}),Object(i.jsx)(b.a,{exact:!0,path:"/services",component:Sn}),Object(i.jsx)(b.a,{exact:!0,path:"/requestCTF",component:In}),Object(i.jsx)(b.a,{component:Dn})]})]})}),Object(i.jsx)("footer",{children:"\xa9 CTF4Hire"})]})})};c.a.render(Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(Mn,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.6e2e2a21.chunk.js.map