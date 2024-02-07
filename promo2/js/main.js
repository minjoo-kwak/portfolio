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

  $('.coline1').addClass('on')

  this.setTimeout(() => {
    $('.coline2').addClass('on')
  }, 300)

  this.setTimeout(() => {
    $('.coline3').addClass('on')
  }, 400)

  this.setTimeout(() => {
    $('.coimg').addClass('on')
  }, 600)

  this.setTimeout(() => {
    $('.cotitle1').addClass('on')
  }, 800)



  container.addListener(e => {
    let scrollTop = container.scrollTop
    console.log(scrollTop)


  

    // if (scrollTop >= 240) {
    //   $('.cotitle1').addClass('on')
    // }

    if (scrollTop >= 570) {
      $('.cotxt').addClass('on')
    }

    if (scrollTop >= 290) {
      $('.cotitle2').addClass('on')
    }

    if (scrollTop >= 800) {
      $('.coline4').addClass('on')
    }








    if (scrollTop >= 1200) {
      $('.conbox1').addClass('on')
    }

    if (scrollTop >= 1290) {
      $('.contxt1').addClass('on')
    }

    if (scrollTop >= 1300) {
      $('.conVa').addClass('on')
    }

    if (scrollTop >= 1600) {
      $('.conbox2').addClass('on')
    }

    if (scrollTop >= 1700) {
      $('.contxt2').addClass('on')
    }

    if (scrollTop >= 1830) {
      $('.conCl').addClass('on')
    }

    if (scrollTop >= 1790) {
      $('.conJo').addClass('on')
    }










    if (scrollTop >= 2200) {
      $('.tasub').addClass('on')
    }

    if (scrollTop >= 2300) {
      $('.tatitle').addClass('on')
    }

    if (scrollTop >= 2400) {
      $('.tatxt1').addClass('on')
    }

    if (scrollTop >= 2450) {
      $('.tatxt2').addClass('on')
    }

    if (scrollTop >= 2500) {
      $('.taline').addClass('on')
    }

    if (scrollTop >= 2500) {
      this.setTimeout(() => {
        $('.g2').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.g2txt').addClass('on')
      }, 120)
      
      this.setTimeout(() => {
        $('.g1').addClass('on')
      }, 240)
      
      this.setTimeout(() => {
        $('.g1txt').addClass('on')
      }, 360)

      this.setTimeout(() => {
        $('.g4').addClass('on')
      }, 480)
      
      this.setTimeout(() => {
        $('.g4txt').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.g3').addClass('on')
      }, 700)
      
      this.setTimeout(() => {
        $('.g3txt').addClass('on')
      }, 800)

      this.setTimeout(() => {
        $('.g5').addClass('on')
      }, 900)
      
      this.setTimeout(() => {
        $('.g5txt').addClass('on')
      }, 1000)

    
    }








    if (scrollTop >= 3300) {
      $('.tyline1').addClass('on')
    }

    if (scrollTop >= 3310) {
      $('.tyline2').addClass('on')
    }

    if (scrollTop >= 3500) {
      $('.tyEd').addClass('on')
    }

    if (scrollTop >= 3600) {
      $('.tyPro').addClass('on')
    }

    if (scrollTop >= 3700) {
      $('.tysub').addClass('on')
    }

    if (scrollTop >= 3780) {
      $('.tytxt').addClass('on')
    }






    if (scrollTop >= 4100) {
      $('.stcircle').addClass('on')
    }

    if (scrollTop >= 4300) {
      $('.stsub').addClass('on')
    }

    if (scrollTop >= 4300) {
      $('.sttitle').addClass('on')
    }

    if (scrollTop >= 4500) {
      $('.stlinel').addClass('on')
    }

    if (scrollTop >= 4600) {
      $('.stline-').addClass('on')
    }

    if (scrollTop >= 4700) {
      this.setTimeout(() => {
        $('.font1').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.font2').addClass('on')
      }, 20)
      
      this.setTimeout(() => {
        $('.px1').addClass('on')
      }, 40)
      
      this.setTimeout(() => {
        $('.px2').addClass('on')
      }, 80)

      this.setTimeout(() => {
        $('.px3').addClass('on')
      }, 120)
      
      this.setTimeout(() => {
        $('.px4').addClass('on')
      }, 160)

      this.setTimeout(() => {
        $('.px5').addClass('on')
      }, 200)
      
    
    }







    if (scrollTop >= 5200) {
      $('.stcsub').addClass('on')
    }

    if (scrollTop >= 5300) {
      $('.stctxt').addClass('on')
    }

    if (scrollTop >= 5400) {
      $('.stcW').addClass('on')
    }

    if (scrollTop >= 5490) {
      $('.stcBe').addClass('on')
    }

    if (scrollTop >= 5580) {
      $('.stcBl').addClass('on')
    }






    if (scrollTop >= 5680) {
      $('.stwsub').addClass('on')
    }

    if (scrollTop >= 5800) {
      $('.stwtxt').addClass('on')
    }

    if (scrollTop >= 5900) {
      $('.stwimg1').addClass('on')
    }

    if (scrollTop >= 5950) {
      $('.stwimg2').addClass('on')
    }











    if (scrollTop >= 6400) {
      $('.m1title').addClass('on')
    }

    if (scrollTop >= 6500) {
      $('.m1txt1').addClass('on')
    }

    if (scrollTop >= 6700) {
      $('.m1').addClass('on')
    }

    if (scrollTop >= 6800) {
      $('.m1txt2').addClass('on')
    }






    if (scrollTop >= 7800) {
      $('.m2').addClass('on')
    }

    if (scrollTop >= 8200) {
      $('.m2tbtitle').addClass('on')
    }

    if (scrollTop >= 8300) {
      $('.m2tbline').addClass('on')
    }

    if (scrollTop >= 8400) {
      $('.m2tbtxt').addClass('on')
    }

    if (scrollTop >= 8800) {
      $('.m2tbig').addClass('on')
    }






    if (scrollTop >= 9400) {
      $('.m3bg').addClass('on')
    }

    if (scrollTop >= 9900) {
      $('.m3').addClass('on')
    }

    if (scrollTop >= 9600) {
      $('.m3txt').addClass('on')
    }

    if (scrollTop >= 10200) {
      $('.m3tbtitle').addClass('on')
    }

    if (scrollTop >= 10300) {
      $('.m3tbline').addClass('on')
    }

    if (scrollTop >= 10400) {
      $('.m3tbtxt').addClass('on')
    }

    if (scrollTop >= 11280) {
      $('.m3tb2').addClass('on')
    }

    if (scrollTop >= 11900) {
      $('.m3tbAura').addClass('on')
    }





    if (scrollTop >= 12300) {
      $('.m4').addClass('on')
    }

    if (scrollTop >= 12500) {
      $('.m4Est').addClass('on')
    }

    if (scrollTop >= 13000) {
      $('.m4tbtitle').addClass('on')
    }

    if (scrollTop >= 13100) {
      $('.m4tbline').addClass('on')
    }

    if (scrollTop >= 13200) {
      $('.m4tbtxt').addClass('on')
    }

    if (scrollTop >= 14000) {
      $('.m4tb2').addClass('on')
    }





    if (scrollTop >= 14400) {
      $('.endgreen').addClass('on')
    }

    if (scrollTop >= 14600) {
      $('.endtb').addClass('on')
    }

    if (scrollTop >= 15000) {
      $('.endtxt').addClass('on')
    }

    if (scrollTop >= 15300) {
      this.setTimeout(() => {
        $('.endK').addClass('on')
      }, 0)
      
      this.setTimeout(() => {
        $('.endO').addClass('on')
      }, 200)
      
      this.setTimeout(() => {
        $('.endU').addClass('on')
      }, 400)
      
      this.setTimeout(() => {
        $('.endV').addClass('on')
      }, 600)

      this.setTimeout(() => {
        $('.endE').addClass('on')
      }, 800)
      
    }

   // 섹션12

if (scrollTop >= 15600) {
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

if (scrollTop >= 16100) {
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
