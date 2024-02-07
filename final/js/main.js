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

  // $('.c1').addClass('on')

  this.setTimeout(() => {
    $('.title1').addClass('on')
  }, 2000)

  this.setTimeout(() => {
    $('.c2').addClass('on')
  }, 2100)

  this.setTimeout(() => {
    $('.stitle').addClass('on')
  }, 2800)

  this.setTimeout(() => {
    $('.c4').addClass('moveAndRotateC4')
  }, 2900)

  this.setTimeout(() => {
    $('.c5').addClass('moveAndRotateC5')
  }, 3500)

  this.setTimeout(() => {
    $('.c6').addClass('on')
  }, 4000)

  this.setTimeout(() => {
    $('.c3').addClass('bouncec3')
  }, 4300)

  this.setTimeout(() => {
    $('.title2').addClass('on')
  }, 4200)

  // this.setTimeout(() => {
  //   $('.c9').addClass('on')
  // }, 4300)

  this.setTimeout(() => {
    $('.c11').addClass('bounceC11')
  }, 4500)

  this.setTimeout(() => {
    $('.c12').addClass('moveAndRotateC12')
  }, 6700)



  container.addListener(e => {
    let scrollTop = container.scrollTop
    console.log(scrollTop)

    if (scrollTop >= 200) {
      $('.c9').addClass('on')
    }

    // if (scrollTop >= 300) {
    //   $('.c12').addClass('on')
    // }

    if (scrollTop >= 320) {
      $('.line').addClass('on')
    }



    // 섹션2


    if (scrollTop >= 400) {
      $('.wbox').addClass('on')
    }

    if (scrollTop >= 420) {
      $('.wtitle').addClass('on')
    }

    if (scrollTop >= 700) {
      $('.w1').addClass('on')
    
    this.setTimeout(() => {
      $('.w2').addClass('on')
    }, 300)
  
    this.setTimeout(() => {
      $('.wc1').addClass('bounce1')
    }, 400)
  
    this.setTimeout(() => {
      $('.w3').addClass('on')
    }, 600)
  
    this.setTimeout(() => {
      $('.wc2').addClass('on')
    }, 1270)
  
    this.setTimeout(() => {
      $('.wc3').addClass('on')
    }, 1300)

    this.setTimeout(() => {
      $('.w4').addClass('on')
    }, 1200)
  
    this.setTimeout(() => {
      $('.w5').addClass('on')
    }, 1500)

    }




// 섹션3



    if (scrollTop >= 1800) {
      $('.pbox').addClass('on')
    }

    if (scrollTop >= 1900) {
      $('.ptitle').addClass('on')
    }

    if (scrollTop >= 2000) {
      $('.photo').addClass('on')
    }

    if (scrollTop >= 2100) {
      $('.pline1').addClass('on')
    
    this.setTimeout(() => {
      $('.p1').addClass('on')
    }, 200)
  
    this.setTimeout(() => {
      $('.pc1').addClass('on')
    }, 400)
  
    this.setTimeout(() => {
      $('.pc2').addClass('on')
    }, 500)
    }

    if (scrollTop >= 2200) {
      $('.pline2').addClass('on')
    }

    if (scrollTop >= 2300) {
      $('.p2').addClass('on')
    }

    if (scrollTop >= 2400) {
      $('.pline3').addClass('on')
    }

    if (scrollTop >= 2500) {
      $('.p3').addClass('on')
    }

    if (scrollTop >= 2600) {
      $('.pline4').addClass('on')
    }

    if (scrollTop >= 2700) {
      $('.p4').addClass('on')
    }

    if (scrollTop >= 2800) {
      $('.ptxt1').addClass('on')
    }

    if (scrollTop >= 2900) {
      $('.ptxt2').addClass('on')
    }





// 섹션12

 if (scrollTop >= 3100) {
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
  
    if (scrollTop >= 3500) {
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
