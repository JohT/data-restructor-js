var i=e(i);function e(i){return i||{}}var t=i.exports={};t.internalCreateIfNotExists=e,t.DescribedDataFieldBuilder=function(){function i(i,e){return function(i){return"string"==typeof i&&null!==i&&""!==i}(i)?i:e}function e(i,e){return null==i?e:i}return function(){this.describedField={category:"",type:"",abbreviation:"",image:"",index:[],groupNames:[],displayName:"",fieldName:"",value:""},this.fromDescribedDataField=function(i){return this.category(i.category),this.type(i.type),this.abbreviation(i.abbreviation),this.image(i.image),this.index(i.index),this.groupNames(i.groupNames),this.displayName(i.displayName),this.fieldName(i.fieldName),this.value(i.value),this},this.category=function(e){return this.describedField.category=i(e,""),this},this.type=function(e){return this.describedField.type=i(e,""),this},this.abbreviation=function(e){return this.describedField.abbreviation=i(e,""),this},this.image=function(e){return this.describedField.image=i(e,""),this},this.index=function(i){return this.describedField.index=e(i,[]),this},this.groupNames=function(i){return this.describedField.groupNames=e(i,[]),this},this.displayName=function(e){return this.describedField.displayName=i(e,""),this},this.fieldName=function(e){return this.describedField.fieldName=i(e,""),this},this.value=function(i){return this.describedField.value=i,this},this.build=function(){return this.describedField}}}(),t.copyWithoutGroups=function(i){return(new t.DescribedDataFieldBuilder).fromDescribedDataField(i).groupNames([]).build()},t.DescribedDataFieldGroup=function(i){this.dataField=i,this.addGroupEntry=function(i,e){return this.addGroupEntries(i,[e]),this},this.addGroupEntries=function(i,e){if(!i||0===i.length)return this;if(!e||0===e.length)return this;var t,r;for(void 0===this.dataField[i]&&(this.dataField.groupNames.push(i),this.dataField[i]=[]),t=0;t<e.length;t+=1)r=e[t],this.dataField[i].push(r);return this}};
//# sourceMappingURL=describedfield.js.map
