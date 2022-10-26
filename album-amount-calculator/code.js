let graphics;
let app;
let scale = 3;
let wallXinCm = 324;
let wallYinCm = 248;
let contX = wallXinCm * scale;
let contY = wallYinCm * scale;
let windowX = window.innerWidth - 10;
if (windowX < contX){
    scale = scale / (contX / windowX);
    contY = contY / (contX / windowX);
    contX = windowX;
}
setup();


let gap = 15 * scale;
let plankWidth = 1.8 * scale;
drawPlanks();


function drawPlanks(){
    resetStage();
    
    let x = contX - plankWidth;
    let y = contY - plankWidth;
    
    let amountX = Math.trunc( x / (gap + plankWidth));
    let amountY = Math.trunc( y / (gap + plankWidth));
    
    let restX = x % (gap + plankWidth);
    let restY = y % (gap + plankWidth);

    for(let i = 0; i <= amountX; i++){
        let plankLength = amountY * (gap + plankWidth) + plankWidth;
        let plankX = (restX / 2) + (i * (gap + plankWidth));
        let plankY = restY / 2;
        drawPlank(plankX, plankY, plankWidth, plankLength);
    }

    for(let i = 0; i <= amountY; i++){
        let plankLength = amountX * (gap + plankWidth) + plankWidth;
        let plankY = (restY / 2) + (i * (gap + plankWidth));
        let plankX = restX / 2;
        drawPlank(plankX, plankY, plankLength, plankWidth);
    }
}

function drawPlank(x, y, w, h){
    graphics.beginFill(0x593c0d);
    graphics.drawRect(x, y, w, h);
    graphics.endFill();
}

function setup(){
    app = new PIXI.Application(
        {
            width: contX,
            height: contY,
            antialias: true,
            backgroundColor: 0xffffff
        });
    document.body.appendChild(app.view);
}

document.getElementById("inputCont").addEventListener(
    'keypress', 
    function(e){
        if (e.key === "Enter"){
            gap = document.getElementById("plankWidthInput").value * scale;
            drawPlanks();
        }
    });

function resetStage(){
    for (var i = app.stage.children.length - 1; i >= 0; i--) {
        app.stage.removeChild(app.stage.children[i]);
    }
    graphics = new PIXI.Graphics();
    app.stage.addChild(graphics);
}
