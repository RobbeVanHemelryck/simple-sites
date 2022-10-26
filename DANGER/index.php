<!doctype HTML>
<html lang="nl">
<head>
	<title>Dangerous Game</title>
    <link rel="icon" href="skull.png">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Eater" rel="stylesheet">
	<style rel="stylesheet">
        .winner{
        	background-color: rgba(25, 235, 25, 0.33);
        }
        table, tr, th, td{
        	border-collapse: collapse;
        	border: 1px solid black;
        	font-family: "Comic Sans MS";
        	font-size: 20px;
        }
        table{
            z-index: 9999;
        	display: none;
        	position: absolute;
        	left: 50%;
        	top: 50%;
        	transform: translateX(-50%) translateY(-50%);;
        }
        h1{
            margin-bottom:0;
        	color: red;
        	text-align: center;
            font-family: 'Eater';
            font-size: 70px;
            text-shadow: 2px 2px #ffffff;
        }
        h2{
            margin-top:0;
            color: white;
            text-align: center;
            font-family: 'Eater';
            font-size: 25px;
            text-shadow: 2px 2px #ff0000;
        }

        th, td{
        	padding: 10px;
        }
        th{
        	background-color: black;
        	color:red;
        }
        td{
        	background-color: rgba(240,240,240,.5);
        }
        body{
        	
        }
        .trophy{
        	height: 20px;
        }
        input{
        	position: absolute;
        	top: 50%;
        	left: 50%;
        	transform: translateX(-50%) translateY(-50%);
        	font-size: 50px;
        	color: red;
        	text-align: center;
        	background-color: black;
        	border:none;
        }
        .skull{
        	width: 150px;
        	height: 150px;
        	position: absolute;
        	top: 55%;
        	left: 50%;
            margin-left:-75px;
        	font-size: 50px;
        	color: red;
        	text-align: center;
        	transition: all .05s linear, top .2s linear;
        }
        *:focus {
		   outline: 0;
		}
        .skull:hover{
        	transform: scale(2,2);
        	cursor: pointer;
            animation: shake 0.5s; 
            animation-iteration-count: infinite; 
        }
        .newSkull{
            z-index: 9000;
            width: 150px;
            height: 150px;
            position: absolute;
            animation: shake 0.5s; 
            animation-iteration-count: infinite; 
        }
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        #RED{
            width:100%;
            height: 100%;
            position: fixed;
            background-color: red;
            left: 0;
            top:0;
            display: none;
            opacity: 0.7;
        }

        #myVideo {
            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%; 
            min-height: 100%;
        }

        #content {
            position: fixed;
            top:0;
            left:0;
            width: 100%;
            height:100%;
        }
    </style>
    <script>
    	$(function(){
    		/*console.log("test");
    		myAudio = new Audio('KID.mp3'); 
			myAudio.addEventListener('ended', function() {
			    this.currentTime = 0;
			    this.play();
			}, false);
			myAudio.play();*/
    	});
    	function enter(){
            if($('#skullinput').val() == 'Xx08xx08'){
                var audio = new Audio('laugh.mp3');
                audio.play();
                $(".skull").addClass("newSkull");
                $(".skull").attr("onclick", "wow()");
                $('#skullinput').hide(300);
                $(".skull").css('top', '70%');
                $('#table').show(100);
            }
            else{
                var audio = new Audio('trex.mp3');
                audio.play();
                $("#RED").fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50);
            }
    	}
        function wow(){
            $skull = $("<img class='newSkull' src='skull.png' onclick='wow()'>");
            var top = Math.floor(Math.random() * 100);
            var left = Math.floor(Math.random() * 100);

            $skull.css({"top" : top + "%", "left" : left + "%"});
            $("#content").append($skull);
        }
    </script>
</head>
<body>

<video autoplay muted loop id="myVideo">
  <source src="video.mp4" type="video/mp4">
</video>

<div id="content">
    <div id="RED"></div>
	<h1>DANGEROUS GAME</h1>
    <h2>PLAY AT YOUR OWN RISK</h2>
	<div id="security-cont">
		<input id="skullinput" type="password"><br>
		<img class="skull" src="skull.png" onclick="enter()">
	</div>
	<table id="table">
		<tr>
			<th></th>
			<th>Robbo</th>
			<th>Tristank</th>
			<th>Stakes</th>
			<th>VERDICT</th>
		</tr>
		<tr>
			<th>Silke</th>
			<td class="winner">10/08/15 <img class="trophy" src="trophy.png"></td>
			<td>10/09/15</td>
			<td>5.00 EUR</td>
			<td>20/06/15</td>
		</tr>
		<tr>
			<th>Lena</th>
			<td>10/10/15</td>
			<td class="winner">10/12/15 <img class="trophy" src="trophy.png"></td>
			<td>5.00 EUR</td>
			<td>18/11/16</td>
		</tr>
		<tr>
			<th>Carolina</th>
			<td>25/01/18</td>
			<td>25/03/18</td>
			<td>10.00 EUR</td>
			<td>To be announced</td>
		</tr>
	</table>

</body>
</html>