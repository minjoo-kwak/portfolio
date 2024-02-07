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

  $('.cotop').addClass('on')

  this.setTimeout(() => {
    $('.coticket').addClass('on')
  }, 200)

  this.setTimeout(() => {
    $('.cotitle1').addClass('on')
  }, 300)

  this.setTimeout(() => {
    $('.cotitle2').addClass('on')
  }, 400)

  this.setTimeout(() => {
    $('.copaper1').addClass('on')
  }, 500)

  this.setTimeout(() => {
    $('.copaper2').addClass('on')
  }, 600)

  this.setTimeout(() => {
    $('.copaper3').addClass('on')
  }, 700)

  this.setTimeout(() => {
    $('.copaper4').addClass('on')
  }, 800)

  this.setTimeout(() => {
    $('.cobeads1').addClass('on')
  }, 900)

  this.setTimeout(() => {
    $('.copaper5').addClass('on')
  }, 1000)

  this.setTimeout(() => {
    $('.copaper6').addClass('on')
  }, 1100)

  this.setTimeout(() => {
    $('.costitle').addClass('on')
  }, 1200)

  this.setTimeout(() => {
    $('.cobeads2').addClass('on')
  }, 1300)

  this.setTimeout(() => {
    $('.cowave').addClass('on')
  }, 1400)

  container.addListener(e => {
    let scrollTop = container.scrollTop
    console.log(scrollTop)

    // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)

    const parentDiv = document.querySelector('.ilblack');
    const viewportHeight = window.innerHeight;
    const fromViewportToParentHeight = parentDiv.getBoundingClientRect().top;
    const 스크롤이넘어간정도 = viewportHeight - fromViewportToParentHeight;
    const divHeight = parentDiv.clientHeight;
    let scrollRate = 스크롤이넘어간정도 / divHeight * 100;
    if (스크롤이넘어간정도 / divHeight * 100 < 0) {
      scrollRate = 0;
    } else if (스크롤이넘어간정도 / divHeight * 100 > 100) {
      scrollRate = 100;
    }

    const childDiv = document.querySelector('.ilcolorwrapper');
    const childDiv2 = document.querySelector('.ilcolor');

    const minScrollRate = 50;
    const maxScrollRate = 100;

    const minWidth = 0;
    const maxWidth = 1920;

    const width = minWidth + ((scrollRate - minScrollRate) / (maxScrollRate - minScrollRate)) * (maxWidth - minWidth);

    const minHeight = 0;
    const maxHeight = 2134;

    const height = minHeight + ((scrollRate - minScrollRate) / (maxScrollRate - minScrollRate)) * (maxHeight - minHeight);

    const minBorderRadius = 0;
    const maxBorderRadius = 80;
    const borderRadius = maxBorderRadius + ((scrollRate - minScrollRate) / (maxScrollRate - minScrollRate)) * (minBorderRadius - maxBorderRadius);

    childDiv.style.width = `${width}px`;
    childDiv.style.height = `${height}px`;
    childDiv.style.borderRadius = `${borderRadius}%`;

    const left = (1920 - width)/2 * -1;
    childDiv2.style.left = `${left}px`;


    if (scrollTop >= 50) {
      $('.ilcolor').addClass('on')
    }

    if (scrollTop >= 1180) {
      $('.object1').addClass('on')
    }

    if (scrollTop >= 1200) {
      $('.ob1beads').addClass('on')
    }

    if (scrollTop >= 1500) {
      $('.ob12beads').addClass('on')
    }

    if (scrollTop >= 1600) {
      $('.object12').addClass('on')
    }

    if (scrollTop >= 1500) {
      $('.object2').addClass('on')
    }

    if (scrollTop >= 1550) {
      $('.obpaper').addClass('on')
    }

    if (scrollTop >= 1600) {
      $('.ob2wave').addClass('jello-horizontal')
    }

    if (scrollTop >= 1600) {
      $('.ob2beads').addClass('on')
    }

    if (scrollTop >= 1700) {
      $('.object3').addClass('on')
    }

    if (scrollTop >= 1700) {
      $('.obgirl').addClass('on')
    }

    if (scrollTop >= 1800) {
      $('.object21').addClass('on')
    }

    if (scrollTop >= 1900) {
      $('.ob21wave').addClass('jello-horizontal')
    }

    if (scrollTop >= 2000) {
      $('.obman').addClass('on')
    }

    if (scrollTop >= 2100) {
      $('.obtxt').addClass('on')
    }

    if (scrollTop >= 2500) {
      $('.stguide1').addClass('on')
    }

    if (scrollTop >= 3300) {
      $('.stguide2').addClass('on')
    }

    if (scrollTop >= 2600) {
      $('.obMARSHALL').addClass('on')
    }

    if (scrollTop >= 2700) {
      $('.obcaution').addClass('on')
    }

    if (scrollTop >= 2900) {
      $('.obladder').addClass('on')
    }

    if (scrollTop >= 2700) {
      $('.sttitle1').addClass('on')
    }

    if (scrollTop >= 2800) {
      $('.sttag1').addClass('on')
    }

    if (scrollTop >= 2900) {
      $('.stcont1').addClass('on')
    }

    if (scrollTop >= 3000) {
      $('.stcont2').addClass('on')
    }

    if (scrollTop >= 3100) {
      $('.sttag2').addClass('on')
    }

    if (scrollTop >= 3200) {
      $('.stcont3').addClass('on')
    }

    if (scrollTop >= 3300) {
      $('.stcont4').addClass('on')
    }

    if (scrollTop >= 3600) {
      $('.sttitle2').addClass('on')
    }

    if (scrollTop >= 3500) {
      $('.stcol1').addClass('on')
    

    this.setTimeout(() => {
      $('.stcol2').addClass('on')
    }, 200)

    this.setTimeout(() => {
      $('.stcol3').addClass('on')
    }, 400)

    this.setTimeout(() => {
      $('.stcol4').addClass('on')
    }, 600)

    this.setTimeout(() => {
      $('.stcol5').addClass('on')
    }, 800)

    this.setTimeout(() => {
      $('.stcol6').addClass('on')
    }, 1000)
    }

    if (scrollTop >= 3500) {
      $('.stman2').addClass('on')
    }

    if (scrollTop >= 3800) {
      $('.drtitle').addClass('on')
    }

    if (scrollTop >= 3800) {
      $('.drplay').addClass('on')
    }

    if (scrollTop >= 3900) {
      $('.dr1').addClass('on')
      this.setTimeout(() => {
        $('.drtitle1').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.drtxt1').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.drarrow1').addClass('on')
      }, 600)
    }

    if (scrollTop >= 4200) {
      $('.dr2').addClass('on')

      this.setTimeout(() => {
        $('.drtitle2').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.drtxt2').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.drarrow2').addClass('on')
      }, 600)
    }

    if (scrollTop >= 4500) {
      $('.dr3').addClass('on')

      this.setTimeout(() => {
        $('.drtitle3').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.drtxt3').addClass('on')
      }, 400)

      this.setTimeout(() => {
        $('.drarrow3').addClass('on')
      }, 600)
    }

    if (scrollTop >= 4700) {
      $('.dr4').addClass('on')

      this.setTimeout(() => {
        $('.drtitle4').addClass('on')
      }, 300)

      this.setTimeout(() => {
        $('.drtxt4').addClass('on')
      }, 400)
    }

    if (scrollTop >= 7800) {
      $('.mocktitle').addClass('on')
    }

    if (scrollTop >= 7900) {
      $('.mockwave').addClass('on')
    }

    if (scrollTop >= 8000) {
      $('.playback').addClass('on')
    }

    if (scrollTop >= 8100) {
      $('.playfront').addClass('on')
    }

    if (scrollTop >= 8200) {
      $('.mockline1').addClass('on')
    }

    if (scrollTop >= 8300) {
      $('.mocktxt1').addClass('on')
    }

    if (scrollTop >= 8400) {
      $('.mockman').addClass('on')
    }

    if (scrollTop >= 8500) {
      $('.mock1').addClass('on')
    }

    if (scrollTop >= 8600) {
      $('.mocktimer').addClass('on')
    }

    if (scrollTop >= 8700) {
      $('.mockline2').addClass('on')
    }

    if (scrollTop >= 8800) {
      $('.mocktxt2').addClass('on')
    }

    if (scrollTop >= 9200) {
      $('.mockline3').addClass('on')
    }

    if (scrollTop >= 9300) {
      $('.mocktxt3').addClass('on')
    }

    if (scrollTop >= 9600) {
      $('.mockman2').addClass('on')
    }

    if (scrollTop >= 10000) {
      $('.mock2').addClass('on')
    }

    if (scrollTop >= 9500) {
      $('.mockman2').addClass('on')
    }

    if (scrollTop >= 9999) {
      $('.mocktree').addClass('on')
    }

    if (scrollTop >= 10200) {
      $('.mockline4').addClass('on')
    }

    if (scrollTop >= 10300) {
      $('.mocktxt4').addClass('on')
    }

    if (scrollTop >= 10500) {
      $('.mockman3').addClass('on')
    }

    if (scrollTop >= 11000) {
      $('.mockline5').addClass('on')
    }

    if (scrollTop >= 11100) {
      $('.mocktxt5').addClass('on')
    }

    if (scrollTop >= 11400) {
      $('.mockevent').addClass('on')
    }

    if (scrollTop >= 11500) {
      $('.mockline6').addClass('on')
    }

    if (scrollTop >= 11600) {
      $('.mocktxt6').addClass('on')
    }









    if (scrollTop >= 12100) {
      $('.endtitle').addClass('on')
    }

    if (scrollTop >= 12200) {
      $('.endcube1').addClass('on')
    }

    if (scrollTop >= 12300) {
      $('.endtxt').addClass('on')
    }

    if (scrollTop >= 12500) {
      $('.endcube2').addClass('on')
    }

    if (scrollTop >= 12600) {
      $('.endmock').addClass('on')
    }

    if (scrollTop >= 14100) {
      $('.endcube3').addClass('jello-horizontal')
    }

    if (scrollTop >= 14700) {
      $('.endcube4').addClass('jello-horizontal')
    }

    if (scrollTop >= 15600) {
      $('.endcube5').addClass('jello-horizontal')
    }

    if (scrollTop >= 16400) {
      $('.endcube6').addClass('jello-horizontal')
    }




// 섹션12

if (scrollTop >= 17400) {
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

if (scrollTop >= 17800) {
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
