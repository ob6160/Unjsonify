Unjsonify
=========

Turns json files into readable html lists.

To use in your project:

    yourJson: Json in text format.
    data: A returned html list filled with your json!
    params: Parameters for the function. Available parameters:
            jump: default to false. If true the viewport will jump to clicked node.
                example: params = { jump: true };
    
    unjsonify(yourJson, params, function(data){
                 
    });

Page: http://ob6160.github.io/Unjsonify/
Demo: http://ob6160.github.io/Unjsonify/jsonify-demo/
