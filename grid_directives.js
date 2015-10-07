  // <grid-screen resource="/api/data.json">
  //   <grid-columns>
  //     <grid-column title="Product"     field="product"></grid-column>
  //     <grid-column title="Description" field="description"></grid-column>
  //     <grid-column title="Cost"        field="cost"></grid-column>
  //   </grid-columns>
  //   <grid with-inline-editor></grid>
  // </grid-screen>


  angular.module('app').directive('gridScreen', function () {
  	return {
  		ristrict: 'E',
  		link: function(scope, element, attributes){
  			console.log('gridScreen');
  		},
  	};
  });
  angular.module('app').directive('gridColumns', function () {
  	return {
  		ristrict: 'E',
  		link: function(){
  			console.log('gridColumns');
  		},
  	};
  }); 
  angular.module('app').directive('gridColumn', function () {
  	return {
  		ristrict: 'E',
  		link: function(scope, element, attributes){
  			console.log('gridColumn', attributes.title);
  		},
  	};
  });
  angular.module('app').directive('grid', function () {
  	return {
  		ristrict: 'E',
  		link: function(){
  			console.log('grid');
  		},
  	};
  });
  angular.module('app').directive('withInlineEditor', function () {
  	return {
  		ristrict: 'A',
  		link: function(){
  			console.log('gridWithInlineEditor');
  		},
  	};
  });
