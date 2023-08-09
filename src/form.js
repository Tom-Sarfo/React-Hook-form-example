import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";

export default function Form() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			fullName: "",
			email: "",
			password: "",
			phoneNumber: [{ number: "" }], //default number of field for phone
		},
	});

	const { fields, append, remove } = useFieldArray({
		name: "phoneNumbers",
		control,
	});

	// console.log("isValid", isValid);

	const submitHandler = (data) => {
		console.log(data);
	};
	return (
		<Container className="form-container">
			<Box
				component="form"
				onSubmit={handleSubmit(submitHandler)}
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
				className="box"
			>
				<Stack className="stack" spacing={2} direction="column">
					<TextField
						{...register("fullName", { required: true })}
						fullWidth={true}
						className="Textfield"
						id="outlined-basic"
						label="Full Name"
						variant="outlined"
					/>
					<p>
						{errors.fullName?.type === "required" &&
							"Your Full Name is required"}
					</p>
					<TextField
						{...register("email", { required: true })}
						className="Textfield"
						id="outlined-basic"
						label="Email Address"
						variant="outlined"
					/>
					<p>{errors.email?.type === "required" && "Your email is required"}</p>

					<TextField
						{...register("password", { required: true })}
						className="Textfield"
						id="outlined-basic"
						label="Create Password"
						variant="outlined"
					/>
					<p>
						{errors.password?.type === "required" &&
							"Your Password is required"}
					</p>
					<div>
						{fields.map((field, index) => (
							<div key={field.id}>
								<TextField
									{...register(`phoneNumber.${index}.number`, {
										required: true,
									})}
									className="Textfield"
									id="outlined-basic"
									label="Phone"
									variant="outlined"
								/>
								<p>
									{errors.password?.type === "required" &&
										"Your Password is required"}
								</p>

								<button type="button" onClick={() => remove(index)}>
									X
								</button>
							</div>
						))}
					</div>
					<button type="button" onClick={() => append({ number: " " })}>
						Add Phone
					</button>
					<Button
						variant="contained"
						sx={{ bgcolor: "secondary.dark" }}
						type="submit"
					>
						Sign Up
					</Button>
				</Stack>
			</Box>
		</Container>
	);
}
