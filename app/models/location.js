import DS from "ember-data";
var Location = DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	phone: DS.attr('string'),
	hours: DS.attr('string'),
	incentive: DS.attr('string'),
	area: DS.belongsTo('area', {async: true})
});

Location.reopenClass({
	FIXTURES: [
		{id: 1, name: "Location 1", address: "1234 Main St, San Diego, Ca 92109", phone: "(858)888-3458", hours: "8am-5pm", incentive: "Free food!", area: 1},
		{id: 2, name: "Location 2", address: "1234 Main St, San Diego, Ca 92109", phone: "(858)888-3458", hours: "8am-5pm", incentive: "Free food!", area: 1},
		{id: 3, name: "Location 3", address: "1234 Main St, San Diego, Ca 92109", phone: "(858)888-3458", hours: "8am-5pm", incentive: "Free food!", area: 2},
		{id: 4, name: "Location 4", address: "1234 Main St, San Diego, Ca 92109", phone: "(858)888-3458", hours: "8am-5pm", incentive: "Free food!", area: 3},	
	]
});
 
export default Location;