var unjsonify = (function() {
/*
*   Variables
*/
var count = 0;
var options = {
    jump: false,
}

/*
*   Constructors
*/
var Node = function(href, node, val, tree, count) {
    var node = "<li id='" + count + "'><a title='Node' class='" /* + node*/ + "node " + "expandable' name='"+  ((options.jump == true) ? href.replace('#','') : "")  + "' href='" + href + "'>" + node + "</a>" + ":  " + "<b id='type' title='type'>" + typeof val + "</b>" + "<div class='expandable' id='" + href + "'>" + parseTree(val) + "</div></li>";
    return node; 
}
       
/*
*   Methods
*/
function parseTree(nodes) {
    var tree = "<ul id='node'>";
    
	for(node in nodes) {
        	var val = nodes[node];
	           count++;
        	if(typeof val === "object") {
        	    var newNode = Node("#"+genKey(8), node, val, tree, count);
        	    tree += newNode;           
        	} else {
                tree += "<li id="+count+">" + "<p id='ref' title='Node'> " + node + "</p>" + ":  " + "<p id='prop' title='Property'>" + val + "</p>" + "<b id='type' title='Type'>" + "   :   " + typeof val + "</b>" + "</li>";
        	}     
    }

    return tree+"</ul>"
}

function genKey(s) {
    return Math.random().toString(36).substring(3,s);
}

/*
*   Function
*/
function unjsonify(input, params, callback) {
    //Reset Count
    count = 0;
    //Set params, if any.
    if (typeof params === "object") options = params;
    
    //Begin Recursion
        //Support text or javascript object input of json.
    switch(typeof input) {
        case 'object':
            var htmlOut = "<div class='nodes'>"+parseTree(input)+"</div>";
            break;
        case 'text':
            var htmlOut = "<div class='nodes'>"+parseTree(JSON.parse(input))+"</div>";
            break;
        default:
            var htmlOut = "<div class='nodes'>"+parseTree(JSON.parse(input))+"</div>";
            break;
    }
    
  
    //Send user back their lovely html.
    callback(htmlOut);
}


return unjsonify;

})();