const underscore = require('underscore');
const Chance = require('chance');

var chance = new Chance();

var exports = module.exports = {};

exports.mapGen = function() {

};

exports.characterGen = function() {
	var character = new Object();
	character.name = exports.nameGen();
	character.name = character.name.charAt(0).toUpperCase() + character.name.slice(1);
	character.race = raceGen();
	character.profession = professionGen();
	character.str = 0;
	character.int = 0;
	character.dex = 0;
	character.spt = 0;
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