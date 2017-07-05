var r_text = new Array();

r_text[0] = "Apakah anda ingin memesan secangkir teh, atau kopi, atau... saya?";
r_text[1] = "Satu-satunya hal yang harus kita takuti adalah rasa takut itu sendiri";
r_text[2] = "Bentuk cinta tertinggi adalah menjadi pelindung kesendirian orang lain";
// r_text[3] = "";
// r_text[4] = "";
// r_text[5] = "";
// r_text[6] = "";
// r_text[7] = "";
// r_text[8] = "";
// r_text[9] = "";
// r_text[10] = "";
// r_text[11] = "";
// r_text[12] = "";
// r_text[13] = "";
// r_text[14] = "";
// r_text[15] = "";
// r_text[16] = "";
// r_text[17] = "";
// r_text[18] = "";
// r_text[19] = "";
// r_text[20] = "";
// r_text[21] = "";
// r_text[22] = "";
// r_text[23] = "";
// r_text[24] = "";
// r_text[28] = "";
// r_text[26] = "";
// r_text[27] = "";
// r_text[28] = "";
// r_text[29] = "";
// r_text[30] = "";
// r_text[31] = "";
// r_text[32] = "";
// r_text[33] = "";
// r_text[34] = "";
// r_text[35] = "";
// r_text[36] = "";
// r_text[37] = "";
// r_text[38] = "";

var myRandom = Math.floor(Math.random()*r_text.length);

$(document).ready(function() {
	$('#r_text').html(r_text[myRandom]); 
});