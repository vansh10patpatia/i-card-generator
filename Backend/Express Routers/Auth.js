const express = require("express");
const router = express.Router();
const { Student } = require("../models/Student");
const verifyPass = require("../utils/verifyPassword");
const generateJWT = require("../utils/generateJWT");
const hashPassword = require("../utils/passwordHash");
const adminValidator = require("../Validator");


router.post("/login", async (req, res) => {
	const { userid, password } = req.body;
	const data = { userid, password };

	//validating the data using resultfrom joi

	const resultFromJoi = adminValidator("userid password", data);

	if (!resultFromJoi) {
		//if the result is false
		res.status(400).json({
			status: false,
			message: "Invalid Credential Details",
			Note: "userid must be userid and password must be 8 characters long",
		});
	} else {
		//if the result is true
		try {
			//find the user with the request userid if it exists then return user not found

			const student = await Student.findOne({
				$and: [{ userid: userid }],
			});
			if (!student) {
				res.status(404).json({
					status: false,
					error: "userid",
					message: "The userid address entered does not match our records",
				});
			} else {
				//else verify the password
				const passVerifier = await verifyPass(password, student.password);

				if (!passVerifier) {
					//if it ggives the error then will return error
					res.status(401).json({
						status: false,
						error: "Password",
						message: "The userid address and password do not match",
					});
				} else {
					//Generating JWT token
					const newJWT = await generateJWT(student);
					if (!newJWT) {
						//if JWT fails then error
						res.status(500).json({
							status: false,
							message: "JWT Not Created",
						});
					} else {
						//return the success response
						res.status(200).json({
							status: true,
							message: "Login Successful",
							accessToken: newJWT,
							user: student,
						});
					}
				}
			}
		} catch (error) {
			//will catch error if present

			console.log(error);
		}
	}
});

// console.log(router);

module.exports = router;