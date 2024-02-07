window.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger)

  const stage = document.querySelector('#container')
  const container = Scrollbar.init(stage, {
    damping: 0.1,
    delegateTo: stage,
    continuousScrolling: true,
    alwaysShowTracks: false
  })
  container.setPosition(0, 0)
  container.track.xAxis.element.remove()
  // Scrollbar.detachStyle();

  ScrollTrigger.scrollerProxy('body', {
    scrollTop (value) {
      if (arguments.length) {
        container.scrollTop = value
      }

      return container.scrollTop
    }
  })

  $('.cotop1').addClass('on')

  this.setTimeout(() => {
    $('.cotop2').addClass('on')
  }, 300)

  this.setTimeout(() => {
    $('.cotop3').addClass('on')
  }, 600)

  this.setTimeout(() => {
    $('.cotitle').addClass('on')
  }, 1200)

  container.addListener(e => {
    let scrollTop = container.scrollTop
    console.log(scrollTop)


    if (scrollTop >= 42) {
      $('.coimg1').addClass('on')
    }

    if (scrollTop >= 100) {
      $('.coimg2').addClass('on')
    }

    if (scrollTop >= 200) {
      $('.coimg3').addClass('on')
    }

    if (scrollTop >= 450) {
      $('.cotxt').addClass('on')
    }







    
    if (scrollTop >= 1400) {
      $('.ovmenu').addClass('on')
    }

    if (scrollTop >= 1600) {
      $('.ovtitle').addClass('on')
    }

    if (scrollTop >= 1650) {
      $('.ovsub').addClass('on')
    }

    if (scrollTop >= 1700) {
      $('.ovtxt').addClass('on')
    }

    if (scrollTop >= 2000) {
      $('.ovimg').addClass('on')
    }

    if (scrollTop >= 2400) {
      $('.detitle').addClass('on')
    }

    if (scrollTop >= 2600) {
      $('.detxt').addClass('on')
    }

    if (scrollTop >= 2800) {
      $('.de1').addClass('on')
    }

    if (scrollTop >= 2950) {
      $('.de2').addClass('on')
    }

    if (scrollTop >= 3100) {
      $('.de3').addClass('on')
    }










    if (scrollTop >= 3400) {
      $('.gomenu').addClass('on')
    }

    if (scrollTop >= 3700) {
      $('.gotitle').addClass('on')
    }

    if (scrollTop >= 3750) {
      $('.gosub').addClass('on')
    }

    if (scrollTop >= 3890) {
      $('.gotxt1').addClass('on')
    }

    if (scrollTop >= 3910) {
      $('.gotxt2').addClass('on')
    }

    if (scrollTop >= 4100) {
      $('.goc1').addClass('on')
    }

    if (scrollTop >= 4200) {
      $('.goc2').addClass('on')
    }

    if (scrollTop >= 4300) {
      $('.goc3').addClass('on')
    }

    if (scrollTop >= 4350) {
      $('.goarrow').addClass('on')
    }

    if (scrollTop >= 4400) {
      $('.goc4').addClass('on')
    }

    if (scrollTop >= 4800) {
      $('.gobox').addClass('on')
    }

    if (scrollTop >= 4900) {
      $('.gotable').addClass('on')
    }









    if (scrollTop >= 5900) {
      $('.flmenu').addClass('on')
    }

    if (scrollTop >= 6000) {
      $('.flbox').addClass('on')
    }

    if (scrollTop >= 6130) {
      $('.fltitle').addClass('on')
    }

    if (scrollTop >= 6200) {
      $('.flsub').addClass('on')
    }

    if (scrollTop >= 6210) {
      $('.fltxt').addClass('on')
    }

    if (scrollTop >= 6000) {
      $('.flc0').addClass('on')
    }

    if (scrollTop >= 6500) {
      this.setTimeout(() => {
        $('.flc1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.flc2').addClass('on')
      }, 100)

      this.setTimeout(() => {
        $('.flcmain1').addClass('on')
      }, 100)

      this.setTimeout(() => {
        $('.flcmain2').addClass('on')
      }, 200)

      this.setTimeout(() => {
        $('.flcmain3').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.flc3').addClass('on')
      }, 200)
    
      this.setTimeout(() => {
        $('.flc4').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.flc5').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.flc2-1').addClass('on')
      }, 500)

      this.setTimeout(() => {
        $('.flcshop1').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.flcshop2').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.flcshop3').addClass('on')
      }, 700)

      this.setTimeout(() => {
        $('.flcshop4').addClass('on')
      }, 800)

      this.setTimeout(() => {
        $('.flcshop5').addClass('on')
      }, 900)

      this.setTimeout(() => {
        $('.flc2-2').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.flcabout1').addClass('on')
      }, 700)

      this.setTimeout(() => {
        $('.flcabout2').addClass('on')
      }, 800)

      this.setTimeout(() => {
        $('.flcabout3').addClass('on')
      }, 900)

      this.setTimeout(() => {
        $('.flc2-3').addClass('on')
      }, 700)

      this.setTimeout(() => {
        $('.flcnews1').addClass('on')
      }, 800)

      this.setTimeout(() => {
        $('.flcnews2').addClass('on')
      }, 900)

      this.setTimeout(() => {
        $('.flcnews3').addClass('on')
      }, 1000)

      this.setTimeout(() => {
        $('.flcnews4').addClass('on')
      }, 1100)

      this.setTimeout(() => {
        $('.flc2-4').addClass('on')
      }, 800)
    }

   
    



    if (scrollTop >= 7900) {
      $('.stmenu').addClass('on')
    }

    if (scrollTop >= 8000) {
      $('.sttitle').addClass('on')
    }

    if (scrollTop >= 8100) {
      this.setTimeout(() => {
        $('.ty1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.ty2').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.ty3').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.ty4').addClass('on')
      }, 600)
    }

    if (scrollTop >= 8600) {
      this.setTimeout(() => {
        $('.stsub').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.stbgline').addClass('on')
      }, 0)

      this.setTimeout(() => {
        $('.co1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.co2').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.co3').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.co4').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.co5').addClass('on')
      }, 600)
    }

    if (scrollTop >= 9300) {
      $('.brsub').addClass('on')
    }

    if (scrollTop >= 9300) {
      $('.brline1').addClass('on')
    }

    if (scrollTop >= 9500) {
      $('.brtitle1').addClass('on')
    }

    if (scrollTop >= 9550) {
      $('.brtitle2').addClass('on')
    }

    if (scrollTop >= 9600) {
      $('.brc1').addClass('on')
    }

    if (scrollTop >= 9700) {
      $('.brc2').addClass('on')
    }

    if (scrollTop >= 9800) {
      $('.brtitle3').addClass('on')
    }

    if (scrollTop >= 10100) {
      $('.brtxt1').addClass('on')
    }

    if (scrollTop >= 10250) {
      $('.brtxt2').addClass('on')
    }

   
    



    if (scrollTop >= 10600) {
      $('.homenu').addClass('on')
    }

    if (scrollTop >= 10850) {
      $('.hotitle').addClass('on')
    }

    if (scrollTop >= 10900) {
      $('.hocircle').addClass('on')
    }

    if (scrollTop >= 11000) {
      $('.hotxt').addClass('on')
    }

    if (scrollTop >= 11190) {
      $('.homock').addClass('on')
    }

    if (scrollTop >= 12170) {
      $('.hon1').addClass('on')
    }

    if (scrollTop >= 12250) {
      $('.hon2').addClass('on')
    }

    if (scrollTop >= 12330) {
      $('.hon3').addClass('on')
    }

    if (scrollTop >= 12410) {
      $('.hon4').addClass('on')
    }

    if (scrollTop >= 12450) {
      $('.hoarrow').addClass('on')
    }



    if (scrollTop >= 12750) {
      $('.hobox').addClass('on')
    }

    if (scrollTop >= 12980) {
      $('.hoextitle2').addClass('on')
    }

    if (scrollTop >= 13000) {
      $('.hoextitle').addClass('on')
    }

    if (scrollTop >= 12890) {
      $('.hoeximg').addClass('on')
    }

    if (scrollTop >= 13170) {
      $('.hoextxt').addClass('on')
    }

    if (scrollTop >= 14000) {
      $('.hosub').addClass('on')
    }

    if (scrollTop >= 14100) {
      $('.hoco').addClass('on')
    }

    if (scrollTop >= 14420) {
      $('.hocotxt').addClass('on')
    }

    if (scrollTop >= 14700) {
      $('.hosubtxt').addClass('on')
    }

    if (scrollTop >= 14950) {
      $('.hoplus').addClass('on')
    }

   
    



    if (scrollTop >= 15690) {
      $('.abmenu').addClass('on')
    }

    if (scrollTop >= 16100) {
      $('.abtitle').addClass('on')
    }

    if (scrollTop >= 16400) {
      $('.abmock').addClass('on')
    }

    if (scrollTop >= 16900) {
      $('.abentxt').addClass('on')
    }

    if (scrollTop >= 17200) {
      $('.abc').addClass('on')
    }

    if (scrollTop >= 17280) {
      $('.abtxt1').addClass('on')
    }

    if (scrollTop >= 17650) {
      $('.abtxt2').addClass('on')
    }

    if (scrollTop >= 18680) {
      $('.abtxt3').addClass('on')
    }

    if (scrollTop >= 18750) {
      $('.abimg2').addClass('on')
    }

    if (scrollTop >= 19400) {
      $('.abtitle21').addClass('on')
    }

    if (scrollTop >= 19420) {
      $('.abtitle22').addClass('on')
    }

    if (scrollTop >= 19440) {
      $('.abtitle23').addClass('on')
    }

    if (scrollTop >= 19467) {
      $('.abst').addClass('on')
    }

    if (scrollTop >= 20035) {
      $('.abstline').addClass('on')
    }

    if (scrollTop >= 20190) {
      $('.absttxt').addClass('on')
    }

    if (scrollTop >= 21000) {
      $('.abcallbg').addClass('on')
    }

    if (scrollTop >= 20800) {
      $('.abcalltxt').addClass('on')
    }

    if (scrollTop >= 20900) {
      $('.abcall').addClass('on')
    }





    

    if (scrollTop >= 22300) {
      $('.shmenu').addClass('on')
    }

    if (scrollTop >= 22500) {
      $('.shtitle').addClass('on')
    }

    if (scrollTop >= 22550) {
      $('.shtxt').addClass('on')
    }

    if (scrollTop >= 22760) {
      $('.shmock').addClass('on')
    }

    if (scrollTop >= 23000) {
      $('.shline1').addClass('on')
    }

    if (scrollTop >= 23100) {
      $('.shtxt1').addClass('on')
    }

    if (scrollTop >= 23590) {
      $('.shline2').addClass('on')
    }

    if (scrollTop >= 23600) {
      $('.shtxt2').addClass('on')
    }

    if (scrollTop >= 24340) {
      $('.shimg').addClass('on')
    }

    if (scrollTop >= 24570) {
      $('.shimgc').addClass('on')
    }

    if (scrollTop >= 24700) {
      $('.shimgtxt').addClass('on')
    }

    if (scrollTop >= 25350) {
      $('.shmock2').addClass('on')
    }

    if (scrollTop >= 25442) {
      $('.shmock2line').addClass('on')
    }

    if (scrollTop >= 25650) {
      $('.shmock2txt').addClass('on')
    }

    



    if (scrollTop >= 26400) {
      $('.nemenu').addClass('on')
    }

    if (scrollTop >= 26600) {
      $('.nec1').addClass('on')
    }

    if (scrollTop >= 26700) {
      $('.nec2').addClass('on')
    }

    if (scrollTop >= 26800) {
      $('.netitle').addClass('on')
    }

    if (scrollTop >= 26900) {
      $('.netxt').addClass('on')
    }

    if (scrollTop >= 26550) {
      $('.nemock1').addClass('on')
    }

    if (scrollTop >= 27500) {
      $('.neline').addClass('on')
    }

    if (scrollTop >= 27750) {
      $('.netxt1').addClass('on')
    }

    if (scrollTop >= 28000) {
      $('.netxt2').addClass('on')
    }

    if (scrollTop >= 28780) {
      $('.neimg').addClass('on')
    }

    if (scrollTop >= 28700) {
      $('.nemock2').addClass('on')
    }

    if (scrollTop >= 28800) {
      $('.netxt3').addClass('on')
    }





    if (scrollTop >= 30120) {
      $('.bamenu').addClass('on')
    }

    if (scrollTop >= 30300) {
      $('.bamock').addClass('on')
    }

    if (scrollTop >= 30760) {
      $('.batitle').addClass('on')
    }

    if (scrollTop >= 30000) {
      $('.babg').addClass('on')
    }

    if (scrollTop >= 30450) {
      $('.baline').addClass('on')
    }

    if (scrollTop >= 30550) {
      $('.batxt').addClass('on')
    }

    if (scrollTop >= 31290) {
      $('.bamock2').addClass('on')
    }

    if (scrollTop >= 31400) {
      $('.balinelong').addClass('on')
    }

    if (scrollTop >= 31510) {
      $('.batxtlong').addClass('on')
    }





    // if (scrollTop >= 32000) {
    //   $('.footimg').addClass('on')
    // }

    // if (scrollTop >= 32300) {
    //   $('.foottxt1').addClass('on')
    // }

    // if (scrollTop >= 32360) {
    //   $('.footbox1').addClass('on')
    // }

    // if (scrollTop >= 32400) {
    //   $('.foottxt2').addClass('on')
    // }

    // if (scrollTop >= 32430) {
    //   $('.footbox2').addClass('on')
    // }

    // if (scrollTop >= 32450) {
    //   $('.foottxt3').addClass('on')
    // }

    if (scrollTop >= 32000) {
      this.setTimeout(() => {
        $('.footimg').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.foottxt1').addClass('on')
      }, 100)

      this.setTimeout(() => {
        $('.footbox1').addClass('on')
      }, 150)

      this.setTimeout(() => {
        $('.foottxt2').addClass('on')
      }, 200)

      this.setTimeout(() => {
        $('.footbox2').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.foottxt3').addClass('on')
      }, 350)

  
    }

// 섹션12

if (scrollTop >= 33100) {
  $('.fstitle').addClass('on')

this.setTimeout(() => {
  $('.ftitle').addClass('on')
}, 100)

this.setTimeout(() => {
  $('.ftxt').addClass('on')
}, 150)

this.setTimeout(() => {
  $('.fprofile').addClass('on')
}, 200)
}

if (scrollTop >= 33500) {
  $('.fw1').addClass('on')

this.setTimeout(() => {
  $('.fc1').addClass('on')
}, 200)

this.setTimeout(() => {
  $('.fw2').addClass('on')
}, 300)

this.setTimeout(() => {
  $('.fw3').addClass('on')
}, 600)

this.setTimeout(() => {
  $('.fw4').addClass('on')
}, 900)

this.setTimeout(() => {
  $('.fw5').addClass('on')
}, 1200)  

}







    
  })

  $('.startPoint').click(function () {
    container.scrollTo(0, 0, 600, {
      callback: () => console.log('done!'),
      easing: easing.easeInOutCirc
    })
  })
  ;(function () {
    setTimeout(() => {
      $('.main').addClass('on')
    }, 1000)
    $('.logo').addClass('on')
    $('.bg_top').addClass('on')
    $('.main_title1').addClass('on')
    $('.main_title2').addClass('on')
    $('.sub_title').addClass('on')
    /*
        
                gsap.to(".box2", {
                    x: 400,
                    scrollTrigger: {
                        trigger: ".box2",
                        start: "top center",
                        end: "top 100px",
                        scrub: 1,
                        markers: false,
                        id: "scrub"
                    }
                });
        
                gsap.to(".box3", {
                    x: 400,
                    rotation: 360,
                    scrollTrigger: {
                        trigger: ".box3",
                        start: "top center",
                        end: "top 100px",
                        scrub: 1,
                        markers: true,
                        id: "scrub"
                    }
                });*/
  })()
})
