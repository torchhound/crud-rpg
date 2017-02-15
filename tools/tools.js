const underscore = require('underscore');
const Chance = require('chance');
const dungeonFactory = require('dungeon-factory');

var chance = new Chance();

var exports = module.exports = {};

exports.mapGen = function() {
	var mHeight = 0;
	var mWidth = 0;
	var dimensionCheck = false;
	while(dimensionCheck != true) {
		mHeight = underscore.random(21, 99);
		mWidth = underscore.random(21, 99);
		if(mHeight % 2 != 0 && mWidth % 2 != 0) {
			dimensionCheck = true;
		};
	};
	var mapObj = new Object();
	mapObj.map = dungeonFactory.generate({width: mWidth, height: mHeight});
	return JSON.stringify(mapObj);
};

exports.characterGen = function() {
	var attributePool = 10;
	var character = new Object();
	character.name = exports.nameGen();
	character.name = character.name.charAt(0).toUpperCase() + character.name.slice(1);
	character.race = raceGen();
	character.profession = professionGen();
	character.str = underscore.random(1, 4);
	attributePool = attributePool - character.str;
	character.int = underscore.random(1, 4);
	attributePool = attributePool - character.int;
	if(attributePool >= 4) {
		character.dex = underscore.random(1, 4)
	} else {
		character.dex = underscore.random(1, attributePool)
	};
	attributePool = attributePool - character.dex;
	if(attributePool >= 4) {
		character.spt = underscore.random(1, 4)
	} else {
		character.spt = underscore.random(1, attributePool)
	};
	var skillMatch = false;
	while(skillMatch != true) {
		character.skill1 = skillsGen();
		character.skill2 = skillsGen();
		if(character.skill1 != character.skill2) {
			skillMatch = true;
		};
	};
	return JSON.stringify(character);
};

exports.nameGen = function() {
	return chance.word({length: underscore.random(3, 10)});
};

function professionGen() {
	var professions = [
		"Fighter",
		"Wizard",
		"Thief",
		"Priest",
		"Barbarian"
	];

	return professions[underscore.random(0, professions.length - 1)];
};

function raceGen() {
	var races = [
		"Human",
		"Elf",
		"Dwarf",
		"Hobbit"
	];

	return races[underscore.random(0, races.length - 1)];
};

function skillsGen() {
	var skills = [
		"Agility",
		"Craft",
		"Fighting",
		"Knowledge",
		"Perception",
		"Persuasion",
		"Shooting",
		"Speed",
		"Stealth",
		"Toughness"
	];

	return skills[underscore.random(0, skills.length - 1)];
};