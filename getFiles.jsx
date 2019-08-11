(function(){
    
    function tree(folder, depth){
        var files = folder.getFiles();
        var num = files.length;

        for(var i=0;i<num;i++){
            var file = files[i];
            $.writeln(depth + File.decode(file.name));
            if(file instanceof Folder){
                var newDepth = '　';
                tree(file, depth + newDepth);
                }
            }
        }

    var root = Folder.selectDialog ();
    if(root!==null){
        tree(root, '');
        }
})();