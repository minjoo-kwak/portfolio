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

  $('.mbg1').addClass('on')

  this.setTimeout(() => {
    $('.mbg2').addClass('on')
  }, 200)

  this.setTimeout(() => {
    $('.mbg3').addClass('on')
  }, 400)

  this.setTimeout(() => {
    $('.mtop1').addClass('on')
  }, 210)

  this.setTimeout(() => {
    $('.mtop2').addClass('on')
  }, 410)

  this.setTimeout(() => {
    $('.mtitle').addClass('on')
  }, 1000)

  this.setTimeout(() => {
    $('.stitle1').addClass('on')
  }, 1200)

  this.setTimeout(() => {
    $('.stitle2').addClass('on')
  }, 1300)

  container.addListener(e => {
    let scrollTop = container.scrollTop
    console.log(scrollTop)

    // $('.topbtn').css('transform', `translateY(${scrollTop * 0.7}px)`)

    // if (scrollTop >= 1) {
    //   $('.coverBox1').addClass('on')
    // }

    // if (scrollTop >= 2) {
    //   $('.titleCover').addClass('on')
    // }

    if (scrollTop >= 190) {
      $('.about').addClass('on')
    }

    if (scrollTop >= 200) {
      $('.abouttxt').addClass('on')
    }



    if (scrollTop >= 220) {
      //   $('.logoimg2').addClass('on')
      this.setTimeout(() => {
        $('.logo').addClass('on')
      }, 0)

      this.setTimeout(() => {
        $('.logoguide').addClass('on')
      }, 100)

      this.setTimeout(() => {
        $('.logoguide2').addClass('on')
      }, 200)

      this.setTimeout(() => {
        $('.logoimg').addClass('on')
      }, 200)
    }

    

    if (scrollTop >= 450) {
      $('.txtBottom').addClass('on')
    }

    if (scrollTop >= 1100) {
      $('.UX1txtbox').addClass('on')
    }

    if (scrollTop >= 1100) {
      $('.UX1title1').addClass('on')
    }

    if (scrollTop >= 1600) {
      $('.UX1title2').addClass('on')
    }

    if (scrollTop >= 1630) {
      $('.lineV1').addClass('on')
    }

    if (scrollTop >= 2000) {
      $('.lineH1').addClass('on')
    }

    if (scrollTop >= 2100) {
      $('.UX2title').addClass('on')
    }

    if (scrollTop >= 2300) {
      $('.UX2txt').addClass('on')
    }

    if (scrollTop >= 2400) {
      $('.g1').addClass('on')
    }

    if (scrollTop >= 2580) {
      $('.g2').addClass('on')
    }

    if (scrollTop >= 2590) {
      $('.g3').addClass('on')
    }

    if (scrollTop >= 2600) {
      $('.g4').addClass('on')
    }

    if (scrollTop >= 2610) {
      $('.g5').addClass('on')
    }

    if (scrollTop >= 2630) {
      $('.g6').addClass('on')
    }






    
    if (scrollTop >= 3400) {
      $('.UX3title').addClass('on')
    }

    if (scrollTop >= 3600) {
      $('.UX3txt').addClass('on')
    }

    if (scrollTop >= 3700) {
      this.setTimeout(() => {
        $('.UX3line').addClass('on')
      }, 0)

      this.setTimeout(() => {
        $('.art1').addClass('on')
      }, 200)
 
      this.setTimeout(() => {
        $('.art2').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.art3').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.art4').addClass('on')
      }, 500)

      this.setTimeout(() => {
        $('.art5').addClass('on')
      }, 600)


    }








    if (scrollTop >= 4700) {
      this.setTimeout(() => {
        $('.UX4title').addClass('on')
      }, 10)

      this.setTimeout(() => {
        $('.UX4txt').addClass('on')
      }, 200)
    
    }

    if (scrollTop >= 5200) {
      $('.Q5').addClass('on')
    }

    if (scrollTop >= 5360) {
      $('.Q6').addClass('on')
    }

    if (scrollTop >= 5280) {
      $('.Q7').addClass('on')
    }

    if (scrollTop >= 5530) {
      $('.Q3').addClass('on')
    }

    if (scrollTop >= 5600) {
      $('.Q2').addClass('on')
    }

    if (scrollTop >= 5850) {
      $('.Q1').addClass('on')
    }

    if (scrollTop >= 5900) {
      $('.Q10').addClass('on')
    }

    if (scrollTop >= 6000) {
      $('.Q8').addClass('on')
    }

    if (scrollTop >= 6130) {
      $('.Q9').addClass('on')
    }

    if (scrollTop >= 6200) {
      $('.Q4').addClass('on')
    }

    if (scrollTop >= 6500) {
      $('.UX4bottom').addClass('on')
    }

    if (scrollTop >= 5950) {
      $('.UX4txt2').addClass('on')
    }







    if (scrollTop >= 7100) {
      $('.persub').addClass('on')
    }

    if (scrollTop >= 7200) {
      $('.pertitle').addClass('on')
    }

    if (scrollTop >= 7500) {
      this.setTimeout(() => {
        $('.per1').addClass('on')
      }, 0)

      this.setTimeout(() => {
        $('.per1-1').addClass('on')
      }, 200)
    
      this.setTimeout(() => {
        $('.per2').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.per2-1').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.per3').addClass('on')
      }, 800)

      this.setTimeout(() => {
        $('.per3-1').addClass('on')
      }, 1000)

     
    }

   
    





    if (scrollTop >= 8530) {
      this.setTimeout(() => {
        $('.soltitle1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.soltitle2').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.soltitle3').addClass('on')
      }, 600)
    }

    if (scrollTop >= 8900) {
      this.setTimeout(() => {
        $('.solbox1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.solbox2').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.solbox3').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.solbox4').addClass('on')
      }, 800)

      this.setTimeout(() => {
        $('.solline').addClass('on')
      }, 1000)


    }


  
   




   
    if (scrollTop >= 10150) {
      this.setTimeout(() => {
        $('.flowtitle').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.flowtop').addClass('on')
      }, 200)

      this.setTimeout(() => {
        $('.flowchart').addClass('on')
      }, 500)
    }




    if (scrollTop >= 10450) {
      this.setTimeout(() => {
        $('.flowsub1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.flowtxt1').addClass('on')
      }, 200)

      this.setTimeout(() => {
        $('.flowtxt2').addClass('on')
      }, 500)
    }


    if (scrollTop >= 11580) {
      this.setTimeout(() => {
        $('.flowsub2').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.flowtxt3').addClass('on')
      }, 200)

      this.setTimeout(() => {
        $('.flowtxt4').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.flowtxt5').addClass('on')
      }, 600)
    }

    if (scrollTop >= 11990) {
      this.setTimeout(() => {
        $('.flowsub3').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.flowtxt6').addClass('on')
      }, 200)
    }


    if (scrollTop >= 12300) {
      this.setTimeout(() => {
        $('.flowsub4').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.flowtxt7').addClass('on')
      }, 200)
    }






    
    if (scrollTop >= 12710) {
      $('.howsub').addClass('on')
    }

    if (scrollTop >= 13250) {
      $('.how').addClass('on')
    }

    if (scrollTop >= 13300) {
      $('.howline1').addClass('on')
    }

    if (scrollTop >= 13500) {
      $('.doweknow').addClass('on')
    }

    if (scrollTop >= 13600) {
      $('.howline2').addClass('on')
    }

    if (scrollTop >= 13610) {
      $('.howtitleko').addClass('on')
    }

    if (scrollTop >= 14000) {
      $('.mock0').addClass('on')
    }

    if (scrollTop >= 14240) {
      $('.mock0woman').addClass('on')
    }

    if (scrollTop >= 14300) {
      $('.mock0line1').addClass('on')
    }

    if (scrollTop >= 14250) {
      $('.mock0btn').addClass('on')
    }

    if (scrollTop >= 14330) {
      $('.mock0line2').addClass('on')
    }

    if (scrollTop >= 14250) {
      $('.mock0btns').addClass('on')
    }

    if (scrollTop >= 14740) {
      $('.mock0line3').addClass('on')
    }







    if (scrollTop >= 15350) {
      $('.ratebox').addClass('on')
    }

    if (scrollTop >= 15360) {
      $('.ratectnt').addClass('on')
    }

    if (scrollTop >= 15400) {
      $('.ratesub').addClass('on')
    }

    if (scrollTop >= 15500) {
      $('.ratetitle').addClass('on')
    }

    if (scrollTop >= 15650) {
      $('.ratetxt').addClass('on')
    }

    if (scrollTop >= 15535) {
      $('.ratevideo').addClass('on')
    }

    if (scrollTop >= 15860) {
      $('.ratemock1-1').addClass('on')
    }

    if (scrollTop >= 15861) {
      $('.rateline1').addClass('on')
    }

    if (scrollTop >= 16000) {
      $('.rateline1txt').addClass('on')
    }

    if (scrollTop >= 16300) {
      $('.rateline2').addClass('on')
    }





    if (scrollTop >= 16800) {
      $('.phone').addClass('on')
    }

    if (scrollTop >= 16800) {
      $('.trainervideo').addClass('on')
    }

    if (scrollTop >= 17000) {
      $('.rateline2txt').addClass('on')
    }

    if (scrollTop >= 17050) {
      $('.trainerbox').addClass('on')
    }

    if (scrollTop >= 17080) {
      $('.trainermock1').addClass('on')
    }

    if (scrollTop >= 17100) {
      $('.tmocktxt1').addClass('on')
    }

    if (scrollTop >= 17131) {
      $('.dots').addClass('on')
    }

    if (scrollTop >= 17200) {
      $('.trainermock2').addClass('on')
    }

    if (scrollTop >= 17260) {
      $('.tmocktxt2').addClass('on')
    }





    if (scrollTop >= 17600) {
      $('.paysub').addClass('on')
    }

    if (scrollTop >= 17800) {
      $('.paymock1').addClass('on')
    }

    if (scrollTop >= 17801) {
      $('.payline1').addClass('on')
    }

    if (scrollTop >= 18090) {
      $('.paymock2').addClass('on')
    }

    if (scrollTop >= 18091) {
      $('.payline2').addClass('on')
    }

    if (scrollTop >= 18205) {
      $('.paymock3').addClass('on')
    }

    if (scrollTop >= 18095) {
      $('.paytxt').addClass('on')
    }






    if (scrollTop >= 18825) {
      $('.chatsub').addClass('on')
    }

    if (scrollTop >= 18830) {
      $('.chattitle').addClass('on')
    }

    if (scrollTop >= 18850) {
      $('.chattxt').addClass('on')
    }

    if (scrollTop >= 19238) {
      $('.chatmock').addClass('on')
    }

    if (scrollTop >= 19467) {
      $('.chatbox').addClass('on')
    }

    if (scrollTop >= 19467) {
      $('.chatvideo').addClass('on')
    }





    if (scrollTop >= 20270) {
      $('.onsub').addClass('on')
    }

    if (scrollTop >= 20370) {
      $('.ontitle').addClass('on')
    }

    if (scrollTop >= 20600) {
      $('.ontxt').addClass('on')
    }

    if (scrollTop >= 20720) {
      $('.onvideo').addClass('on')
    }

    if (scrollTop >= 20720) {
      $('.phone3').addClass('on')
    }


    if (scrollTop >= 20990) {
      $('.online1').addClass('on')
    }

    if (scrollTop >= 20991) {
      $('.onmock2').addClass('on')
    }

    if (scrollTop >= 21000) {
      $('.online2').addClass('on')
    }

    if (scrollTop >= 21001) {
      $('.onmock3').addClass('on')
    }

    



    if (scrollTop >= 20) {
      $('.onman').addClass('on')
    }

    if (scrollTop >= 21400) {
      $('.mansub').addClass('on')
    }

    if (scrollTop >= 2580) {
      $('.manmock').addClass('on')
    }

    if (scrollTop >= 21890) {
      $('.manbtn4').addClass('on')
    }

    if (scrollTop >= 21895) {
      $('.manline1').addClass('on')
    }

    if (scrollTop >= 21900) {
      $('.manline2').addClass('on')
    }


    if (scrollTop >= 21920) {
      $('.manbtn3').addClass('on')
    }

    if (scrollTop >= 21925) {
      $('.manline3').addClass('on')
    }

    if (scrollTop >= 21926) {
      $('.manline4').addClass('on')
    }

    if (scrollTop >= 21950) {
      $('.mancam').addClass('on')
    }

    if (scrollTop >= 21951) {
      $('.manline5').addClass('on')
    }

    if (scrollTop >= 22120) {
      $('.manline6').addClass('on')
    }





    


    if (scrollTop >= 22500) {
      $('.mysub').addClass('on')
    }

    if (scrollTop >= 22630) {
      $('.mytitle').addClass('on')
    }

    if (scrollTop >= 22800) {
      $('.mytxt').addClass('on')
    }

    if (scrollTop >= 23190) {
      $('.myvideo').addClass('on')
    }

    if (scrollTop >= 23200) {
      $('.mymock2').addClass('on')
    }

    if (scrollTop >= 23201) {
      $('.myline1').addClass('on')
    }

    if (scrollTop >= 23420) {
      $('.mymock3').addClass('on')
    }

    if (scrollTop >= 23500) {
      $('.myline2').addClass('on')
    }

    if (scrollTop >= 23190) {
      $('.phone4').addClass('on')
    }






    if (scrollTop >= 23818) {
      $('.thxbox').addClass('on')
    }

    if (scrollTop >= 24020) {
      $('.ttop1').addClass('on')
    }

    if (scrollTop >= 24110) {
      $('.ttop2').addClass('on')
    }

    if (scrollTop >= 24450) {
      $('.tmock2').addClass('on')
    }

    if (scrollTop >= 24500) {
      $('.tmock1').addClass('on')
    }

    if (scrollTop >= 24300) {
      $('.ttxt').addClass('on')
    }

    if (scrollTop >= 24450) {
      $('.thxmock5').addClass('on')
    }

    if (scrollTop >= 20030) {
      $('.foot1').addClass('on')
    }

    if (scrollTop >= 20800) {
      $('.foot2').addClass('on')
    }

    if (scrollTop >= 20860) {
      $('.foot3').addClass('on')
    }

// 섹션12

if (scrollTop >= 24600) {
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

if (scrollTop >= 25000) {
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
    // $('.logo').addClass('on')
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
