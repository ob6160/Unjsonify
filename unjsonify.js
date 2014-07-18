/*
*   Variables
*/
var count = 0;

/*
*   Constructors
*/
var Node = function(href, node, val, tree, count) {
    var node = "<li><a class='"+"node "+node+count+" expandable' name='"+href.replace('#','')+"' href='"+href+"'>"+node+":"+val+"</a><div class='expandable' id='"+href+"'>"+parseTree(val)+"</div></li>";
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
                    tree += "<li id="+count+">"+node+":"+"<p id='prop'>"+val+"</p>"+"</li>";
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
function unjsonify(input, callback) {
    var htmlOut = parseTree(JSON.parse(input));
    
    callback(htmlOut);
}