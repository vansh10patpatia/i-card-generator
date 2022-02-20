const mongoose = require("mongoose");

const { Schema } = mongoose;

const Students = new Schema(
	{
        userid:{
			type: Number,
			unique: true,
			min: 8,
        },
        password: {
			type: String,
			required: true,
			min: 8,
		},
        name: {
			type: String,
			default: userid,
		},
		email: {
			type: String,
			unique: true,
			min: 8,
		},
		profileImage: {
			type: String,
			default: "",
		},
		phno: {
			type: String,
			default: "",
		},
        session: {
			type: Number,
			default: null,
		},
        typeUser: {
			type: Number,
			enum: [0, 1, 2],
			default: 2,
		},
	
		tokenAuth: {
			token: {
				type: String,
				default: "",
			},
			secret: {
				type: String,
				default: "",
			},
			time: {
				type: Date,
				default: "",
			},
		},
	},
	{ timestamps: true }
);

const Student = mongoose.model("Student", Students);

exports.Student = Student;

const StudentSessionSchema = new Schema(
	{
		token: {
			type: String,
			minLength: 256,

			required: true,
		},
		userID: {
			type: Schema.Types.ObjectId,
			ref: "Teacher",
		},
		lastAccessedAt: {
			type: Date,
			default: new Date(),
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		tokenCreationDetails: {
			ip: {
				type: String,
				default: "",
			},
			useragent: {
				type: String,
				default: "",
			},
			os: {
				type: String,
				default: "",
			},
		},
		sessionLogs: [
			{
				type: String,
			},
		],
	},
	{ timestamps: true }
);
const StudentSessionModel = mongoose.model("student-session", StudentSessionSchema);
exports.StudentSessionModel = StudentSessionModel;
