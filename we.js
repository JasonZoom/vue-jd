{{?it.data.length}}
	<div class="tcrecord-list-box">
		{{~it.data:item:index}}
			{{?it.data.length==1 && index==0}}
			<div class="tcrecord-list">
			{{??}}
			<div class="tcrecord-list up">
			{{?}}
				{{?item.allocateState==22 || item.allocateState==24}}
					<div class="status-box">
						<span class="status doing">调仓中</span>该基金组合已于：<span class="change-time">{{=item.allocateDate.y}}年{{=item.allocateDate.m}}月{{=item.allocateDate.d}}日15:00 ~ {{=item.allocateEndDate.y}}年{{=item.allocateEndDate.m}}月{{=item.allocateEndDate.d}}日15:00</span>进行调仓，在此期间追加购买将以调仓资产为准。策略组合在调仓的过程中，根据持仓基金的不同会发生调仓费用。
						<div class="b-line"></div>
					</div>
				{{??item.allocateState==23}}
					<div class="status-box">
						<span class="status fail">调仓失败</span>该基金组合已于：<span class="change-time">{{=item.allocateDate.y}}年{{=item.allocateDate.m}}月{{=item.allocateDate.d}}日15:00 </span>调仓失败。
						<div class="b-line"></div>
					</div>
				{{??item.allocateState==25}}
					<div class="status-box">
						<span class="status done">调仓完成</span>该基金组合已于：<span class="change-time">{{=item.allocateDate.y}}年{{=item.allocateDate.m}}月{{=item.allocateDate.d}}日15:00 </span>完成调仓。调仓手续费<span class="feeAmount">{{=(item.feeAmount / 100).toFixed(2)}}</span>元。
						<div class="b-line"></div>
					</div>
				{{?}}
				{{?it.data.length==1 && index==0}}
				<div class="slide-box" style="display: block;">
				{{??}}
				<div class="slide-box" style="display: none;">
				{{?}}
					<div class="status-ill-box">
						<div class="for-bottom-border">{{=item.allocateDesc}}</div>
					</div>
					<div class="fundbox">
			            <div>
			                <div class="th-title">
			                    <span class="t-name fl mt16">类型</span>
			                    <span class="t-before fl btborder mt16">调仓前</span>
			                    <span class="t-after fl mt16">调仓后</span>
			                </div>
			                {{~item.categoryList:itd}}
			                <div class="tr-div">
		                        <div class="td-div title"><i class="line color-{{=itd.color}}"></i><span class="t-name fl">{{=itd.categoryName || '--'}}</span><span class="t-before">{{=(itd.lastRatio/100).toFixed(2)}}%</span><span class="t-after">{{=(itd.ratio/100).toFixed(2)}}%</span></div>
			                    {{~itd.itemDetailList:itdd}}
			                    <div class="td-ch-div">
			                    	<div class="top-line-box"><span class="t-name fl">{{=itdd.subItemName || '--'}}</span><span class="t-before fl">{{=(itdd.lastRatio/100).toFixed(2)}}%</span><span class="t-after fl">{{=(itdd.ratio/100).toFixed(2)}}%</span></div>
			                    	<p class="fundcode-p">{{=itdd.subItemCode}}</p>
			                    	{{?itdd.transType == 1}}
			                    		{{?itdd.subItemState==0}}
			                    		<div class="now-status"><span class="status-icon"></span>已完成（申购金额:{{=(itdd.subItemCashAmount / 100).toFixed(2)}}元、份额: {{=itdd.subItemGoodsAmount}}份）</div>
			                    		{{??itdd.subItemState==1}}
			                    		<div class="now-status"><span class="status-icon doing"></span>调仓中...</div>
			                    		{{??}}
			                    		<div class="now-status fail"><span class="status-icon fail"></span>申购失败</div>
			                    		{{?}}
			                    	{{??itdd.transType == 2}}
			                    		{{?itdd.subItemState==0}}
			                    		<div class="now-status"><span class="status-icon"></span>已完成（赎回份额: {{=itdd.subItemGoodsAmount}}份、金额:{{=(itdd.subItemCashAmount / 100).toFixed(2)}}元）</div>
			                    		{{??itdd.subItemState==1}}
			                    		<div class="now-status"><span class="status-icon doing"></span>调仓中...</div>
			                    		{{??}}
			                    		<div class="now-status fail"><span class="status-icon fail"></span>赎回失败</div>
			                    		{{?}}
			                    	{{?}}
			                    </div>
			                    {{~}}
			                </div>
			                {{~}}
			            </div>
			        </div>
		        </div>
		        <div class="more-div">
			        {{?it.data.length==1}}
						<div class="more-btn">收起<span></span></div>
					{{??}}
						<div class="more-btn">展开<span></span></div>
					{{?}}
		        </div>
		        
			</div>
		{{~}}
	</div>

	{{? it.totalCounts > it.nPage}}
	<div class="up-more-btn" style="display: block;">下拉加载更多</div>
	{{??}}
	<div class="up-more-btn" style="display: block;">没有更多了</div>
	{{?}}
{{??}}
<div class="nodata-content-box">
	<div class="nodata-content"><p>目前没有调仓记录！</p></div>
</div>
{{?}}