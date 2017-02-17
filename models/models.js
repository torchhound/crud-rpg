var exports = module.exports = {};

exports.enemy = function(name, race, str, int, dex, spt, level) {
	var enemyObj = new Object();

	enemyObj.name = name;
	enemyObj.race = race;
	enemyObj.str = str;
	enemyObj.dex = dex;
	enemyObj.int = int;
	enemyObj.spt = spt;
	enemyObj.level = level;

	return JSON.stringify(enemyObj);
};