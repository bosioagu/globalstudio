//marquee

var elements = $('ul.texto-cabecera li').length;

for(var i=0;i < elements; i++){
 $(".texto-cabecera").clone().prependTo( ".cabecera" );
};

var liEle = [];
var liEle = $(".texto-cabecera li");

