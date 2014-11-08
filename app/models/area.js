import DS from "ember-data";
var Area = DS.Model.extend({
	name: DS.attr('string'),
	locations: DS.hasMany('location', {async: true})
});

Area.reopenClass({
	FIXTURES: [
		{id: 1, name: "Area 1", locations:[1,2]},
		{id: 2, name: "Area 2", locations:[3]},
		{id: 3, name: "Area 3", locations:[4]},
		{id: 4, name: "Area 4", locations:[]}
	]
});
 
export default Area;