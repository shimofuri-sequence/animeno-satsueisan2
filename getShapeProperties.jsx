(function(){
    
    function shape(s, depth){
        for(var i=1;i<=s.numProperties;i++){
            var prop = s.property(i);
            $.writeln(depth, prop.name);
            
            if(prop instanceof PropertyGroup){
                var newDepth = '　';
                shape(prop, depth + newDepth);
                }
            }
        }

    var root = app.project.activeItem.selectedLayers[0];
    var shapeProperty = root.property('ADBE Root Vectors Group');

    shape(shapeProperty, '')
    
})();