/**
 * Created by oranq on 2016/12/7.
 */
/*
*  找到某一节点下的具有相同类名的元素
*       该方法接收两个参数：getElementByClassN( node,classN)
*              第一个参数 node 表示 ：DOM 树中的搜索起点，
*            第二个参数 classN 表示 ：搜索的类型
*
* */
function getElementByClassN( node,classN) {
	if (node.getElementsByClassName){
		return node.getElementsByClassName(classN);
	}else {
		var allObj = node.getElementsByTagName("*");
		var targets=[];
		for(var i=0;i<allObj.length;i++){
			if ( allObj[i].className.indexOf(classN) != -1){
				targets.push(allObj[i]);
			}
		}
		return targets;
	}
}