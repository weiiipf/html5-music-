// 控制索引
(function($,root){
    function controlManger(len){
        this.len = len;
        this.index = index;
    }
    controlManger.prototype = {
        prev : function(){
            return this.getIndex(-1)
        },
        next : function(){
            return this.getIndex(1)
        },
        getIndex : function(){
            var index = this.index;
            var len  = this.len;
            var curIndex = (index + len + val) % len;
            return curIndex;
        }
    }
    root.contorlManger = controlManger
})(window.Zepto,window.player || (window.player = {}))