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

  $('.cotitle').addClass('on')

  container.addListener(e => {
    let scrollTop = container.scrollTop
    console.log(scrollTop)


    if (scrollTop >= 42) {
      $('.comock').addClass('on')
    }

    if (scrollTop >= 100) {
      $('.cotxt1').addClass('on')
    }

    if (scrollTop >= 200) {
      $('.cotxt2').addClass('on')
    }

    if (scrollTop >= 450) {
      $('.cotxt3').addClass('on')
    }





    // 섹션2

    if (scrollTop >= 1100) {
      $('.uxtitle').addClass('on')
    }

    if (scrollTop >= 1200) {
      $('.uxtxt1').addClass('on')
    }

    if (scrollTop >= 1300) {
      $('.uxtxt2').addClass('on')
    }

    if (scrollTop >= 1400) {
      $('.uxcon1').addClass('on')
    }

    if (scrollTop >= 1500) {
      $('.uxline').addClass('on')
    }

    if (scrollTop >= 1600) {
      this.setTimeout(() => {
        $('.uxcon2').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.uxcon21').addClass('on')
      }, 200)
      
      this.setTimeout(() => {
        $('.uxcon22').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.uxcon23').addClass('on')
      }, 500)

      this.setTimeout(() => {
        $('.uxcon24').addClass('on')
      }, 700)

      this.setTimeout(() => {
        $('.uxcon25').addClass('on')
      }, 900)
    }



    // if (scrollTop >= 1600) {
    //   $('.uxcon2').addClass('on')
    // }

    // if (scrollTop >= 1650) {
    //   $('.uxcon21').addClass('on')
    // }

    // if (scrollTop >= 1700) {
    //   $('.uxcon22').addClass('on')
    // }

    // if (scrollTop >= 1750) {
    //   $('.uxcon23').addClass('on')
    // }

    // if (scrollTop >= 1800) {
    //   $('.uxcon24').addClass('on')
    // }

    // if (scrollTop >= 1850) {
    //   $('.uxcon25').addClass('on')
    // }

    if (scrollTop >= 2000) {
      $('.uximg2').addClass('on')
    }



// 섹션3 

    if (scrollTop >= 3600) {
      $('.uititle').addClass('on')
    }

    if (scrollTop >= 3700) {
      $('.uitxt1').addClass('on')
    }

    if (scrollTop >= 3800) {
      $('.uitxt2').addClass('on')
    }

    if (scrollTop >= 4200) {
      $('.uicon2').addClass('on')
    }

    if (scrollTop >= 4400) {
      $('.uicon2txt').addClass('on')
    }

    if (scrollTop >= 4500) {
      $('.uicon3').addClass('on')
    }







// 섹션4

    if (scrollTop >= 6900) {
      $('.ontitle').addClass('on')
    }

    if (scrollTop >= 7000) {
      $('.ontxt1').addClass('on')
    }

    if (scrollTop >= 7100) {
      $('.ontxt2').addClass('on')
    }

    if (scrollTop >= 7300) {
      $('.onvideo').addClass('on')
    }






// 섹션5

    if (scrollTop >= 8400) {
      $('.onmock2').addClass('on')
    }

    if (scrollTop >= 8500) {
      $('.onmock3').addClass('on')
    }






// 섹션6

    if (scrollTop >= 9500) {
      $('.hotitle').addClass('on')
    }

    if (scrollTop >= 9600) {
      $('.hotxt1').addClass('on')
    }

    if (scrollTop >= 9700) {
      $('.hotxt2').addClass('on')
    }

    if (scrollTop >= 9900) {
      $('.homock1').addClass('on')
    }

    if (scrollTop >= 9950) {
      $('.holine1').addClass('on')
    }

    if (scrollTop >= 10000) {
      $('.homock2').addClass('on')
    }

    if (scrollTop >= 11000) {
      $('.hovideo').addClass('on')
    }

    // if (scrollTop >= 6200) {
    //   $('.hovideoframe').addClass('on')
    // }

    if (scrollTop >= 10400) {
      $('.holine2').addClass('on')
    }

    if (scrollTop >= 10600) {
      $('.homock3').addClass('on')
    }

    if (scrollTop >= 10700) {
      $('.holine3').addClass('on')
    }

    if (scrollTop >= 10800) {
      $('.homock4').addClass('on')
    }




     

// 섹션7

    if (scrollTop >= 11700) {
      $('.hititle').addClass('on')
    }

    if (scrollTop >= 11700) {
      $('.hisource').addClass('on')
    }

    if (scrollTop >= 11900) {
      $('.hitxt1').addClass('on')
    }

    if (scrollTop >= 12100) {
      $('.hitxt2').addClass('on')
    }



    if (scrollTop >= 12000) {
      this.setTimeout(() => {
        $('.hicon1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.hicon2').addClass('on')
      }, 200)
      
      this.setTimeout(() => {
        $('.hicon3').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.hicon4').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.hicon5').addClass('on')
      }, 800)

      this.setTimeout(() => {
        $('.hicon6').addClass('on')
      }, 1000)
    }




    if (scrollTop >= 12700) {
      $('.hitxt3').addClass('on')
    }

    if (scrollTop >= 12800) {
      $('.hitxt4').addClass('on')
    }

    if (scrollTop >= 13100) {
      this.setTimeout(() => {
        $('.himock').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.hisubtitle2').addClass('on')
      }, 200)
      
      this.setTimeout(() => {
        $('.himock2').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.hisubtxt1').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.hisubtitle3').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.himock3').addClass('on')
      }, 700)

      this.setTimeout(() => {
        $('.hisubtxt2').addClass('on')
      }, 800)
    }







// 섹션 8

    if (scrollTop >= 15300) {
      $('.retitle').addClass('on')
    }

    if (scrollTop >= 15400) {
      $('.retxt1').addClass('on')
    }

    if (scrollTop >= 15500) {
      $('.retxt2').addClass('on')
    }

    if (scrollTop >= 15700) {
      this.setTimeout(() => {
        $('.reg1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.per55').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.reg11').addClass('on')
      }, 100)

      this.setTimeout(() => {
        $('.reg12').addClass('on')
      }, 200)

      this.setTimeout(() => {
        $('.reg13').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.per71').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.reg2').addClass('on')
      }, 900)

      this.setTimeout(() => {
        $('.reg21').addClass('on')
      }, 1100)
    }









// 섹션12

if (scrollTop >= 17300) {
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

if (scrollTop >= 17700) {
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
