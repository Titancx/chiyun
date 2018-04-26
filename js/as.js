var addStock={
	init:function(){
		this.search()
	},
	search:function(){
		var stockCode=$("#sCode").val()
		if(stockCode){
			$.each(stock_list,function(k,v){
				if(stockCode==v[2]){
					$(".as-stockList ul").append("<li>"+v[0]+"</li>")
				}
			})
			
		}
	},
	bindEvents:function(){
		
	}
}
