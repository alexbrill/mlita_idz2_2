"use strict";

button.onclick = function() {
    var str = text.value;

var printBlock = document.getElementById("printBlock");

var i;
var count = 0;

i = 0; 
		
if (S0())
	printBlock.textContent = 'принадлежит';
else
	printBlock.textContent = 'не принадлежит';


function S0()
{
	var ch = Read(); 
	
	if (ch == '1')
	{
		count++;
		return S1();
	}
	else
		return false;
}

function S1()
{
	var ch = Read();
	
	if (ch == '1')
	{
		count++;
		return S1();
	}
	else if (ch == '+')
		return S2();
	else
		return false;	
}

function S2()
{
	var ch = Read(); 
	
	if (ch == '1')
	{
		count++;
		return S3();
	}
	else
		return false;
}

function S3()
{
	var ch = Read(); 
	
	if (ch == '=')
		return S4();
	else
		return false;
}

function S4()
{
	var ch = Read();
	
	if (ch == '1')
	{
		count--;
		return S5();
	}
	else
		return false;
}

function S5()
{	
	var ch = Read();

	if (ch == '1')
	{
		count--;
		return S5();
	}
	else if (ch == undefined && count == 0)
		return true;
	else 
		return false;
}


function Read() { return str[i++]; }


}
