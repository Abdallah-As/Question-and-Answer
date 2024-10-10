// const button = document.querySelectorAll("#option1");



function checkAnswer(button, isCorrect) {
    const buttons = document.querySelectorAll('#option1');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result1 = document.getElementById('result1');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue1 = document.getElementById('resultTrue1');
    const true1 = document.querySelector('.true1')
    
    
    if (isCorrect) {
        resultTrue1.textContent = "إجابة صحيحة";
        resultTrue1.style.color = "green";
        true1.style.backgroundColor = "green";
        true1.style.color = "white";
        sound.play();
    } else {
        result1.classList.remove("hide");
        result1.style.color = "red";
        noSound.play();
    }

}
function checkAnswer2(button, isCorrect) {
    const buttons = document.querySelectorAll('#option2');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result2 = document.getElementById('result2');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue2 = document.getElementById('resultTrue2');
    const true2 = document.querySelector('.true2')
    if (isCorrect) {
        resultTrue2.textContent = "إجابة صحيحة";
        resultTrue2.style.color = "green";
        true2.style.backgroundColor = "green";
        true2.style.color = "white";
        sound.play();
    } else {
        result2.classList.remove("hide");
        result2.style.color = "red";
        noSound.play();
    }

}
function checkAnswer3(button, isCorrect) {
    const buttons = document.querySelectorAll('#option3');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result3 = document.getElementById('result3');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue3 = document.getElementById('resultTrue3');
    const true3 = document.querySelector('.true3')
    if (isCorrect) {
        resultTrue3.textContent = "إجابة صحيحة";
        resultTrue3.style.color = "green";
        true3.style.backgroundColor = "green";
        true3.style.color = "white";
        sound.play();
    } else {
        result3.classList.remove("hide");
        result3.style.color = "red";
        noSound.play();
    }

}
function checkAnswer4(button, isCorrect) {
    const buttons = document.querySelectorAll('#option4');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result4 = document.getElementById('result4');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue4 = document.getElementById('resultTrue4');
    const true4 = document.querySelector('.true4')
    if (isCorrect) {
        resultTrue4.textContent = "إجابة صحيحة";
        resultTrue4.style.color = "green";
        true4.style.backgroundColor = "green";
        true4.style.color = "white";
        sound.play();
    } else {
        result4.classList.remove("hide");
        result4.style.color = "red";
        noSound.play();
    }

}
function checkAnswer5(button, isCorrect) {
    const buttons = document.querySelectorAll('#option5');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result5 = document.getElementById('result5');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue5 = document.getElementById('resultTrue5');
    const true5 = document.querySelector('.true5')
    if (isCorrect) {
        resultTrue5.textContent = "إجابة صحيحة";
        resultTrue5.style.color = "green";
        true5.style.backgroundColor = "green";
        true5.style.color = "white";
        sound.play();
    } else {
        result5.classList.remove("hide");
        result5.style.color = "red";
        noSound.play();
    }

}
function checkAnswer6(button, isCorrect) {
    const buttons = document.querySelectorAll('#option6');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result6 = document.getElementById('result6');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue6 = document.getElementById('resultTrue6');
    const true6 = document.querySelector('.true6')
    if (isCorrect) {
        resultTrue6.textContent = "إجابة صحيحة";
        resultTrue6.style.color = "green";
        true6.style.backgroundColor = "green";
        true6.style.color = "white";
        resultTrue6.innerHTML 
        sound.play();
    } else {
        result6.classList.remove("hide");
        result6.style.color = "red";
        noSound.play();
    }

}
function checkAnswer7(button, isCorrect) {
    const buttons = document.querySelectorAll('#option7');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result7 = document.getElementById('result7');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue7 = document.getElementById('resultTrue7');
    const true7 = document.querySelector('.true7')
    if (isCorrect) {
        resultTrue7.textContent = "إجابة صحيحة";
        resultTrue7.style.color = "green";
        true7.style.backgroundColor = "green";
        true7.style.color = "white";
        sound.play();
    } else {
        result7.classList.remove("hide");
        result7.style.color = "red";
        noSound.play();
    }

}
function checkAnswer8(button, isCorrect) {
    const buttons = document.querySelectorAll('#option8');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result8 = document.getElementById('result8');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue8 = document.getElementById('resultTrue8');
    const true8 = document.querySelector('.true8')
    if (isCorrect) {
        resultTrue8.textContent = "إجابة صحيحة";
        resultTrue8.style.color = "green";
        true8.style.backgroundColor = "green";
        true8.style.color = "white";
        sound.play();
    } else {
        result8.classList.remove("hide");
        result8.style.color = "red";
        noSound.play();
    }

}
function checkAnswer9(button, isCorrect) {
    const buttons = document.querySelectorAll('#option9');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result9 = document.getElementById('result9');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue9 = document.getElementById('resultTrue9');
    const true9 = document.querySelector('.true9')
    if (isCorrect) {
        resultTrue9.textContent = "إجابة صحيحة";
        resultTrue9.style.color = "green";
        true9.style.backgroundColor = "green";
        true9.style.color = "white";
        sound.play();
    } else {
        result9.classList.remove("hide");
        result9.style.color = "red";
        noSound.play();
    }

}
function checkAnswer10(button, isCorrect) {
    const buttons = document.querySelectorAll('#option10');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    const result10 = document.getElementById('result10');
    const sound = document.getElementById("soundEffect");
    const noSound = document.getElementById("noSound");
    const resultTrue10 = document.getElementById('resultTrue10');
    const true10 = document.querySelector('.true10')
    if (isCorrect) {
        resultTrue10.textContent = "إجابة صحيحة";
        resultTrue10.style.color = "green";
        true10.style.backgroundColor = "green";
        true10.style.color = "white";
        sound.play();
    } else {
        result10.classList.remove("hide");
        result10.style.color = "red";
        noSound.play();
    }

}




let up = document.getElementById("up");

window.onscroll = function (eo) {
  let value = scrollY;
  if (scrollY >= 366) {
    up.classList.remove("hide");
  } else {
    up.classList.add("hide");
  } if (scrollY >= 4283) {
    up.style.backgroundColor = "orange"
  } else {
    up.style.backgroundColor = "#eb0e49"
  } 

  
  
};



function handleScroll() {
    const target = document.getElementById("up");
    const scrollP = window.scrollY;

    if (window.matchMedia("(max-width: 768px)").matches) {
        if (scrollP > 3710) {
            target.style.backgroundColor = "orange";
        } else (
            target.style.backgroundColor = "#eb0e49"
        )
    }
}

window.addEventListener('scroll', handleScroll);