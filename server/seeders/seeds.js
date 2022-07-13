const faker = require("faker");

const db = require("../config/connection");
const { User, Character } = require("../models");

db.once("open", async () => {
	await Character.deleteMany({});
	await User.deleteMany({});

	// create user data
	const userData = [];

	for (let i = 0; i < 50; i += 1) {
		const username = faker.internet.userName();
		const email = faker.internet.email(username);
		const password = faker.internet.password();

		userData.push({ username, email, password });
	}

	const createdUsers = await User.collection.insertMany(userData);

	// create characters
	// for (let i = 0; i < 100; i += 1) {
	// 	const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
	// 	const { _id: userId } = createdUsers.ops[randomUserIndex];

	// 	let friendId = userId;

	// 	while (friendId === userId) {
	// 		const randomUserIndex = Math.floor(
	// 			Math.random() * createdUsers.ops.length
	// 		);
	// 		friendId = createdUsers.ops[randomUserIndex];
	// 	}

	// 	await User.updateOne(
	// 		{ _id: userId },
	// 		{ $addToSet: { characters: friendId } }
	// 	);
	// }

	// create characters
	let characterArray = [];

	for (let i = 0; i < 50; i += 1) {
		const name = faker.internet.userName();
		const description = faker.internet.email(username);
		const characterId = faker.internet.password();

		characterArray.push({ name, description, email });
	}

	const selectedCharacter = await Character.collection.insertMany(
		characterArray
	);

	const updatedUser = await User.updateOne(
		{ _id: userId },
		{ $push: { characters: characterArray._id } }
	);

	characterArray.push(selectedCharacter);
	// }

	// create reactions
	// for (let i = 0; i < 100; i += 1) {
	//   const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

	//   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
	//   const { username } = createdUsers.ops[randomUserIndex];

	//   const randomThoughtIndex = Math.floor(Math.random() * characterData.length);
	//   const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

	//   await Thought.updateOne(
	//     { _id: thoughtId },
	//     { $push: { reactions: { reactionBody, username } } },
	//     { runValidators: true }
	//   );
	// }

	console.log("all done!");
	process.exit(0);
});
