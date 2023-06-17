noseX = "";
noseY = "";
GameStatus = "";
function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game Is Loading";
}
function game(){
	console.log("noseX = " + noseX +" ,noseY = "+ noseY);
	instializeInDraw();
	moveEnviornment(mario);
	drawSprites();
}
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.parent('game_console');
	video.size(800,400);
}

function draw() {
	game()
}
function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}







