
var deathsNumber

var h = window.innerHeight
var w = window.innerWidth

var maxSpeed = Math.round(w/190 + h/190)
var minSpeed = Math.round(w/360 + h/360)
var charSpeed = (maxSpeed + minSpeed) / 30
console.log(maxSpeed)
console.log(minSpeed)
console.log(charSpeed)

function $(e) {
    return document.getElementById(e)
}

function menuMc() {
    this.x = w/2
    this.y = h/2
    this.d = w/25 + h/25

    this.yVelocity = 0
    this.xVelocity = 0

    /*
    this.horizontal = 0.75
    this.vertical = 0.75
    */

    // screen dependent version
    this.horizontal = charSpeed
    this.vertical = charSpeed

    this.leftMove = function() {
        this.xVelocity += -this.horizontal
    }
    this.rightMove = function() {
        this.xVelocity += this.horizontal
    }

    this.upMove = function() {
        this.yVelocity += -this.vertical
    }
    this.downMove = function() {
        this.yVelocity += this.vertical
    }

    this.show = function() {
        fill(0,100,200,255)
        circle(this.x,this.y,this.d)
    }
    this.update = function() {
        this.y += this.yVelocity
        this.x += this.xVelocity

        this.yVelocity *= 0.95
        this.xVelocity *= 0.95
            
    }
}

function menuHand() {
    this.x = w/2
    this.y = h/2
        
    this.width = w/15
    this.height = h/10
        
    this.xVelocity = 0
    this.yVelocity = 0

    this.update = function() {
        this.y += this.yVelocity
        this.x += this.xVelocity
    }
    this.show = function() {
        image(handCharger3,this.x -this.width,this.y -this.height,this.width +this.width,this.height +this.height)
    }
}

function menuChair() {
    this.x = w/2
    this.y = h/2
        
    this.width = w/15
    this.height = h/10
        
    this.xVelocity = 0
    this.yVelocity = 0

    this.update = function() {
        this.y += this.yVelocity
        this.x += this.xVelocity
    }
    this.show = function() {
        image(chair,this.x -this.width,this.y -this.height,this.width +this.width,this.height +this.height)
    }
}

function mc() {
    this.x = w/2
    this.y = h/2
    this.d = w/25 + h/25

    this.yVelocity = 0
    this.xVelocity = 0

    // fixed speed version
    /*
    this.horizontal = charSpeed
    this.vertical = charSpeed
    */

    // screen dependent speed version
    this.horizontal = charSpeed
    this.vertical = charSpeed

    this.leftMove = function() {
        this.xVelocity += -this.horizontal
    }
    this.rightMove = function() {
        this.xVelocity += this.horizontal
    }

    this.upMove = function() {
        this.yVelocity += -this.vertical
    }
    this.downMove = function() {
        this.yVelocity += this.vertical
    }

    this.show = function() {
        fill(0,100,200,255)
        circle(this.x,this.y,this.d)
    }
    this.update = function() {
        this.y += this.yVelocity
        this.x += this.xVelocity

        this.yVelocity *= 0.95
        this.xVelocity *= 0.95

        if ((this.y > h)) {
        this.y = h
        }
        if ((this.y < 0))
        this.y = 0

        if ((this.x > w)) {
        this.x = w
        }
        if ((this.x < 0))
        this.x = 0
            
    }
}

function hands() {
    this.show = function() {
        for (var i=0; i<handList.length; i++) {
            fill(125,125,0,0)
            noStroke()
            rect(handList[i].x,handList[i].y,handList[i].width,handList[i].height)
            image(handList[i].image,handList[i].x -handList[i].width,handList[i].y -handList[i].height,handList[i].width +handList[i].width,handList[i].height +handList[i].height)

    }
    }
    this.update = function() {
        for (var i=0; i<handList.length; i++) {
            handList[i].y += handList[i].yVelocity
            handList[i].x += handList[i].xVelocity
            
            //handList[i].yVelocity *= 0.99
            //handList[i].xVelocity *= 0.99
            
                // once they reach the edge of the window, randomize id and toggle reposition
                // bottom
                if ((handList[i].y > h + 100)) {
                handList[i].id = Math.floor(Math.random() * 4)
                handList[i].isRepositioning = true
                }
                // top
                if ((handList[i].y < 0 - 100)) {
                handList[i].id = Math.floor(Math.random() * 4)
                handList[i].isRepositioning = true
                }
                // right
                if ((handList[i].x > w + 100)) {
                handList[i].id = Math.floor(Math.random() * 4)
                handList[i].isRepositioning = true
                }
                // left
                if ((handList[i].x < 0 - 100)) {
                handList[i].id = Math.floor(Math.random() * 4)
                handList[i].isRepositioning = true
                }


               // reposition according to IDs and toggle charging
               // top
               if ((handList[i].id == 0) && (handList[i].isRepositioning == true)) {
                handList[i].x = Math.floor(Math.random() * ((w - 25) - 25) + 25)
                handList[i].y = 0 + 1
                handList[i].xVelocity = 0
                handList[i].yVelocity = 0
                handList[i].image = handCharger
                handList[i].isRepositioning = false
                handList[i].isChargingUp = true
                }
                // right
                if ((handList[i].id == 1) && (handList[i].isRepositioning == true)) {
                handList[i].y = Math.floor(Math.random() * ((h - 25) - 25) + 25)
                handList[i].x = w - 1
                handList[i].xVelocity = 0
                handList[i].yVelocity = 0
                handList[i].image = handCharger3
                handList[i].isRepositioning = false
                handList[i].isChargingUp = true
                }
                // bottom
                if ((handList[i].id == 2) && (handList[i].isRepositioning == true)) {
                handList[i].x = Math.floor(Math.random() * ((w - 25) - 25) + 25)
                handList[i].y = h - 1
                handList[i].xVelocity = 0
                handList[i].yVelocity = 0
                handList[i].image = handCharger2
                handList[i].isRepositioning = false
                handList[i].isChargingUp = true
                }
                // left
                if ((handList[i].id == 3) && (handList[i].isRepositioning == true)) {
                handList[i].y = Math.floor(Math.random() * ((h - 25) - 25) + 25)
                handList[i].x = 0 + 1
                handList[i].xVelocity = 0
                handList[i].yVelocity = 0
                handList[i].image = handCharger4
                handList[i].isRepositioning = false
                handList[i].isChargingUp = true
                }

                
                // charge after specified amount of ticks
                // top
                /*if ((handList[i].id == 0) && (handList[i].isChargingUp == true)) {
                handList[i].chargeUp += 1
                if ((handList[i].chargeUp >= 100)) {
                handList[i].yVelocity = Math.floor(Math.random() * ((17 - 10) - 10) + 10)
                handList[i].chargeUp = 0
                handList[i].isChargingUp = false
                }
                }
                // right
                if ((handList[i].id == 1) && (handList[i].isChargingUp == true)) {
                handList[i].chargeUp += 1
                if ((handList[i].chargeUp == 100)) {
                handList[i].xVelocity = -Math.floor(Math.random() * ((17 - 10) - 10) + 10)
                handList[i].chargeUp = 0
                handList[i].isChargingUp = false
                }
                }
                // bottom
                if ((handList[i].id == 2) && (handList[i].isChargingUp == true)) {
                handList[i].chargeUp += 1
                if ((handList[i].chargeUp == 100)) {
                handList[i].yVelocity = -Math.floor(Math.random() * ((17 - 10) - 10) + 10)
                handList[i].chargeUp = 0
                handList[i].isChargingUp = false
                }
                }
                // left
                if ((handList[i].id == 3) && (handList[i].isChargingUp == true)) {
                handList[i].chargeUp += 1
                if ((handList[i].chargeUp == 100)) {
                handList[i].xVelocity = Math.floor(Math.random() * ((17 - 10) - 10) + 10)
                handList[i].chargeUp = 0
                handList[i].isChargingUp = false
                }
                }*/

                // charge after specified amount of ticks (screen dependent version)
                // top
                if ((handList[i].id == 0) && (handList[i].isChargingUp == true)) {
                handList[i].chargeUp += 1
                if ((handList[i].chargeUp >= 100)) {
                handList[i].yVelocity = Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed)
                handList[i].chargeUp = 0
                handList[i].isChargingUp = false
                }
                }
                // right
                if ((handList[i].id == 1) && (handList[i].isChargingUp == true)) {
                handList[i].chargeUp += 1
                if ((handList[i].chargeUp == 100)) {
                handList[i].xVelocity = -Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed)
                handList[i].chargeUp = 0
                handList[i].isChargingUp = false
                }
                }
                // bottom
                if ((handList[i].id == 2) && (handList[i].isChargingUp == true)) {
                handList[i].chargeUp += 1
                if ((handList[i].chargeUp == 100)) {
                handList[i].yVelocity = -Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed)
                handList[i].chargeUp = 0
                handList[i].isChargingUp = false
                }
                }
                // left
                if ((handList[i].id == 3) && (handList[i].isChargingUp == true)) {
                handList[i].chargeUp += 1
                if ((handList[i].chargeUp == 100)) {
                handList[i].xVelocity = Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed)
                handList[i].chargeUp = 0
                handList[i].isChargingUp = false
                }
                }
    
    hit = collideRectCircle(handList[i].x,handList[i].y,handList[i].width - 30,handList[i].height - 30,mc.x,mc.y,mc.d)
    if (hit == true) {

        deaths += 1
        sessionStorage.setItem("deaths", deaths)
        deathsNumber = parseInt(sessionStorage.getItem("deaths"))

        $("deathNumber").innerHTML = deathsNumber
        $("restartText").style.visibility = "visible"

        deathEffect.play()

        //console.log("HIT")
        noLoop()
    }
    else {
        //console.log("NOHIT")
    }
    }
    }
}

var isConShowing = false
var isCrdShowing = false

function exitCCMenuScript() {
if ((isConShowing == true) && (isCrdShowing == false)) {
    isConShowing = false
    $("controlMenu").style.visibility = "hidden"
    $("ccMenuBG").style.visibility = "hidden"
    $("exitCCMenu").style.visibility = "hidden"

    $("title").style.visibility = "visible"
    $("startPrompt").style.visibility = "visible"
    $("credits").style.visibility = "visible"
    $("controls").style.visibility = "visible"
}
else if ((isCrdShowing == true) && (isConShowing == false)) {
    isCrdShowing = false
    $("creditMenu").style.visibility = "hidden"
    $("ccMenuBG").style.visibility = "hidden"
    $("exitCCMenu").style.visibility = "hidden"

    $("title").style.visibility = "visible"
    $("startPrompt").style.visibility = "visible"
    $("credits").style.visibility = "visible"
    $("controls").style.visibility = "visible"
}
}

function controlMenuScript() {
if (isCrdShowing == false) {
    isConShowing = true
    $("exitCCMenu").style.visibility = "visible"
    $("controlMenu").style.visibility = "visible"
    $("ccMenuBG").style.visibility = "visible"

    $("title").style.visibility = "hidden"
    $("startPrompt").style.visibility = "hidden"
    $("credits").style.visibility = "hidden"
    $("controls").style.visibility = "hidden"
}
else {
return
}
}

function creditMenuScript() {
if (isConShowing == false) {
    isCrdShowing = true
    $("exitCCMenu").style.visibility = "visible"
    $("creditMenu").style.visibility = "visible"
    $("ccMenuBG").style.visibility = "visible"

    $("title").style.visibility = "hidden"
    $("startPrompt").style.visibility = "hidden"
    $("credits").style.visibility = "hidden"
    $("controls").style.visibility = "hidden"
}
else {
return
}
}