function init(h,w) {
  $('#title').text(document.title);  
	   
var radar = new pv.Panel()
      .width(w)
      .height(h)
      .canvas('radar')

// arcs
radar.add(pv.Dot)
       .data(radar_arcs)
       .left(w/2)
       .bottom(h/2)
       .radius(function(d){return d.r;})
       .strokeStyle("#ccc")
       .anchor("top")       
       .add(pv.Label).text(function(d) { return d.name;});

//quadrant lines -- vertical
radar.add(pv.Line)
        .data([(h/2-radar_arcs[radar_arcs.length-1].r),h-(h/2-radar_arcs[radar_arcs.length-1].r)])
        .lineWidth(1)
        .left(w/2)        
        .bottom(function(d) {return d;})       
        .strokeStyle("#bbb");

//quadrant lines -- horizontal 
radar.add(pv.Line)
        .data([(w/2-radar_arcs[radar_arcs.length-1].r),w-(w/2-radar_arcs[radar_arcs.length-1].r)])
        .lineWidth(1)
        .bottom(h/2)
        .left(function(d) {return d;})       
        .strokeStyle("#bbb");


//Quadrant Ledgends
var radar_quadrant_ctr=1;
var quadrantFontSize = 18;
var headingFontSize = 14;
var stageHeadingCount = 0;
var lastRadius = 0;
var lastQuadrant='';
var spacer = 6;
var spacer_header = 6;
var fontSize = 12;
var total_index = 1;

for (var i = 0; i < radar_data.length; i++) {
    
    // Add Quadrant Legend
    if (lastQuadrant != radar_data[i].quadrant) {
		// Add Quadrant Label
        radar.add(pv.Label)         
            .left( radar_data[i].left )         
            .top( radar_data[i].top )  
            .text( radar_data[i].quadrant )		 
            .strokeStyle( radar_data[i].color )
            .fillStyle( radar_data[i].color )                    
            .font("bold " + quadrantFontSize + "px sans-serif");
         
        lastQuadrant = radar_data[i].quadrant;
    }

    var itemsByStage = _.groupBy(radar_data[i].items, function(item) {return Math.floor(item.pc.r / 100)});
    var offsetIndex = 0;
    var keys = _(itemsByStage).keys();
    for (var k = 0; k < keys.length; k++) {
		var stageIdx = Number(keys[k]);
		
		if(stageIdx > 0) {
			offsetIndex = 0;
			for(var j = 0; j < stageIdx; j++) {
				if(itemsByStage[j]) {
					offsetIndex = offsetIndex + itemsByStage[j].length + 1; 
				}
			}
		}
		
		// Add Stage Header
        radar.add(pv.Label)         
            .left( radar_data[i].left + headingFontSize )
            .top( radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize) + (stageIdx * spacer_header))
            .text( radar_arcs[stageIdx].name)
            .strokeStyle( '#cccccc' )
            .fillStyle( '#cccccc')                    
            .font("bold " + headingFontSize + "px Courier New");

		// Add List of Items
		radar.add(pv.Label)             
			.left( radar_data[i].left )         
			.top( radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize) + (stageIdx * spacer_header))
			.strokeStyle( radar_data[i].color )
			.fillStyle( radar_data[i].color )           
			.add( pv.Dot )            
				.def("i", radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + spacer  + (offsetIndex * fontSize) + (stageIdx * spacer_header))
				.data(itemsByStage[stageIdx])            
				.top( function() { return ( this.i() + (this.index * (fontSize)) );} )   
				.shape( function(d) {return (d.movement === 't' ? "triangle" : "circle");})                 
				.cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
				.event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
				.size(fontSize) 
				.angle(45)            
				.anchor("right")                
				.add(pv.Label)                
					.font(fontSize + "px Courier New")
					.text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );

		radar.add(pv.Dot)       
		  .def("active", false)
		  .data(itemsByStage[stageIdx])
		  .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
		  .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
							  return x;})
		  .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
								return y;})
		  .title(function(d) { return d.name;})		 
		  .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
		  .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
		  .angle(Math.PI)  // 180 degrees in radians !
		  .strokeStyle(radar_data[i].color)
		  .fillStyle(radar_data[i].color)
		  .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
		  .anchor("center")
			  .add(pv.Label)
			  .text(function(d) {return total_index++;}) 
			  .textBaseline("middle")
			  .textStyle("white");       
    }
}      
       
 radar.anchor('radar');
 radar.render();
     
  };
