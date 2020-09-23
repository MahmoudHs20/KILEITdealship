var bt = document.querySelectorAll('#btn1');
bt.forEach( b => {   
    b.addEventListener('click', function(){   
        if( b.hasAttribute('one') ){
            b.classList.add('actives');
            b.nextElementSibling.classList.remove('actives');
            b.nextElementSibling.firstChild.style.color = '#d7caca';
            document.getElementById('swip').style.translate = '0';
            document.getElementById('pop').style.translate = '0px';
           
        } else {
            b.classList.add('actives');
            b.firstChild.style.color = '#6d6630';
            b.previousElementSibling.classList.remove('actives');
            document.getElementById('swip').style.translate = '-1700px';
            document.getElementById('pop').style.translate = '-1700px';
        }
    
    });
});
document.getElementById("car-name").textContent

var vd = document.querySelectorAll('#vdts');
vd.forEach( v => {   
    v.addEventListener('click', function(){   

        document.getElementById("car-name").textContent  = v.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

        let mustangEngine = `All GT models for 2020 carry over the 5.0-liter Coyote V8 and its 460 hp from the 2019 model, paired with the same six-speed manual as standard, while the excellent ten-speed automatic remains an option for all but the top trim. Both options are great in their own right, the row-your-own, three-pedal option obviously being the more engaging option.
       The SelectShift automatic, however, need not be dismissed from your research if you're considering a Mustang GT. Despite being equipped with paddles to allow you to choose when to change, its automatic calibration is so well tuned that you never feel the need to grab a paddle, whether accelerating or diving into a corner. That being said, it's probably best to avoid making shifting decisions for yourself, as there is still a slight delay between selecting the next gear manually and the transmission actually engaging it. Leave it in auto and you're golden, both for cruising and fun. We'd still rather have the manual though, especially since rev-matching comes standard on all GT's these days. Whichever you choose, it doesn't matter if you're actively attacking a canyon road or launching yourself from a traffic light - the V8's breadth of capability makes the acceleration experience a fun one.
        `
       let mustangDims = `With a fairly minor refresh and no changes to the bodywork, dimensions haven't changed at all. At 118.5 inches long, 54.3 inches high, and 75.4 inches wide, the 2020 Mustang is still a long-hooded, short-tailed car with classic proportions. The base GT weighs in at 3,705 pounds, less than 200 more than the EcoBoost, indicating that the additional power from the V8 also comes with more bulk to lug around. The wheelbase remains at 107.1 inches.`
        if ( v.hasAttribute('mustang') ){
            document.getElementById('engine').textContent = mustangEngine;
            document.getElementById('dims').textContent = mustangDims;
        }
    
    });
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });